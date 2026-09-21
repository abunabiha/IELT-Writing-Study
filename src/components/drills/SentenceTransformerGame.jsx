import React, { useState } from 'react';
import { Sparkles, Zap, ArrowRight, CheckCircle2, XCircle, Trophy, HelpCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SENTENCE_TRANSFORMER_CHALLENGES } from '../../data/sentenceTransformerData';
import { soundFx } from '../../utils/soundEffects';

export default function SentenceTransformerGame({ xp, onAddXp }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [showClues, setShowClues] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const challenge = SENTENCE_TRANSFORMER_CHALLENGES[currentIndex];

  const handleSelectOption = (optId) => {
    if (hasEvaluated) return;
    soundFx.playClick();
    setSelectedOptionId(optId);
  };

  const handleCheck = () => {
    if (!selectedOptionId) return;
    const selectedOpt = challenge.options.find(o => o.id === selectedOptionId);
    setHasEvaluated(true);

    if (selectedOpt.isCorrect) {
      soundFx.playCorrect();
      const earnedXp = 100 + streak * 15;
      onAddXp(earnedXp);
      setScore(s => s + 1);
      setStreak(st => {
        const nextSt = st + 1;
        if (nextSt >= 2) soundFx.playStreak();
        return nextSt;
      });
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } else {
      soundFx.playWrong();
      setStreak(0);
    }
  };

  const handleNext = () => {
    soundFx.playClick();
    setSelectedOptionId(null);
    setHasEvaluated(false);
    setShowClues(false);
    setCurrentIndex((prev) => (prev + 1) % SENTENCE_TRANSFORMER_CHALLENGES.length);
  };

  const handleRestart = () => {
    soundFx.playClick();
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setHasEvaluated(false);
    setShowClues(false);
    setScore(0);
    setStreak(0);
  };

  const selectedOpt = challenge.options.find(o => o.id === selectedOptionId);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Zap className="w-4 h-4" />
            </span>
            <h2 className="text-xl font-bold text-white">Sentence Transformer Lab</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Ubah struktur kalimat pasaran (*Band 5.0*) menjadi konstruksi sintaksis berwibawa (*Band 8.5+*)
          </p>
        </div>

        {/* Game Stats */}
        <div className="flex items-center gap-4">
          <div className="text-center px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="text-[10px] uppercase font-bold text-slate-400">Tantangan</div>
            <div className="text-sm font-bold text-slate-200">
              {currentIndex + 1} / {SENTENCE_TRANSFORMER_CHALLENGES.length}
            </div>
          </div>
          <div className="text-center px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
            <div className="text-[10px] uppercase font-bold text-indigo-300">Combo Streak</div>
            <div className="text-sm font-extrabold text-indigo-400 flex items-center justify-center gap-1">
              🔥 {streak}x
            </div>
          </div>
          <div className="text-center px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="text-[10px] uppercase font-bold text-amber-300">Skor</div>
            <div className="text-sm font-extrabold text-amber-400">
              {score} Sukses
            </div>
          </div>
        </div>
      </div>

      {/* Main Challenge Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        
        {/* Category & Focus Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold">
            Kategori: {challenge.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Target: {challenge.targetBand} ({challenge.focusSkill})
          </span>
        </div>

        {/* Band 5 Original Sentence Display */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-rose-500/30 relative">
          <div className="flex items-center justify-between text-xs font-bold text-rose-400 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Kalimat Asli (Band 5.0 - Sederhana / Lemah):
            </span>
            <span className="bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
              Perlu Transformasi
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-200 font-medium italic">
            "{challenge.band5Original}"
          </p>
          {challenge.band5Translation && (
            <div className="mt-2.5 pt-2 border-t border-rose-500/20 text-xs text-rose-300/90 font-sans not-italic flex items-start gap-1.5">
              <span className="font-semibold text-rose-400 shrink-0">🇮🇩 Arti:</span>
              <span>"{challenge.band5Translation}"</span>
            </div>
          )}
        </div>

        {/* Clue / Hint Button */}
        <div>
          <button
            onClick={() => {
              soundFx.playClick();
              setShowClues(!showClues);
            }}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5 transition"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showClues ? 'Sembunyikan Petunjuk C1/C2' : 'Lihat Petunjuk Transformasi C1/C2'}</span>
          </button>

          {showClues && (
            <div className="mt-3 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-1.5 animate-fadeIn">
              <div className="font-bold text-indigo-300 mb-1">Strategi Transformasi Akademis:</div>
              {challenge.clues.map((clue, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">➔</span>
                  <span>{clue}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pilihlah Transformasi yang Memenuhi Standar Band 8.5+:
          </label>
          {challenge.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            let cardStyle = 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300';

            if (isSelected) {
              cardStyle = 'bg-indigo-950/40 border-indigo-500 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500';
            }

            if (hasEvaluated) {
              if (opt.isCorrect) {
                cardStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40';
              } else if (isSelected && !opt.isCorrect) {
                cardStyle = 'bg-rose-950/50 border-rose-500 text-rose-100 ring-1 ring-rose-500';
              }
            }

            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-relaxed">{opt.text}</p>
                      {opt.translation && (
                        <p className="text-xs text-slate-400 mt-1.5 italic font-sans">
                          🇮🇩 {opt.translation}
                        </p>
                      )}
                      
                      {/* Evaluation Breakdown */}
                      {hasEvaluated && (
                        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                              opt.isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                            }`}>
                              Estimasi: Band {opt.bandEstimate}
                            </span>
                            <span className="text-slate-400">{opt.explanation}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {hasEvaluated && (
                    <div className="shrink-0 mt-1">
                      {opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Band Score Meter on evaluation */}
        {hasEvaluated && selectedOpt && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 font-semibold">Hasil Analisis Examiner:</div>
              <div className="text-xl font-extrabold text-white mt-0.5 flex items-center gap-2">
                <span>Skor Opsi Anda:</span>
                <span className={`px-3 py-0.5 rounded-xl font-black ${
                  selectedOpt.isCorrect 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950' 
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  Band {selectedOpt.bandEstimate}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition"
              >
                <span>Tantangan Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Actions when not evaluated */}
        {!hasEvaluated && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <Trophy className="w-4 h-4" />
              <span>Reward: +100 XP (+bonus combo)</span>
            </span>
            <button
              disabled={!selectedOptionId}
              onClick={handleCheck}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 disabled:opacity-40 transition"
            >
              Uji Transformasi Sekarang
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
