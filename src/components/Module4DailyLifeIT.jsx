import React, { useState, useEffect } from 'react';
import { DAILY_LIVING } from '../data/rehabData';
import { 
  Laptop, 
  Play, 
  Pause, 
  RotateCcw, 
  Bed, 
  Coffee, 
  HeartHandshake, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  Droplets,
  Timer
} from 'lucide-react';
import { playSoftBeep, playWorkSignal, playRestSignal, playSuccessChime } from '../utils/audio';

export default function Module4DailyLifeIT({ onOpenVideo }) {
  // Pomodoro State: 45m work (2700s) -> 3m stretch (180s)
  const WORK_TIME = 45 * 60;
  const STRETCH_TIME = 3 * 60;

  const [mode, setMode] = useState('work'); // 'work' | 'stretch'
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Switch mode
            if (mode === 'work') {
              playRestSignal();
              setMode('stretch');
              return STRETCH_TIME;
            } else {
              playSuccessChime();
              setMode('work');
              return WORK_TIME;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => {
    if (!isActive) {
      playSoftBeep(523, 0.15);
    } else {
      playSoftBeep(392, 0.15);
    }
    setIsActive(!isActive);
  };

  const resetTimer = (newMode = mode) => {
    setIsActive(false);
    setMode(newMode);
    setTimeLeft(newMode === 'work' ? WORK_TIME : STRETCH_TIME);
    playSoftBeep(440, 0.1);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalDuration = mode === 'work' ? WORK_TIME : STRETCH_TIME;
  const progressPercent = ((totalDuration - timeLeft) / totalDuration) * 100;

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 4: Activities of Daily Living (ADL)
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hướng Dẫn Sinh Hoạt Hàng Ngày Cho Dân IT
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Bạn có thể tập 30 phút rất chuẩn, nhưng nếu ngồi sai và cúi sai trong 15 giờ còn lại, đĩa đệm vẫn sẽ bị tổn thương. Hãy làm chủ các chuyển động công thái học này!
          </p>
        </div>
      </div>

      {/* POMODORO CÔNG THÁI HỌC IT (45/5) */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Laptop className="w-4 h-4" />
              Công Cụ Dành Riêng Cho Bàn Làm Việc IT
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Bộ Hẹn Giờ Công Thái Học IT (Pomodoro 45/3)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              45 phút tập trung code/làm việc ➔ Tự động nhắc đứng dậy 3 phút giãn cơ gập hông (Half-Kneeling Stretch) & uống nước.
            </p>
          </div>

          {/* Mode Switchers */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 self-start md:self-auto">
            <button
              onClick={() => resetTimer('work')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                mode === 'work'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>45 Phút Code</span>
            </button>
            <button
              onClick={() => resetTimer('stretch')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                mode === 'stretch'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>3 Phút Giãn Cơ</span>
            </button>
          </div>
        </div>

        {/* Live Timer Display & Visual Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Circular Countdown Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center space-y-4">
            <span className={`text-xs uppercase tracking-wider font-bold ${
              mode === 'work' ? 'text-emerald-400' : 'text-amber-400 animate-pulse'
            }`}>
              {mode === 'work' ? 'Đang Tập Trung Làm Việc' : 'Thời Gian Giải Cứu Đĩa Đệm'}
            </span>

            <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke={mode === 'work' ? '#10b981' : '#f59e0b'}
                  strokeWidth="7"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * progressPercent) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {isActive ? 'Đang chạy' : 'Đã tạm dừng'}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleTimer}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  isActive
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                }`}
              >
                {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isActive ? 'Tạm Dừng' : 'Bắt Đầu'}</span>
              </button>

              <button
                onClick={() => resetTimer()}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Đặt lại bộ đếm"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Accompanying Stretch Guide */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Động Tác Trong 3 Phút Nghỉ: Giãn Cơ Gập Hông (Hip Flexor Stretch)
                </div>
                <button
                  onClick={() => onOpenVideo("vIDzsqJiAIo", "Kỹ thuật giãn cơ gập hông Half-Kneeling", "Giãn Cơ Gập Hông")}
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
                >
                  <Play className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Xem Video</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src="/media/hip_flexor_stretch.webp"
                  alt="Half-Kneeling Hip Flexor Stretch"
                  className="w-full sm:w-48 h-32 object-cover rounded-xl border border-slate-700"
                />
                <div className="text-xs text-slate-300 space-y-2">
                  <p>
                    <strong>Vì sao quan trọng với dân IT?</strong> Ngồi ghế 8-10h làm cơ gập hông (Psoas) co rút ngắn lại, khi đứng lên nó kéo giật xương chậu đổ về phía trước gây cong võng và chèn nát đĩa đệm L4-L5.
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-800 text-[11px] text-amber-300">
                    👉 Quỳ 1 gối, siết chặt cơ mông của gối quỳ, cuộn xương chậu nhẹ về trước. Giữ 30s mỗi bên. Uống thêm 1 cốc nước 200ml!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DAILY LIFE GUIDES: LOG ROLL & GOLFER'S LIFT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LOG ROLL TECHNIQUE */}
        <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                <Bed className="w-3.5 h-3.5" />
                <span>Rời Giường An Toàn</span>
              </div>
              <button
                onClick={() => onOpenVideo("nPm1VuOSICg", "Kỹ thuật Log Roll rời giường an toàn", "Log Roll Technique")}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Xem Video</span>
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              1. Kỹ Thuật Log Roll (Lăn Như Khúc Gỗ)
            </h3>

            {/* Warning Callout */}
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span><strong>CẢNH BÁO TỬ HUYỆT:</strong> Tuyệt đối KHÔNG gập bụng bật dậy thẳng đứng từ tư thế nằm ngửa vào buổi sáng!</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/9]">
              <img
                src="/media/log_roll.webp"
                alt="Kỹ thuật Log Roll rời giường"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3 Steps */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</span>
                <div><strong>Co hai gối:</strong> Khi tỉnh giấc, co hai đầu gối lại, đặt hai lòng bàn chân phẳng trên đệm.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</span>
                <div><strong>Lăn như khúc gỗ:</strong> Lăn đồng thời cả vai và hông cùng lúc nghiêng sang một bên mép giường (vai và hông không vặn xoắn).</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</span>
                <div><strong>Thả chân & Đẩy tay:</strong> Thả hai cẳng chân xuống mép giường, dùng hai tay ấn xuống đệm để nâng người ngồi dậy thẳng lưng.</div>
              </div>
            </div>
          </div>
        </div>

        {/* GOLFER'S LIFT */}
        <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nhặt Đồ Rơi Chuẩn</span>
              </div>
              <button
                onClick={() => onOpenVideo("pShkMkdcsKQ", "Kỹ thuật Golfer's Lift nhặt đồ an toàn", "Golfer's Lift")}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Xem Video</span>
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              2. Kỹ Thuật Golfer's Lift (Cúi Nhặt Đồ Không Cong Lưng)
            </h3>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <Flame className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>Động tác giống như tay golf vớt bóng: Đá một chân ra sau làm đối trọng để giữ lưng thẳng tắp.</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/9]">
              <img
                src="/media/golfers_lift.webp"
                alt="Golfer's Lift Technique"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3 Steps */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</span>
                <div><strong>Đứng trên 1 chân trụ:</strong> Trọng lượng dồn vào một chân khỏe, đầu gối chùng nhẹ 10-15 độ.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</span>
                <div><strong>Đá chân kia ra sau:</strong> Gập người tại khớp háng, đá chân sau thẳng lên trần nhà như chiếc bập bênh đối trọng.</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</span>
                <div><strong>Hạ tay nhặt đồ:</strong> Lưng hoàn toàn thẳng và bất động. Nhặt đồ nhẹ xong hạ chân sau xuống để đứng thẳng người lên.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
