import React, { useState } from 'react';
import { 
  GitFork, Volume2, Sparkles, Search, Layers, 
  CheckCircle2, ArrowRight, BookOpen, Award, 
  RotateCcw, ShieldCheck, Flame, Zap, Compass, Check,
  LayoutGrid, Network, CircleDot, Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCAB_MINDMAP_DATA } from '../../data/vocabMindMapData';
import { soundFx } from '../../utils/soundEffects';

export default function VocabMindMap3Lapis({ xp, onAddXp }) {
  const [selectedThemeId, setSelectedThemeId] = useState(VOCAB_MINDMAP_DATA[0].id);
  const [selectedClusterId, setSelectedClusterId] = useState(VOCAB_MINDMAP_DATA[0].clusters[0].id);
  const [selectedWordId, setSelectedWordId] = useState(VOCAB_MINDMAP_DATA[0].clusters[0].words[0].id);
  const [viewMode, setViewMode] = useState('bubbles'); // 'bubbles' (Bulatan Interaktif) | 'grid' (Kartu Kolom)
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecallMode, setActiveRecallMode] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [completedWords, setCompletedWords] = useState({});

  // Active theme, cluster & word with safe fallbacks
  const activeTheme = VOCAB_MINDMAP_DATA.find(t => t.id === selectedThemeId) || VOCAB_MINDMAP_DATA[0];
  const activeCluster = activeTheme?.clusters?.find(c => c.id === selectedClusterId) || activeTheme?.clusters?.[0] || { words: [] };
  const activeWord = activeCluster?.words?.find(w => w.id === selectedWordId) || activeCluster?.words?.[0] || activeTheme?.clusters?.[0]?.words?.[0];

  // Handle theme switch
  const handleSelectTheme = (theme) => {
    soundFx.playClick();
    setSelectedThemeId(theme.id);
    const firstCluster = theme.clusters?.[0];
    if (firstCluster) {
      setSelectedClusterId(firstCluster.id);
      if (firstCluster.words?.[0]) {
        setSelectedWordId(firstCluster.words[0].id);
      }
    }
    setQuizFeedback(null);
  };

  // Handle cluster switch
  const handleSelectCluster = (cluster) => {
    soundFx.playClick();
    setSelectedClusterId(cluster.id);
    if (cluster.words?.[0]) {
      setSelectedWordId(cluster.words[0].id);
    }
    setQuizFeedback(null);
  };

  // Handle word selection
  const handleSelectWord = (word) => {
    if (!word) return;
    soundFx.playClick();
    setSelectedWordId(word.id);
    setQuizFeedback(null);
    
    // Mark as explored
    if (!completedWords[word.id]) {
      setCompletedWords(prev => ({ ...prev, [word.id]: true }));
      if (onAddXp) onAddXp(15);
    }
  };

  // Audio Pronunciation via Web Speech API
  const handleSpeak = (text) => {
    if (!text) return;
    soundFx.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Active Recall Quiz Handler
  const handleQuizAnswer = (optionWord) => {
    if (!activeWord || !optionWord) return;
    if (optionWord.id === activeWord.id) {
      soundFx.playLevelUp();
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      setQuizFeedback({ correct: true, message: 'Hebat! Ingatan Anda sangat presisi.' });
      setQuizScore(prev => prev + 1);
      if (onAddXp) onAddXp(25);
    } else {
      soundFx.playClick();
      setQuizFeedback({ correct: false, message: `Kurang tepat. Jawaban yang benar adalah "${activeWord.word}".` });
    }
  };

  // Search Results if search query is populated
  const filteredWords = searchQuery.trim() === '' ? [] : VOCAB_MINDMAP_DATA.flatMap(t => 
    t.clusters.flatMap(c => 
      c.words.filter(w => 
        w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.meaningId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.band8Collocation.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(w => ({ ...w, themeTitle: t.titleId, clusterTitle: c.titleId, themeId: t.id, clusterId: c.id }))
    )
  );

  // Get 3 random options for quiz
  const allWordsInTheme = activeTheme?.clusters?.flatMap(c => c.words) || [];
  const quizDistractors = allWordsInTheme.filter(w => activeWord && w.id !== activeWord.id).slice(0, 3);
  const quizOptions = activeWord ? [activeWord, ...quizDistractors].sort(() => 0.5 - Math.random()) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 mb-3">
              <CircleDot className="w-3.5 h-3.5" />
              <span>Sistem Pemetaan Konsep Bulatan Interaktif 3 Lapis (Bubble Network)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Mind Map Kosakata IELTS Band 8+
            </h1>
            <p className="mt-2 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Jelajahi kosa kata akademik melalui gelembung melingkar interaktif: <strong>Bulatan Inti (Lapis 1)</strong> $\rightarrow$ <strong>Bulatan Satelit (Lapis 2)</strong> $\rightarrow$ <strong>Bulatan Kosa Kata (Lapis 3)</strong> lengkap dengan <strong>terjemahan Bahasa Indonesia pada setiap bulatan</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="bg-slate-950/80 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode('bubbles');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'bubbles' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <CircleDot className="w-3.5 h-3.5" />
                <span>Bulatan Interaktif</span>
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode('grid');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'grid' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Kartu Kolom</span>
              </button>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveRecallMode(!activeRecallMode);
                setQuizFeedback(null);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border ${
                activeRecallMode
                  ? 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-600/30'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>{activeRecallMode ? 'Tutup Kuis' : 'Mode Active Recall'}</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Layer Indicator Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
            <strong className="block font-bold">Lapis 1: Bulatan Inti</strong>
            <span className="text-[11px] text-slate-400">Tema Makro Utama</span>
          </div>
          <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-300">
            <strong className="block font-bold">Lapis 2: Bulatan Satelit</strong>
            <span className="text-[11px] text-slate-400">Klaster Konsep Sub-topik</span>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-300">
            <strong className="block font-bold">Lapis 3: Bulatan Kosa Kata</strong>
            <span className="text-[11px] text-slate-400">Kata, Kolokasi & Terjemahan</span>
          </div>
        </div>
      </div>

      {/* SEARCH BAR FOR INSTANT VOCAB DISCOVERY */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari kata atau arti di seluruh Mind Map (contoh: mitigate, obsolete, pajak, lingkungan)..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
          >
            Bersihkan
          </button>
        )}
      </div>

      {/* SEARCH RESULTS DROPDOWN (IF ACTIVE) */}
      {searchQuery && (
        <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Hasil Pencarian ({filteredWords.length} kata ditemukan):
          </div>
          {filteredWords.length === 0 ? (
            <p className="text-xs text-slate-500 italic">Tidak ada kata yang cocok dengan "{searchQuery}".</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {filteredWords.map(w => (
                <button
                  key={w.id}
                  onClick={() => {
                    setSelectedThemeId(w.themeId);
                    setSelectedClusterId(w.clusterId);
                    setSelectedWordId(w.id);
                    setSearchQuery('');
                  }}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 text-left transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-mono">{w.word}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300">
                      {w.clusterTitle}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 line-clamp-1 mt-1 font-semibold">🇮🇩 {w.meaningId}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAPIS 1: PEMILIH TOPIK MAKRO (BULATAN INTI DI ATAS) */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">1</span>
            Lapis 1: Pilih Bulatan Inti Makro
          </h3>
          <span className="text-xs text-slate-500">{VOCAB_MINDMAP_DATA.length} Domain Makro</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {VOCAB_MINDMAP_DATA.map(t => {
            const isSelected = selectedThemeId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleSelectTheme(t)}
                className={`p-4 rounded-3xl text-center border transition-all flex flex-col items-center justify-center relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-emerald-950 to-slate-900 border-emerald-500 shadow-xl shadow-emerald-950/60 ring-2 ring-emerald-500/40 scale-[1.03]'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:scale-[1.01]'
                }`}
              >
                {/* Visual Orb Ring */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2 transition-all ${
                  isSelected 
                    ? 'bg-emerald-500/30 border-2 border-emerald-400 shadow-inner shadow-emerald-400/50 animate-pulse' 
                    : 'bg-slate-800/80 border border-slate-700 group-hover:border-slate-600'
                }`}>
                  {t.icon}
                </div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {t.titleEn}
                </h4>
                <p className="text-[10px] text-emerald-400 font-medium line-clamp-1 mt-0.5">
                  🇮🇩 {t.titleId}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW MODE 1: TAMPILAN BULATAN-BULATAN INTERAKTIF (ORBITAL BUBBLE NETWORK) */}
      {/* ========================================================================= */}
      {viewMode === 'bubbles' && (
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Radial Glow */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Subheader Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                Bagan Gelembung Interaktif (Orbital Bubble Canvas)
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{activeTheme.icon}</span>
                <span>{activeTheme.titleEn}</span>
                <span className="text-xs text-slate-400 font-normal">({activeTheme.titleId})</span>
              </h3>
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Klik bulatan mana saja untuk meninjau kosa kata & arti</span>
            </span>
          </div>

          {/* ===================================================================== */}
          {/* VISUAL BUBBLE CANVAS: CENTRAL ORB -> SATELLITE ORBS -> WORD BUBBLES */}
          {/* ===================================================================== */}
          <div className="space-y-8">
            
            {/* 1. CENTRAL MACRO ORB (LAPIS 1 INTI) */}
            <div className="flex flex-col items-center">
              <div className="relative group cursor-pointer">
                {/* Pulsing Outer Aura */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse" />
                
                {/* Main Orb */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-emerald-700 via-teal-800 to-slate-900 border-2 border-emerald-300 flex flex-col items-center justify-center p-3 text-center shadow-2xl shadow-emerald-500/40">
                  <span className="text-3xl sm:text-4xl">{activeTheme.icon}</span>
                  <span className="text-xs font-black text-white leading-tight mt-1 line-clamp-1">{activeTheme.titleEn}</span>
                  <span className="text-[9px] text-emerald-200 font-medium line-clamp-1">🇮🇩 {activeTheme.titleId}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                Simpul Inti Lapis 1
              </span>
            </div>

            {/* SVG Glowing Dynamic Connectors */}
            <div className="flex justify-center -my-3">
              <svg width="240" height="40" viewBox="0 0 240 40" className="overflow-visible">
                <path d="M 120 0 C 120 20, 60 20, 60 40" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4,4" className="animate-pulse" />
                <path d="M 120 0 C 120 20, 180 20, 180 40" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="4,4" className="animate-pulse" />
              </svg>
            </div>

            {/* 2. SATELLITE CLUSTERS (LAPIS 2 SATELIT ORBS) */}
            <div>
              <div className="text-center mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  Lapis 2: Pilih Bulatan Klaster Konsep
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {activeTheme.clusters.map((cluster, cIdx) => {
                  const isClusterActive = selectedClusterId === cluster.id;
                  return (
                    <div 
                      key={cluster.id}
                      className={`rounded-3xl border p-5 transition-all relative ${
                        isClusterActive
                          ? 'bg-slate-950 border-indigo-500 shadow-2xl shadow-indigo-950/60 ring-2 ring-indigo-500/30'
                          : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Cluster Orbital Node Header */}
                      <button
                        onClick={() => handleSelectCluster(cluster)}
                        className="w-full flex items-center justify-between gap-3 text-left pb-4 border-b border-slate-800/80"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border transition-all ${
                            isClusterActive 
                              ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-500/40 ring-2 ring-indigo-400/50' 
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}>
                            {cluster.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold text-indigo-400 uppercase">Klaster #{cIdx + 1}</span>
                              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono">
                                {cluster.words.length} Bulatan
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-white">{cluster.titleEn}</h4>
                            <p className="text-xs text-slate-400 font-medium">🇮🇩 {cluster.titleId}</p>
                          </div>
                        </div>

                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold border transition ${
                          isClusterActive 
                            ? 'bg-indigo-600 text-white border-indigo-500' 
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {isClusterActive ? 'Aktif' : 'Buka'}
                        </span>
                      </button>

                      {/* 3. WORD BUBBLE NODES (LAPIS 3 BULATAN KOSA KATA) */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-amber-400 font-bold mb-2">
                          <span>Bulatan Kosa Kata Band 8+ & Arti Bahasa Indonesia:</span>
                        </div>

                        {/* Interactive Circular Bubbles Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {cluster.words.map((w) => {
                            const isWordActive = activeWord && activeWord.id === w.id;
                            return (
                              <button
                                key={w.id}
                                onClick={() => {
                                  handleSelectCluster(cluster);
                                  handleSelectWord(w);
                                }}
                                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between relative overflow-hidden group ${
                                  isWordActive
                                    ? 'bg-gradient-to-br from-amber-950/70 via-slate-950 to-slate-900 border-amber-400 shadow-xl shadow-amber-950/60 ring-2 ring-amber-400/50 scale-[1.03]'
                                    : 'bg-slate-900 border-slate-800/90 hover:border-slate-700 hover:bg-slate-850 hover:scale-[1.01]'
                                }`}
                              >
                                {/* Top Tag and Word */}
                                <div className="w-full">
                                  <div className="flex items-center justify-between gap-1 mb-1.5">
                                    <div className="flex items-center gap-1.5">
                                      {/* Mini Orb Indicator */}
                                      <span className={`w-2.5 h-2.5 rounded-full ${
                                        isWordActive ? 'bg-amber-400 animate-ping' : 'bg-slate-600'
                                      }`} />
                                      <span className="text-sm font-black text-white font-mono tracking-tight">
                                        {w.word}
                                      </span>
                                    </div>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                                      {w.pos}
                                    </span>
                                  </div>

                                  {/* PROMINENT INDONESIAN TRANSLATION (WAJIB DILIHAT LANGSUNG) */}
                                  <div className="p-2 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-emerald-300 font-medium leading-snug mb-2">
                                    🇮🇩 <strong className="text-emerald-400 font-semibold">Arti:</strong> {w.meaningId}
                                  </div>

                                  {/* Band 8 Collocation Preview */}
                                  <div className="text-[10px] text-amber-300 font-serif italic line-clamp-1">
                                    "{w.band8Collocation}"
                                  </div>
                                </div>

                                {/* Bottom Meta Bar */}
                                <div className="w-full mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                                  <span className="font-semibold text-slate-400">{w.bandTarget}</span>
                                  <div className="flex items-center gap-1">
                                    {completedWords[w.id] ? (
                                      <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                                        <Check className="w-3 h-3" /> Paham
                                      </span>
                                    ) : (
                                      <span className="text-slate-400">Klik Detail</span>
                                    )}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE 2: TAMPILAN KARTU KOLOM (GRID VIEW) */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeTheme.clusters.map(cluster => (
            <div key={cluster.id} className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{cluster.titleEn}</h4>
                  <p className="text-xs text-indigo-400 font-medium">🇮🇩 {cluster.titleId}</p>
                </div>
              </div>
              <div className="space-y-2">
                {cluster.words.map(w => (
                  <button
                    key={w.id}
                    onClick={() => {
                      handleSelectCluster(cluster);
                      handleSelectWord(w);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left transition flex items-start justify-between gap-3 ${
                      activeWord && activeWord.id === w.id
                        ? 'bg-amber-950/40 border-amber-400'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-mono">{w.word}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">{w.pos}</span>
                      </div>
                      <p className="text-xs text-emerald-300 mt-1 font-medium">🇮🇩 {w.meaningId}</p>
                      <p className="text-[11px] text-amber-300 font-mono mt-0.5">{w.band8Collocation}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap">{w.bandTarget}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* INTERACTIVE MEMORY DRAWER CARD (DETAIL KOSA KATA AKTIF) */}
      {/* ========================================================================= */}
      {activeWord && !activeRecallMode && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-serif">
                  {activeWord.word}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono">
                  {activeWord.pos}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeWord.phonetic}
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-medium mt-1">
                Target: {activeWord.bandTarget} • Klaster: {activeCluster.titleEn}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSpeak(activeWord.word)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold"
                title="Dengarkan Pelafalan Asli"
              >
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span>Dengar Kata</span>
              </button>
              <button
                onClick={() => handleSpeak(activeWord.sampleSentenceEn)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all text-xs font-semibold"
                title="Dengarkan Kalimat Lengkap"
              >
                🔊 Dengar Kalimat
              </button>
            </div>
          </div>

          {/* Meaning & Indonesian Translation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Definisi Bahasa Inggris:</span>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">{activeWord.meaningEn}</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/40">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">Arti Bahasa Indonesia:</span>
              <p className="text-sm text-emerald-200 leading-relaxed font-semibold italic">🇮🇩 {activeWord.meaningId}</p>
            </div>
          </div>

          {/* Band 8 Collocation Highlight */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/40">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Kolokasi Emas Band 8+ (Collocation)
            </span>
            <p className="text-base font-bold text-white font-mono">{activeWord.band8Collocation}</p>
            <p className="text-xs text-slate-400 mt-1">
              💡 Gunakan pasangan kata ini di Task 2 agar kalimat terdengar alami bagi penguji Cambridge.
            </p>
          </div>

          {/* Academic Synonyms */}
          {activeWord.academicSynonyms && (
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Sinonim Akademis C1 / C2:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeWord.academicSynonyms.map((syn, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-medium text-indigo-300 border border-slate-700">
                    {syn}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Model Sentence in Action */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              Contoh Kalimat Esai Model Band 8.5:
            </span>
            <p className="text-sm text-slate-100 font-serif leading-relaxed italic">
              "{activeWord.sampleSentenceEn}"
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed font-sans">
              🇮🇩 <strong className="text-slate-300">Terjemahan Indonesia:</strong> "{activeWord.sampleSentenceId}"
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTIVE RECALL QUIZ MODE */}
      {/* ========================================================================= */}
      {activeWord && activeRecallMode && (
        <div className="rounded-3xl bg-slate-900 border border-amber-500/40 p-6 md:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Active Recall Challenge</h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold">
              Skor: {quizScore}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs text-slate-400 uppercase block mb-1">Tebak Kata Berdasarkan Definisi:</span>
            <p className="text-sm font-semibold text-emerald-300">"{activeWord.meaningId}"</p>
            <p className="text-xs text-slate-400 mt-2">
              Kolokasi khasnya: <span className="text-amber-300 font-mono">"{activeWord.band8Collocation}"</span>
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs text-slate-400 uppercase block">Pilih Kata Band 8+ yang Tepat:</span>
            {quizOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => handleQuizAnswer(opt)}
                className="w-full p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-left transition-all flex items-center justify-between"
              >
                <span className="text-sm font-bold text-white font-mono">{opt.word}</span>
                <span className="text-xs text-slate-500 uppercase">{opt.pos}</span>
              </button>
            ))}
          </div>

          {quizFeedback && (
            <div className={`p-4 rounded-xl text-xs font-semibold ${
              quizFeedback.correct 
                ? 'bg-emerald-950/40 border border-emerald-500 text-emerald-200' 
                : 'bg-rose-950/40 border border-rose-500 text-rose-200'
            }`}>
              {quizFeedback.message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
