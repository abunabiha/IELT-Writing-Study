import React, { useState } from 'react';
import { 
  Puzzle, Sparkles, CheckCircle2, RotateCcw, ArrowRight, 
  BookOpen, HelpCircle, Star, ArrowUpRight, Volume2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BEGINNER_PUZZLE_LEVELS, BEGINNER_VOCAB_UPGRADES } from '../../data/beginnerLessonsData';
import { soundFx } from '../../utils/soundEffects';

export default function BeginnerSentencePuzzle({ xp, onAddXp }) {
  const [levelIdx, setLevelIdx] = useState(0);
  const [placedBlockIds, setPlacedBlockIds] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPowerUp, setShowPowerUp] = useState(false);
  const [showVocabDrawer, setShowVocabDrawer] = useState(false);

  const currentLevel = BEGINNER_PUZZLE_LEVELS[levelIdx];

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
        onAddXp(75);
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
    setLevelIdx((prev) => (prev + 1) % BEGINNER_PUZZLE_LEVELS.length);
  };

  const isComplete = placedBlockIds.length === currentLevel.blocks.length;
  const isCorrectOrder = isComplete && placedBlockIds.every((id, idx) => id === currentLevel.correctOrder[idx]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Puzzle className="w-5 h-5" />
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Sentence Puzzle (Level Dasar)</h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                Ramah Pemula
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Belajar menyusun kalimat bahasa Inggris langkah demi langkah seperti menyusun balok Lego.
          </p>
        </div>

        {/* Level & Vocabulary Assistance Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              setShowVocabDrawer(!showVocabDrawer);
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition"
          >
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Kamus Kata Dasar ➔ Band 8</span>
          </button>
        </div>
      </div>

      {/* Vocabulary Drawer (Modal/Panel) */}
      {showVocabDrawer && (
        <div className="p-5 rounded-3xl bg-slate-900 border border-indigo-500/30 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Kamus Upgrade Kosakata Pemula ke Band 8</span>
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
              <div key={vIdx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-rose-400 font-bold">{voc.basicWord} ({voc.basicMeaning})</span>
                  <span className="text-slate-500">➔</span>
                  <span className="text-emerald-400 font-bold">{voc.band8}</span>
                </div>
                <div className="text-slate-400 text-[11px] italic">
                  Band 8: "{voc.band8Example}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Level Stepper Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        
        {/* Topic & Target Goal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
              Topik: {currentLevel.topic}
            </span>
            <span className="text-xs text-indigo-400 font-bold">
              Level {levelIdx + 1} dari {BEGINNER_PUZZLE_LEVELS.length}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white">
            {currentLevel.title}
          </h3>

          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Target Kalimat yang Ingin Disusun:</div>
            <div className="text-sm sm:text-base font-medium text-slate-100 italic">
              "{currentLevel.indonesianGoal}"
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            💡 <b>Tips Rumus:</b> {currentLevel.explanation}
          </p>
        </div>

        {/* Puzzle Assembly Slot (Area Penyusunan Balok) */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Area Susunan Kalimat Anda (Klik balok untuk melepaskannya):</span>
            <button
              onClick={handleReset}
              className="text-slate-500 hover:text-slate-300 text-xs flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Susunan</span>
            </button>
          </div>

          <div className="min-h-24 p-4 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-800 flex flex-wrap items-center gap-2.5">
            {placedBlockIds.length === 0 && (
              <span className="text-xs text-slate-600 italic">
                Klik balok-balok kata di bawah secara berurutan untuk menyusun kalimat...
              </span>
            )}

            {placedBlockIds.map((id) => {
              const blk = currentLevel.blocks.find(b => b.id === id);
              return (
                <button
                  key={id}
                  onClick={() => handleRemoveBlock(id)}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-95 transition-all flex flex-col items-start"
                >
                  <span>{blk.text}</span>
                  <span className="text-[10px] text-indigo-200 font-normal">{blk.translation}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Available Word Blocks to Pick */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pilihan Balok Kata:
          </div>

          <div className="flex flex-wrap gap-2.5">
            {currentLevel.blocks.map((blk) => {
              const isUsed = placedBlockIds.includes(blk.id);
              return (
                <button
                  key={blk.id}
                  disabled={isUsed || isSuccess}
                  onClick={() => handleSelectBlock(blk.id)}
                  className={`px-4 py-2.5 rounded-2xl border text-left transition-all flex flex-col items-start ${
                    isUsed
                      ? 'bg-slate-950 border-slate-900 text-slate-700 cursor-not-allowed opacity-30'
                      : 'bg-slate-850 border-slate-700 text-slate-200 hover:border-indigo-500 hover:bg-slate-800 shadow-sm active:scale-95'
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
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Hebat! Susunan Kalimat Anda 100% Tepat!</span>
                </div>
                <p className="text-sm text-slate-200 font-medium italic">
                  "{currentLevel.completedEnglish}"
                </p>
                <p className="text-xs text-emerald-400">
                  +75 XP diperoleh!
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <div className="text-rose-300 font-bold text-sm">
                  Urutan masih belum pas. Coba perhatikan tips di atas dan klik balok untuk menukar posisinya.
                </div>
              </div>
            )}

            {/* BAND 8 POWER-UP BUTTON */}
            {isCorrectOrder && (
              <div className="space-y-3">
                {!showPowerUp ? (
                  <button
                    onClick={() => {
                      soundFx.playStreak();
                      setShowPowerUp(true);
                      confetti({ particleCount: 50, spread: 50 });
                    }}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:opacity-95 text-slate-950 font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                    <span>Lihat Cara Meng-upgrade Kalimat Ini Menjadi Band 8.5! 🚀</span>
                  </button>
                ) : (
                  <div className="p-5 rounded-3xl bg-slate-950 border border-amber-500/40 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                        Band 5.0 (Tingkat Dasar)
                      </span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                        Band 8.5 (Scholastic Academic)
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs text-slate-400 line-through">
                        "{currentLevel.powerUpBand8.original}"
                      </div>
                      <div className="text-sm sm:text-base font-bold text-amber-200">
                        "{currentLevel.powerUpBand8.upgraded}"
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      💡 <b>Mengapa ini dinilai Band 8?</b> {currentLevel.powerUpBand8.explanation}
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
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition"
            >
              <span>Latihan Tingkat Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
