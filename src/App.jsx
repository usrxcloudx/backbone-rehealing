import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Module1Spine101 from './components/Module1Spine101';
import Module2ExerciseAtlas from './components/Module2ExerciseAtlas';
import Module3ActiveSafety from './components/Module3ActiveSafety';
import Module4DailyLifeIT from './components/Module4DailyLifeIT';
import Module5SmartTimers from './components/Module5SmartTimers';
import Module6NutritionWeight from './components/Module6NutritionWeight';
import VideoModal from './components/VideoModal';
import EmergencyModal from './components/EmergencyModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('module1');
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [emergencyReason, setEmergencyReason] = useState('');
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoId: '',
    title: '',
    exerciseName: ''
  });
  const [selectedTimerExercise, setSelectedTimerExercise] = useState(null);

  // Check real-world time or allow user simulation of morning spine lock
  const [simulatedMorningLock, setSimulatedMorningLock] = useState(false);

  const checkIsMorning = () => {
    const currentHour = new Date().getHours();
    return currentHour < 8; // Before 8:00 AM
  };

  const isMorningLocked = simulatedMorningLock || checkIsMorning();

  const handleOpenVideo = (videoId, title, exerciseName) => {
    setVideoModal({
      isOpen: true,
      videoId,
      title,
      exerciseName
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      videoId: '',
      title: '',
      exerciseName: ''
    });
  };

  const handleTriggerEmergency = (reason = '') => {
    setEmergencyReason(reason);
    setEmergencyModalOpen(true);
  };

  const handleStartTimerForExercise = (exercise) => {
    setSelectedTimerExercise(exercise);
    setActiveTab('module5');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMorningLocked={isMorningLocked}
        onTriggerEmergency={handleTriggerEmergency}
        onToggleMorningSim={() => setSimulatedMorningLock(!simulatedMorningLock)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-8 pb-24 md:pb-10">
        {activeTab === 'module1' && (
          <Module1Spine101 
            onOpenVideo={handleOpenVideo} 
          />
        )}

        {activeTab === 'module2' && (
          <Module2ExerciseAtlas 
            onOpenVideo={handleOpenVideo}
            onStartTimerForExercise={handleStartTimerForExercise}
          />
        )}

        {activeTab === 'module3' && (
          <Module3ActiveSafety 
            onTriggerEmergency={handleTriggerEmergency}
            isMorningLocked={isMorningLocked}
            onToggleMorningSim={() => setSimulatedMorningLock(!simulatedMorningLock)}
          />
        )}

        {activeTab === 'module4' && (
          <Module4DailyLifeIT 
            onOpenVideo={handleOpenVideo}
          />
        )}

        {activeTab === 'module5' && (
          <Module5SmartTimers 
            initialExercise={selectedTimerExercise}
          />
        )}

        {activeTab === 'module6' && (
          <Module6NutritionWeight />
        )}
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-slate-800/80 py-6 mb-16 md:mb-0 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SpineRehab Pro • Hệ Thống Phục Hồi Thoát Vị Đĩa Đệm L4-L5
          </div>
          <p className="max-w-2xl mx-auto text-slate-300/80">
            Phát triển theo nghiên cứu cơ sinh học lâm sàng của Giáo sư Stuart McGill và quy chuẩn y khoa phục hồi chức năng cột sống thắt lưng.
          </p>
          <div className="text-[11px] text-slate-400 pt-1">
            Dữ liệu lưu trữ Offline trên trình duyệt của bạn (Local Storage) • Hoàn toàn riêng tư
          </div>
        </div>
      </footer>

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoId={videoModal.videoId}
        title={videoModal.title}
        exerciseName={videoModal.exerciseName}
      />

      {/* Emergency Full-Screen Decompression Modal */}
      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        triggerReason={emergencyReason}
      />
    </div>
  );
}
