import React, { useState } from 'react';
import { EXERCISES, LEVELS_CONFIG } from '../data/rehabData';
import { 
  Play, 
  CheckCircle2, 
  AlertOctagon, 
  Clock, 
  Dumbbell, 
  Target, 
  ArrowRight,
  Flame,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import VoiceButton from './VoiceButton';

export default function Module2ExerciseAtlas({ onOpenVideo, onStartTimerForExercise }) {
  const [activeLevelId, setActiveLevelId] = useState('level1');
  const levelExercises = EXERCISES.filter(ex => ex.levelId === activeLevelId);
  const [selectedExercise, setSelectedExercise] = useState(levelExercises[0] || EXERCISES[0]);
  const [expandedSensory, setExpandedSensory] = useState(true);

  const activeLevelConfig = LEVELS_CONFIG[activeLevelId];

  const handleLevelChange = (newLevelId) => {
    setActiveLevelId(newLevelId);
    const newLevelExercises = EXERCISES.filter(ex => ex.levelId === newLevelId);
    if (newLevelExercises.length > 0) {
      setSelectedExercise(newLevelExercises[0]);
    }
  };

  if (!selectedExercise) {
    return (
      <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-3xl border border-slate-800">
        Đang tải dữ liệu bài tập phục hồi...
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 2: The Movement Atlas & 3-Level Progression
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thư Viện Bài Tập Trị Liệu 3 Cấp Độ Tiến Trình
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Nguyên tắc y học phục hồi: Bắt đầu từ đòn bẩy ngắn nhất ở <strong>Cấp độ 1</strong> để dập tắt đau, sau đó tiến dần lên <strong>Cấp độ 2 & 3</strong> để xây dựng chiếc đai nẹp cơ bắp bất khả xâm phạm.
          </p>
        </div>

        <div className="flex-shrink-0">
          <VoiceButton
            id="mod2_overview"
            title="Module 2: Thư Viện Bài Tập 3 Cấp Độ"
            audioSrc="/audio/narrations/mod2_overview.mp3"
            variant="banner"
          />
        </div>
      </div>

      {/* 3-LEVEL TABS SWITCHER */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {Object.values(LEVELS_CONFIG).map((lvl) => {
          const isActive = activeLevelId === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => handleLevelChange(lvl.id)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between space-y-2 relative overflow-hidden group ${
                isActive
                  ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-950/50 ring-2 ring-emerald-500/30'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  isActive 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                    : 'bg-slate-800/80 text-slate-400 border-slate-700'
                }`}>
                  Cấp Độ 0{lvl.levelNumber}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {lvl.timeline}
                </span>
              </div>

              <div>
                <div className={`font-black text-sm sm:text-base ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {lvl.name}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {lvl.badge}
                </div>
              </div>

              {isActive && (
                <div className="h-1 w-full bg-emerald-500 rounded-full mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* LEVEL ROADMAP & GRADUATION CRITERIA BANNER */}
      <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Mục Tiêu Lâm Sàng Của {activeLevelConfig.name}</span>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            {activeLevelConfig.timeline}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeLevelConfig.summary}
        </p>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-start gap-2.5">
          <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-slate-300">
            <strong className="text-amber-300">Tiêu chuẩn vượt cấp (Graduation Criteria):</strong> {activeLevelConfig.criteriaToAdvance}
          </div>
        </div>
      </div>

      {/* Exercise Selector Pills for Current Level */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
          <span>DANH SÁCH BÀI TẬP ({levelExercises.length} BÀI):</span>
          <span>Chọn bài tập để xem hướng dẫn</span>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {levelExercises.map((ex, idx) => {
            const isSelected = selectedExercise.id === ex.id;
            return (
              <button
                key={ex.id}
                onClick={() => setSelectedExercise(ex)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 border ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/30"
                    : "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                }`}>
                  0{idx + 1}
                </span>
                <span>{ex.vietnameseName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Exercise Detail Card */}
      <div className="rounded-3xl glass-panel border border-slate-800 overflow-hidden shadow-2xl">
        {/* Top Header of the Exercise */}
        <div className="p-6 sm:p-8 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {selectedExercise.level}
              </span>
              <span>• {selectedExercise.name}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white mt-1">
              {selectedExercise.vietnameseName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {selectedExercise.description}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
            <VoiceButton
              id={`exercise_${selectedExercise.id}`}
              title={selectedExercise.vietnameseName}
              text={`${selectedExercise.vietnameseName}. Tên tiếng Anh là ${selectedExercise.name}. ${selectedExercise.description}. Đơn thuốc tập luyện: ${selectedExercise.prescription || ''}. Hướng dẫn chuẩn bị: ${(selectedExercise.setup || []).join('. ')}. Cách thực hiện: ${(selectedExercise.execution || []).join('. ')}. Cảm nhận đúng: ${(selectedExercise.sensoryMap?.correct || []).join('. ')}. Cảnh báo lỗi sai cần tránh: ${(selectedExercise.sensoryMap?.wrong || []).join('. ')}.`}
              variant="card"
            />

            <button
              onClick={() => onOpenVideo(selectedExercise.videoId, selectedExercise.videoTitle, selectedExercise.vietnameseName)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-bold border border-slate-700 transition-all shadow-md active:scale-95"
            >
              <Play className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Xem Video</span>
            </button>

            <button
              onClick={() => onStartTimerForExercise(selectedExercise)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <Clock className="w-4 h-4" />
              <span>Bật Bộ Đếm</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Visual Showcase & Prescription */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Image */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group aspect-[16/9] flex items-center justify-center">
                <img
                  src={selectedExercise.image}
                  alt={selectedExercise.vietnameseName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => onOpenVideo(selectedExercise.videoId, selectedExercise.videoTitle, selectedExercise.vietnameseName)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 hover:scale-110 shadow-2xl"
                  title="Nhấn để xem video minh họa động tác"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-white/10">
                  Mô Phỏng Tư Thế Chuẩn Y Khoa
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>Ảnh mô phỏng cơ sinh học 3D y khoa</span>
                <span className="text-emerald-400 font-semibold cursor-pointer hover:underline" onClick={() => onOpenVideo(selectedExercise.videoId, selectedExercise.videoTitle, selectedExercise.vietnameseName)}>
                  Xem video có tiếng hướng dẫn ↗
                </span>
              </div>
            </div>

            {/* Prescription Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-850 border border-slate-700/80 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  Đơn Thuốc Tập Luyện (Prescription)
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {selectedExercise.prescription}
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 text-[11px] text-slate-300 border border-slate-700/60 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Quy tắc an toàn:</strong> Tuyệt đối không tập đến kiệt sức. Luôn dừng lại khi cảm thấy chỉ còn làm được 2 cái nữa (RIR = 2).
                  </span>
                </div>
              </div>

              {/* Breathing & Cadence Note */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs">
                <span className="font-bold text-teal-400 uppercase tracking-wider text-[11px]">
                  Nhịp Thở & Nhịp Điệu (Cadence)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {selectedExercise.breathing}
                </p>
              </div>
            </div>
          </div>

          {/* Step by Step Execution Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Bước Chuẩn Bị */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">1</span>
                Tư Thế Chuẩn Bị (Setup)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedExercise.setup.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bước Thực Hiện */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">2</span>
                Cách Thực Hiện (Execution)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedExercise.execution.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SENSORY FEEDBACK MAP (BẢN ĐỒ CẢM GIÁC ĐÍCH XÁC) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden">
            <div 
              onClick={() => setExpandedSensory(!expandedSensory)}
              className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-850 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Target className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    Bản Đồ Cảm Giác (Sensory Feedback First)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Chỉ dẫn vị trí cơ nào phải mỏi (ĐÚNG) và vị trí nào cấm được đau (SAI)
                  </p>
                </div>
              </div>
              <button className="text-slate-400 p-1">
                {expandedSensory ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {expandedSensory && (
              <div className="p-5 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800/80">
                {/* Cảm nhận ĐÚNG */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Cảm Nhận ĐÚNG (Cơ Đích Kích Hoạt)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-100">
                    {selectedExercise.sensoryMap.correct.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cảm nhận SAI */}
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                    <AlertOctagon className="w-4 h-4 text-rose-400" />
                    <span>Dấu Hiệu SAI / CẢNH BÁO NGUY HIỂM</span>
                  </div>
                  <ul className="space-y-2 text-xs text-rose-100">
                    {selectedExercise.sensoryMap.wrong.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 mt-0.5">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
