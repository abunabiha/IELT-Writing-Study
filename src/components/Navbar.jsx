import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, Flame, Volume2, VolumeX, Settings, BookOpen, 
  Sparkles, ChevronDown, Menu, X, Check, ArrowRight,
  Layers, Compass, Zap
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
  setActiveTab
}) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'foundation' | 'drills' | 'simulation' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const xpInCurrentLevel = xp % 500;
  const xpForNextLevel = 500;
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpForNextLevel) * 100));

  // 3 Logical Categories to eliminate horizontal sprawl
  const categories = [
    {
      id: 'foundation',
      title: 'Pondasi Dasar',
      shortTitle: 'Dasar',
      badge: 'Pemula',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      activeColor: 'from-emerald-600 to-teal-600',
      accentBorder: 'border-emerald-500/50',
      glow: 'shadow-emerald-500/20',
      icon: '🟢',
      items: [
        {
          id: 'beginnerPuzzle',
          name: 'Puzzle Balok Kata',
          shortName: 'Puzzle Kata',
          icon: '🧩',
          badge: 'Level 0-5',
          desc: 'Belajar menyusun kalimat S-V-O dasar tanpa takut salah',
          highlight: true
        },
        {
          id: 'skillTree',
          name: 'Skill Tree Roadmap',
          shortName: 'Skill Tree',
          icon: '🗺️',
          badge: '5 Level',
          desc: 'Peta panduan bertahap dari Band 4.0 menuju 8.5+'
        }
      ]
    },
    {
      id: 'drills',
      title: 'Latihan Skill',
      shortTitle: 'Latihan',
      badge: 'Upgrade',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      activeColor: 'from-indigo-600 to-purple-600',
      accentBorder: 'border-indigo-500/50',
      glow: 'shadow-indigo-500/20',
      icon: '⚡',
      items: [
        {
          id: 'vocabMaster',
          name: 'Vocab Memory Vault',
          shortName: 'Vocab Vault',
          icon: '🧠',
          badge: 'Mnemonic',
          desc: 'Bank kosakata 8 topik IELTS dengan teknik memori anti-lupa'
        },
        {
          id: 'sentenceLab',
          name: 'Sentence Transformer',
          shortName: 'Transformer',
          icon: '⚡',
          badge: 'Grammar',
          desc: 'Ubah kalimat sederhana jadi klausa kompleks Band 8'
        },
        {
          id: 'collocations',
          name: 'Collocation Forge',
          shortName: 'Collocations',
          icon: '💎',
          badge: 'Kosakata',
          desc: 'Latih pasangan kata akademik & frasa idiomatis natural'
        }
      ]
    },
    {
      id: 'simulation',
      title: 'Simulasi Ujian',
      shortTitle: 'Simulasi',
      badge: 'Exam Test',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      activeColor: 'from-amber-600 to-orange-600',
      accentBorder: 'border-amber-500/50',
      glow: 'shadow-amber-500/20',
      icon: '✍️',
      items: [
        {
          id: 'task1Lab',
          name: 'Task 1: Grafik & Data',
          shortName: 'Task 1 Data',
          icon: '📊',
          badge: 'Academic',
          desc: 'Analisis grafik batang, garis, pie chart, & tabel data'
        },
        {
          id: 'gtLetterLab',
          name: 'Task 1: Surat (GT)',
          shortName: 'Task 1 Surat',
          icon: '✉️',
          badge: 'General',
          desc: 'Format surat formal, semi-formal, & santai dengan AI'
        },
        {
          id: 'task2Builder',
          name: 'Task 2: Arena Esai',
          shortName: 'Task 2 Esai',
          icon: '✍️',
          badge: 'Full Essay',
          desc: 'Simulasi menulis esai penuh dengan koreksi instan 4 kriteria'
        }
      ]
    }
  ];

  // Find active item and active category
  const allItems = categories.flatMap(c => c.items);
  const activeItem = allItems.find(i => i.id === activeTab) || allItems[0];
  const activeCategory = categories.find(c => c.items.some(i => i.id === activeTab)) || categories[0];

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelectTab = (tabId) => {
    soundFx.playClick();
    setActiveTab(tabId);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (catId) => {
    soundFx.playClick();
    setOpenDropdown(prev => prev === catId ? null : catId);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSelectTab('beginnerPuzzle')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  IELTS Writing
                </span>
                <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Band 8 Master
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium hidden xs:block">Interaktif • Ramah Pemula</p>
            </div>
          </div>

          {/* Categorized Desktop Navigation (Compact 3-Pill Dropdown System) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800/80">
            {categories.map((category) => {
              const isCatActive = category.items.some(i => i.id === activeTab);
              const isOpen = openDropdown === category.id;

              return (
                <div key={category.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(category.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isCatActive
                        ? `bg-gradient-to-r ${category.activeColor} text-white shadow-md ${category.glow} ring-1 ring-white/20`
                        : isOpen
                          ? 'bg-slate-800 text-white border border-slate-700'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.title}</span>
                    {isCatActive && (
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-md font-medium text-white/90 ml-0.5">
                        {activeItem.icon}
                      </span>
                    )}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu Popover */}
                  {isOpen && (
                    <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-2.5 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-800 mb-1">
                        <span>{category.title}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${category.badgeColor}`}>
                          {category.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {category.items.map((item) => {
                          const isSelected = activeTab === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelectTab(item.id)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group ${
                                isSelected
                                  ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                                  : 'hover:bg-slate-800/80 text-slate-300 hover:text-white border border-transparent'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 ${
                                isSelected ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                              }`}>
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold truncate group-hover:text-indigo-300 transition-colors">
                                    {item.name}
                                  </span>
                                  {isSelected ? (
                                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                                  ) : (
                                    <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700/50">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Module Switcher for Mobile / Tablet */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition active:scale-95"
            >
              <span>{activeItem.icon}</span>
              <span className="max-w-[110px] sm:max-w-[150px] truncate">{activeItem.shortName}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Right Controls: Stats, Audio, Rubric, Settings */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Daily Streak */}
            <div 
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold"
              title="Daily Streak - Latihan berturut-turut"
            >
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>{streak}d</span>
            </div>

            {/* Level & XP Widget */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <div className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[11px]">
                L{level}
              </div>
              <div className="text-left">
                <div className="flex items-center justify-between text-[10px] font-semibold gap-2">
                  <span className="text-slate-300 truncate max-w-[80px]">{levelTitle.split('(')[0]}</span>
                  <span className="text-indigo-400">{xp} XP</span>
                </div>
                <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden mt-0.5">
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

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Buka Menu Modul"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-rose-400" /> : <Menu className="w-4 h-4 text-slate-300" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Modal Drawer (Clean vertical categorized drawer - NO horizontal scrolling) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 overflow-y-auto p-4 animate-in fade-in duration-200">
          <div className="max-w-md mx-auto space-y-4 pb-12">
            
            {/* Header info in drawer */}
            <div className="flex items-center justify-between px-1 text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-indigo-400" /> Pilih Modul Pembelajaran
              </span>
              <span>Level {level} • {xp} XP</span>
            </div>

            {/* Categorized Vertical Sections */}
            {categories.map((category) => (
              <div key={category.id} className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{category.icon}</span>
                    <span className="text-xs font-extrabold text-slate-200 tracking-wide">{category.title}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${category.badgeColor}`}>
                    {category.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {category.items.map((item) => {
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectTab(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center gap-3 ${
                          isSelected
                            ? `bg-gradient-to-r ${category.activeColor} text-white shadow-md font-semibold`
                            : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/40'
                        }`}
                      >
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold truncate">{item.name}</span>
                            {isSelected ? (
                              <Check className="w-4 h-4 text-white shrink-0" />
                            ) : (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-700">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick close button */}
            <div className="pt-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition"
              >
                Tutup Menu
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
