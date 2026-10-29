import React, { useState } from 'react';
import { EXERCISES } from '../data/rehabData';
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
  ChevronUp
} from 'lucide-react';

export default function Module2ExerciseAtlas({ onOpenVideo, onStartTimerForExercise }) {
  const [selectedExercise, setSelectedExercise] = useState(EXERCISES[0]);
  const [expandedSensory, setExpandedSensory] = useState(true);

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 2: The Beginner's Movement Atlas
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thư Viện Bài Tập Trị Liệu Chi Tiết
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Thiết kế riêng cho người chưa từng tập gym: Mỗi cử động đều có cấu trúc cố định, bản đồ cảm giác đích xác và cảnh báo sai phạm chi tiết.
          </p>
        </div>
      </div>

      {/* Exercise Selector Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {EXERCISES.map((ex, idx) => {
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
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenVideo(selectedExercise.videoId, selectedExercise.videoTitle, selectedExercise.vietnameseName)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-bold border border-slate-700 transition-all shadow-md active:scale-95"
            >
              <Play className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Xem Video Kỹ Thuật</span>
            </button>

            <button
              onClick={() => onStartTimerForExercise(selectedExercise)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <Clock className="w-4 h-4" />
              <span>Bật Bộ Đếm Bài Này</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Visual Showcase & Prescription */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Image */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group">
                <img
                  src={selectedExercise.image}
                  alt={selectedExercise.vietnameseName}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => onOpenVideo(selectedExercise.videoId, selectedExercise.videoTitle, selectedExercise.vietnameseName)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 hover:scale-110 shadow-2xl"
                  title="Nhấn để xem video minh họa động tác"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-white/10">
                  Minh Họa Tư Thế Chuẩn Y Khoa
                </div>
              </div>

              {/* Prescription Banner */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm space-y-0.5">
                  <div className="font-bold text-emerald-300">Đơn Liều Lượng Luyện Tập (Prescription):</div>
                  <p className="text-slate-300 font-medium">
                    {selectedExercise.prescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="lg:col-span-5 space-y-5">
              {/* Chuẩn bị */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  1. Tư Thế Chuẩn Bị (Setup):
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  {selectedExercise.setup.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thực hiện */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  2. Cách Thực Hiện (Execution):
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  {selectedExercise.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nhịp thở */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-amber-400">🫁 Nhịp Thở & Thời Gian:</span>
                <p className="italic">{selectedExercise.breathing}</p>
              </div>
            </div>
          </div>

          {/* BẢN ĐỒ CẢM GIÁC (SENSORY FEEDBACK MAP) - CORE REQUIREMENT */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-700/80 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    Bản Đồ Cảm Giác (Sensory Feedback Map)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Nguyên tắc sống còn: Biết chính xác cơ nào phải mỏi và vị trí nào TUYỆT ĐỐI KHÔNG ĐƯỢC ĐAU
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Cảm nhận ĐÚNG (Target Muscles) */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>CẢM NHẬN ĐÚNG (Cơ Đích Kích Hoạt)</span>
                </div>
                <ul className="text-xs sm:text-sm text-emerald-200/90 space-y-2">
                  {selectedExercise.sensoryMap.correct.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cảm nhận SAI (Warning / Danger) */}
              <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                  <span>CẢM NHẬN SAI (Dấu Hiệu Nguy Hiểm/Làm Lệch)</span>
                </div>
                <ul className="text-xs sm:text-sm text-rose-200/90 space-y-2">
                  {selectedExercise.sensoryMap.wrong.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
