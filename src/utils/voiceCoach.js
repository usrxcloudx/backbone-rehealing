// Hệ thống Giọng Đọc Hướng Dẫn Trị Liệu Tiếng Việt (Studio Voice Coach)
// Sử dụng file âm thanh phòng thu chất lượng cao, độ trễ 0ms + Fallback Web Speech API

const VOICE_CLIPS = {
  count_1: '/audio/voice/count_1.mp3',
  count_2: '/audio/voice/count_2.mp3',
  count_3: '/audio/voice/count_3.mp3',
  count_4: '/audio/voice/count_4.mp3',
  count_5: '/audio/voice/count_5.mp3',
  count_6: '/audio/voice/count_6.mp3',
  count_7: '/audio/voice/count_7.mp3',
  count_8: '/audio/voice/count_8.mp3',
  start_hold: '/audio/voice/start_hold.mp3',
  rest_3s: '/audio/voice/rest_3s.mp3',
  prepare: '/audio/voice/prepare.mp3',
  next_rep: '/audio/voice/next_rep.mp3',
  set_rest_45s: '/audio/voice/set_rest_45s.mp3',
  remaining_15s: '/audio/voice/remaining_15s.mp3',
  remaining_5s: '/audio/voice/remaining_5s.mp3',
  set_1: '/audio/voice/set_1.mp3',
  set_2: '/audio/voice/set_2.mp3',
  set_3: '/audio/voice/set_3.mp3',
  rest_start_45s: '/audio/voice/rest_start_45s.mp3',
  rest_start_60s: '/audio/voice/rest_start_60s.mp3',
  rest_start_90s: '/audio/voice/rest_start_90s.mp3',
  rest_start_120s: '/audio/voice/rest_start_120s.mp3',
  remaining_30s: '/audio/voice/remaining_30s.mp3',
  remaining_10s: '/audio/voice/remaining_10s.mp3',
  rest_finished: '/audio/voice/rest_finished.mp3',
  workout_complete: '/audio/voice/workout_complete.mp3',
  pause: '/audio/voice/pause.mp3',
  resume: '/audio/voice/resume.mp3',
};

// Trạng thái bật/tắt giọng đọc
const STORAGE_KEY = 'spine_rehab_voice_enabled';
let isVoiceEnabled = true;

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    isVoiceEnabled = saved === 'true';
  }
}

// Đối tượng Audio hiện tại
let currentAudio = null;

// Cache Audio object để phát ngay tức thì không độ trễ
const audioCache = {};

export function preloadVoiceClips() {
  if (typeof window === 'undefined') return;
  try {
    Object.entries(VOICE_CLIPS).forEach(([key, src]) => {
      if (!audioCache[key]) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = src;
        audioCache[key] = audio;
      }
    });
  } catch (e) {
    console.warn('Preload audio clips skipped:', e);
  }
}

// Fallback SpeechSynthesis nếu file âm thanh gặp lỗi
function speakFallback(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 1.1; // Hơi nhanh để đếm giây chính xác
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    // Ignore
  }
}

export function playVoice(clipKey, fallbackText = '') {
  if (!isVoiceEnabled || typeof window === 'undefined') return;

  try {
    // Ngắt âm thanh đang phát để không bị đè tiếng
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const src = VOICE_CLIPS[clipKey];
    if (src) {
      let audio = audioCache[clipKey];
      if (!audio) {
        audio = new Audio(src);
        audioCache[clipKey] = audio;
      } else {
        audio.currentTime = 0;
      }
      currentAudio = audio;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Nếu bị chặn autoplay hoặc file lỗi -> fallback sang SpeechSynthesis
          if (fallbackText) {
            speakFallback(fallbackText);
          }
        });
      }
    } else if (fallbackText) {
      speakFallback(fallbackText);
    }
  } catch (err) {
    if (fallbackText) {
      speakFallback(fallbackText);
    }
  }
}

export function stopVoice() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
  }
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

export function getVoiceEnabled() {
  return isVoiceEnabled;
}

export function setVoiceEnabled(enabled) {
  isVoiceEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, enabled.toString());
  }
  if (!enabled) {
    stopVoice();
  }
}

export function testVoiceCoach() {
  playVoice('workout_complete', 'Giọng đọc hướng dẫn tập luyện Tiếng Việt đã sẵn sàng!');
}
