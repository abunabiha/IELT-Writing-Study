import React, { useState, useRef, useEffect } from 'react';
import { 
  Puzzle, Sparkles, CheckCircle2, RotateCcw, ArrowRight, 
  BookOpen, Star, Volume2, Layers, Check, Keyboard, 
  RefreshCw, Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PUZZLE_BAND_TIERS, BEGINNER_PUZZLE_LEVELS, BEGINNER_VOCAB_UPGRADES } from '../../data/beginnerLessonsData';
import { getPuzzleWordByWordData } from '../../data/puzzleWordByWordData';
import { soundFx } from '../../utils/soundEffects';

export default function BeginnerSentencePuzzle({ xp, onAddXp }) {
  // Persistent selectedBand
  const [selectedBand, setSelectedBand] = useState(() => {
    try {
      return localStorage.getItem('ielts_puzzle_band') || 'band5';
    } catch (e) {
      return 'band5';
    }
  });

  // Persistent level index for the active band
  const [levelIdx, setLevelIdx] = useState(() => {
    try {
      const savedBand = localStorage.getItem('ielts_puzzle_band') || 'band5';
      const savedIdx = localStorage.getItem(`ielts_puzzle_level_${savedBand}`);
      return savedIdx ? Math.min(29, Math.max(0, parseInt(savedIdx, 10))) : 0;
    } catch (e) {
      return 0;
    }
  });

  const [placedBlockIds, setPlacedBlockIds] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPowerUp, setShowPowerUp] = useState(false);
  const [showVocabDrawer, setShowVocabDrawer] = useState(false);

  // Persistent completed puzzle levels (keys: level IDs)
  const [completedLevels, setCompletedLevels] = useState(() => {
    try {
      const saved = localStorage.getItem('ielts_puzzle_completed');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Active Stage: 'puzzle' (Susun Balok) | 'typing' (Ketik Kinetik)
  const [activeStage, setActiveStage] = useState('puzzle');

  // Typing State
  const [typedText, setTypedText] = useState('');
  const [typingTargetMode, setTypingTargetMode] = useState('standard'); // 'standard' | 'powerup'
  const [typingStartTime, setTypingStartTime] = useState(null);
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  // Persistent completed typing levels (keys: level IDs)
  const [completedTypingLevels, setCompletedTypingLevels] = useState(() => {
    try {
      const saved = localStorage.getItem('ielts_puzzle_typed_completed');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const typingInputRef = useRef(null);

  // Sync selectedBand to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ielts_puzzle_band', selectedBand);
    } catch (e) {}
  }, [selectedBand]);

  // Sync level index for active band to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`ielts_puzzle_level_${selectedBand}`, String(levelIdx));
    } catch (e) {}
  }, [selectedBand, levelIdx]);

  // Sync completedLevels to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ielts_puzzle_completed', JSON.stringify(completedLevels));
    } catch (e) {}
  }, [completedLevels]);

  // Sync completedTypingLevels to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ielts_puzzle_typed_completed', JSON.stringify(completedTypingLevels));
    } catch (e) {}
  }, [completedTypingLevels]);

  // Get active tier and active puzzles
  const activeTier = PUZZLE_BAND_TIERS.find(t => t.id === selectedBand) || PUZZLE_BAND_TIERS[0];
  const bandPuzzles = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === selectedBand);
  const currentLevel = bandPuzzles[levelIdx] || bandPuzzles[0] || BEGINNER_PUZZLE_LEVELS[0];

  // Word-by-word enriched data (translation semakna + word-by-word mapping)
  const wordByWordData = getPuzzleWordByWordData(currentLevel);

  // Target sentence for typing
  const currentTargetSentence = typingTargetMode === 'powerup' && currentLevel.powerUpBand8?.upgraded
    ? currentLevel.powerUpBand8.upgraded
    : currentLevel.completedEnglish;

  // Reset typing state whenever level or band changes
  const resetTypingState = () => {
    setTypedText('');
    setTypingStartTime(null);
    setIsTypingCompleted(false);
  };

  const handleSelectBand = (bandId) => {
    soundFx.playClick();
    setSelectedBand(bandId);
    
    // Restore the user's progress for this band tier instead of always resetting to 0
    try {
      const savedIdx = localStorage.getItem(`ielts_puzzle_level_${bandId}`);
      setLevelIdx(savedIdx ? Math.min(29, Math.max(0, parseInt(savedIdx, 10))) : 0);
    } catch (e) {
      setLevelIdx(0);
    }

    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
    setActiveStage('puzzle');
    resetTypingState();
  };

  const handleSelectBlock = (blockId) => {
    soundFx.playClick();
    if (placedBlockIds.includes(blockId)) return;
    const nextPlaced = [...placedBlockIds, blockId];
    setPlacedBlockIds(nextPlaced);

    // If all blocks are placed, check order
    if (nextPlaced.length === currentLevel.blocks.length) {
      const isCorrect = nextPlaced.every((id, idx) => id === currentLevel.correctOrder[idx]);
      if (isCorrect) {
        soundFx.playCorrect();
        setIsSuccess(true);
        setCompletedLevels(prev => ({ ...prev, [currentLevel.id]: true }));
        if (onAddXp) onAddXp(60);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } else {
        soundFx.playWrong();
      }
    }
  };

  const handleRemoveBlock = (blockId) => {
    soundFx.playClick();
    if (isSuccess) return;
    setPlacedBlockIds(placedBlockIds.filter(id => id !== blockId));
  };

  const handleReset = () => {
    soundFx.playClick();
    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
    resetTypingState();
  };

  const handleNextLevel = () => {
    soundFx.playClick();
    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
    setActiveStage('puzzle');
    resetTypingState();

    if (levelIdx + 1 < bandPuzzles.length) {
      setLevelIdx(prev => prev + 1);
    } else {
      // Advance to next band tier if available
      const tierIndex = PUZZLE_BAND_TIERS.findIndex(t => t.id === selectedBand);
      if (tierIndex + 1 < PUZZLE_BAND_TIERS.length) {
        const nextBandId = PUZZLE_BAND_TIERS[tierIndex + 1].id;
        setSelectedBand(nextBandId);
        const savedIdx = localStorage.getItem(`ielts_puzzle_level_${nextBandId}`);
        setLevelIdx(savedIdx ? Math.min(29, Math.max(0, parseInt(savedIdx, 10))) : 0);
      } else {
        setLevelIdx(0);
      }
    }
  };

  const handleJumpLevel = (idx) => {
    soundFx.playClick();
    setLevelIdx(idx);
    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
    setActiveStage('puzzle');
    resetTypingState();
  };

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

  // Switch to typing stage
  const handleOpenTypingStage = (mode = 'standard') => {
    soundFx.playClick();
    setTypingTargetMode(mode);
    setActiveStage('typing');
    resetTypingState();
    setTimeout(() => {
      if (typingInputRef.current) {
        typingInputRef.current.focus();
      }
    }, 150);
  };

  // Handle typing input change
  const handleTypingChange = (e) => {
    const val = e.target.value;
    if (!typingStartTime && val.length > 0) {
      setTypingStartTime(Date.now());
    }
    setTypedText(val);

    // Play subtle typing sound
    soundFx.playClick();

    // Check completion
    if (val === currentTargetSentence && !isTypingCompleted) {
      setIsTypingCompleted(true);
      soundFx.playLevelUp();
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      setCompletedTypingLevels(prev => ({ ...prev, [currentLevel.id]: true }));
      if (onAddXp) onAddXp(40);
    }
  };

  // Calculate live typing metrics
  const typingTargetLength = currentTargetSentence.length;
  const typedLength = typedText.length;
  let correctCharsCount = 0;
  for (let i = 0; i < typedLength; i++) {
    if (typedText[i] === currentTargetSentence[i]) {
      correctCharsCount++;
    }
  }
  const accuracy = typedLength > 0 ? Math.round((correctCharsCount / typedLength) * 100) : 100;
  
  // WPM
  const timeElapsedMin = typingStartTime ? (Date.now() - typingStartTime) / 60000 : 0;
  const wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
  const wpm = timeElapsedMin > 0 ? Math.round(wordsTyped / timeElapsedMin) : 0;

  const isComplete = placedBlockIds.length === currentLevel.blocks.length;
  const isCorrectOrder = isComplete && placedBlockIds.every((id, idx) => id === currentLevel.correctOrder[idx]);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/95 border border-slate-800 p-5 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Puzzle className="w-5 h-5" />
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Puzzle Balok Kata & Arena Ketik Kinetik</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold border border-indigo-500/30">
                120 Latihan (30 / Band)
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Susun balok kata lalu ketik ulang langsung melalui keyboard untuk memperkuat memori motorik tangan (*kinesthetic memory*), dilengkapi bedah kosa kata kata-demi-kata (*word by word*).
          </p>
        </div>

        {/* Action Button: Vocab Drawer */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              setShowVocabDrawer(!showVocabDrawer);
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold flex items-center gap-2 border border-slate-700 shadow transition"
          >
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Kamus Upgrade Kosakata</span>
          </button>
        </div>
      </div>

      {/* 4 BAND TIER SELECTOR TABS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {PUZZLE_BAND_TIERS.map(tier => {
          const isSelected = selectedBand === tier.id;
          const completedCount = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === tier.id && completedLevels[l.id]).length;

          return (
            <button
              key={tier.id}
              onClick={() => handleSelectBand(tier.id)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? `bg-slate-900 ${tier.border} shadow-lg ring-1 ring-indigo-500/50`
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900/90 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl">{tier.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {completedCount}/30
                </span>
              </div>
              <h4 className={`text-xs sm:text-sm font-bold block ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {tier.label.split('(')[0]}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {tier.label.split('(')[1]?.replace(')', '') || tier.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Vocabulary Drawer (Modal/Panel) */}
      {showVocabDrawer && (
        <div className="p-5 rounded-3xl bg-slate-900 border border-indigo-500/30 space-y-3 animate-fadeIn shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Kamus Upgrade Kosakata Dasar ➔ Band 8</span>
            </div>
            <button
              onClick={() => setShowVocabDrawer(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕ Tutup
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {BEGINNER_VOCAB_UPGRADES.map((voc, vIdx) => (
              <div key={vIdx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-rose-400 font-bold">{voc.basicWord} ({voc.basicMeaning})</span>
                  <span className="text-slate-500">➔</span>
                  <span className="text-emerald-400 font-bold">{voc.band8}</span>
                </div>
                <div className="text-slate-300 text-[11px] italic pt-1 border-t border-slate-900">
                  Contoh Band 8: "{voc.band8Example}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Puzzle Playground Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Top Header: Topic, Level Picker & Stage Selector */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
                {activeTier.label.split('(')[0]}
              </span>
              <span className="text-xs text-slate-400">
                Topik: <b className="text-slate-200">{currentLevel.topic}</b>
              </span>
            </div>

            {/* Quick Level Selector (1 - 30) */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Latihan:</span>
              <select
                value={levelIdx}
                onChange={(e) => handleJumpLevel(Number(e.target.value))}
                className="bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-1.5 text-xs font-mono font-bold focus:outline-none focus:border-indigo-500"
              >
                {bandPuzzles.map((_, i) => (
                  <option key={i} value={i}>
                    Contoh {i + 1} / 30 {completedLevels[`${currentLevel.bandTier}-${i + 1}`] ? '✓' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Level Numbers Pills Bar (Scrollable) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            {bandPuzzles.map((p, i) => {
              const isCurr = i === levelIdx;
              const isDone = completedLevels[p.id];
              const isTyped = completedTypingLevels[p.id];
              return (
                <button
                  key={p.id}
                  onClick={() => handleJumpLevel(i)}
                  className={`w-8 h-8 rounded-xl flex-shrink-0 text-xs font-bold font-mono transition-all flex items-center justify-center relative ${
                    isCurr
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md scale-105'
                      : isDone
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                  title={`Contoh ${i + 1}: ${p.title}`}
                >
                  <span>{i + 1}</span>
                  {isTyped && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full ring-2 ring-slate-900" title="Ketik Selesai" />
                  )}
                </button>
              );
            })}
          </div>

          {/* STAGE SELECTOR (1. Susun Balok vs 2. Ketik Kinetik) */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-950 border border-slate-800 rounded-2xl">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveStage('puzzle');
              }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                activeStage === 'puzzle'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Puzzle className="w-4 h-4" />
              <span>1. Susun Balok Kata</span>
              {isSuccess && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-1" />}
            </button>

            <button
              onClick={() => handleOpenTypingStage('standard')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                activeStage === 'typing'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Keyboard className="w-4 h-4" />
              <span>2. Ketik Kinetik di Tangan</span>
              {isTypingCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 ml-1" />}
            </button>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white pt-1">
            {currentLevel.title}
          </h3>

          {/* Target Goal (Bilingual) */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 space-y-1.5">
            <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Target Kalimat yang Ingin Disusun:</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-slate-100 italic">
              "{currentLevel.indonesianGoal}"
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            💡 <b>Tips & Rumus Tata Bahasa:</b> {currentLevel.explanation}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STAGE 1: PUZZLE ASSEMBLY (SUSUN BALOK KATA) */}
        {/* ========================================================================= */}
        {activeStage === 'puzzle' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Puzzle Assembly Slot (Area Penyusunan Balok) */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Area Susunan Kalimat Anda (Klik balok untuk mengeluarkannya):</span>
                <button
                  onClick={handleReset}
                  className="text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition px-2.5 py-1 rounded-lg hover:bg-slate-800"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Susunan</span>
                </button>
              </div>

              <div className="min-h-24 p-4 sm:p-5 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-800 flex flex-wrap items-center gap-3">
                {placedBlockIds.length === 0 && (
                  <span className="text-xs sm:text-sm text-slate-500 italic">
                    Klik balok-balok kata di bawah secara berurutan untuk menyusun kalimat...
                  </span>
                )}

                {placedBlockIds.map((id) => {
                  const blk = currentLevel.blocks.find(b => b.id === id);
                  if (!blk) return null;
                  return (
                    <button
                      key={id}
                      onClick={() => handleRemoveBlock(id)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-95 transition-all flex flex-col items-start border border-indigo-400/40 active:scale-90"
                    >
                      <span className="text-white text-sm">{blk.text}</span>
                      <span className="text-[10px] text-indigo-200 font-normal mt-0.5">{blk.translation}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Available Word Blocks to Pick */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pilihan Balok Kata Tersedia:
              </div>

              <div className="flex flex-wrap gap-3">
                {currentLevel.blocks.map((blk) => {
                  const isUsed = placedBlockIds.includes(blk.id);
                  return (
                    <button
                      key={blk.id}
                      disabled={isUsed || isSuccess}
                      onClick={() => handleSelectBlock(blk.id)}
                      className={`px-4 py-3 rounded-2xl border text-left transition-all flex flex-col items-start ${
                        isUsed
                          ? 'bg-slate-950 border-slate-900 text-slate-700 cursor-not-allowed opacity-25'
                          : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-indigo-400 hover:bg-slate-800 shadow-md active:scale-95'
                      }`}
                    >
                      <span className="font-bold text-xs sm:text-sm text-slate-100">{blk.text}</span>
                      <span className="text-[11px] text-slate-400 mt-0.5">{blk.translation}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback & Result */}
            {isComplete && (
              <div className="space-y-4 pt-2 border-t border-slate-800 animate-fadeIn">
                {isCorrectOrder ? (
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>Hebat! Susunan Kalimat Anda 100% Tepat! (+60 XP)</span>
                      </div>
                      <button
                        onClick={() => handleSpeak(currentLevel.completedEnglish)}
                        className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition flex items-center gap-1.5 text-xs font-bold"
                        title="Dengarkan Pengucapan Asli"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Audio</span>
                      </button>
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 font-medium italic">
                      "{currentLevel.completedEnglish}"
                    </p>

                    {/* Prominent CTA to Stage 2: Kinesthetic Typing */}
                    <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Keyboard className="w-4 h-4 text-cyan-400" />
                          <span>Lanjutkan ke Tahap 2: Mengetik Kinetik</span>
                        </span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Ketik kalimat yang baru saja Anda susun ke keyboard untuk mengunci pola sintaksis ke memori motorik tangan!
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenTypingStage('standard')}
                          className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-cyan-600/30 transition whitespace-nowrap"
                        >
                          <Keyboard className="w-3.5 h-3.5" />
                          <span>Ketik Kalimat Standar</span>
                        </button>
                        {currentLevel.powerUpBand8 && (
                          <button
                            onClick={() => handleOpenTypingStage('powerup')}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition whitespace-nowrap"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                            <span>Tantangan Mahir Band 8+</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                    <div className="text-rose-300 font-bold text-sm">
                      Urutan masih belum pas. Coba perhatikan tips di atas dan klik balok untuk menukar posisinya.
                    </div>
                  </div>
                )}

                {/* BAND 8 POWER-UP CARD DILENGKAPI BEDAH WORD-BY-WORD */}
                {isCorrectOrder && currentLevel.powerUpBand8 && (
                  <div className="space-y-3">
                    {!showPowerUp ? (
                      <button
                        onClick={() => {
                          soundFx.playStreak();
                          setShowPowerUp(true);
                          confetti({ particleCount: 50, spread: 50 });
                        }}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:opacity-95 text-white font-extrabold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition"
                      >
                        <Sparkles className="w-4 h-4 text-amber-200 fill-amber-200" />
                        <span>Lihat Cara Meng-upgrade Kalimat Ini Menjadi Band 8.5+! 🚀</span>
                      </button>
                    ) : (
                      <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-amber-500/40 space-y-4 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                            {currentLevel.bandLabel}
                          </span>
                          <span className="text-slate-500">➔</span>
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                            Tantangan Mahir Band 8.5+ (Scholastic Academic Diction)
                          </span>
                        </div>

                        {/* Sentences Comparison */}
                        <div className="space-y-2 pt-1">
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-bold text-slate-400 block uppercase">Kalimat Standar Asli:</span>
                            <div className="text-xs text-slate-300 mt-0.5">
                              "{currentLevel.powerUpBand8.original}"
                            </div>
                            <div className="text-[11px] text-slate-400 italic mt-0.5">
                              🇮🇩 "{currentLevel.indonesianGoal}"
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
                            <div className="flex items-center justify-between text-[10px] font-bold text-amber-400 uppercase">
                              <span>Versi Mahir Akademik (Band 8.5+):</span>
                              <button
                                onClick={() => handleSpeak(currentLevel.powerUpBand8.upgraded)}
                                className="p-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 flex items-center gap-1 text-[10px]"
                                title="Dengarkan Pengucapan Band 8"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                                <span>Audio</span>
                              </button>
                            </div>
                            <div className="text-sm sm:text-base font-bold text-amber-200 mt-1">
                              "{currentLevel.powerUpBand8.upgraded}"
                            </div>
                            <div className="text-xs text-amber-300/90 font-medium italic mt-1.5 pt-1.5 border-t border-amber-900/40">
                              🇮🇩 <strong>Arti Semakna:</strong> "{wordByWordData.translation}"
                            </div>
                          </div>
                        </div>

                        {/* BEDAH KOSAKATA WORD-BY-WORD & PADANAN SEMAKNA */}
                        {wordByWordData.wordByWord && wordByWordData.wordByWord.length > 0 && (
                          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Bedah Kosakata Baru & Padanan Semakna (Word-by-Word)</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {wordByWordData.wordByWord.length} Pasangan Kata
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              Pelajari kata baru berikut yang menggantikan kata standar dengan makna yang setara untuk memperkaya kosakata akademik Anda:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                              {wordByWordData.wordByWord.map((wbw, idx) => (
                                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 hover:border-amber-500/30 transition">
                                  <div className="flex items-center justify-between text-[11px]">
                                    <span className="text-rose-300 font-medium">{wbw.standard}</span>
                                    <span className="text-slate-500">➔</span>
                                    <span className="font-bold text-amber-300 font-mono">{wbw.upgraded}</span>
                                  </div>
                                  <div className="text-emerald-400 text-xs font-semibold">
                                    🇮🇩 {wbw.meaning}
                                  </div>
                                  {wbw.note && (
                                    <div className="text-[10px] text-slate-400 italic pt-0.5">
                                      💡 {wbw.note}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                          💡 <b>Mengapa ini dinilai Band 8.5+?</b> {currentLevel.powerUpBand8.explanation}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={() => handleOpenTypingStage('powerup')}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition"
                          >
                            <Keyboard className="w-3.5 h-3.5" />
                            <span>Tantang Diri Ketik Kalimat Mahir Ini di Tahap 2 ➔</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Next Level Controls */}
            {isSuccess && (
              <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                <button
                  onClick={() => handleOpenTypingStage('standard')}
                  className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 transition"
                >
                  <Keyboard className="w-4 h-4" />
                  <span>Ketik Kalimat Ini</span>
                </button>

                <button
                  onClick={handleNextLevel}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition"
                >
                  <span>Latihan Selanjutnya (Contoh {((levelIdx + 1) % 30) + 1})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 2: KINESTHETIC MUSCLE MEMORY TYPING (MENGETIK LANGSUNG DI TANGAN) */}
        {/* ========================================================================= */}
        {activeStage === 'typing' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Typing Mode Selector (Standard vs Band 8 Upgrade) */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Pilih Target Ketik:</span>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setTypingTargetMode('standard');
                    resetTypingState();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    typingTargetMode === 'standard'
                      ? 'bg-cyan-600 text-white shadow'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Kalimat Susunan Standar
                </button>
                {currentLevel.powerUpBand8 && (
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setTypingTargetMode('powerup');
                      resetTypingState();
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      typingTargetMode === 'powerup'
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Tantangan Mahir Band 8.5+</span>
                  </button>
                )}
              </div>

              {/* Live Typing Metrics */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="text-slate-400">
                  Akurasi: <span className={`font-bold ${accuracy >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>{accuracy}%</span>
                </div>
                <div className="text-slate-400">
                  Kecepatan: <span className="font-bold text-indigo-400">{wpm} WPM</span>
                </div>
                <div className="text-slate-400">
                  Karakter: <span className="font-bold text-white">{typedLength}/{typingTargetLength}</span>
                </div>
              </div>
            </div>

            {/* Target Sentence Display with Live Visual Highlight */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Keyboard className="w-3.5 h-3.5" />
                  Target Ketik Kinetik:
                </span>
                <button
                  onClick={() => handleSpeak(currentTargetSentence)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center gap-1 text-xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dengarkan</span>
                </button>
              </div>

              {/* Character by character render */}
              <div className="text-base sm:text-lg font-mono leading-relaxed tracking-wide select-none p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                {currentTargetSentence.split('').map((char, index) => {
                  let charClass = 'text-slate-500';
                  const isCurrent = index === typedLength;

                  if (index < typedLength) {
                    if (typedText[index] === char) {
                      charClass = 'text-emerald-400 font-bold';
                    } else {
                      charClass = 'text-rose-400 bg-rose-950/80 underline font-bold';
                    }
                  }

                  return (
                    <span 
                      key={index} 
                      className={`${charClass} ${isCurrent ? 'border-b-2 border-cyan-400 bg-cyan-500/20 animate-pulse' : ''}`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>

              {/* Bilingual Meaning: Displays full contextual meaning */}
              <div className="space-y-1 pt-1">
                {typingTargetMode === 'powerup' ? (
                  <>
                    <div className="text-xs text-amber-300 font-semibold italic">
                      🇮🇩 <strong>Arti Semakna (Tantangan Mahir):</strong> "{wordByWordData.translation}"
                    </div>
                    <div className="text-[11px] text-slate-400 italic">
                      (Semakna dengan kalimat standar: "{currentLevel.indonesianGoal}")
                    </div>
                  </>
                ) : (
                  <div className="text-xs text-slate-300 italic">
                    🇮🇩 <strong>Arti Kalimat:</strong> "{currentLevel.indonesianGoal}"
                  </div>
                )}
              </div>
            </div>

            {/* BEDAH KOSAKATA WORD-BY-WORD SAAT MENGETIK */}
            {typingTargetMode === 'powerup' && wordByWordData.wordByWord && wordByWordData.wordByWord.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Panduan Kosakata Baru Word-by-Word (Sembari Mengetik):</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {wordByWordData.wordByWord.length} Kata Baru
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {wordByWordData.wordByWord.map((wbw, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{wbw.standard}</span>
                        <span className="text-slate-500">➔</span>
                        <span className="font-bold text-amber-300 font-mono">{wbw.upgraded}</span>
                      </div>
                      <div className="text-emerald-400 text-xs font-semibold">
                        🇮🇩 {wbw.meaning}
                      </div>
                      {wbw.note && (
                        <div className="text-[10px] text-slate-400 italic">
                          💡 {wbw.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In standard typing mode, also show blocks word-by-word reference */}
            {typingTargetMode === 'standard' && currentLevel.blocks && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Rincian Kata per Kata Kalimat Standar:</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {currentLevel.blocks.map(b => (
                    <div key={b.id} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                      <div className="font-bold text-slate-200">{b.text}</div>
                      <div className="text-emerald-400 text-[10px] mt-0.5">🇮🇩 {b.translation}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Typing Input Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="text-slate-400 font-bold">
                  Ketik Kalimat Di Sini (Sistem akan memverifikasi secara langsung):
                </label>
                <button
                  onClick={resetTypingState}
                  className="text-slate-400 hover:text-slate-200 flex items-center gap-1 text-xs"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Hapus / Ulangi</span>
                </button>
              </div>

              <textarea
                ref={typingInputRef}
                rows="3"
                value={typedText}
                onChange={handleTypingChange}
                disabled={isTypingCompleted}
                placeholder="Mulai ketik kalimat persis seperti target di atas..."
                className={`w-full p-4 rounded-2xl bg-slate-950 border text-sm sm:text-base font-mono leading-relaxed text-white focus:outline-none transition ${
                  isTypingCompleted
                    ? 'border-emerald-500 bg-emerald-950/20'
                    : accuracy < 90
                    ? 'border-amber-500 focus:border-amber-400'
                    : 'border-slate-700 focus:border-cyan-500'
                }`}
              />
            </div>

            {/* Typing Completed Card */}
            {isTypingCompleted && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-slate-950 border border-emerald-500/40 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Luar Biasa! Memori Otot Kinetik Terbentuk Sempurna!</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    +40 XP Bonus
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Mengetik ulang secara langsung terbukti menanamkan struktur kalimat ke dalam refleks motorik bawah sadar, sehingga Anda dapat menulis esai secara cepat dan bebas kesalahan di hari ujian resmi.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setActiveStage('puzzle');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <Puzzle className="w-3.5 h-3.5" />
                      <span>Kembali ke Balok</span>
                    </button>
                    <button
                      onClick={resetTypingState}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Ketik Ulang</span>
                    </button>
                  </div>

                  <button
                    onClick={handleNextLevel}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
                  >
                    <span>Latihan Selanjutnya (Contoh {((levelIdx + 1) % 30) + 1})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Back to Puzzle button if not completed */}
            {!isTypingCompleted && (
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage('puzzle');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Puzzle className="w-3.5 h-3.5" />
                  <span>Kembali ke Susunan Balok</span>
                </button>

                <button
                  onClick={handleNextLevel}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <span>Lewati ke Latihan Berikutnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
