import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Leaf, Cpu, GraduationCap, Building2, 
  CheckCircle, Play, RotateCcw, Award, Flame, Volume2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TOPIC_COLLOCATIONS } from '../../data/curriculumData';
import { soundFx } from '../../utils/soundEffects';

export default function CollocationDrill({ xp, onAddXp }) {
  const [activeTopicIdx, setActiveTopicIdx] = useState(0);
  const [gameMode, setGameMode] = useState('explore'); // 'explore' or 'timed'
  const [selectedBand5, setSelectedBand5] = useState(null);
  const [selectedBand8, setSelectedBand8] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);

  const currentTopic = TOPIC_COLLOCATIONS[activeTopicIdx];

  // Timer logic for rapid challenge
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    } else if (timer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      soundFx.playLevelUp();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleStartRapidGame = () => {
    soundFx.playClick();
    setGameMode('timed');
    setMatchedPairs([]);
    setSelectedBand5(null);
    setSelectedBand8(null);
    setTimer(60);
    setCombo(0);
    setScore(0);
    setIsTimerRunning(true);
  };

  const handleBand5Click = (item) => {
    soundFx.playClick();
    if (matchedPairs.includes(item.band5)) return;
    setSelectedBand5(item);

    if (selectedBand8) {
      checkMatch(item, selectedBand8);
    }
  };

  const handleBand8Click = (item) => {
    soundFx.playClick();
    if (matchedPairs.includes(item.band5)) return;
    setSelectedBand8(item);

    if (selectedBand5) {
      checkMatch(selectedBand5, item);
    }
  };

  const checkMatch = (b5Item, b8Item) => {
    if (b5Item.band5 === b8Item.band5) {
      // Correct match!
      soundFx.playCorrect();
      setMatchedPairs(prev => [...prev, b5Item.band5]);
      setSelectedBand5(null);
      setSelectedBand8(null);
      setScore(s => s + 10);
      setCombo(c => {
        const nextC = c + 1;
        if (nextC >= 2) soundFx.playStreak();
        return nextC;
      });
      onAddXp(25 + combo * 5);

      if (matchedPairs.length + 1 === currentTopic.items.length) {
        soundFx.playLevelUp();
        confetti({ particleCount: 80, spread: 60 });
      }
    } else {
      // Wrong match
      soundFx.playWrong();
      setSelectedBand5(null);
      setSelectedBand8(null);
      setCombo(0);
    }
  };

  const renderTopicIcon = (iconName) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-3xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">Academic Collocation Forge</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Ganti frasa pasaran dengan kolokasi presisi C1/C2 untuk melipatgandakan skor <b>Lexical Resource</b> ke Band 8+.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => {
              soundFx.playClick();
              setGameMode('explore');
              setIsTimerRunning(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
              gameMode === 'explore'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📚 Mode Eksplorasi
          </button>
          <button
            onClick={handleStartRapidGame}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              gameMode === 'timed'
                ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Speed Matcher (60s)
          </button>
        </div>
      </div>

      {/* Topic Switcher Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TOPIC_COLLOCATIONS.map((top, idx) => (
          <button
            key={idx}
            onClick={() => {
              soundFx.playClick();
              setActiveTopicIdx(idx);
              setMatchedPairs([]);
              setSelectedBand5(null);
              setSelectedBand8(null);
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
              activeTopicIdx === idx
                ? 'bg-slate-800 border-indigo-500 text-white ring-1 ring-indigo-500/40 shadow-lg'
                : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${
              activeTopicIdx === idx ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
            }`}>
              {renderTopicIcon(top.icon)}
            </div>
            <div className="truncate">
              <div className="text-xs font-bold truncate text-slate-200">{top.topic.split('&')[0]}</div>
              <div className="text-[10px] text-slate-400">{top.items.length} Kolokasi Utama</div>
            </div>
          </button>
        ))}
      </div>

      {/* EXPLORE MODE: Flashcard & Study View */}
      {gameMode === 'explore' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTopic.items.map((item, iIdx) => (
            <div
              key={iIdx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-slate-700 transition flex flex-col justify-between space-y-4 shadow-md"
            >
              <div>
                {/* Comparison Header */}
                <div className="flex items-center justify-between gap-3 text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-300 font-semibold border border-rose-500/20">
                    Band 5.0 Sederhana
                  </span>
                  <span className="text-slate-500">➔</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20">
                    Band 8.5 Akademis
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs text-rose-300/80 line-through">
                    "{item.band5}" {item.band5Meaning && <span className="text-[11px] text-slate-400 no-underline font-normal">({item.band5Meaning})</span>}
                  </div>
                  <div className="text-base font-bold text-white tracking-tight">
                    {item.band8}
                  </div>
                  {item.band8Meaning && (
                    <div className="text-xs text-emerald-400/90 font-medium">
                      🇮🇩 {item.band8Meaning}
                    </div>
                  )}
                </div>
              </div>

              {/* In-context example */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <div className="text-[10px] uppercase font-bold text-indigo-400 mb-1">Contoh dalam Kalimat Esai:</div>
                <div className="italic leading-relaxed">
                  "{item.example}"
                </div>
                {item.exampleTranslation && (
                  <div className="text-[11px] text-slate-400 not-italic pt-1 border-t border-slate-800/50">
                    🇮🇩 {item.exampleTranslation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TIMED SPEED MATCHER GAME */}
      {gameMode === 'timed' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-200">
                Waktu: <span className={timer <= 10 ? 'text-rose-400 font-black animate-ping' : 'text-amber-400'}>{timer}s</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-indigo-500/20 text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-indigo-400" />
                <span>Combo: {combo}x</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">Skor: </span>
              <span className="text-lg font-black text-amber-400">{score} Poin</span>
            </div>
          </div>

          {/* Game Matrix: Left (Band 5) and Right (Band 8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column A: Band 5 Phrases */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                1. Pilih Frasa Dasar (Band 5):
              </div>
              {currentTopic.items.map((it, idx) => {
                const isMatched = matchedPairs.includes(it.band5);
                const isSelected = selectedBand5?.band5 === it.band5;

                return (
                  <button
                    key={idx}
                    disabled={isMatched || timer === 0}
                    onClick={() => handleBand5Click(it)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold transition border flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400 opacity-40 cursor-default'
                        : isSelected
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg ring-2 ring-indigo-400'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>"{it.band5}"</span>
                    {isMatched && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Column B: Band 8 Upgrades (Shuffled visually) */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                2. Cocokkan dengan Kolokasi C1/C2 (Band 8+):
              </div>
              {[...currentTopic.items].reverse().map((it, idx) => {
                const isMatched = matchedPairs.includes(it.band5);
                const isSelected = selectedBand8?.band8 === it.band8;

                return (
                  <button
                    key={idx}
                    disabled={isMatched || timer === 0}
                    onClick={() => handleBand8Click(it)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-bold transition border flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400 opacity-40 cursor-default'
                        : isSelected
                          ? 'bg-purple-600 border-purple-400 text-white shadow-lg ring-2 ring-purple-400'
                          : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <span>{it.band8}</span>
                    {isMatched && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

          </div>

          {/* End of round card */}
          {timer === 0 && (
            <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-3">
              <Award className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="text-lg font-extrabold text-white">Sesi Waktu Selesai!</h3>
              <p className="text-xs text-slate-300">
                Anda mencocokkan {matchedPairs.length} kolokasi dengan total skor {score} Poin.
              </p>
              <button
                onClick={handleStartRapidGame}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Mainkan Lagi</span>
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
