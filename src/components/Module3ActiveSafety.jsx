import React, { useState, useEffect } from 'react';
import { SAFETY_ENGINE } from '../data/rehabData';
import { 
  ShieldAlert, 
  Sun, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  History, 
  Trash2, 
  Volume2, 
  Flame,
  HelpCircle
} from 'lucide-react';
import { playSoftBeep, playSuccessChime, playEmergencyAlarm } from '../utils/audio';

export default function Module3ActiveSafety({ 
  onTriggerEmergency, 
  isMorningLocked, 
  onToggleMorningSim 
}) {
  const [painLogs, setPainLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('spine_rehab_pain_logs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeFeedbackMsg, setActiveFeedbackMsg] = useState(null);

  useEffect(() => {
    localStorage.setItem('spine_rehab_pain_logs', JSON.stringify(painLogs));
  }, [painLogs]);

  const handleTrafficLightReport = (type) => {
    const timestamp = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = new Date().toLocaleDateString('vi-VN');

    if (type === 'green') {
      playSuccessChime();
      setActiveFeedbackMsg({
        type: 'green',
        title: 'Tín Hiệu Đèn Xanh Được Ghi Nhận',
        desc: 'Rất tốt! Cơ đích đang làm việc chuẩn xác. Bạn được phép tiếp tục bài tập tiếp theo.'
      });
      setPainLogs(prev => [{ id: Date.now(), type: 'green', date: dateStr, time: timestamp, note: 'Chỉ mỏi cơ bụng/mông/xô (Tốt)' }, ...prev.slice(0, 19)]);
    } else if (type === 'yellow') {
      playSoftBeep(440, 0.4, 'triangle');
      setActiveFeedbackMsg({
        type: 'yellow',
        title: 'CẢNH BÁO ĐÈN VÀNG: TẠM DỪNG 2 PHÚT',
        desc: 'Thắt lưng đang bắt đầu bị kéo căng. Hãy nghỉ 2 phút, xem lại video form, giảm 30% mức tạ hoặc giảm biên độ động tác!'
      });
      setPainLogs(prev => [{ id: Date.now(), type: 'yellow', date: dateStr, time: timestamp, note: 'Mỏi tức nhẹ thắt lưng (Đã cảnh báo)' }, ...prev.slice(0, 19)]);
    } else if (type === 'red') {
      playEmergencyAlarm();
      setPainLogs(prev => [{ id: Date.now(), type: 'red', date: dateStr, time: timestamp, note: 'Đau buốt/tê giật (Đã kích hoạt khóa khẩn cấp)' }, ...prev.slice(0, 19)]);
      onTriggerEmergency('Báo cáo Đèn Đỏ: Đau buốt hoặc tê giật lan xuống chân');
    }
  };

  const clearLogs = () => {
    setPainLogs([]);
    playSoftBeep(330, 0.1);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 3: Active Safety Engine
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hệ Thống Giám Sát An Toàn Chủ Động
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hàng rào bảo vệ y khoa 3 lớp: Cơ chế Đèn Giao Thông Cảm Giác, Khóa Cột Sống Buổi Sáng và Quy Tắc Vàng RIR=2.
          </p>
        </div>
      </div>

      {/* LAYER 1: CƠ CHẾ ĐÈN GIAO THÔNG CẢM GIÁC (CORE REQUIREMENT) */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            Lớp Bảo Vệ 1: Real-Time Pain Check
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Cơ Chế Đèn Giao Thông Cảm Giác
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Nhấn nhanh nút cảm giác bạn đang có ngay sau mỗi hiệp tập để ứng dụng điều chỉnh:
          </p>
        </div>

        {/* 3 Traffic Light Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Nút Xanh */}
          <button
            onClick={() => handleTrafficLightReport('green')}
            className="p-6 rounded-2xl bg-emerald-950/30 hover:bg-emerald-950/50 border-2 border-emerald-500/50 hover:border-emerald-400 text-left space-y-3 transition-all duration-300 group shadow-lg active:scale-98"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                🟢
              </span>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Cho Phép Tiếp Tục
              </span>
            </div>
            <div>
              <div className="font-extrabold text-white text-base sm:text-lg">
                ĐÈN XANH: CẢM GIÁC TỐT
              </div>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
                "Chỉ mỏi cơ bụng, cơ mông hoặc xô lưng. Vùng thắt lưng hoàn toàn không đau."
              </p>
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold pt-1">
              Nhấn để ghi nhận hiệp tập chuẩn ✓
            </div>
          </button>

          {/* Nút Vàng */}
          <button
            onClick={() => handleTrafficLightReport('yellow')}
            className="p-6 rounded-2xl bg-amber-950/30 hover:bg-amber-950/50 border-2 border-amber-500/50 hover:border-amber-400 text-left space-y-3 transition-all duration-300 group shadow-lg active:scale-98"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                🟡
              </span>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Cảnh Báo Điều Chỉnh
              </span>
            </div>
            <div>
              <div className="font-extrabold text-white text-base sm:text-lg">
                ĐÈN VÀNG: CĂNG MỎI THẮT LƯNG
              </div>
              <p className="text-xs sm:text-sm text-amber-200/90 mt-1">
                "Mỏi nhẹ hoặc căng tức vùng thắt lưng dưới. Chưa đau nhói nhưng bắt đầu khó chịu."
              </p>
            </div>
            <div className="text-[11px] text-amber-400 font-semibold pt-1">
              Tạm dừng 2 phút, giảm 30% tạ hoặc biên độ!
            </div>
          </button>

          {/* Nút Đỏ */}
          <button
            onClick={() => handleTrafficLightReport('red')}
            className="p-6 rounded-2xl bg-red-950/40 hover:bg-red-950/60 border-2 border-red-500/70 hover:border-red-400 text-left space-y-3 transition-all duration-300 group shadow-[0_0_25px_rgba(239,68,68,0.25)] active:scale-98"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform animate-pulse">
                🔴
              </span>
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40">
                LẬP TỨC KHÓA BUỔI TẬP
              </span>
            </div>
            <div>
              <div className="font-extrabold text-white text-base sm:text-lg">
                ĐÈN ĐỎ: ĐAU BUỐT / TÊ GIẬT
              </div>
              <p className="text-xs sm:text-sm text-red-200/90 mt-1">
                "Đau nhói buốt như điện giật, tê bì lan xuống mông hoặc chân."
              </p>
            </div>
            <div className="text-[11px] text-red-400 font-bold pt-1 animate-pulse">
              KHÓA APP & BẬT GIẢM ÁP PRONE LYING NGAY ⚠️
            </div>
          </button>
        </div>

        {/* Feedback Message Banner */}
        {activeFeedbackMsg && (
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${
            activeFeedbackMsg.type === 'green'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
          }`}>
            <div className="space-y-1">
              <div className="font-bold">{activeFeedbackMsg.title}</div>
              <p>{activeFeedbackMsg.desc}</p>
            </div>
            <button
              onClick={() => setActiveFeedbackMsg(null)}
              className="text-slate-400 hover:text-white p-1"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* LAYER 2: KHÓA CỘT SỐNG BUỔI SÁNG (MORNING SPINE LOCK) */}
      <div className={`rounded-3xl glass-panel border p-6 sm:p-8 space-y-6 transition-all ${
        isMorningLocked 
          ? "border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)] bg-amber-950/20" 
          : "border-slate-800"
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sun className="w-4 h-4" />
              Lớp Bảo Vệ 2: Đồng Hồ Sinh Học Đĩa Đệm
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Khóa Cột Sống Buổi Sáng (Morning Spine Lock)
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleMorningSim}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                isMorningLocked
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
              }`}
            >
              {isMorningLocked ? "Chế độ: ĐANG KHÓA TẬP (Mô phỏng < 8:00)" : "Mô phỏng thời gian < 8:00 sáng"}
            </button>
          </div>
        </div>

        {isMorningLocked ? (
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-950/40 border-2 border-amber-500/60 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-bounce" />
              <span>CẢNH BÁO Y KHOA: CỘT SỐNG ĐANG Ở TRẠNG THÁI NGUY HIỂM NHẤT</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
              {SAFETY_ENGINE.morningLock.reason}. 
              Cột sống vừa ngủ dậy tích tụ áp lực nước thẩm thấu rất cao, bao xơ bao quanh nhân nhầy rất giòn và dễ rách nếu thực hiện gập tải.
            </p>
            <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-500/40 text-xs font-semibold text-amber-200">
              👉 {SAFETY_ENGINE.morningLock.protocol}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Trạng thái an toàn:</span> Hiện tại đã đủ thời gian đi lại sinh hoạt nhẹ nhàng để áp suất thủy tĩnh của đĩa đệm trở về trạng thái bình thường. Bạn có thể thực hiện bài tập.
            </div>
          </div>
        )}
      </div>

      {/* LAYER 3: QUY TẮC RIR = 2 (REPETITIONS IN RESERVE) */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-5">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            Lớp Bảo Vệ 3: Giới Hạn Sức Bền Thần Kinh
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Quy Tắc Sống Còn: RIR = 2 (Repetitions In Reserve)
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-700/80 space-y-4">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-red-500/20 text-red-400 text-xs font-black uppercase tracking-wider border border-red-500/30">
              TUYỆT ĐỐI KHÔNG TẬP ĐẾN KIỆT SỨC
            </div>
            <span className="text-xs text-slate-400">Luôn để lại 2 cái dự phòng trong sức</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {SAFETY_ENGINE.rirRule.content}
          </p>

          {/* Visual Gauge of RIR 2 */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-emerald-400">Rep 1 đến 8: Vùng kiểm soát an toàn</span>
              <span className="text-red-400">Rep 9 & 10: DỪNG LẠI (Vùng tử huyệt đĩa đệm)</span>
            </div>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex p-0.5">
              <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: '80%' }} />
              <div className="h-full bg-red-600 rounded-r-full animate-pulse" style={{ width: '20%' }} />
            </div>
            <p className="text-[11px] text-slate-400 text-center italic">
              &quot;Khi cơ bắp run lên và cảm thấy chỉ còn làm được 2 cái nữa với phom chuẩn &rarr; DỪNG SET NGAY LẬP TỨC.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* PAIN LOG HISTORY */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-base sm:text-lg">
              Nhật Ký Cảm Giác Tập Luyện (Offline LocalStorage)
            </h3>
          </div>
          {painLogs.length > 0 && (
            <button
              onClick={clearLogs}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa lịch sử</span>
            </button>
          )}
        </div>

        {painLogs.length === 0 ? (
          <div className="p-8 text-center text-xs sm:text-sm text-slate-400 border border-dashed border-slate-800 rounded-2xl">
            Chưa có ghi nhận nào. Hãy nhấn các nút Đèn Giao Thông ở trên trong lúc tập để lưu trữ lịch sử cơn đau.
          </div>
        ) : (
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {painLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span>{log.type === 'green' ? '🟢' : log.type === 'yellow' ? '🟡' : '🔴'}</span>
                  <span className="font-semibold text-white">{log.note}</span>
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  {log.time} • {log.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
