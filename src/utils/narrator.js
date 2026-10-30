// Hệ thống Quản Lý Giọng Đọc Toàn Năng (Global Voice Narrator Engine)
// Hỗ trợ đồng thời: File Audio Studio MP3 chất lượng cao + Web Speech API Fallback

let currentAudio = null;
let currentUtterance = null;
let listeners = [];

let state = {
  isPlaying: false,
  isPaused: false,
  title: '',
  sub: '',
  sourceType: null, // 'file' | 'synth'
  currentTime: 0,
  duration: 0,
  rate: 1.0,
  activeId: null
};

function notify() {
  listeners.forEach(cb => {
    try {
      cb({ ...state });
    } catch (e) {
      console.warn('Narrator listener error:', e);
    }
  });
}

export function subscribeNarrator(cb) {
  listeners.push(cb);
  cb({ ...state });
  return () => {
    listeners = listeners.filter(fn => fn !== cb);
  };
}

export function getNarratorState() {
  return { ...state };
}

// Làm sạch văn bản để giọng đọc tiếng Việt đọc trôi chảy, ấm áp và chuẩn thuật ngữ y khoa
export function cleanTextForSpeech(rawText) {
  if (!rawText) return '';

  let text = rawText
    .replace(/L4-L5/gi, 'Lờ bốn lờ năm')
    .replace(/L5-S1/gi, 'Lờ năm ét một')
    .replace(/RIR\s*2-3/gi, 'số lần dự trữ hai đến ba nhịp')
    .replace(/RIR\s*0/gi, 'đến ngưỡng thất bại hoàn toàn')
    .replace(/RIR/gi, 'số lần dự trữ')
    .replace(/IT/g, 'công nghệ thông tin')
    .replace(/kcal/gi, 'ki-lô-ca-lo')
    .replace(/kg/gi, 'ki-lô-gam')
    .replace(/ml/gi, 'mi-li-lít')
    .replace(/cm/gi, 'xen-ti-mét')
    .replace(/360°/gi, 'ba trăm sáu mươi độ')
    .replace(/45°/gi, 'bốn mươi lăm độ')
    .replace(/90°/gi, 'chín mươi độ')
    .replace(/15-20°/gi, 'mười lăm đến hai mươi độ')
    .replace(/5-3-1/gi, 'năm, ba, một')
    .replace(/[➔➜➝→]/g, ' chuyển sang ')
    .replace(/\+/g, ' cộng ')
    .replace(/~/g, ' khoảng ')
    .replace(/([0-9]+)s\b/gi, '$1 giây')
    .replace(/([0-9]+)m\b/gi, '$1 phút')
    .replace(/\(Dr\.\s*Stuart McGill\)/gi, 'của tiến sĩ Stuart Mác Ghin')
    .replace(/Dr\.\s*Stuart McGill/gi, 'tiến sĩ Stuart Mác Ghin')
    .replace(/Dr\.\s*McGill/gi, 'tiến sĩ Mác Ghin')
    .replace(/McGill/gi, 'Mác Ghin')
    .replace(/\[IMAGE:[^\]]+\]/g, '')
    .replace(/[*#_`]/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return text;
}

export function stopNarrator() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }

  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    currentUtterance = null;
  }

  state = {
    ...state,
    isPlaying: false,
    isPaused: false,
    currentTime: 0,
    activeId: null
  };
  notify();
}

export function pauseNarrator() {
  if (state.sourceType === 'file' && currentAudio) {
    currentAudio.pause();
    state = { ...state, isPlaying: false, isPaused: true };
    notify();
  } else if (state.sourceType === 'synth' && typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.pause();
    state = { ...state, isPlaying: false, isPaused: true };
    notify();
  }
}

export function resumeNarrator() {
  if (state.sourceType === 'file' && currentAudio) {
    currentAudio.play();
    state = { ...state, isPlaying: true, isPaused: false };
    notify();
  } else if (state.sourceType === 'synth' && typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.resume();
    state = { ...state, isPlaying: true, isPaused: false };
    notify();
  }
}

export function setNarratorRate(newRate) {
  state.rate = newRate;
  if (state.sourceType === 'file' && currentAudio) {
    currentAudio.playbackRate = newRate;
  }
  notify();
}

// Bắt đầu phát giọng đọc (tự động nhận diện file MP3 hoặc đọc text qua SpeechSynthesis)
export function playNarrator({ id, title, sub, audioSrc, text }) {
  // Nếu đang phát chính mục này thì dừng lại (toggle behavior)
  if (state.isPlaying && state.activeId === id) {
    stopNarrator();
    return;
  }

  stopNarrator();

  state = {
    ...state,
    activeId: id,
    title: title || 'Giọng Đọc Trị Liệu',
    sub: sub || '',
    currentTime: 0,
    duration: 0,
    isPaused: false
  };

  // 1. Thử phát file âm thanh phòng thu MP3 nếu có
  if (audioSrc) {
    try {
      const audio = new Audio(audioSrc);
      audio.playbackRate = state.rate;
      currentAudio = audio;
      state.sourceType = 'file';

      audio.addEventListener('loadedmetadata', () => {
        state.duration = audio.duration || 0;
        notify();
      });

      audio.addEventListener('timeupdate', () => {
        state.currentTime = audio.currentTime || 0;
        notify();
      });

      audio.addEventListener('ended', () => {
        stopNarrator();
      });

      audio.addEventListener('error', (err) => {
        console.warn('Audio playback error, falling back to speech synthesis:', err);
        if (text) {
          playSpeechSynth(text);
        } else {
          stopNarrator();
        }
      });

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            state.isPlaying = true;
            notify();
          })
          .catch((err) => {
            console.warn('Autoplay prevented or failed, trying speech synth:', err);
            if (text) {
              playSpeechSynth(text);
            }
          });
      }
      return;
    } catch (e) {
      console.warn('HTMLAudioElement init error:', e);
    }
  }

  // 2. Fallback sang Web Speech Synthesis
  if (text) {
    playSpeechSynth(text);
  }
}

function playSpeechSynth(rawText) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Speech synthesis not supported in this environment');
    return;
  }

  const cleaned = cleanTextForSpeech(rawText);
  if (!cleaned) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'vi-VN';
    utterance.rate = state.rate * 0.95; // Giọng đọc y khoa từ tốn

    // Tìm giọng tiếng Việt nếu có
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onstart = () => {
      state.isPlaying = true;
      state.sourceType = 'synth';
      // Ước lượng thời lượng dựa trên số từ (~150 từ/phút)
      const wordCount = cleaned.split(/\s+/).length;
      state.duration = Math.round((wordCount / 150) * 60);
      notify();
    };

    utterance.onend = () => {
      stopNarrator();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      stopNarrator();
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('SpeechSynthesis invocation failed:', err);
    stopNarrator();
  }
}
