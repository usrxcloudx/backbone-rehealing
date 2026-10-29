import React from 'react';
import { 
  BookOpen, 
  Dumbbell, 
  ShieldCheck, 
  Laptop, 
  Timer, 
  Scale, 
  AlertTriangle,
  Sun,
  ShieldAlert,
  Flame,
  Footprints
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  isMorningLocked, 
  onTriggerEmergency,
  onToggleMorningSim
}) {
  const navItems = [
    { id: 'module1', label: 'Spine 101', mobileLabel: 'Cột Sống', icon: BookOpen, sub: 'Kiến thức cốt lõi' },
    { id: 'module2', label: 'Thư Viện Bài Tập', mobileLabel: 'Bài Tập', icon: Dumbbell, sub: '3 Cấp độ tiến trình' },
    { id: 'module3', label: 'Giám Sát An Toàn', mobileLabel: 'An Toàn', icon: ShieldCheck, sub: 'Đèn giao thông & RIR' },
    { id: 'module4', label: 'Sinh Hoạt IT', mobileLabel: 'Thói Quen', icon: Laptop, sub: 'Log Roll & Pomodoro' },
    { id: 'module5', label: 'Bộ Đếm Trị Liệu', mobileLabel: 'Bộ Đếm', icon: Timer, sub: 'McGill & Nghỉ' },
    { id: 'module6', label: 'Cân Nặng & Đi Bộ', mobileLabel: 'Giảm Cân', icon: Scale, sub: '72kg -> 61kg & Đi bộ' },
  ];

  return (
    <>
      {/* TOP HEADER (Desktop & Mobile Header) */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            {/* Brand Info */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
                <img src="/spine-icon.svg" alt="SpineRehab Icon" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-extrabold text-sm sm:text-lg tracking-tight text-white flex items-center gap-1">
                    SpineRehab <span className="text-emerald-400">Pro</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    L4-L5
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 hidden xs:block">
                  Phục hồi đĩa đệm cho Kỹ sư IT 39 tuổi
                </p>
              </div>
            </div>

            {/* Quick Badges & Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Morning Lock Status Pill */}
              <button
                onClick={onToggleMorningSim}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold border transition-all ${
                  isMorningLocked 
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25 animate-pulse"
                    : "bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white"
                }`}
                title="Nhấn để bật/tắt thử nghiệm Khóa Cột Sống Buổi Sáng (< 8:00 AM)"
              >
                <Sun className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isMorningLocked ? "text-amber-400" : "text-slate-400"}`} />
                <span className="hidden sm:inline">
                  {isMorningLocked ? "Khóa Sáng: Đang Chặn" : "Khóa Sáng: Mở"}
                </span>
                <span className="sm:hidden">
                  {isMorningLocked ? "Khóa Sáng" : "Bình Thường"}
                </span>
              </button>

              {/* Emergency Panic SOS Button */}
              <button
                onClick={() => onTriggerEmergency("Nhấn nút SOS Cấp Cứu Cột Sống")}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all active:scale-95 flex-shrink-0"
                title="Nhấn nếu bị nhói buốt lưng đột ngột"
              >
                <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-bounce" />
                <span>SOS</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation Menu (Chỉ hiển thị trên Desktop / Tablet: md:flex) */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-800/50">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR (Cố định ở đáy màn hình điện thoại cho thao tác ngón cái) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-2 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all ${
                  isActive 
                    ? "text-emerald-400" 
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                <div className={`p-1 rounded-lg transition-all ${
                  isActive ? "bg-emerald-500/20 scale-110" : ""
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] mt-0.5 font-medium leading-none ${
                  isActive ? "font-bold text-emerald-400" : "text-slate-400"
                }`}>
                  {item.mobileLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
