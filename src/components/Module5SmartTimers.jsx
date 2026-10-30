import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  CheckCircle2, 
  Volume2, 
  VolumeX,
  Flame, 
  Clock, 
  Award, 
  Dumbbell,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSoftBeep, playWorkSignal, playRestSignal, playSuccessChime } from '../utils/audio';
import { 
  playVoice, 
  stopVoice, 
  getVoiceEnabled, 
  setVoiceEnabled, 
  preloadVoiceClips, 
  testVoiceCoach 
} from '../utils/voiceCoach';

export default function Module5SmartTimers({ initialExercise }) {
  // Tabs: 'mcgill' | 'standard'
  const [activeTimerTab, setActiveTimerTab] = useState(
    initialExercise?.timerType === 'standard' ? 'standard' : 'mcgill'
  );

  // Voice Coach Enabled State
  const [voiceOn, setVoiceOn] = useState(() => getVoiceEnabled());

  useEffect(() => {
    preloadVoiceClips();
  }, []);

  const handleToggleVoice = () => {
    const next = !voiceOn;
    setVoiceOn(next);
    setVoiceEnabled(next);
    if (next) {
      playVoice('prepare', 'Đã bật giọng đọc hướng dẫn');
    } else {
      stopVoice();
    }
  };

  const handleTestVoice = () => {
    if (!voiceOn) {
      setVoiceOn(true);
      setVoiceEnabled(true);
    }
    testVoiceCoach();
  };

  // -------------------------------------------------------------
  // MCGILL PYRAMID TIMER STATE
  // Pattern: Set 1 (5 reps), Set 2 (3 reps), Set 3 (1 rep)
  // Each rep: 8s WORK, 3s REST. Between sets: 45s REST.
  // -------------------------------------------------------------
  const PYRAMID_SETS = [5, 3, 1];
  const HOLD_DURATION = 8;
  const REST_DURATION = 3;
  const SET_REST_DURATION = 45;

  const [currentSetIdx, setCurrentSetIdx] = useState(0); // 0, 1, 2
  const [currentRep, setCurrentRep] = useState(1);       // 1 to PYRAMID_SETS[currentSetIdx]
  const [phase, setPhase] = useState('ready');           // 'ready' | 'work' | 'rest' | 'set_rest' | 'finished'
  const [secondsRemaining, setSecondsRemaining] = useState(HOLD_DURATION);
  const [isPyramidRunning, setIsPyramidRunning] = useState(false);
  const [selectedPyramidExercise, setSelectedPyramidExercise] = useState(
    initialExercise?.id?.includes('side-plank') ? 'Side Plank' : initialExercise?.vietnameseName || 'McGill Curl-up'
  );

  // McGill Interval Tick
  useEffect(() => {
    let interval = null;
    if (isPyramidRunning && phase !== 'finished' && phase !== 'ready') {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          const next = prev - 1;

          if (next <= 0) {
            handleMcGillPhaseTransition();
            return 0;
          }

          // Voice countdown & cues during active phase
          if (phase === 'work') {
            // Count seconds 7 down to 1
            if (next >= 1 && next <= 7) {
              playVoice(`count_${next}`, `${next}`);
            }
          } else if (phase === 'rest') {
            if (next === 2) {
              playVoice('count_2', 'Hai');
            } else if (next === 1) {
              playVoice('prepare', 'Chuẩn bị');
            }
          } else if (phase === 'set_rest') {
            if (next === 30) {
              playVoice('remaining_30s', 'Còn ba mươi giây');
            } else if (next === 15) {
              playVoice('remaining_15s', 'Còn mười lăm giây');
            } else if (next === 5) {
              playVoice('remaining_5s', 'Còn năm giây');
            } else if (next === 3) {
              playVoice('count_3', 'Ba');
            } else if (next === 2) {
              playVoice('count_2', 'Hai');
            } else if (next === 1) {
              playVoice('prepare', 'Chuẩn bị');
            }
          }

          // Gentle soft audio beep on last 3 seconds
          if (next <= 3 && next > 0) {
            playSoftBeep(587.33, 0.05);
          }

          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPyramidRunning, phase, currentSetIdx, currentRep]);

  const handleMcGillPhaseTransition = () => {
    const totalRepsInCurrentSet = PYRAMID_SETS[currentSetIdx];

    if (phase === 'work') {
      // Just finished a hold
      if (currentRep < totalRepsInCurrentSet) {
        // Need brief 3s breath
        playRestSignal();
        playVoice('rest_3s', 'Hạ xuống nghỉ ba giây');
        setPhase('rest');
        setSecondsRemaining(REST_DURATION);
      } else {
        // Finished last rep of this set!
        if (currentSetIdx < PYRAMID_SETS.length - 1) {
          // Move to set rest
          playSuccessChime();
          playVoice('set_rest_45s', 'Hết hiệp! Nghỉ sâu bốn mươi lăm giây');
          setPhase('set_rest');
          setSecondsRemaining(SET_REST_DURATION);
        } else {
          // Finished entire pyramid!
          playSuccessChime();
          playVoice('workout_complete', 'Xuất sắc! Bạn đã hoàn thành toàn bộ bài tập!');
          setPhase('finished');
          setIsPyramidRunning(false);
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      }
    } else if (phase === 'rest') {
      // Finished 3s breath -> next rep hold
      playWorkSignal();
      playVoice('next_rep', 'Tiếp tục giữ!');
      setCurrentRep((prev) => prev + 1);
      setPhase('work');
      setSecondsRemaining(HOLD_DURATION);
    } else if (phase === 'set_rest') {
      // Finished 45s set rest -> next set
      playWorkSignal();
      const nextSetIdx = currentSetIdx + 1;
      if (nextSetIdx === 1) {
        playVoice('set_2', 'Bắt đầu hiệp hai');
      } else if (nextSetIdx === 2) {
        playVoice('set_3', 'Bắt đầu hiệp ba');
      }
      setCurrentSetIdx(nextSetIdx);
      setCurrentRep(1);
      setPhase('work');
      setSecondsRemaining(HOLD_DURATION);
    }
  };

  const startPyramid = () => {
    if (phase === 'ready' || phase === 'finished') {
      setCurrentSetIdx(0);
      setCurrentRep(1);
      setPhase('work');
      setSecondsRemaining(HOLD_DURATION);
      playWorkSignal();
      playVoice('set_1', 'Bắt đầu hiệp một');
      setTimeout(() => {
        playVoice('start_hold', 'Bắt đầu giữ');
      }, 1500);
    } else {
      playVoice('resume', 'Tiếp tục');
    }
    setIsPyramidRunning(true);
  };

  const pausePyramid = () => {
    setIsPyramidRunning(false);
    playSoftBeep(392, 0.1);
    playVoice('pause', 'Tạm dừng');
  };

  const resetPyramid = () => {
    setIsPyramidRunning(false);
    stopVoice();
    setCurrentSetIdx(0);
    setCurrentRep(1);
    setPhase('ready');
    setSecondsRemaining(HOLD_DURATION);
    playSoftBeep(330, 0.1);
  };

  const skipPyramidStep = () => {
    handleMcGillPhaseTransition();
  };

  // -------------------------------------------------------------
  // STANDARD REST TIMER STATE (45s, 60s, 90s, 120s)
  // -------------------------------------------------------------
  const [restDuration, setRestDuration] = useState(60);
  const [restSecondsLeft, setRestSecondsLeft] = useState(60);
  const [isRestRunning, setIsRestRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRestRunning && restSecondsLeft > 0) {
      interval = setInterval(() => {
        setRestSecondsLeft((prev) => {
          const next = prev - 1;

          if (next <= 0) {
            playSuccessChime();
            playVoice('rest_finished', 'Hết giờ nghỉ, sẵn sàng tập tiếp!');
            setIsRestRunning(false);
            confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
            return 0;
          }

          // Voice alerts during standard rest
          if (next === 30) {
            playVoice('remaining_30s', 'Còn ba mươi giây');
          } else if (next === 15) {
            playVoice('remaining_15s', 'Còn mười lăm giây');
          } else if (next === 5) {
            playVoice('remaining_5s', 'Còn năm giây');
          } else if (next === 3) {
            playVoice('count_3', 'Ba');
          } else if (next === 2) {
            playVoice('count_2', 'Hai');
          } else if (next === 1) {
            playVoice('count_1', 'Một');
          }

          if (next <= 3 && next > 0) {
            playSoftBeep(587.33, 0.05);
          }

          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRestRunning, restSecondsLeft]);

  const startStandardRest = (seconds) => {
    setRestDuration(seconds);
    setRestSecondsLeft(seconds);
    setIsRestRunning(true);
    playWorkSignal();

    if (seconds === 45) {
      playVoice('rest_start_45s', 'Bắt đầu nghỉ bốn mươi lăm giây');
    } else if (seconds === 60) {
      playVoice('rest_start_60s', 'Bắt đầu nghỉ sáu mươi giây');
    } else if (seconds === 90) {
      playVoice('rest_start_90s', 'Bắt đầu nghỉ chín mươi giây');
    } else if (seconds === 120) {
      playVoice('rest_start_120s', 'Bắt đầu nghỉ hai phút');
    } else {
      playVoice('prepare', `Bắt đầu nghỉ ${seconds} giây`);
    }
  };

  const toggleStandardRest = () => {
    if (!isRestRunning) {
      setIsRestRunning(true);
      playVoice('resume', 'Tiếp tục nghỉ');
    } else {
      setIsRestRunning(false);
      playVoice('pause', 'Tạm dừng');
    }
  };

  // Progress calculations
  const mcgillTotalForPhase = phase === 'work' ? HOLD_DURATION : phase === 'rest' ? REST_DURATION : SET_REST_DURATION;
  const mcgillProgressPercent = phase === 'ready' ? 0 : phase === 'finished' ? 100 : ((mcgillTotalForPhase - secondsRemaining) / mcgillTotalForPhase) * 100;

  const restProgressPercent = ((restDuration - restSecondsLeft) / restDuration) * 100;

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 5: Smart Physical Therapy Timers with Voice Coach
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bộ Đếm Thời Gian Có Giọng Đọc Tiếng Việt
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Thiết kế riêng cho việc đặt điện thoại trên sàn tập: <strong>Giọng đọc đếm từng giây</strong>, hô báo hạ xuống nghỉ 3s, nhắc thở và báo hiệp tiếp theo giúp bạn tập trung 100% vào cơ thể mà không cần ngước nhìn màn hình.
          </p>
        </div>
      </div>

      {/* VOICE COACH CONTROLLER CARD */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl transition-all ${
            voiceOn 
              ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
              : 'bg-slate-800 text-slate-500'
          }`}>
            {voiceOn ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-white">Giọng Đọc Huấn Luyện Viên Tiếng Việt</span>
              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                voiceOn 
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}>
                {voiceOn ? 'Đang Bật' : 'Đã Tắt'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Hô khẩu lệnh: "Bắt đầu giữ", đếm lùi 7...1, "Hạ xuống nghỉ 3s", "Hết hiệp nghỉ 45s", "Chuẩn bị vào hiệp mới"
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
          <button
            onClick={handleTestVoice}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Nghe thử giọng đọc mẫu"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Thử Giọng Đọc</span>
          </button>

          <button
            onClick={handleToggleVoice}
            className={`px-5 py-2 rounded-xl text-xs font-black transition-all shadow-md active:scale-95 ${
              voiceOn 
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            {voiceOn ? 'BẬT' : 'TẮT'}
          </button>
        </div>
      </div>

      {/* Timer Type Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTimerTab('mcgill')}
          className={`flex-1 py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 ${
            activeTimerTab === 'mcgill'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/30'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Kim Tự Tháp McGill (5 - 3 - 1 Nhịp)</span>
        </button>

        <button
          onClick={() => setActiveTimerTab('standard')}
          className={`flex-1 py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 ${
            activeTimerTab === 'standard'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/30'
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Bộ Đếm Nghỉ Kháng Lực (45s - 120s)</span>
        </button>
      </div>

      {/* TAB 1: MCGILL PYRAMID TIMER */}
      {activeTimerTab === 'mcgill' && (
        <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
          {/* Header of McGill */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Giao Thức Tiêu Chuẩn Vàng Của Dr. Stuart McGill
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Kim Tự Tháp Lực Bền (Pyramid 5-3-1)
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Hiệp 1: 5 nhịp (Giữ 8s/Nghỉ 3s) ➔ Nghỉ 45s ➔ Hiệp 2: 3 nhịp ➔ Nghỉ 45s ➔ Hiệp 3: 1 nhịp.
              </p>
            </div>

            {/* Exercise Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Bài tập:</span>
              <select
                value={selectedPyramidExercise}
                onChange={(e) => setSelectedPyramidExercise(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-emerald-500"
              >
                <option value="McGill Curl-up">McGill Curl-up (Gập bụng an toàn)</option>
                <option value="Kneeling Side Plank">Kneeling Side Plank (Quỳ gối)</option>
                <option value="Full Side Plank">Full Side Plank (Duỗi chân)</option>
                <option value="Bird-Dog">Bird-Dog (Thăng bằng chống xoay)</option>
              </select>
            </div>
          </div>

          {/* Set Status Badges */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((sIdx) => {
              const isCurrent = currentSetIdx === sIdx && phase !== 'finished';
              const isPast = currentSetIdx > sIdx || phase === 'finished';
              return (
                <div
                  key={sIdx}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isCurrent
                      ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md'
                      : isPast
                      ? 'bg-slate-900 border-emerald-500/40 text-emerald-400'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider">
                    Hiệp 0{sIdx + 1}
                  </div>
                  <div className="text-sm sm:text-base font-black mt-0.5">
                    {PYRAMID_SETS[sIdx]} Nhịp Giữ
                  </div>
                  <div className="text-[10px] opacity-80">
                    {isCurrent ? `Đang nhịp ${currentRep}/${PYRAMID_SETS[sIdx]}` : isPast ? 'Hoàn thành ✓' : 'Chờ tập'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Circular Display Box (High Contrast for Floor Mat Viewing) */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl">
            {/* Phase Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase shadow-md transition-all">
              {phase === 'ready' && (
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full">SẴN SÀNG BẮT ĐẦU</span>
              )}
              {phase === 'work' && (
                <span className="bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-full animate-pulse font-extrabold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 fill-slate-950" />
                  GIỮ CHẶT CƠ THÀNH BỤNG (8 GIÂY)
                </span>
              )}
              {phase === 'rest' && (
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold">
                  HẠ XUỐNG NGHỈ THỞ (3 GIÂY)
                </span>
              )}
              {phase === 'set_rest' && (
                <span className="bg-amber-500 text-slate-950 px-4 py-1.5 rounded-full font-bold">
                  HẾT HIỆP: NGHỈ SÂU (45 GIÂY)
                </span>
              )}
              {phase === 'finished' && (
                <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full font-black">
                  XUẤT SẮC! HOÀN THÀNH KIM TỰ THÁP 🎯
                </span>
              )}
            </div>

            {/* Giant Countdown Clock */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke={
                    phase === 'work' ? '#10b981' : phase === 'rest' ? '#38bdf8' : phase === 'set_rest' ? '#f59e0b' : '#10b981'
                  }
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * mcgillProgressPercent) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tight drop-shadow-md">
                  {phase === 'ready' ? '8s' : phase === 'finished' ? 'DONE' : `${secondsRemaining}s`}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                  {phase === 'work'
                    ? `Hiệp ${currentSetIdx + 1} • Nhịp ${currentRep}/${PYRAMID_SETS[currentSetIdx]}`
                    : phase === 'set_rest'
                    ? 'Thư giãn cơ bắp'
                    : phase === 'rest'
                    ? 'Hít thở sâu'
                    : selectedPyramidExercise}
                </span>
              </div>
            </div>

            {/* Main Timer Action Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              {!isPyramidRunning ? (
                <button
                  onClick={startPyramid}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/40 transition-all active:scale-95"
                >
                  <Play className="w-6 h-6 fill-white" />
                  <span>{phase === 'ready' ? 'Bắt Đầu Hiệp 1' : 'Tiếp Tục'}</span>
                </button>
              ) : (
                <button
                  onClick={pausePyramid}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-base sm:text-lg shadow-xl shadow-amber-600/40 transition-all active:scale-95"
                >
                  <Pause className="w-6 h-6" />
                  <span>Tạm Dừng</span>
                </button>
              )}

              <button
                onClick={resetPyramid}
                className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Đặt lại từ đầu"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              {isPyramidRunning && (
                <button
                  onClick={skipPyramidStep}
                  className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Chuyển sang nhịp tiếp theo"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STANDARD REST TIMER (45s - 120s) */}
      {activeTimerTab === 'standard' && (
        <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-5">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Dành Cho Các Bài Kháng Lực (Chest-Supported Row & Glute Bridge)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              Đồng Hồ Nghỉ Phục Hồi Thần Kinh
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Sau mỗi hiệp tập, cơ bắp và thần kinh cần từ 45 đến 90 giây để tái tổng hợp ATP và hồi phục đĩa đệm. Có giọng đọc nhắc nhở các mốc 30s, 15s và đếm ngược vào bài.
            </p>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[45, 60, 90, 120].map((sec) => (
              <button
                key={sec}
                onClick={() => startStandardRest(sec)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                  restDuration === sec && isRestRunning
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                Nghỉ {sec} Giây
              </button>
            ))}
          </div>

          {/* Big Rest Countdown Circle */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * restProgressPercent) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">
                  {restSecondsLeft}s
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  {isRestRunning ? 'Đang nghỉ giữa hiệp' : 'Thời gian nghỉ'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleStandardRest}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 ${
                  isRestRunning
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isRestRunning ? 'Tạm Dừng' : 'Bắt Đầu Nghỉ'}
              </button>
              <button
                onClick={() => {
                  setIsRestRunning(false);
                  stopVoice();
                  setRestSecondsLeft(restDuration);
                  playSoftBeep(440, 0.1);
                }}
                className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Đặt lại"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
