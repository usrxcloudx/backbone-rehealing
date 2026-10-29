import React, { useState, useEffect } from 'react';
import { AlertOctagon, HeartHandshake, ShieldAlert, X, Play, Pause, RotateCcw, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';
import { playSoftBeep, playSuccessChime } from '../utils/audio';

export default function EmergencyModal({ isOpen, onClose, triggerReason }) {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes (300 seconds)
  const [isActive, setIsActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Hít vào (bụng căng nhẹ)');

  useEffect(() => {
    if (isOpen) {
      setSecondsLeft(300);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer = null;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            playSuccessChime();
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft]);

  // Breathing rhythm indicator (4s in, 6s out)
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      const cycle = secondsLeft % 10;
      if (cycle >= 6) {
        setBreathPhase('Hít vào sâu bằng mũi (4s) -> Cảm nhận bụng ép nhẹ xuống sàn');
      } else {
        setBreathPhase('Thở ra dài chậm rãi qua miệng (6s) -> Cảm nhận thắt lưng chìm sâu xuống');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSecs = secondsLeft % 60;
  const progressPercent = ((300 - secondsLeft) / 300) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-red-950/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl my-auto overflow-hidden rounded-3xl bg-slate-900 border-2 border-red-500/80 shadow-[0_0_60px_rgba(239,68,68,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Urgent Header Banner */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-red-600 to-rose-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-3 rounded-2xl bg-white/20 backdrop-blur-sm animate-pulse">
              <AlertOctagon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-black/30 text-xs font-bold tracking-wider uppercase">
                  GIAO THỨC KHẨN CẤP
                </span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Buổi tập đã tạm khóa</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black mt-1">HƯỚNG DẪN GIẢM ÁP CẤP TỐC: PRONE LYING</h2>
              <p className="text-xs sm:text-sm text-red-100">
                {triggerReason || "Phát hiện tín hiệu đau buốt hoặc tê lan — Cần giải phóng áp lực đĩa đệm ngay lập tức"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            title="Đóng sau khi đã dịu đau"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Visual & Step guide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Medical Image */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl group bg-slate-950">
                <img
                  src="/media/emergency_decompression.webp"
                  alt="Tư thế nằm sấp giảm áp Prone Lying"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Tư thế Nằm sấp thư giãn (McKenzie Prone Lying) — Giảm áp suất L4-L5 về 0
                  </span>
                </div>
              </div>

              {/* 5-step Protocol Card */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5">
                <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-emerald-400" />
                  Quy Trình 5 Bước Giải Cứu Cột Sống:
                </h4>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">1</span>
                    <span><strong>NGỪNG TẬP NGAY:</strong> Không cố gắng gập lưng, không xoay vặn hay bẻ khớp kêu rắc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
                    <span><strong>NẰM SẤP TRÊN SÀN PHẲNG:</strong> Trải thảm tập trên sàn cứng. Tránh nằm trên đệm lò xo lún.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
                    <span><strong>GỐI TRÁN LÊN TAY:</strong> Hai tay khoanh nhẹ dưới cằm/trán hoặc xuôi theo thân. Thả lỏng toàn bộ cơ mông và thắt lưng.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">4</span>
                    <span><strong>THỞ BỤNG SÂU:</strong> Khi hít vào, bụng tỳ nhẹ xuống sàn giúp đẩy nhẹ nhân nhầy đĩa đệm trở về trung tâm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">5</span>
                    <span><strong>CHƯỜM LẠNH 15 PHÚT:</strong> Nếu có cảm giác buốt rát như lửa đốt, đặt túi đá bọc khăn lên thắt lưng.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Countdown Timer & Breathing Rhythm */}
            <div className="lg:col-span-5 space-y-4">
              {/* Timer Box */}
              <div className="p-6 rounded-2xl bg-slate-800/90 border border-red-500/30 text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Thời Gian Nằm Sấp Tối Thiểu
                </span>

                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="8"
                      strokeDasharray="264"
                      strokeDashoffset={264 - (264 * progressPercent) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-linear"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {String(minutes).padStart(2, '0')}:{String(remainingSecs).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-slate-400">
                      {secondsLeft === 0 ? "Hoàn thành!" : "Nằm yên thở"}
                    </span>
                  </div>
                </div>

                {/* Breathing Coach Text */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="text-xs text-slate-400 font-medium mb-1">Nhịp thở hồi phục:</div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-400 animate-pulse">
                    {breathPhase}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsActive(!isActive)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                      isActive 
                        ? "bg-amber-600 hover:bg-amber-500 text-white" 
                        : "bg-emerald-600 hover:bg-emerald-500 text-white"
                    }`}
                  >
                    {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isActive ? "Tạm dừng" : "Tiếp tục đếm"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSecondsLeft(300);
                      setIsActive(false);
                      playSoftBeep(440, 0.1);
                    }}
                    className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                    title="Đặt lại 5 phút"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Cold Therapy Box */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 flex-shrink-0">
                  <ThermometerSnowflake className="w-5 h-5" />
                </div>
                <div className="text-xs text-blue-200 space-y-1">
                  <div className="font-bold text-blue-300">Quy tắc Chườm Lạnh:</div>
                  <p>
                    Dùng túi đá hoặc bọc khăn lạnh đặt lên thắt lưng 15 phút. Tuyệt đối <strong>KHÔNG chườm nóng</strong> trong 48h đầu sau cơn đau cấp vì nhiệt nóng làm tăng phù nề chèn ép rễ thần kinh.
                  </p>
                </div>
              </div>

              {/* Dismiss / Unlock Action */}
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  <span>Tôi đã cảm thấy dịu đau, mở lại ứng dụng</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
