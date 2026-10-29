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
  ShieldAlert
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  isMorningLocked, 
  onTriggerEmergency,
  onToggleMorningSim
}) {
  const navItems = [
    { id: 'module1', label: 'Spine 101', icon: BookOpen, sub: 'Kiến thức cốt lõi' },
    { id: 'module2', label: 'Thư Viện Bài Tập', icon: Dumbbell, sub: '5 bài tập nền tảng' },
    { id: 'module3', label: 'Giám Sát An Toàn', icon: ShieldCheck, sub: 'Đèn giao thông & RIR' },
    { id: 'module4', label: 'Sinh Hoạt IT', icon: Laptop, sub: 'Log Roll & Pomodoro' },
    { id: 'module5', label: 'Bộ Đếm Trị Liệu', icon: Timer, sub: 'McGill Pyramid & Nghỉ' },
    { id: 'module6', label: 'Cân Nặng & Nước', icon: Scale, sub: '72kg -> 61kg & Calo' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Info */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-md flex items-center justify-center">
              <img src="/spine-icon.svg" alt="SpineRehab Icon" className="w-8 h-8 drop-shadow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
                  SpineRehab <span className="text-emerald-400">Pro</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  IT L4-L5 Rehab
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden xs:block">
                Hệ thống phục hồi đĩa đệm cho Kỹ sư IT 39 tuổi
              </p>
            </div>
          </div>

          {/* Quick Badges & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Morning Lock Status Pill */}
            <button
              onClick={onToggleMorningSim}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
                isMorningLocked 
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25 animate-pulse"
                  : "bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white"
              }`}
              title="Nhấn để bật/tắt thử nghiệm Khóa Cột Sống Buổi Sáng (< 8:00 AM)"
            >
              <Sun className={`w-3.5 h-3.5 ${isMorningLocked ? "text-amber-400" : "text-slate-400"}`} />
              <span className="hidden md:inline">
                {isMorningLocked ? "Khóa Sáng: Đang Chặn" : "Khóa Sáng: An Toàn"}
              </span>
              <span className="md:hidden">
                {isMorningLocked ? "Khóa Sáng" : "Khóa Sáng"}
              </span>
            </button>

            {/* Emergency Panic SOS Button */}
            <button
              onClick={() => onTriggerEmergency("Nhấn nút SOS Cấp Cứu Cột Sống")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all active:scale-95 flex-shrink-0"
              title="Nhấn nếu bị nhói buốt lưng đột ngột"
            >
              <ShieldAlert className="w-4 h-4 text-white animate-bounce" />
              <span>SOS Đau Lưng</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu (Horizontal Scrollable on Mobile) */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-800/50">
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
  );
}
