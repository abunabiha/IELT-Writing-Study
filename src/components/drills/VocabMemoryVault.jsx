import React, { useState, useEffect } from 'react';
import { 
  Brain, Sparkles, RotateCcw, Volume2, CheckCircle2, 
  XCircle, AlertCircle, BookOpen, Lightbulb, Layers, 
  ArrowRight, ArrowLeft, Trophy,
  Leaf, Cpu, GraduationCap, Building2, HeartPulse, 
  Globe, TrendingUp, Landmark, Search,
  Bot
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCAB_TOPICS } from '../../data/vocabMemoryData';
import { ACADEMIC_CORPUS_6000, CORPUS_TOPICS, searchCorpus, getStudySet } from '../../data/academicCorpus6000';
import { generateMnemonicWithGemini } from '../../utils/geminiApi';
import { soundFx } from '../../utils/soundEffects';

const TOPIC_ICONS = {
  Leaf: Leaf,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
  Building2: Building2,
  HeartPulse: HeartPulse,
  Globe: Globe,
  TrendingUp: TrendingUp,
  Landmark: Landmark
};

export default function VocabMemoryVault({ xp, onAddXp, geminiApiKey, onNavigateTab }) {
  // View mode: 'curated' (8 Topik Mendalam) vs 'corpus6000' (Korpus 6.000 Kata / 300 Set)
  const [viewMode, setViewMode] = useState('curated');
  const [activeTopicId, setActiveTopicId] = useState('environment');
  const [mode, setMode] = useState('flashcard'); // 'flashcard' | 'cloze'
  const [filterMastery, setFilterMastery] = useState('all'); // 'all' | 'needs_review' | 'mastered'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Corpus 6000 specific state
  const [studySetIndex, setStudySetIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [corpusPage, setCorpusPage] = useState(1);
  const [aiMnemonicLoading, setAiMnemonicLoading] = useState(false);
  const [dynamicMnemonics, setDynamicMnemonics] = useState({});

  // Cloze Quiz State
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showQuizHint, setShowQuizHint] = useState(false);

  // Persistent Mastery State: { [wordId]: 'needs_review' | 'learning' | 'mastered' }
  const [masteryData, setMasteryData] = useState(() => {
    try {
      const saved = localStorage.getItem('ielts_vocab_mastery');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save mastery to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ielts_vocab_mastery', JSON.stringify(masteryData));
    } catch (e) {
      console.warn('Gagal menyimpan status kosakata:', e);
    }
  }, [masteryData]);

  // Current active curated topic
  const currentCuratedTopic = VOCAB_TOPICS.find(t => t.id === activeTopicId) || VOCAB_TOPICS[0];

  // Determine active item list based on viewMode
  let activeItemList = [];
  if (viewMode === 'curated') {
    activeItemList = currentCuratedTopic.items.filter(item => {
      if (filterMastery === 'all') return true;
      const status = masteryData[item.id] || 'unstudied';
      return status === filterMastery;
    });
  } else {
    // Corpus 6000 View: if searching, use searchCorpus; otherwise use getStudySet
    if (searchQuery.trim().length > 0) {
      const searchRes = searchCorpus(searchQuery, 'all', tierFilter, corpusPage, 20);
      activeItemList = searchRes.items.map(item => ({
        id: item.id,
        band8Word: item.word,
        band5Basic: item.basic,
        indonesianMeaning: item.meaning,
        wordType: item.pos,
        mnemonicHook: item.mnemonic,
        ieltsSentence: item.example,
        tier: item.tier
      }));
    } else {
      const setRes = getStudySet(studySetIndex);
      activeItemList = setRes.items.map(item => ({
        id: item.id,
        band8Word: item.word,
        band5Basic: item.basic,
        indonesianMeaning: item.meaning,
        wordType: item.pos,
        mnemonicHook: item.mnemonic,
        ieltsSentence: item.example,
        tier: item.tier
      }));
    }

    if (filterMastery !== 'all') {
      activeItemList = activeItemList.filter(item => {
        const status = masteryData[item.id] || 'unstudied';
        return status === filterMastery;
      });
    }
  }

  // Reset indices on navigation
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowQuizHint(false);
  }, [activeTopicId, viewMode, studySetIndex, searchQuery, tierFilter, filterMastery, mode]);

  const currentItem = activeItemList[currentIndex] || activeItemList[0];

  // Speech synthesis for native British pronunciation
  const speakWord = (text) => {
    soundFx.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Generate on-demand AI Mnemonic using Gemini 3.5 Flash
  const handleGenerateAiMnemonic = async () => {
    if (!currentItem) return;
    soundFx.playClick();
    setAiMnemonicLoading(true);

    try {
      const keyToUse = geminiApiKey || localStorage.getItem('ielts_gemini_api_key') || '';
      const result = await generateMnemonicWithGemini(keyToUse, {
        word: currentItem.band8Word,
        meaning: currentItem.indonesianMeaning,
        basic: currentItem.band5Basic
      });

      if (result && result.mnemonic) {
        setDynamicMnemonics(prev => ({
          ...prev,
          [currentItem.id]: result
        }));
        soundFx.playCorrect();
        confetti({ particleCount: 40, spread: 50 });
      }
    } catch (err) {
      console.warn('AI Mnemonic error:', err);
    } finally {
      setAiMnemonicLoading(false);
    }
  };

  // Set mastery status for current card
  const handleSetMastery = (status) => {
    if (!currentItem) return;
    soundFx.playClick();
    
    const wasMastered = masteryData[currentItem.id] === 'mastered';
    setMasteryData(prev => ({
      ...prev,
      [currentItem.id]: status
    }));

    if (status === 'mastered' && !wasMastered) {
      soundFx.playLevelUp();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      onAddXp(25);
    }

    // Auto next card after rating
    if (currentIndex < activeItemList.length - 1) {
      setTimeout(() => {
        setIsFlipped(false);
        setCurrentIndex(prev => prev + 1);
      }, 350);
    }
  };

  // Cloze Quiz Option Selection
  const handleSelectQuizOption = (option) => {
    if (isAnswerSubmitted) return;
    soundFx.playClick();
    setSelectedOption(option);
    setIsAnswerSubmitted(true);

    if (option === currentItem.clozeAnswer) {
      soundFx.playCorrect();
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      onAddXp(35);
      setMasteryData(prev => ({ ...prev, [currentItem.id]: 'mastered' }));
    } else {
      soundFx.playWrong();
      setMasteryData(prev => ({ ...prev, [currentItem.id]: 'needs_review' }));
    }
  };

  const handleNextQuiz = () => {
    soundFx.playClick();
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowQuizHint(false);
    if (currentIndex < activeItemList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Global Mastery Count across 6,000 words
  const totalGlobalMastered = Object.values(masteryData).filter(v => v === 'mastered').length;
  const globalMasteryPercent = Math.min(100, Math.round((totalGlobalMastered / 6000) * 100));

  // Current display mnemonic
  const activeMnemonicText = (currentItem && dynamicMnemonics[currentItem.id]?.mnemonic) || (currentItem?.mnemonicHook);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16">
      
      {/* Top Banner with 6,000 Words Milestone Counter */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/50 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white tracking-tight">
                  Vocab Memory Vault 6000
                </h2>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                  Target: 6.000 Kosa Kata
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Kuasai korpus 6.000 kosa kata akademik IELTS Band 8 dipecah menjadi 300 Paket Harian (@20 kata/hari).
              </p>
            </div>
          </div>
        </div>

        {/* Global Stats & Mode Switcher */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Milestone 6.000 Kata</div>
              <div className="text-sm font-extrabold text-white flex items-center gap-1.5 font-mono">
                <span className="text-emerald-400">{totalGlobalMastered}</span> / 6.000 ({globalMasteryPercent}%)
              </div>
            </div>
          </div>

          {/* View Mode Toggle: Curated Topik vs Korpus 6000 */}
          <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => { soundFx.playClick(); setViewMode('curated'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                viewMode === 'curated'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Topik Esensial</span>
            </button>
            <button
              onClick={() => { soundFx.playClick(); setViewMode('corpus6000'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                viewMode === 'corpus6000'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Korpus 6.000 Kata</span>
            </button>
            {onNavigateTab && (
              <button
                onClick={() => { soundFx.playClick(); onNavigateTab('mindMapVault'); }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40"
              >
                <span>🌿</span>
                <span>Mind Map 3 Lapis</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* VIEW 1: CURATED 8 TOPICS VIEW */}
      {viewMode === 'curated' ? (
        <div className="space-y-4">
          
          {/* 8 Topics Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {VOCAB_TOPICS.map((topic) => {
              const Icon = TOPIC_ICONS[topic.icon] || Leaf;
              const isSelected = activeTopicId === topic.id;
              const tMastered = topic.items.filter(i => masteryData[i.id] === 'mastered').length;
              const tTotal = topic.items.length;

              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTopicId(topic.id);
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group ${
                    isSelected
                      ? `bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/30 scale-[1.02]`
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-indigo-600 text-white shadow' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      {tMastered}/{tTotal}
                    </span>
                  </div>
                  <div>
                    <span className={`text-xs font-bold block truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {topic.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {topic.englishName}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mode Switcher for Curated: Flashcard vs Cloze Quiz */}
          <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold">Mode Belajar:</span>
              <button
                onClick={() => { soundFx.playClick(); setMode('flashcard'); }}
                className={`px-3 py-1 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  mode === 'flashcard' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Kartu Flashcard</span>
              </button>
              <button
                onClick={() => { soundFx.playClick(); setMode('cloze'); }}
                className={`px-3 py-1 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  mode === 'cloze' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Kuis Kalimat (+35 XP)</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">Filter:</span>
              <button
                onClick={() => setFilterMastery('all')}
                className={`px-2 py-0.5 rounded font-bold ${filterMastery === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilterMastery('needs_review')}
                className={`px-2 py-0.5 rounded font-bold ${filterMastery === 'needs_review' ? 'bg-rose-500/20 text-rose-300' : 'text-slate-400'}`}
              >
                🔴 Perlu Diulang
              </button>
              <button
                onClick={() => setFilterMastery('mastered')}
                className={`px-2 py-0.5 rounded font-bold ${filterMastery === 'mastered' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-400'}`}
              >
                🟢 Melekat
              </button>
            </div>
          </div>

        </div>
      ) : (

        /* VIEW 2: 6,000 WORDS CORPUS VIEW (300 STUDY SETS & LIVE SEARCH) */
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl space-y-4 shadow-lg">
          
          {/* Subheader with 300 Sets Selector & Instant Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata Inggris / arti Indonesia di antara 6.000 kata..."
                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:border-indigo-500 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Study Set Selector (Set 1 to 300) */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold shrink-0">Paket Harian:</span>
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                <button
                  onClick={() => setStudySetIndex(prev => Math.max(1, prev - 1))}
                  disabled={studySetIndex <= 1 || searchQuery.length > 0}
                  className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-mono font-extrabold text-indigo-400 px-2 min-w-[90px] text-center">
                  Set #{studySetIndex} / 300
                </span>
                <button
                  onClick={() => setStudySetIndex(prev => Math.min(300, prev + 1))}
                  disabled={studySetIndex >= 300 || searchQuery.length > 0}
                  className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tier Filter */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 p-1 rounded-xl text-xs">
              <span className="text-slate-500 text-[10px] px-1 font-bold">TIER:</span>
              <button
                onClick={() => setTierFilter('all')}
                className={`px-2 py-0.5 rounded font-bold ${tierFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              >
                Semua
              </button>
              <button
                onClick={() => setTierFilter('1')}
                className={`px-2 py-0.5 rounded font-bold ${tierFilter === '1' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                title="Tier 1: Pondasi AWL"
              >
                T1 (AWL)
              </button>
              <button
                onClick={() => setTierFilter('2')}
                className={`px-2 py-0.5 rounded font-bold ${tierFilter === '2' ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
                title="Tier 2: C1 Advanced"
              >
                T2 (C1)
              </button>
              <button
                onClick={() => setTierFilter('3')}
                className={`px-2 py-0.5 rounded font-bold ${tierFilter === '3' ? 'bg-pink-600 text-white' : 'text-slate-400'}`}
                title="Tier 3: C2 Grandmaster"
              >
                T3 (C2)
              </button>
            </div>

          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>
              Menampilkan {activeItemList.length} kata {searchQuery ? `untuk pencarian "${searchQuery}"` : `pada Paket Harian #${studySetIndex} (@20 kata)`}
            </span>
            <span className="text-emerald-400 font-semibold">
              Kapasitas Terindeks: 6.000 Kosakata Band 8
            </span>
          </div>

        </div>
      )}

      {/* MAIN CARD STACK AREA */}
      {activeItemList.length === 0 ? (
        <div className="p-12 text-center bg-slate-900/50 border border-slate-800 rounded-3xl space-y-3">
          <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-sm font-bold text-slate-200">Tidak ada kosa kata ditemukan</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {searchQuery ? `Pencarian "${searchQuery}" tidak cocok dengan data kata.` : 'Tidak ada kartu pada filter ini.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setFilterMastery('all'); }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition"
          >
            Reset Pencarian
          </button>
        </div>
      ) : mode === 'flashcard' || viewMode === 'corpus6000' ? (
        
        /* ========================================================================= */
        /* FLASHCARD VIEW WITH ON-DEMAND AI MNEMONIC                                 */
        /* ========================================================================= */
        <div className="max-w-2xl mx-auto space-y-5">
          
          {/* Navigation Subheader */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span className="font-bold flex items-center gap-1.5">
              <span>Kartu {currentIndex + 1} dari {activeItemList.length}</span>
              {masteryData[currentItem.id] === 'mastered' && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Melekat 🟢
                </span>
              )}
              {masteryData[currentItem.id] === 'needs_review' && (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  Perlu Diulang 🔴
                </span>
              )}
            </span>

            <div className="flex items-center gap-3">
              {/* On-Demand AI Mnemonic Button */}
              <button
                onClick={handleGenerateAiMnemonic}
                disabled={aiMnemonicLoading}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 text-[11px] font-bold transition disabled:opacity-50"
                title="Buat Jembatan Keledai Otomatis dengan Gemini AI"
              >
                <Bot className="w-3.5 h-3.5 text-indigo-400" />
                <span>{aiMnemonicLoading ? 'Meracik Mnemonic...' : '✨ Mnemonic AI'}</span>
              </button>

              <button
                onClick={() => speakWord(currentItem.band8Word)}
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold transition"
                title="Dengarkan pengucapan kata aksen British"
              >
                <Volume2 className="w-4 h-4" />
                <span>Audio</span>
              </button>
            </div>
          </div>

          {/* Flashcard Box with Flip Action */}
          <div 
            onClick={() => {
              soundFx.playClick();
              setIsFlipped(prev => !prev);
            }}
            className={`min-h-[340px] rounded-3xl border p-6 sm:p-8 cursor-pointer select-none transition-all duration-300 shadow-2xl relative flex flex-col justify-between ${
              isFlipped
                ? 'bg-slate-900 border-indigo-500/60 ring-2 ring-indigo-500/20 shadow-indigo-500/10'
                : 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 hover:border-slate-700'
            }`}
          >
            {/* Top Tag & Card Face Hint */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {currentItem.wordType}
              </span>
              <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                <span>{isFlipped ? 'Sisi Jawaban (Band 8)' : 'Sisi Soal (Klik untuk Membalik)'}</span>
                <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
              </span>
            </div>

            {/* Main Content Area */}
            {!isFlipped ? (
              /* CARD FRONT */
              <div className="my-auto py-6 space-y-4 text-center">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Kata Dasar yang Biasa Diucapkan (Band 5):
                  </span>
                  <div className="text-xl sm:text-2xl font-mono text-amber-300 font-bold">
                    "{currentItem.band5Basic}"
                  </div>
                </div>

                <div className="w-12 h-0.5 bg-slate-800 mx-auto" />

                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Arti Bahasa Indonesia:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-200">
                    {currentItem.indonesianMeaning}
                  </p>
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold animate-bounce">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Coba tebak frasa Band 8-nya, lalu klik kartu!</span>
                  </span>
                </div>
              </div>
            ) : (
              /* CARD BACK */
              <div className="my-auto py-2 space-y-4">
                
                {/* Target Band 8 Word with Audio Button */}
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Official Band 8.5 Academic Lexicon:
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                      "{currentItem.band8Word}"
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(currentItem.band8Word);
                      }}
                      className="p-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-300 transition"
                      title="Pelafalan Audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Mnemonic Hook Box */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>Jembatan Memori / Mnemonic (Anti-Lupa):</span>
                    </div>
                    {dynamicMnemonics[currentItem.id] && (
                      <span className="text-[10px] bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full font-mono">
                        AI Generated
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
                    {activeMnemonicText}
                  </p>
                </div>

                {/* Model Sentence */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="p-3 sm:p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1"
                >
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Penerapan dalam Kalimat Esai Band 8.5:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 italic font-serif leading-relaxed">
                    "{currentItem.ieltsSentence}"
                  </p>
                </div>

              </div>
            )}

            {/* Bottom Flip Instruction */}
            <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-slate-800/60">
              Klik di mana saja pada kartu ini untuk membalik sisi
            </div>
          </div>

          {/* Spaced Repetition Mastery Rating Buttons */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
            <span className="text-[11px] font-bold text-slate-400 block text-center uppercase tracking-wider">
              Bagaimana Ingatan Anda Terhadap Frasa Ini?
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleSetMastery('needs_review')}
                className="py-2.5 px-3 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>🔴</span>
                <span>Perlu Diulang</span>
              </button>
              <button
                onClick={() => handleSetMastery('learning')}
                className="py-2.5 px-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>🟡</span>
                <span>Agak Ragu</span>
              </button>
              <button
                onClick={() => handleSetMastery('mastered')}
                className="py-2.5 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>🟢</span>
                <span>Sudah Melekat! (+25 XP)</span>
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                soundFx.playClick();
                setIsFlipped(false);
                setCurrentIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <span className="text-xs text-slate-500 font-medium font-mono">
              {currentIndex + 1} / {activeItemList.length}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setIsFlipped(false);
                setCurrentIndex(prev => Math.min(activeItemList.length - 1, prev + 1));
              }}
              disabled={currentIndex >= activeItemList.length - 1}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (

        /* ========================================================================= */
        /* MODE 2: CLOZE CONTEXT QUIZ (FOR CURATED MODE)                             */
        /* ========================================================================= */
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-400">
                Soal {currentIndex + 1} dari {activeItemList.length}
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowQuizHint(prev => !prev);
                }}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showQuizHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk Mnemonic'}</span>
              </button>
            </div>

            {showQuizHint && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                <b>💡 Tips Mengingat:</b> {currentItem.mnemonicHook}
              </div>
            )}

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                Lengkapi Kalimat Esai IELTS Ini dengan Frasa Band 8 yang Paling Tepat:
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed">
                "{currentItem.clozeSentence ? currentItem.clozeSentence.split('[____]')[0] : 'In recent years, governments must '}
                <span className="font-mono font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/40">
                  {selectedOption ? selectedOption : '[ _______________ ]'}
                </span>
                {currentItem.clozeSentence ? currentItem.clozeSentence.split('[____]')[1] : ' for sustainable growth.'}"
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Makna yang dimaksud: <b className="text-slate-200">{currentItem.indonesianMeaning}</b>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {(currentItem.clozeOptions || [currentItem.band8Word, currentItem.band5Basic, 'make normal change']).map((opt, oIdx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === (currentItem.clozeAnswer || currentItem.band8Word);
                
                let btnStyle = 'bg-slate-800/70 border-slate-700/60 text-slate-200 hover:bg-slate-800 hover:border-slate-600';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'bg-slate-900 border-slate-800 text-slate-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectQuizOption(opt)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswerSubmitted && (
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <button
                  onClick={handleNextQuiz}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
                >
                  <span>Lanjut ke Soal Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
