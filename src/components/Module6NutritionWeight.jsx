import React, { useState, useEffect } from 'react';
import { NUTRITION_WEIGHT } from '../data/rehabData';
import { 
  Droplets, 
  Flame, 
  Apple, 
  Plus, 
  Minus, 
  RotateCcw, 
  Scale, 
  TrendingDown, 
  Calendar,
  Footprints,
  Play,
  HeartPulse,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Compass
} from 'lucide-react';

export default function Module6NutritionWeight({ onOpenVideo }) {
  // LocalStorage keys
  const WATER_KEY = 'spine_rehab_water_ml';
  const STEPS_KEY = 'spine_rehab_steps';
  const WEIGHT_HISTORY_KEY = 'spine_rehab_weight_history';

  // State Nước
  const [waterMl, setWaterMl] = useState(() => {
    const saved = localStorage.getItem(WATER_KEY);
    return saved ? parseInt(saved, 10) : 750;
  });

  // State Bước Chân Đi Bộ
  const [steps, setSteps] = useState(() => {
    const saved = localStorage.getItem(STEPS_KEY);
    return saved ? parseInt(saved, 10) : 3500;
  });

  // State Cân nặng & Lịch sử
  const [weightHistory, setWeightHistory] = useState(() => {
    const saved = localStorage.getItem(WEIGHT_HISTORY_KEY);
    return saved ? JSON.parse(saved) : [
      { date: '15/10', weight: 72.3, week: 'Bắt đầu' },
      { date: '22/10', weight: 71.9, week: 'Tuần 1' },
      { date: '29/10', weight: 71.4, week: 'Tuần 2' }
    ];
  });

  const [weightInput, setWeightInput] = useState('');

  useEffect(() => {
    localStorage.setItem(WATER_KEY, waterMl.toString());
  }, [waterMl]);

  useEffect(() => {
    localStorage.setItem(STEPS_KEY, steps.toString());
  }, [steps]);

  useEffect(() => {
    localStorage.setItem(WEIGHT_HISTORY_KEY, JSON.stringify(weightHistory));
  }, [weightHistory]);

  const addWater = (amount) => {
    setWaterMl(prev => Math.min(prev + amount, 4000));
  };

  const removeWater = (amount) => {
    setWaterMl(prev => Math.max(prev - amount, 0));
  };

  const resetWater = () => {
    if (confirm("Đặt lại lượng nước hôm nay về 0 ml?")) {
      setWaterMl(0);
    }
  };

  const addSteps = (amount) => {
    setSteps(prev => Math.min(prev + amount, 30000));
  };

  const resetSteps = () => {
    if (confirm("Đặt lại số bước chân hôm nay về 0?")) {
      setSteps(0);
    }
  };

  const handleUpdateWeight = (e) => {
    e.preventDefault();
    const val = parseFloat(weightInput);
    if (!isNaN(val) && val > 45 && val < 120) {
      const today = new Date();
      const dateStr = `${today.getDate()}/${today.getMonth() + 1}`;
      const nextWeekNum = weightHistory.length;
      const newEntry = { date: dateStr, weight: val, week: `Tuần ${nextWeekNum}` };
      setWeightHistory([newEntry, ...weightHistory]);
      setWeightInput('');
    }
  };

  const currentWeight = weightHistory.length > 0 ? weightHistory[0].weight : 72.3;
  const initialWeight = 72.3;
  const targetWeight = 61.5;
  const lostSoFar = Math.max(initialWeight - currentWeight, 0);
  const remainingKg = Math.max(currentWeight - targetWeight, 0).toFixed(1);
  const percentCompleted = Math.min(Math.round((lostSoFar / (initialWeight - targetWeight)) * 100), 100);
  const estimatedWeeksLeft = Math.ceil(remainingKg / 0.5);

  const waterTarget = NUTRITION_WEIGHT.dailyTargets.waterMl;
  const waterPercent = Math.min(Math.round((waterMl / waterTarget) * 100), 100);

  const stepsTarget = NUTRITION_WEIGHT.dailyTargets.stepsTarget;
  const stepsPercent = Math.min(Math.round((steps / stepsTarget) * 100), 100);
  const caloriesBurnedFromWalking = Math.round((steps / 1000) * 40);

  const { walkingProtocol } = NUTRITION_WEIGHT;

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 6: Dinh Dưỡng, Giảm Mỡ & Đi Bộ Phục Hồi
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chiến Lược Giảm Cân 72.3 kg ➔ 61.5 kg & Đi Bộ Phục Hồi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Mục tiêu rõ ràng: Cắt giảm <strong>10.8 kg mỡ thừa</strong> bằng công thức kiềng 3 chân: Thâm hụt calo (1,550 kcal) + Đi bộ nhanh kích hoạt thẩm thấu đĩa đệm + 5 bài tập nẹp cơ bụng.
          </p>
        </div>
      </div>

      {/* TOP TARGET STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Calo Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Năng Lượng Nạp</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            1,550 <span className="text-xs font-sans text-amber-400 font-semibold">kcal/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Thâm hụt -500 kcal giúp tiêu mỡ nội tạng mà không làm teo cơ nẹp cột sống.
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
            Xây dựng "đai nẹp cơ bụng": Ức gà, trứng, cá thu, cá hồi, đậu phụ.
          </p>
        </div>

        {/* Walking Steps Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Mục Tiêu Đi Bộ</span>
            <Footprints className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            8,000 <span className="text-xs font-sans text-emerald-400 font-semibold">bước/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Đốt ~320 kcal mà không gây chấn động nén dọc trục đĩa đệm L4-L5.
          </p>
        </div>

        {/* Water Card */}
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Nước Bù Đĩa Đệm</span>
            <Droplets className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            2.75 <span className="text-xs font-sans text-blue-400 font-semibold">Lít/ngày</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nhân thạch đĩa đệm chứa 80% nước. Cần bù nước liên tục để bao xơ không bị giòn rách.
          </p>
        </div>
      </div>

      {/* SPECIAL PROTOCOL: FAST WALKING - VUA CARDIO CHO THOÁT VỊ ĐĨA ĐỆM */}
      <div className="rounded-3xl glass-panel border border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
              <Footprints className="w-4 h-4" />
              Giao Thức Cardio Độc Quyền
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              {walkingProtocol.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {walkingProtocol.subtitle}
            </p>
          </div>

          <button
            onClick={() => onOpenVideo(walkingProtocol.videoId, walkingProtocol.videoTitle, "Kỹ Thuật Đi Bộ Phục Hồi Cột Sống")}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/30 active:scale-95 flex-shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Xem Video Kỹ Thuật Đi Bộ</span>
          </button>
        </div>

        {/* Medical Mechanism Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/9]">
            <img 
              src={walkingProtocol.image} 
              alt="Fast Walking Biomechanics"
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-2 left-2 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
              Cơ chế thẩm thấu dịch nuôi đĩa đệm
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm">
            {/* Cảnh báo chạy bộ */}
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-rose-400 uppercase text-xs">
                <AlertTriangle className="w-4 h-4" />
                <span>Vì sao người thoát vị L4-L5 TUYỆT ĐỐI KHÔNG CHẠY BỘ / NHẢY DÂY?</span>
              </div>
              <p className="text-rose-100/90 leading-relaxed text-xs">
                {walkingProtocol.whyNotRunning}
              </p>
            </div>

            {/* Cơ chế thẩm thấu */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-400 uppercase text-xs">
                <HeartPulse className="w-4 h-4" />
                <span>Hiện tượng thẩm thấu thủy tĩnh (Imbibition): Máy bơm nuôi đĩa đệm</span>
              </div>
              <p className="text-emerald-100/90 leading-relaxed text-xs">
                {walkingProtocol.imbibitionMechanism}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Walking Sessions & 4 Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Lịch 3 cữ đi bộ trong ngày */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              Lịch Chia Nhỏ 3 Cữ Đi Bộ Trong Ngày
            </h3>
            <div className="space-y-2.5">
              {walkingProtocol.dailySchedule.map((sched, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-300">{sched.session} ({sched.duration})</span>
                    <span className="font-mono text-slate-400">{sched.steps}</span>
                  </div>
                  <p className="text-[11px] text-slate-300">{sched.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Nguyên tắc sải bước an toàn */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-400" />
              4 Nguyên Tắc Tiếp Đất & Sải Bước An Toàn
            </h3>
            <div className="space-y-2.5">
              {walkingProtocol.fourRules.map((rule, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-bold text-teal-300">
                    {idx + 1}. {rule.rule}
                  </div>
                  <p className="text-[11px] text-slate-300">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Walking Step Counter */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Footprints className="w-4 h-4 text-emerald-400" />
              <span>Nhật Ký Bước Chân Hôm Nay (Đốt: ~{caloriesBurnedFromWalking} kcal)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">{steps.toLocaleString()}</span>
              <span className="text-xs text-slate-400">/ 8,000 bước ({stepsPercent}%)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => addSteps(1000)}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-95"
            >
              +1,000 Bước
            </button>
            <button
              onClick={() => addSteps(2500)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all active:scale-95"
            >
              +2,500 Bước (1 Cữ)
            </button>
            <button
              onClick={resetSteps}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Đặt lại số bước"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
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
