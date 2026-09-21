import React, { useState, useEffect } from 'react';
import { 
  Brain, Sparkles, RotateCcw, Volume2, CheckCircle2, 
  XCircle, AlertCircle, BookOpen, Lightbulb, Layers, 
  ArrowRight, ArrowLeft, Award, HelpCircle, Trophy,
  Leaf, Cpu, GraduationCap, Building2, HeartPulse, 
  Globe, TrendingUp, Landmark, Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCAB_TOPICS } from '../../data/vocabMemoryData';
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

export default function VocabMemoryVault({ xp, onAddXp }) {
  const [activeTopicId, setActiveTopicId] = useState('environment');
  const [mode, setMode] = useState('flashcard'); // 'flashcard' | 'cloze'
  const [filterMastery, setFilterMastery] = useState('all'); // 'all' | 'needs_review' | 'learning' | 'mastered'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(true);
  
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

  // Current active topic
  const currentTopic = VOCAB_TOPICS.find(t => t.id === activeTopicId) || VOCAB_TOPICS[0];

  // Filtered items based on mastery status
  const filteredItems = currentTopic.items.filter(item => {
    if (filterMastery === 'all') return true;
    const status = masteryData[item.id] || 'unstudied';
    return status === filterMastery;
  });

  // Ensure current index is within bounds when topic or filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowQuizHint(false);
  }, [activeTopicId, filterMastery, mode]);

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  // Native Speech Synthesis for pronunciation
  const speakWord = (text) => {
    soundFx.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British English for IELTS standard
      utterance.rate = 0.88; // Slightly slower for clear phonetic appreciation
      window.speechSynthesis.speak(utterance);
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
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      onAddXp(25);
    }

    // Auto next card after rating
    if (currentIndex < filteredItems.length - 1) {
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
      // Mark as mastered or learning
      setMasteryData(prev => ({
        ...prev,
        [currentItem.id]: 'mastered'
      }));
    } else {
      soundFx.playWrong();
      setMasteryData(prev => ({
        ...prev,
        [currentItem.id]: 'needs_review'
      }));
    }
  };

  // Next Cloze Question
  const handleNextQuiz = () => {
    soundFx.playClick();
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowQuizHint(false);
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Compute statistics
  const totalTopicWords = currentTopic.items.length;
  const masteredCount = currentTopic.items.filter(i => masteryData[i.id] === 'mastered').length;
  const needsReviewCount = currentTopic.items.filter(i => masteryData[i.id] === 'needs_review').length;
  const masteryPercent = Math.round((masteredCount / totalTopicWords) * 100);

  const TopicIconComponent = TOPIC_ICONS[currentTopic.icon] || Leaf;

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white tracking-tight">
                  Vocab Memory Vault
                </h2>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                  Teknik Mnemonic & Retensi
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Kuasai kosa kata & kolokasi resmi IELTS Band 8 di 8 topik esai esensial tanpa takut mudah lupa.
              </p>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Topik {currentTopic.name}</div>
              <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                <span className="text-emerald-400">{masteredCount}</span> / {totalTopicWords} Melekat ({masteryPercent}%)
              </div>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => { soundFx.playClick(); setMode('flashcard'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                mode === 'flashcard'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Kartu Memori</span>
            </button>
            <button
              onClick={() => { soundFx.playClick(); setMode('cloze'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                mode === 'cloze'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kuis Kalimat (+35 XP)</span>
            </button>
          </div>
        </div>
      </div>

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

      {/* Filter Mastery Sub-bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-semibold">Filter Kosakata:</span>
          <button
            onClick={() => setFilterMastery('all')}
            className={`px-2.5 py-1 rounded-lg font-bold transition ${
              filterMastery === 'all'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Semua ({currentTopic.items.length})
          </button>
          <button
            onClick={() => setFilterMastery('needs_review')}
            className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filterMastery === 'needs_review'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-rose-400/70 hover:text-rose-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>Perlu Diulang ({needsReviewCount})</span>
          </button>
          <button
            onClick={() => setFilterMastery('mastered')}
            className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filterMastery === 'mastered'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-emerald-400/70 hover:text-emerald-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Sudah Melekat ({masteredCount})</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-400">
          Topik: <b className="text-slate-200">{currentTopic.name}</b> ({currentTopic.description})
        </div>
      </div>

      {/* If No Items in filtered view */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-slate-900/50 border border-slate-800 rounded-3xl space-y-3">
          <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-sm font-bold text-slate-200">Tidak ada kosa kata dalam kategori filter ini</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Anda belum memiliki kosa kata yang ditandai dalam filter ini untuk topik {currentTopic.name}.
          </p>
          <button
            onClick={() => setFilterMastery('all')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition"
          >
            Tampilkan Semua Kosa Kata
          </button>
        </div>
      ) : mode === 'flashcard' ? (
        
        /* ========================================================================= */
        /* MODE 1: ACTIVE RECALL FLASHCARD                                           */
        /* ========================================================================= */
        <div className="max-w-2xl mx-auto space-y-5">
          
          {/* Card Navigation Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span className="font-bold flex items-center gap-1.5">
              <span>Kartu {currentIndex + 1} dari {filteredItems.length}</span>
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

            <button
              onClick={() => speakWord(currentItem.band8Word)}
              className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold transition"
              title="Dengarkan pengucapan kata aksen British"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Audio Pelafalan</span>
            </button>
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
              /* CARD FRONT: Prompt to Recall */
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
              /* CARD BACK: Band 8 Reveal + Mnemonic Hook */
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

                {/* Mnemonic Hook Box (Crucial for memory-struggling users) */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Jembatan Memori / Mnemonic (Anti-Lupa):</span>
                  </div>
                  <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
                    {currentItem.mnemonicHook}
                  </p>
                </div>

                {/* Model Essay Sentence */}
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

            <span className="text-xs text-slate-500 font-medium">
              Gunakan tombol peringkat di atas untuk lanjut otomatis
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setIsFlipped(false);
                setCurrentIndex(prev => Math.min(filteredItems.length - 1, prev + 1));
              }}
              disabled={currentIndex >= filteredItems.length - 1}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (

        /* ========================================================================= */
        /* MODE 2: CLOZE CONTEXT QUIZ                                                */
        /* ========================================================================= */
        <div className="max-w-2xl mx-auto space-y-5">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Question Counter & Hint Toggle */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-400">
                Soal {currentIndex + 1} dari {filteredItems.length}
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowQuizHint(prev => !prev);
                }}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showQuizHint ? 'Sembunyikan Petunjuk Mnemonic' : 'Lihat Petunjuk Mnemonic'}</span>
              </button>
            </div>

            {/* Optional Mnemonic Hint */}
            {showQuizHint && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                <b>💡 Tips Mengingat:</b> {currentItem.mnemonicHook}
              </div>
            )}

            {/* Cloze Sentence Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                Lengkapi Kalimat Esai IELTS Ini dengan Frasa Band 8 yang Paling Tepat:
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed">
                "{currentItem.clozeSentence.split('[____]')[0]}
                <span className="font-mono font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/40">
                  {selectedOption ? selectedOption : '[ _______________ ]'}
                </span>
                {currentItem.clozeSentence.split('[____]')[1]}"
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Makna yang dimaksud: <b className="text-slate-200">{currentItem.indonesianMeaning}</b>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentItem.clozeOptions.map((opt, oIdx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentItem.clozeAnswer;
                
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

            {/* Feedback & Next Button */}
            {isAnswerSubmitted && (
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <div className={`p-3.5 rounded-2xl text-xs ${
                  selectedOption === currentItem.clozeAnswer
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                }`}>
                  {selectedOption === currentItem.clozeAnswer ? (
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>Luar Biasa! Jawaban Anda Tepat (+35 XP).</span>
                      </div>
                      <p className="text-slate-300">
                        Frasa <b>"{currentItem.band8Word}"</b> memberikan skor tinggi pada kriteria Lexical Resource karena merupakan kolokasi akademis yang presisi.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="font-bold">Jawaban yang tepat adalah: "{currentItem.clozeAnswer}"</div>
                      <p className="text-slate-300">
                        <b>Tips Mnemonic:</b> {currentItem.mnemonicHook}
                      </p>
                    </div>
                  )}
                </div>

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
