import React, { useState } from 'react';
import { 
  SPINE_101 
} from '../data/rehabData';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Play, 
  ShieldCheck, 
  ChevronRight, 
  Info, 
  Flame, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { playSoftBeep, playSuccessChime } from '../utils/audio';

export default function Module1Spine101({ onOpenVideo }) {
  const [activeDonutView, setActiveDonutView] = useState('flexion'); // 'flexion' | 'neutral'
  const [completedSkills, setCompletedSkills] = useState({});

  const toggleSkillCheck = (id) => {
    setCompletedSkills((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      if (updated[id]) {
        playSuccessChime();
      } else {
        playSoftBeep(440, 0.1);
      }
      return updated;
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            Module 1: Giáo Dục Cột Sống Y Khoa
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kiến Thức Vỡ Lòng & Nguyên Tắc Sống Còn
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Dành cho người mới bắt đầu 100%: Xóa bỏ hoàn toàn thuật ngữ khó hiểu bằng các ẩn dụ vật lý trực quan nhất.
          </p>
        </div>
      </div>

      {/* SECTION 1: MÔ HÌNH BÁNH DONUT NHÂN THẠCH */}
      <div className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              Ẩn Dụ Vật Lý Dễ Nhớ Nhất
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Mô Hình "Bánh Donut Nhân Thạch" Của Đĩa Đệm
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 self-start md:self-auto">
            <button
              onClick={() => {
                setActiveDonutView('flexion');
                playSoftBeep(330, 0.1);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeDonutView === 'flexion'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>Cúi gập lưng (Nguy hiểm)</span>
            </button>
            <button
              onClick={() => {
                setActiveDonutView('neutral');
                playSoftBeep(659, 0.1);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeDonutView === 'neutral'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Giữ trung tính (An toàn)</span>
            </button>
          </div>
        </div>

        {/* Donut Infographic Visual & Mechanical Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Medical Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group">
              <img
                src="/media/donut_model.webp"
                alt="Mô hình Bánh Donut Nhân Thạch so sánh với đĩa đệm cột sống"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-slate-300 border border-white/10">
                Ảnh Y Khoa 3D: L4-L5 vs Bánh Donut
              </div>
            </div>
          </div>

          {/* Dynamic Mechanics Card */}
          <div className="lg:col-span-5 space-y-4">
            {activeDonutView === 'flexion' ? (
              <div className="p-5 sm:p-6 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-bounce" />
                  <span>CƠ CHẾ TỔN THƯƠNG: UỐN CONG CỘT SỐNG</span>
                </div>
                <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                  Khi bạn cúi gập lưng uốn cong để nhặt vật hoặc ngồi gù lưng: 
                  <strong> Mép trước đốt sống bị ép nghiến lại</strong>, toàn bộ khối nhân thạch mọng nước (Nucleus Pulposus) bên trong bị dồn phụt ra mép sau, xé rách lớp bao xơ và chèn ép bạo lực vào rễ dây thần kinh tọa.
                </p>
                <div className="p-3 rounded-xl bg-red-900/30 border border-red-500/30 text-xs text-red-300">
                  ⚠️ Hậu quả: Cơn đau nhói buốt tức thì lan từ thắt lưng xuống mông, đùi và bắp chân.
                </div>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <span>CƠ CHẾ AN TOÀN: NẸP CỘT SỐNG TRUNG TÍNH</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                  Khi giữ cột sống bất động ở trạng thái trung tính: 
                  <strong> Áp lực nén được tản đều 360 độ</strong> trên toàn bộ bề mặt đĩa đệm. Khối cơ cốt lõi xung quanh đóng vai trò như một chiếc áo giáp nẹp chặt, nhân thạch không thể bị ép phụt ra ngoài.
                </p>
                <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-xs text-emerald-300">
                  🛡️ Lợi ích: Đĩa đệm được bảo vệ hoàn toàn, dây thần kinh tọa không bị kích thích.
                </div>
              </div>
            )}

            {/* Golden Rule Callout */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80">
              <div className="text-xs uppercase font-extrabold tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                Nguyên Tắc Vàng Của Bác Sĩ Stuart McGill:
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 italic">
                "{SPINE_101.donutModel.goldenRule}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: 3 KỸ NĂNG NỀN TẢNG SỐNG CÒN */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Học Kỹ Năng Trước Khi Tập Bất Kỳ Bài Nào
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
            3 Kỹ Năng Nền Tảng Sống Còn (Self-Check Từng Bước)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Phải thành thạo 3 kỹ năng này để tự bảo vệ đĩa đệm trong từng chuyển động sinh hoạt và tập luyện.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPINE_101.foundationSkills.map((skill, index) => {
            const isDone = !!completedSkills[skill.id];
            return (
              <div 
                key={skill.id}
                className={`rounded-3xl glass-panel border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isDone 
                    ? "border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)]" 
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Skill Image with Video Trigger Button */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800 group">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => onOpenVideo(skill.videoId, skill.videoTitle, skill.title)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 hover:scale-110 shadow-xl"
                      title="Xem video kỹ thuật chuẩn"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm">
                      Kỹ năng 0{index + 1}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {skill.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium mt-0.5">
                        {skill.sub}
                      </p>
                    </div>

                    {/* Metaphor Box */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                      <div className="font-bold text-amber-400 flex items-center gap-1">
                        <span>💡 Ẩn dụ cảm giác:</span>
                      </div>
                      <p className="text-slate-300 italic">
                        "{skill.physicalMetaphor}"
                      </p>
                    </div>

                    {/* Steps */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Các bước thực hiện:
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                        {skill.steps.map((st, i) => (
                          <li key={i} className="leading-relaxed">{st}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Self-check Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-2 text-xs">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-emerald-400" />
                        <span>Cách Tự Kiểm Tra:</span>
                      </div>
                      <div className="text-emerald-400 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span><strong>ĐÚNG:</strong> {skill.selfCheck.correct}</span>
                      </div>
                      <div className="text-rose-400 flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span><strong>SAI:</strong> {skill.selfCheck.wrong}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => toggleSkillCheck(skill.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isDone
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isDone ? "text-white" : "text-slate-400"}`} />
                    <span>{isDone ? "Đã thành thạo kỹ năng này ✓" : "Xác nhận tự kiểm tra thành công"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
