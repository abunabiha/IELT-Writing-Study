import React, { useState } from 'react';
import { 
  CheckCircle, Lock, Unlock, ChevronRight, Award, 
  HelpCircle, Sparkles, BookOpen, ArrowRight, Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CURRICULUM_TIERS } from '../data/curriculumData';
import { soundFx } from '../utils/soundEffects';

export default function SkillTree({ xp, onAddXp, completedDrills, onCompleteDrill, onNavigateTab }) {
  const [activeTierId, setActiveTierId] = useState('tier-1');
  const [selectedDrill, setSelectedDrill] = useState(null);
  const [drillAnswer, setDrillAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [orderedSentences, setOrderedSentences] = useState([]);

  // Check if tier is unlocked based on XP or tier level
  const isTierUnlocked = (tier) => {
    if (tier.level === 1) return true;
    if (tier.level === 2) return xp >= 200;
    if (tier.level === 3) return xp >= 600;
    if (tier.level === 4) return xp >= 1100;
    if (tier.level === 5) return xp >= 1800;
    return false;
  };

  const currentTier = CURRICULUM_TIERS.find(t => t.id === activeTierId) || CURRICULUM_TIERS[0];

  const handleStartDrill = (drill, moduleTitle) => {
    soundFx.playClick();
    setSelectedDrill({ ...drill, moduleTitle });
    setDrillAnswer(null);
    setShowFeedback(false);
    if (drill.sentencesToOrder) {
      setOrderedSentences([...drill.sentencesToOrder].sort(() => Math.random() - 0.5));
    }
  };

  const handleSelectOption = (idx) => {
    soundFx.playClick();
    setDrillAnswer(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedDrill.type === 'peel-order') {
      // In PEEL order, check if first is point, 2nd explain, 3rd example, 4th link
      const isCorrectOrder = 
        orderedSentences[0].id === 's-point' &&
        orderedSentences[1].id === 's-explain' &&
        orderedSentences[2].id === 's-example' &&
        orderedSentences[3].id === 's-link';

      setShowFeedback(true);
      if (isCorrectOrder) {
        soundFx.playCorrect();
        if (!completedDrills.includes(selectedDrill.id)) {
          onCompleteDrill(selectedDrill.id);
          onAddXp(120);
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        }
      } else {
        soundFx.playWrong();
      }
      return;
    }

    if (drillAnswer === null) return;
    const isCorrect = selectedDrill.options[drillAnswer]?.isCorrect;
    setShowFeedback(true);

    if (isCorrect) {
      soundFx.playCorrect();
      if (!completedDrills.includes(selectedDrill.id)) {
        onCompleteDrill(selectedDrill.id);
        onAddXp(80);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      }
    } else {
      soundFx.playWrong();
    }
  };

  const moveSentence = (fromIndex, toIndex) => {
    soundFx.playClick();
    const updated = [...orderedSentences];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setOrderedSentences(updated);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/20 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Pedagogical Skill Tree</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Roadmap to IELTS Writing Band 8.0+
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Kuasai setiap tingkatan secara sistematis: dari eliminasi kesalahan fatal grammar dasar, pembangunan kalimat kompleks, kolokasi C1/C2, hingga simulasi penulisan penuh dengan kriteria penilaian resmi examiner.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigateTab('sentenceLab')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition flex items-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <span>⚡ Mainkan Sentence Transformer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => onNavigateTab('task2Builder')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition flex items-center gap-2"
            >
              <span>✍️ Tulis Esai di Task 2 Arena</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier Road Selector (Horizontal Stepper) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {CURRICULUM_TIERS.map((tier) => {
          const unlocked = isTierUnlocked(tier);
          const isCurrent = tier.id === activeTierId;
          const completedCount = tier.modules.reduce((acc, mod) => {
            const finishedInMod = mod.interactiveDrills.filter(d => completedDrills.includes(d.id)).length;
            return acc + finishedInMod;
          }, 0);
          const totalDrills = tier.modules.reduce((acc, m) => acc + m.interactiveDrills.length, 0);

          return (
            <button
              key={tier.id}
              disabled={!unlocked}
              onClick={() => {
                soundFx.playClick();
                setActiveTierId(tier.id);
              }}
              className={`relative p-4 rounded-2xl text-left transition-all border ${
                isCurrent 
                  ? 'bg-slate-800/90 border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg' 
                  : unlocked
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    : 'bg-slate-950/40 border-slate-900 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Level {tier.level}
                </span>
                {unlocked ? (
                  completedCount === totalDrills ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Unlock className="w-4 h-4 text-indigo-400" />
                  )
                ) : (
                  <Lock className="w-4 h-4 text-slate-600" />
                )}
              </div>
              <div className="font-bold text-sm text-slate-100 truncate">
                {tier.title.split(':')[1]?.trim() || tier.title}
              </div>
              <div className="text-xs text-indigo-400 font-semibold mt-1">
                {tier.targetBand}
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>{completedCount}/{totalDrills} Selesai</span>
                <span className="text-amber-400 font-medium">+{tier.xpReward} XP</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tier Content Detail */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8">
        
        {/* Tier Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-2 border border-indigo-500/20">
              {currentTier.targetBand}
            </div>
            <h2 className="text-2xl font-extrabold text-white">{currentTier.title}</h2>
            <p className="text-slate-400 text-sm mt-1">{currentTier.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400">Hadiah Kelulusan</div>
              <div className="text-amber-300 font-extrabold text-sm flex items-center gap-1.5 justify-end">
                <Award className="w-4 h-4 text-amber-400" />
                <span>+{currentTier.xpReward} XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTier.modules.map((mod, modIdx) => (
            <div 
              key={mod.id}
              className="bg-slate-950/60 rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Modul {modIdx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">{mod.title}</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{mod.description}</p>

                {/* Key Rules Accordion / List */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>Prinsip Utama Band 8</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {mod.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Drills in this module */}
              <div className="mt-5 pt-4 border-t border-slate-800/60">
                <div className="text-xs font-semibold text-slate-400 mb-2">Interactive Drills:</div>
                <div className="space-y-2">
                  {mod.interactiveDrills.map((drill) => {
                    const isDone = completedDrills.includes(drill.id);
                    return (
                      <button
                        key={drill.id}
                        onClick={() => handleStartDrill(drill, mod.title)}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-medium flex items-center justify-between transition border ${
                          isDone 
                            ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-200 hover:bg-indigo-950/40 hover:border-indigo-500/40'
                        }`}
                      >
                        <span className="truncate pr-2">{drill.prompt}</span>
                        <span className="shrink-0 flex items-center gap-1.5">
                          {isDone ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                              <CheckCircle className="w-3.5 h-3.5" /> Selesai
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] text-indigo-400 font-bold">
                              Latihan <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Drill Modal / Pop-over */}
      {selectedDrill && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {selectedDrill.moduleTitle}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Latihan Interaktif Band 8</h3>
              </div>
              <button 
                onClick={() => setSelectedDrill(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drill Prompt */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-slate-200 text-sm font-medium leading-relaxed space-y-2">
              <div>{selectedDrill.prompt}</div>
              {selectedDrill.promptTranslation && (
                <div className="pt-2 border-t border-indigo-500/20 text-xs text-indigo-300/90 font-normal">
                  <span className="font-semibold text-indigo-300">🇮🇩 Terjemahan Soal: </span>
                  <span>{selectedDrill.promptTranslation}</span>
                </div>
              )}
            </div>

            {/* Option Type: Multiple Choice */}
            {selectedDrill.options && (
              <div className="space-y-3">
                {selectedDrill.options.map((opt, idx) => {
                  const isSelected = drillAnswer === idx;
                  let optStyle = 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300';
                  if (isSelected) {
                    optStyle = 'bg-indigo-950/50 border-indigo-500 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500';
                  }
                  if (showFeedback) {
                    if (opt.isCorrect) {
                      optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500';
                    } else if (isSelected && !opt.isCorrect) {
                      optStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showFeedback}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium transition border flex items-start gap-3 ${optStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1">
                        <div>{opt.text}</div>
                        {opt.translation && (
                          <div className="text-xs text-slate-400 mt-1 italic">
                            🇮🇩 {opt.translation}
                          </div>
                        )}
                        {showFeedback && (
                          <div className={`mt-2 text-xs pt-2 border-t border-slate-800/80 ${
                            opt.isCorrect ? 'text-emerald-300' : 'text-slate-400'
                          }`}>
                            💡 {opt.explanation}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Option Type: PEEL Sentence Ordering */}
            {selectedDrill.sentencesToOrder && (
              <div className="space-y-3">
                <div className="text-xs text-slate-400">
                  Gunakan tombol panah untuk memposisikan urutan: <b>Point</b> ➔ <b>Explanation</b> ➔ <b>Example</b> ➔ <b>Link</b>
                </div>
                {orderedSentences.map((sent, sIdx) => (
                  <div 
                    key={sent.id}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm flex items-center justify-between gap-3 text-slate-200"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <div className="flex-1">
                        <div>{sent.text}</div>
                        {sent.translation && (
                          <div className="text-xs text-slate-400 mt-1 italic">
                            🇮🇩 {sent.translation}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        disabled={sIdx === 0 || showFeedback}
                        onClick={() => moveSentence(sIdx, sIdx - 1)}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                      >
                        ▲
                      </button>
                      <button
                        disabled={sIdx === orderedSentences.length - 1 || showFeedback}
                        onClick={() => moveSentence(sIdx, sIdx + 1)}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                ))}

                {showFeedback && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-indigo-500/30 text-xs text-indigo-300">
                    💡 {selectedDrill.explanation}
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-amber-400 font-semibold">
                Reward: +80 - 120 XP
              </span>
              <div className="flex items-center gap-2">
                {!showFeedback ? (
                  <button
                    disabled={selectedDrill.options ? drillAnswer === null : false}
                    onClick={handleSubmitAnswer}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 disabled:opacity-40 transition"
                  >
                    Periksa Jawaban
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedDrill(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
                  >
                    Tutup & Lanjutkan
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
