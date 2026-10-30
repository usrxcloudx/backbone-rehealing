import React, { useState, useEffect } from 'react';
import { Volume2, Square, Sparkles } from 'lucide-react';
import { subscribeNarrator, playNarrator } from '../utils/narrator';

export default function VoiceButton({ 
  id, 
  title, 
  sub = '', 
  audioSrc = null, 
  text = '', 
  variant = 'default', // 'banner' | 'card' | 'inline' | 'icon'
  className = '' 
}) {
  const [isPlayingThis, setIsPlayingThis] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeNarrator((state) => {
      setIsPlayingThis(state.isPlaying && state.activeId === id);
    });
    return () => unsubscribe();
  }, [id]);

  const handleClick = (e) => {
    e.stopPropagation();
    playNarrator({ id, title, sub, audioSrc, text });
  };

  if (variant === 'banner') {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-95 ${
          isPlayingThis
            ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
        } ${className}`}
      >
        {isPlayingThis ? (
          <>
            <Square className="w-4 h-4 fill-white animate-pulse" />
            <span>Dừng Giọng Đọc</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            <span>Nghe Giọng Đọc Toàn Bài</span>
          </>
        )}
      </button>
    );
  }

  if (variant === 'card') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all active:scale-95 border ${
          isPlayingThis
            ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-sm'
            : 'bg-slate-800/80 hover:bg-slate-700/80 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60'
        } ${className}`}
        title={isPlayingThis ? 'Dừng đọc' : 'Nghe giọng đọc hướng dẫn'}
      >
        {isPlayingThis ? (
          <>
            <Square className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Dừng</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5" />
            <span>Nghe Hướng Dẫn</span>
          </>
        )}
      </button>
    );
  }

  // Default inline / pill style
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
        isPlayingThis
          ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
          : 'bg-slate-800/80 text-emerald-400 border-slate-700 hover:text-white hover:border-emerald-500'
      } ${className}`}
      title={isPlayingThis ? 'Dừng giọng đọc' : 'Nghe giọng đọc'}
    >
      {isPlayingThis ? (
        <>
          <Square className="w-3 h-3 fill-current" />
          <span>Dừng</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3 h-3" />
          <span>Nghe đọc</span>
        </>
      )}
    </button>
  );
}
