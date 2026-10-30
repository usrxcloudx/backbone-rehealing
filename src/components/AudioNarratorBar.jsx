import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  X, 
  FastForward,
  Sparkles
} from 'lucide-react';
import { 
  subscribeNarrator, 
  stopNarrator, 
  pauseNarrator, 
  resumeNarrator, 
  setNarratorRate 
} from '../utils/narrator';

export default function AudioNarratorBar() {
  const [narrator, setNarrator] = useState({
    isPlaying: false,
    isPaused: false,
    title: '',
    sub: '',
    currentTime: 0,
    duration: 0,
    rate: 1.0,
    activeId: null
  });

  useEffect(() => {
    const unsubscribe = subscribeNarrator((newState) => {
      setNarrator(newState);
    });
    return () => unsubscribe();
  }, []);

  if (!narrator.isPlaying && !narrator.isPaused && !narrator.activeId) {
    return null;
  }

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = narrator.duration > 0 
    ? Math.min((narrator.currentTime / narrator.duration) * 100, 100) 
    : 0;

  const cycleRate = () => {
    const nextRate = narrator.rate === 1.0 ? 1.2 : narrator.rate === 1.2 ? 0.9 : 1.0;
    setNarratorRate(nextRate);
  };

  return (
    <div className="fixed bottom-16 md:bottom-6 left-3 right-3 md:left-auto md:right-6 md:max-w-md z-50 animate-slideUp">
      <div className="glass-panel border border-emerald-500/60 rounded-2xl p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-slate-950/95 backdrop-blur-xl">
        {/* Progress Bar Top Line */}
        {narrator.duration > 0 && (
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2.5">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          {/* Audio Visualizer & Title */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              {narrator.isPlaying ? (
                <div className="flex items-end gap-0.5 h-4">
                  <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.6s_ease-in-out_infinite] h-4"></span>
                  <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.8s_ease-in-out_infinite] h-3"></span>
                  <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.5s_ease-in-out_infinite] h-4"></span>
                </div>
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {narrator.isPlaying ? 'Đang Đọc Giọng Nói' : 'Tạm Dừng'}
                </span>
                {narrator.duration > 0 && (
                  <span className="text-[10px] text-slate-400 font-mono">
                    • {formatTime(narrator.currentTime)} / {formatTime(narrator.duration)}
                  </span>
                )}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                {narrator.title}
              </h4>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Speed Toggle */}
            <button
              onClick={cycleRate}
              className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono font-bold border border-slate-700 transition-colors"
              title="Đổi tốc độ đọc"
            >
              {narrator.rate}x
            </button>

            {/* Play/Pause */}
            {narrator.isPlaying ? (
              <button
                onClick={pauseNarrator}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md active:scale-95"
                title="Tạm dừng"
              >
                <Pause className="w-4 h-4 fill-white" />
              </button>
            ) : (
              <button
                onClick={resumeNarrator}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md active:scale-95"
                title="Tiếp tục nghe"
              >
                <Play className="w-4 h-4 fill-white" />
              </button>
            )}

            {/* Stop */}
            <button
              onClick={stopNarrator}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Dừng đọc"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>

            {/* Close */}
            <button
              onClick={stopNarrator}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Đóng thanh giọng đọc"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
