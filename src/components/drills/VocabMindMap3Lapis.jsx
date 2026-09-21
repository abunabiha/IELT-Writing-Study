import React, { useState } from 'react';
import { 
  GitFork, Volume2, Sparkles, Search, Layers, 
  CheckCircle2, ArrowRight, BookOpen, Award, 
  RotateCcw, ShieldCheck, Flame, Zap, Compass, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCAB_MINDMAP_DATA } from '../../data/vocabMindMapData';
import { soundFx } from '../../utils/soundEffects';

export default function VocabMindMap3Lapis({ xp, onAddXp }) {
  const [selectedThemeId, setSelectedThemeId] = useState(VOCAB_MINDMAP_DATA[0].id);
  const [selectedClusterId, setSelectedClusterId] = useState(VOCAB_MINDMAP_DATA[0].clusters[0].id);
  const [selectedWordId, setSelectedWordId] = useState(VOCAB_MINDMAP_DATA[0].clusters[0].words[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecallMode, setActiveRecallMode] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [completedWords, setCompletedWords] = useState({});

  // Active theme & clusters
  const activeTheme = VOCAB_MINDMAP_DATA.find(t => t.id === selectedThemeId) || VOCAB_MINDMAP_DATA[0];
  const activeCluster = activeTheme.clusters.find(c => c.id === selectedClusterId) || activeTheme.clusters[0];
  const activeWord = activeCluster.words.find(w => w.id === selectedWordId) || activeCluster.words[0];

  // Handle theme switch
  const handleSelectTheme = (theme) => {
    soundFx.playClick();
    setSelectedThemeId(theme.id);
    const firstCluster = theme.clusters[0];
    setSelectedClusterId(firstCluster.id);
    setSelectedWordId(firstCluster.words[0].id);
    setQuizFeedback(null);
  };

  // Handle cluster switch
  const handleSelectCluster = (cluster) => {
    soundFx.playClick();
    setSelectedClusterId(cluster.id);
    setSelectedWordId(cluster.words[0].id);
    setQuizFeedback(null);
  };

  // Handle word selection
  const handleSelectWord = (word) => {
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

  // Get 3 random options for quiz
  const allWordsInTheme = activeTheme.clusters.flatMap(c => c.words);
  const quizDistractors = allWordsInTheme.filter(w => w.id !== activeWord.id).slice(0, 3);
  const quizOptions = [activeWord, ...quizDistractors].sort(() => 0.5 - Math.random());

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 mb-3">
              <GitFork className="w-3.5 h-3.5" />
              <span>Metode Pemetaan Konsep Hirarkis 3 Lapis</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Mind Map Kosakata IELTS Band 8+
            </h1>
            <p className="mt-2 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Kuasai kosakata akademik tanpa takut lupa. Pelajari koneksi ide dari <strong>Lapis 1 (Topik Makro)</strong> ke <strong>Lapis 2 (Klaster Konsep)</strong> hingga <strong>Lapis 3 (Kolokasi & Kalimat Esai)</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveRecallMode(!activeRecallMode);
                setQuizFeedback(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border ${
                activeRecallMode
                  ? 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-600/30'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>{activeRecallMode ? 'Keluar Mode Kuis' : 'Mode Active Recall (Kuis)'}</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Layer Indicator Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
            <strong className="block font-bold">Lapis 1: Topik Makro</strong>
            <span className="text-[11px] text-slate-400">6 Domain Utama IELTS</span>
          </div>
          <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-300">
            <strong className="block font-bold">Lapis 2: Klaster Konsep</strong>
            <span className="text-[11px] text-slate-400">Sub-topik Kontekstual</span>
          </div>
          <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-800/40 text-amber-300">
            <strong className="block font-bold">Lapis 3: Jaringan Kosa Kata</strong>
            <span className="text-[11px] text-slate-400">Kolokasi, Audio & Contoh</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LAPIS 1: PEMILIH TOPIK MAKRO (HORIZONTAL CAROUSEL / GRID) */}
      {/* ========================================================================= */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">1</span>
            Lapis 1: Pilih Topik Makro Ujian
          </h3>
          <span className="text-xs text-slate-500">{VOCAB_MINDMAP_DATA.length} Domain Makro</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5">
          {VOCAB_MINDMAP_DATA.map(t => (
            <button
              key={t.id}
              onClick={() => handleSelectTheme(t)}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedThemeId === t.id
                  ? 'bg-emerald-950/80 border-emerald-500 shadow-md shadow-emerald-950/50 scale-[1.02]'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <span className="text-xl block mb-1.5">{t.icon}</span>
              <h4 className="text-xs font-bold text-white line-clamp-1">{t.titleEn}</h4>
              <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{t.titleId}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MIND MAP WORKSPACE (LAPIS 2 & LAPIS 3 CONNECTED INTERACTION) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* LEFT COLUMN: LAPIS 2 CLUSTERS & LAPIS 3 WORDS */}
        <div className="md:col-span-5 space-y-4">
          {/* LAPIS 2: KLASTER KONSEP */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">2</span>
              Lapis 2: Klaster Konsep ({activeTheme.titleId})
            </h4>

            <div className="space-y-2">
              {activeTheme.clusters.map(cluster => (
                <button
                  key={cluster.id}
                  onClick={() => handleSelectCluster(cluster)}
                  className={`w-full p-3 rounded-xl text-left border transition-all flex items-start justify-between gap-3 ${
                    selectedClusterId === cluster.id
                      ? 'bg-indigo-950/60 border-indigo-500 shadow-sm'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-lg">{cluster.icon}</span>
                    <div>
                      <h5 className="text-xs font-bold text-white">{cluster.titleEn}</h5>
                      <p className="text-[11px] text-indigo-300 font-medium">{cluster.titleId}</p>
                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-1">{cluster.summaryId}</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 whitespace-nowrap">
                    {cluster.words.length} Kata
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* LAPIS 3: SIMPUL KATA KUNCI */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">3</span>
              Lapis 3: Jaringan Kosa Kata Band 8+ ({activeCluster.titleEn})
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeCluster.words.map(w => (
                <button
                  key={w.id}
                  onClick={() => handleSelectWord(w)}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    selectedWordId === w.id
                      ? 'bg-amber-950/40 border-amber-500 shadow-md scale-[1.01]'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold text-white font-mono">{w.word}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
                      {w.pos}
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-300 line-clamp-1">
                    {w.band8Collocation}
                  </span>
                  <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-500">
                    <span>{w.bandTarget}</span>
                    {completedWords[w.id] && (
                      <span className="text-emerald-400 flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Paham
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE MEMORY CARD & ACTIVE RECALL */}
        <div className="md:col-span-7">
          {!activeRecallMode ? (
            /* STANDARD MEMORY DRAWER CARD */
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-6 shadow-xl sticky top-24">
              {/* Word Header */}
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
                    Target Nilai: {activeWord.bandTarget} • Klaster: {activeCluster.titleEn}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSpeak(activeWord.word)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold"
                    title="Dengarkan Pelafalan Asli"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span>Dengar</span>
                  </button>
                  <button
                    onClick={() => handleSpeak(activeWord.sampleSentenceEn)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all text-xs"
                    title="Dengarkan Kalimat Lengkap"
                  >
                    🔊 Kalimat
                  </button>
                </div>
              </div>

              {/* Meaning & Indonesian Translation */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Definisi Bahasa Inggris:</span>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">{activeWord.meaningEn}</p>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Arti Bahasa Indonesia:</span>
                  <p className="text-xs text-slate-300 leading-relaxed italic">🇮🇩 {activeWord.meaningId}</p>
                </div>
              </div>

              {/* Band 8 Collocation Highlight */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Kolokasi Emas Band 8+ (Collocation)
                </span>
                <p className="text-base font-bold text-white font-mono">{activeWord.band8Collocation}</p>
                <p className="text-xs text-slate-400 mt-1">
                  💡 Gunakan pasangan kata ini di Task 2 agar terhindar dari phrasing yang kaku/kurang alami.
                </p>
              </div>

              {/* Academic Synonyms */}
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

              {/* Model Sentence in Action */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
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
          ) : (
            /* ACTIVE RECALL QUIZ MODE */
            <div className="rounded-2xl bg-slate-900 border border-amber-500/40 p-6 space-y-6 shadow-xl sticky top-24">
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
      </div>
    </div>
  );
}
