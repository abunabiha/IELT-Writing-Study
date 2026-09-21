import React, { useState } from 'react';
import { 
  Puzzle, Sparkles, CheckCircle2, RotateCcw, ArrowRight, 
  BookOpen, HelpCircle, Star, ArrowUpRight, Volume2, Layers,
  ChevronRight, Trophy, Zap, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PUZZLE_BAND_TIERS, BEGINNER_PUZZLE_LEVELS, BEGINNER_VOCAB_UPGRADES } from '../../data/beginnerLessonsData';
import { soundFx } from '../../utils/soundEffects';

export default function BeginnerSentencePuzzle({ xp, onAddXp }) {
  const [selectedBand, setSelectedBand] = useState('band5'); // 'band5' | 'band6' | 'band7' | 'band8'
  const [levelIdx, setLevelIdx] = useState(0); // 0 to 29
  const [placedBlockIds, setPlacedBlockIds] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPowerUp, setShowPowerUp] = useState(false);
  const [showVocabDrawer, setShowVocabDrawer] = useState(false);
  const [completedLevels, setCompletedLevels] = useState({});

  // Get active tier and active puzzles
  const activeTier = PUZZLE_BAND_TIERS.find(t => t.id === selectedBand) || PUZZLE_BAND_TIERS[0];
  const bandPuzzles = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === selectedBand);
  const currentLevel = bandPuzzles[levelIdx] || bandPuzzles[0] || BEGINNER_PUZZLE_LEVELS[0];

  const handleSelectBand = (bandId) => {
    soundFx.playClick();
    setSelectedBand(bandId);
    setLevelIdx(0);
    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
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
  };

  const handleNextLevel = () => {
    soundFx.playClick();
    setPlacedBlockIds([]);
    setIsSuccess(false);
    setShowPowerUp(false);
    if (levelIdx + 1 < bandPuzzles.length) {
      setLevelIdx(prev => prev + 1);
    } else {
      // Advance to next band tier if available
      const tierIndex = PUZZLE_BAND_TIERS.findIndex(t => t.id === selectedBand);
      if (tierIndex + 1 < PUZZLE_BAND_TIERS.length) {
        setSelectedBand(PUZZLE_BAND_TIERS[tierIndex + 1].id);
        setLevelIdx(0);
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
              <h2 className="text-xl font-bold text-white">Puzzle Balok Kata (Sentence Puzzle Arena)</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold border border-indigo-500/30">
                120 Latihan (30 / Band)
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Susun balok-balok kata seperti kepingan Lego dari kalimat sederhana (S-V-O) hingga sintaksis mahir Band 8.5+.
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
        
        {/* Top Header: Topic, Level Picker & Progress Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold mr-2">
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
              return (
                <button
                  key={p.id}
                  onClick={() => handleJumpLevel(i)}
                  className={`w-8 h-8 rounded-xl flex-shrink-0 text-xs font-bold font-mono transition-all flex items-center justify-center ${
                    isCurr
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md scale-105'
                      : isDone
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                  title={`Contoh ${i + 1}: ${p.title}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white pt-2">
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
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Hebat! Susunan Kalimat Anda 100% Tepat!</span>
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
                <div className="text-xs text-emerald-400 font-semibold">
                  +60 XP Diperoleh!
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <div className="text-rose-300 font-bold text-sm">
                  Urutan masih belum pas. Coba perhatikan tips di atas dan klik balok untuk menukar posisinya.
                </div>
              </div>
            )}

            {/* BAND 8 POWER-UP BUTTON */}
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
                  <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-amber-500/40 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                        {currentLevel.bandLabel}
                      </span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                        Band 8.5+ (Scholastic Academic Diction)
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs text-slate-400 line-through">
                        "{currentLevel.powerUpBand8.original}"
                      </div>
                      <div className="text-sm sm:text-base font-bold text-amber-200 flex items-center justify-between">
                        <span>"{currentLevel.powerUpBand8.upgraded}"</span>
                        <button
                          onClick={() => handleSpeak(currentLevel.powerUpBand8.upgraded)}
                          className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 ml-2 flex-shrink-0"
                          title="Dengarkan Pengucapan Band 8"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      💡 <b>Mengapa ini dinilai Band 8.5+?</b> {currentLevel.powerUpBand8.explanation}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Controls */}
        {isSuccess && (
          <div className="flex justify-end pt-3">
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
    </div>
  );
}

function Target(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
