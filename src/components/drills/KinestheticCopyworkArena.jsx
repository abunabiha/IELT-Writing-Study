import React, { useState, useEffect, useRef } from 'react';
import { 
  Keyboard, Sparkles, CheckCircle2, RotateCcw, Volume2, 
  Award, ArrowRight, ArrowLeft, BookOpen, Clock, Zap, 
  Layers, Check, HelpCircle, ShieldCheck, Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COPYWORK_LEVELS, COPYWORK_LESSONS } from '../../data/copyworkLessonsData';
import { soundFx } from '../../utils/soundEffects';

export default function KinestheticCopyworkArena({ xp, onAddXp }) {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [totalErrors, setTotalErrors] = useState(0);
  const [soundKeyEnabled, setSoundKeyEnabled] = useState(true);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const inputRef = useRef(null);

  // Filter lessons for selected level
  const levelLessons = COPYWORK_LESSONS.filter(l => l.level === selectedLevel);
  const currentLesson = levelLessons[selectedLessonIdx] || levelLessons[0];
  const targetText = currentLesson ? currentLesson.modelText : '';

  // Reset when level or lesson changes
  useEffect(() => {
    setUserInput('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsCompleted(false);
    setWpm(0);
    setAccuracy(100);
    setTotalErrors(0);
    setShowBreakdown(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedLevel, selectedLessonIdx]);

  // Timer interval
  useEffect(() => {
    let timer = null;
    if (startTime && !isCompleted) {
      timer = setInterval(() => {
        const secs = Math.floor((Date.now() - startTime) / 1000);
        setElapsedSeconds(secs);
        
        // Calculate dynamic WPM
        const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(0.01, secs / 60);
        setWpm(Math.round(wordsTyped / minutes));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [startTime, isCompleted, userInput]);

  // Handle typing input
  const handleInputChange = (e) => {
    if (isCompleted) return;

    const value = e.target.value;

    // Start timer on first keystroke
    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }

    if (soundKeyEnabled) {
      soundFx.playClick();
    }

    // Calculate real-time errors
    let errors = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== targetText[i]) {
        errors++;
      }
    }
    setTotalErrors(errors);

    const calcAccuracy = value.length > 0 
      ? Math.max(0, Math.round(((value.length - errors) / value.length) * 100))
      : 100;
    setAccuracy(calcAccuracy);

    setUserInput(value);

    // Completion Check
    if (value.length >= targetText.length) {
      const finalSecs = Math.max(1, Math.floor((Date.now() - (startTime || Date.now())) / 1000));
      const wordCount = targetText.split(/\s+/).length;
      const finalWpm = Math.round(wordCount / (finalSecs / 60));
      
      setWpm(finalWpm);
      setIsCompleted(true);
      setShowBreakdown(true);

      const levelData = COPYWORK_LEVELS.find(l => l.id === selectedLevel);
      const earnedXp = levelData ? levelData.xpReward : 50;

      soundFx.playLevelUp();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      onAddXp(earnedXp);
    }
  };

  // Pronounce target text using Web Speech API
  const handleSpeak = () => {
    soundFx.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(targetText);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextLesson = () => {
    soundFx.playClick();
    if (selectedLessonIdx < levelLessons.length - 1) {
      setSelectedLessonIdx(prev => prev + 1);
    } else {
      setSelectedLessonIdx(0);
    }
  };

  const handleRestart = () => {
    soundFx.playClick();
    setUserInput('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsCompleted(false);
    setWpm(0);
    setAccuracy(100);
    setTotalErrors(0);
    setShowBreakdown(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const progressPercent = Math.min(100, Math.round((userInput.length / Math.max(1, targetText.length)) * 100));
  const currentLevelObj = COPYWORK_LEVELS.find(l => l.id === selectedLevel) || COPYWORK_LEVELS[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16 select-none">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Keyboard className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white tracking-tight">
                  Kinesthetic Copywork Arena
                </h2>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                  Latihan Menulis Kinetik
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Bangun memori motorik tangan (*muscle memory*) dengan mengetik ulang teks model Band 8.5+ secara terstruktur.
              </p>
            </div>
          </div>
        </div>

        {/* Live Performance HUD */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">WPM (Kecepatan)</div>
            <div className="text-lg font-black text-indigo-400 font-mono">{wpm}</div>
          </div>
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Akurasi</div>
            <div className={`text-lg font-black font-mono ${accuracy >= 95 ? 'text-emerald-400' : accuracy >= 85 ? 'text-amber-400' : 'text-rose-400'}`}>
              {accuracy}%
            </div>
          </div>
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Waktu</div>
            <div className="text-lg font-black text-slate-300 font-mono">
              {Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Levels Graduated Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {COPYWORK_LEVELS.map((lvl) => {
          const isSelected = selectedLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedLevel(lvl.id);
                setSelectedLessonIdx(0);
              }}
              className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-900 border-purple-500 shadow-lg shadow-purple-500/10 ring-2 ring-purple-500/30 scale-[1.01]`
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isSelected ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {lvl.badge}
                </span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1 font-mono">
                  +{lvl.xpReward} XP
                </span>
              </div>
              <div>
                <span className={`text-xs font-bold block truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {lvl.title}
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 block mt-0.5">
                  Target: {lvl.targetBand}
                </span>
                <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">
                  {lvl.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Sub-bar: Lesson Tabs within Level */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-xs">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
          <span className="text-slate-400 font-semibold shrink-0">Pilih Topik & Teks Model:</span>
          {levelLessons.map((l, lIdx) => (
            <button
              key={l.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedLessonIdx(lIdx);
              }}
              className={`px-3 py-1 rounded-xl font-bold transition shrink-0 flex items-center gap-1.5 ${
                selectedLessonIdx === lIdx
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{l.topic}</span>
              <span className="text-[10px] opacity-75 font-mono">({l.wordCount} kata)</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleSpeak}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold transition text-[11px]"
            title="Dengarkan Pelafalan Aksen British"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Model</span>
          </button>
          <button
            onClick={() => setSoundKeyEnabled(prev => !prev)}
            className={`px-2.5 py-1 rounded-lg font-bold transition text-[11px] ${
              soundKeyEnabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-500'
            }`}
          >
            {soundKeyEnabled ? '🔊 Suara Ketik: Nyala' : '🔇 Suara Ketik: Bisu'}
          </button>
        </div>
      </div>

      {/* Main Kinetic Typing Sandbox */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Lesson Header Information */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                {currentLesson.topic} • {currentLesson.title}
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
                {currentLesson.bandTarget}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Ketik ulang teks model di bawah ini kata-demi-kata dengan presisi tanda baca dan huruf besar/kecil.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-36 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-slate-300 min-w-[36px]">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Live Interactive Character Match Display (The Typing Visualizer) */}
        <div 
          onClick={() => inputRef.current && inputRef.current.focus()}
          className="min-h-[160px] max-h-[360px] overflow-y-auto p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800/90 font-mono text-sm sm:text-base leading-relaxed cursor-text select-text transition"
        >
          {targetText.split('').map((char, index) => {
            const userChar = userInput[index];
            let charStyle = 'text-slate-500'; // untyped
            let isCurrent = index === userInput.length;

            if (userChar !== undefined) {
              if (userChar === char) {
                charStyle = 'text-emerald-400 bg-emerald-500/10 font-bold';
              } else {
                charStyle = 'text-rose-400 bg-rose-500/30 underline decoration-rose-500 decoration-wavy font-bold';
              }
            }

            return (
              <span 
                key={index}
                className={`${charStyle} ${isCurrent ? 'border-b-2 border-indigo-400 animate-pulse bg-indigo-500/20' : ''}`}
              >
                {char === '\n' ? <br /> : char}
              </span>
            );
          })}
        </div>

        {/* Real-time Typing Textarea Input (Hidden or Synchronized) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold flex items-center gap-1.5">
              <span>Area Ketikan Tangan:</span>
              {userInput.length === 0 && (
                <span className="text-purple-400 animate-pulse font-normal">
                  (Klik di kotak bawah ini dan mulailah mengetik teks di atas)
                </span>
              )}
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              {userInput.length} / {targetText.length} karakter
            </span>
          </div>

          <textarea
            ref={inputRef}
            value={userInput}
            onChange={handleInputChange}
            disabled={isCompleted}
            rows={selectedLevel >= 3 ? 6 : 3}
            placeholder="Mulai ketikkan teks model di atas persis sama..."
            className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 outline-none transition resize-none disabled:opacity-60"
            autoFocus
          />
        </div>

        {/* Controls & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang Teks Ini</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowBreakdown(prev => !prev)}
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-indigo-300 text-xs font-bold flex items-center gap-1.5 transition border border-indigo-500/30"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showBreakdown ? 'Sembunyikan Bedah Bahasa' : 'Lihat Bedah Anatomi Bahasa'}</span>
            </button>

            <button
              onClick={handleNextLesson}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-md shadow-purple-600/30"
            >
              <span>Lanjut ke Teks Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Completion Success Notification */}
        {isCompleted && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Luar Biasa! Teks Model Berhasil Ditiru dengan Sempurna!
                  </h4>
                  <p className="text-xs text-emerald-300/90">
                    Memori motorik tangan Anda berhasil merekam ritme sintaksis Band 8.5 (+{currentLevelObj.xpReward} XP).
                  </p>
                </div>
              </div>
              <span className="text-base font-extrabold text-amber-300 font-mono">
                {wpm} WPM • {accuracy}% Akurat
              </span>
            </div>
          </div>
        )}

        {/* Structural Anatomy Breakdown (Bedah Anatomi Bahasa) */}
        {showBreakdown && currentLesson.grammaticalBreakdown && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-xs font-extrabold text-purple-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              <BookOpen className="w-4 h-4" />
              <span>Bedah Anatomi Bahasa (Mengapa Teks Ini Meraih Skor Band 8.5):</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              {/* Pillar 1: Clause Structure */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-300 block">Struktur Klausa & Grammar:</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {currentLesson.grammaticalBreakdown.clauseStructure}
                </p>
              </div>

              {/* Pillar 2: Academic Vocabulary */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="font-bold text-emerald-300 block">Kosa Kata & Kolokasi Akademis:</span>
                <ul className="space-y-1 text-slate-300 font-mono text-[11px]">
                  {currentLesson.grammaticalBreakdown.academicVocabulary.map((vocab, vIdx) => (
                    <li key={vIdx} className="flex items-center gap-1.5">
                      <span className="text-emerald-400">•</span>
                      <span>{vocab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: Punctuation & Cohesion */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="font-bold text-amber-300 block">Tanda Baca & Kohesi Resmi:</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {currentLesson.grammaticalBreakdown.punctuationFocus}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}
