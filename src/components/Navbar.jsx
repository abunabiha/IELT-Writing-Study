import React from 'react';
import { 
  Trophy, Flame, Volume2, VolumeX, Settings, BookOpen, 
  Sparkles, Puzzle, Mail, BarChart2, Edit3 
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({
  xp,
  level,
  levelTitle,
  streak,
  soundMuted,
  onToggleSound,
  onOpenSettings,
  onOpenRubricGuide,
  activeTab,
  setActiveTab,
  learnerMode,
  setLearnerMode
}) {
  const xpInCurrentLevel = xp % 500;
  const xpForNextLevel = 500;
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpForNextLevel) * 100));

  const handleTabClick = (tab) => {
    soundFx.playClick();
    setActiveTab(tab);
  };

  const navItems = [
    { id: 'beginnerPuzzle', label: 'Puzzle Kata (Dasar)', icon: '🧩', highlight: true },
    { id: 'skillTree', label: 'Skill Tree', icon: '🗺️' },
    { id: 'sentenceLab', label: 'Transformer', icon: '⚡' },
    { id: 'collocations', label: 'Collocations', icon: '💎' },
    { id: 'task1Lab', label: 'Task 1 Data', icon: '📊' },
    { id: 'gtLetterLab', label: 'Task 1 Surat', icon: '✉️' },
    { id: 'task2Builder', label: 'Task 2 Esai', icon: '✍️' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleTabClick('beginnerPuzzle')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  IELTS Writing
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Level Dasar ➔ Band 8
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Interaktif • Ramah Pemula</p>
            </div>
          </div>

          {/* Navigation Pills (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800/80">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === item.id
                    ? item.highlight
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                    : item.highlight
                      ? 'text-emerald-300 bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Gamification Stats & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Daily Streak */}
            <div 
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold"
              title="Daily Streak"
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span className="hidden sm:inline">{streak} Hari</span>
              <span className="sm:hidden">{streak}d</span>
            </div>

            {/* Level & XP Widget */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                L{level}
              </div>
              <div className="text-left">
                <div className="flex items-center justify-between text-[10px] font-semibold gap-2">
                  <span className="text-slate-300 truncate max-w-[90px]">{levelTitle.split('(')[0]}</span>
                  <span className="text-indigo-400">{xp} XP</span>
                </div>
                <div className="w-20 h-1 bg-slate-700 rounded-full overflow-hidden mt-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Sound Mute Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                soundFx.playClick();
              }}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title={soundMuted ? 'Nyalakan Efek Suara' : 'Bisukan Suara'}
            >
              {soundMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* IELTS Rubric Guide */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenRubricGuide();
              }}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Panduan Rubrik Resmi IELTS"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
            </button>

            {/* Settings */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenSettings();
              }}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Pengaturan & Gemini API Key"
            >
              <Settings className="w-4 h-4 text-slate-400" />
            </button>

          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 scrollbar-none border-t border-slate-800/60">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-1 ${
                activeTab === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800/80 text-slate-400'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}
