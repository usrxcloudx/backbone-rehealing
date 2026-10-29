import React, { useState, useEffect } from 'react';
import { NUTRITION_WEIGHT } from '../data/rehabData';
import { 
  Scale, 
  Droplets, 
  Flame, 
  TrendingDown, 
  Plus, 
  Minus, 
  RotateCcw, 
  CheckCircle2, 
  Calendar, 
  Info,
  Apple
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSoftBeep, playSuccessChime } from '../utils/audio';

export default function Module6NutritionWeight() {
  // -------------------------------------------------------------
  // WATER TRACKER STATE
  // Target: 2750 ml (2.75 L)
  // -------------------------------------------------------------
  const [waterMl, setWaterMl] = useState(() => {
    try {
      const saved = localStorage.getItem('spine_rehab_water');
      return saved ? Number(saved) : 750;
    } catch {
      return 750;
    }
  });

  useEffect(() => {
    localStorage.setItem('spine_rehab_water', waterMl.toString());
  }, [waterMl]);

  const addWater = (amount) => {
    setWaterMl((prev) => {
      const next = Math.min(prev + amount, 4000);
      if (next >= NUTRITION_WEIGHT.dailyTargets.waterMl && prev < NUTRITION_WEIGHT.dailyTargets.waterMl) {
        playSuccessChime();
        confetti({ particleCount: 50, spread: 60 });
      } else {
        playSoftBeep(659, 0.1);
      }
      return next;
    });
  };

  const removeWater = (amount) => {
    setWaterMl((prev) => Math.max(prev - amount, 0));
    playSoftBeep(440, 0.1);
  };

  const resetWater = () => {
    setWaterMl(0);
    playSoftBeep(330, 0.1);
  };

  // -------------------------------------------------------------
  // WEIGHT JOURNEY STATE
  // From 72.3 kg down to 61.5 kg (-10.8 kg)
  // -------------------------------------------------------------
  const [currentWeight, setCurrentWeight] = useState(() => {
    try {
      const saved = localStorage.getItem('spine_rehab_current_weight');
      return saved ? Number(saved) : 72.3;
    } catch {
      return 72.3;
    }
  });

  const [weightInput, setWeightInput] = useState('');

  const [weightHistory, setWeightHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('spine_rehab_weight_history');
      return saved ? JSON.parse(saved) : [
        { week: 'Tuần 0 (Khởi điểm)', weight: 72.3, date: '15/10' },
        { week: 'Tuần 1', weight: 71.8, date: '22/10' },
        { week: 'Tuần 2 (Hiện tại)', weight: 71.4, date: '29/10' }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('spine_rehab_current_weight', currentWeight.toString());
    localStorage.setItem('spine_rehab_weight_history', JSON.stringify(weightHistory));
  }, [currentWeight, weightHistory]);

  const handleUpdateWeight = (e) => {
    e.preventDefault();
    const val = parseFloat(weightInput);
    if (!isNaN(val) && val >= 50 && val <= 120) {
      setCurrentWeight(val);
      const newEntry = {
        week: `Tuần ${weightHistory.length}`,
        weight: val,
        date: new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })
      };
      setWeightHistory((prev) => [...prev, newEntry]);
      setWeightInput('');
      playSuccessChime();
      confetti({ particleCount: 40, spread: 50 });
    }
  };

  // Metrics
  const startWeight = NUTRITION_WEIGHT.profile.currentWeight;
  const targetWeight = NUTRITION_WEIGHT.profile.targetWeight;
  const totalGoalToLose = startWeight - targetWeight; // 10.8 kg
  const lostSoFar = Math.max(startWeight - currentWeight, 0);
  const percentCompleted = Math.min(Math.round((lostSoFar / totalGoalToLose) * 100), 100);
  const remainingKg = Math.max(currentWeight - targetWeight, 0).toFixed(1);
  const estimatedWeeksLeft = (remainingKg / 0.5).toFixed(0);

  const waterPercent = Math.min(Math.round((waterMl / NUTRITION_WEIGHT.dailyTargets.waterMl) * 100), 100);

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 6: Dinh Dưỡng & Tiến Độ Giảm Mỡ
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Theo Dõi Dinh Dưỡng & Giảm Cân
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Mục tiêu rõ ràng: Giảm từ <strong>72.3 kg xuống 61.5 kg</strong> (-10.8 kg) với tốc độ an toàn 0.5 kg/tuần để loại bỏ 30-40% áp lực trọng tải đè nặng lên đĩa đệm L4-L5.
          </p>
        </div>
      </div>

      {/* TOP TARGET STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Calo Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Năng Lượng Mục Tiêu</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            1,550 <span className="text-xs font-sans text-amber-400 font-semibold">kcal/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mức thâm hụt calo chuẩn (Deficit) giúp giảm mỡ nội tạng mà không làm teo cơ nẹp cột sống.
          </p>
        </div>

        {/* Protein Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Đạm Nuôi Cơ Bắp</span>
            <Apple className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            115 - 125 <span className="text-xs font-sans text-emerald-400 font-semibold">g/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Xây dựng "chiếc đai nẹp bằng cơ bắp" bảo vệ thắt lưng: Ức gà, trứng, cá hồi, đậu phụ.
          </p>
        </div>

        {/* Water Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Nước Bù Đĩa Đệm</span>
            <Droplets className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            2.5 - 3.0 <span className="text-xs font-sans text-blue-400 font-semibold">Lít/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nhân nhầy đĩa đệm chiếm 80% là nước. Thiếu nước khiến bao xơ giòn và dễ rách vỡ.
          </p>
        </div>
      </div>

      {/* WATER LOGGING ENGINE */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Droplets className="w-4 h-4" />
              Hydration Tracker (Mục Tiêu 2,750 ml)
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Nhật Ký Cấp Nước Cho Đĩa Đệm
            </h2>
          </div>

          <div className="text-right sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">{waterMl}</span>
            <span className="text-xs text-slate-400"> / 2,750 ml ({waterPercent}%)</span>
          </div>
        </div>

        {/* Visual Water Fill Bar */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-slate-900 rounded-full overflow-hidden p-1 border border-slate-800 flex">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              style={{ width: `${waterPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>0 Lít (Thiếu nước)</span>
            <span>1.5 Lít (Tạm đủ)</span>
            <span className="text-cyan-400 font-bold">2.75 Lít (Chuẩn Y Khoa)</span>
          </div>
        </div>

        {/* Quick Add Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => addWater(250)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>+250 ml (1 Cốc Nước Ấm)</span>
          </button>

          <button
            onClick={() => addWater(500)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>+500 ml (1 Bình Nước)</span>
          </button>

          <button
            onClick={() => removeWater(250)}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Trừ 250ml"
          >
            <Minus className="w-4 h-4" />
          </button>

          <button
            onClick={resetWater}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Đặt lại ngày mới"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* WEIGHT LOSS PROGRESSION & TRAJECTORY (72.3 -> 61.5 kg) */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" />
              Lộ Trình Cắt Giảm Tải Trọng Cột Sống
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Hành Trình Giảm Cân: 72.3 kg ➔ 61.5 kg
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Mỗi 1 kg mỡ giảm đi tương đương với việc bớt đi 4 kg phản lực giáng lên đốt sống L4-L5 khi bước đi!
            </p>
          </div>

          {/* Quick Weight Input Form */}
          <form onSubmit={handleUpdateWeight} className="flex items-center gap-2">
            <input
              type="number"
              step="0.1"
              placeholder="Cân nặng (kg)"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white font-mono w-36 outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              Cập Nhật
            </button>
          </form>
        </div>

        {/* Milestone Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Khởi điểm</span>
            <div className="text-xl sm:text-2xl font-black text-white font-mono mt-1">72.3 kg</div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase">Hiện tại</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1">{currentWeight} kg</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Đã giảm</span>
            <div className="text-xl sm:text-2xl font-black text-white font-mono mt-1">-{lostSoFar.toFixed(1)} kg</div>
          </div>
          <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-500/30 text-center">
            <span className="text-[11px] font-semibold text-teal-400 uppercase">Đích đến</span>
            <div className="text-xl sm:text-2xl font-black text-teal-300 font-mono mt-1">{targetWeight} kg</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-slate-300">
            <span>Tiến độ giảm tải trọng: {percentCompleted}%</span>
            <span>Còn {remainingKg} kg (Dự kiến ~{estimatedWeeksLeft} tuần)</span>
          </div>
          <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 flex">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-700 shadow-md"
              style={{ width: `${percentCompleted}%` }}
            />
          </div>
        </div>

        {/* History Table */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Lịch Sử Cân Nặng Hàng Tuần</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {weightHistory.map((item, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-white">{item.week}</span>
                  <div className="text-[10px] text-slate-400">{item.date}</div>
                </div>
                <div className="text-base font-black text-emerald-400 font-mono">
                  {item.weight} kg
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
