import React, { useState, useEffect, useRef } from 'react';
import { 
  Keyboard, Sparkles, CheckCircle2, RotateCcw, Volume2, 
  Award, ArrowRight, ArrowLeft, BookOpen, Clock, Zap, 
  Layers, Check, HelpCircle, ShieldCheck, Flame, BarChart3,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COPYWORK_LEVELS, COPYWORK_TOPICS, COPYWORK_LESSONS } from '../../data/copyworkLessonsData';
import { soundFx } from '../../utils/soundEffects';

// =============================================================================
// SUB-KOMPONEN: RENDER GRAFIK VISUAL TASK 1 (SVG INTERAKTIF)
// =============================================================================
function VisualChartDisplay({ chart }) {
  if (!chart) return null;

  return (
    <div className="rounded-2xl bg-slate-950 border border-indigo-500/40 p-4 md:p-6 mb-6 shadow-inner space-y-4">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Visual Task 1: {chart.type.toUpperCase()}</span>
          </div>
          <h4 className="text-base md:text-lg font-bold text-white">{chart.titleEn}</h4>
          <p className="text-xs text-slate-400">🇮🇩 {chart.titleId}</p>
        </div>
      </div>

      {/* Question Prompt Box (Bilingual) */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
          Instruksi Soal Task 1:
        </span>
        <p className="text-slate-200 font-medium leading-relaxed">{chart.promptEn}</p>
        <p className="text-slate-400 mt-1.5 leading-relaxed italic">🇮🇩 {chart.promptId}</p>
      </div>

      {/* SVG RENDERING AREA */}
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800/80 flex flex-col items-center justify-center">
        {/* 1. LINE GRAPH */}
        {chart.type === 'line' && (
          <div className="w-full max-w-xl">
            <svg viewBox="0 0 500 220" className="w-full h-auto overflow-visible">
              {/* Grid Lines */}
              {[0, 20, 40, 60, 80].map((yVal, idx) => {
                const yPos = 180 - (yVal * 1.8);
                return (
                  <g key={idx}>
                    <line x1="40" y1={yPos} x2="480" y2={yPos} stroke="#334155" strokeDasharray="3,3" strokeWidth="1" />
                    <text x="32" y={yPos + 4} fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">{yVal}%</text>
                  </g>
                );
              })}

              {/* X Axis Years */}
              {chart.years && chart.years.map((yr, idx) => {
                const xPos = 60 + idx * 80;
                return (
                  <text key={idx} x={xPos} y="205" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                    {yr}
                  </text>
                );
              })}

              {/* Series Lines */}
              {chart.series && chart.series.map((s, sIdx) => {
                const points = s.values.map((v, i) => `${60 + i * 80},${180 - (v * 1.8)}`).join(' ');
                return (
                  <g key={sIdx}>
                    <polyline fill="none" stroke={s.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={points} />
                    {s.values.map((v, i) => (
                      <circle key={i} cx={60 + i * 80} cy={180 - (v * 1.8)} r="4" fill={s.color} stroke="#0f172a" strokeWidth="1.5" />
                    ))}
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-3 pt-2 border-t border-slate-800">
              {chart.series && chart.series.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-300 font-semibold">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. BAR CHART */}
        {chart.type === 'bar' && (
          <div className="w-full max-w-xl">
            <svg viewBox="0 0 500 200" className="w-full h-auto">
              {/* Horizontal Grid lines */}
              {[0, 25, 50, 75].map((val, idx) => {
                const yPos = 160 - (val * 1.8);
                return (
                  <line key={idx} x1="40" y1={yPos} x2="480" y2={yPos} stroke="#334155" strokeDasharray="3,3" strokeWidth="1" />
                );
              })}

              {/* Bars per Category */}
              {chart.categories && chart.categories.map((cat, cIdx) => {
                const groupX = 60 + cIdx * 105;
                return (
                  <g key={cIdx}>
                    {chart.series.map((s, sIdx) => {
                      const barVal = s.values[cIdx];
                      const barHeight = barVal * 1.8;
                      const barX = groupX + (sIdx * 24);
                      const barY = 160 - barHeight;
                      return (
                        <g key={sIdx}>
                          <rect x={barX} y={barY} width="20" height={barHeight} fill={s.color} rx="3" />
                          <text x={barX + 10} y={barY - 4} fill={s.color} fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                            {barVal}
                          </text>
                        </g>
                      );
                    })}
                    <text x={groupX + (chart.series.length * 12)} y="180" fill="#94a3b8" fontSize="10" textAnchor="middle">
                      {cat}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-2">
              {chart.series.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs">
                  <span className="w-3 h-3 rounded" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-300 font-semibold">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. PIE CHART */}
        {chart.type === 'pie' && (
          <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-around gap-4">
            <svg viewBox="0 0 160 160" className="w-36 h-36">
              {/* Dynamic SVG donut / circle approximation */}
              <circle cx="80" cy="80" r="60" fill="#1e293b" />
              {/* Visual slices placeholder presentation */}
              <circle cx="80" cy="80" r="50" fill="transparent" stroke="#ef4444" strokeWidth="24" strokeDasharray="106 208" strokeDashoffset="0" />
              <circle cx="80" cy="80" r="50" fill="transparent" stroke="#f59e0b" strokeWidth="24" strokeDasharray="81 233" strokeDashoffset="-106" />
              <circle cx="80" cy="80" r="50" fill="transparent" stroke="#3b82f6" strokeWidth="24" strokeDasharray="56 258" strokeDashoffset="-187" />
              <circle cx="80" cy="80" r="50" fill="transparent" stroke="#10b981" strokeWidth="24" strokeDasharray="44 270" strokeDashoffset="-243" />
              <circle cx="80" cy="80" r="50" fill="transparent" stroke="#94a3b8" strokeWidth="24" strokeDasharray="25 289" strokeDashoffset="-287" />
            </svg>
            <div className="space-y-1.5 text-xs">
              {chart.slices && chart.slices.map((sl, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: sl.color }} />
                  <span className="text-slate-200">{sl.label}:</span>
                  <span className="font-bold text-white font-mono">{sl.value}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PROCESS DIAGRAM */}
        {chart.type === 'process' && (
          <div className="w-full max-w-xl space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {chart.steps && chart.steps.map((st, i) => (
                <React.Fragment key={i}>
                  <div className="px-3 py-2 rounded-xl bg-slate-950 border border-indigo-500/40 text-center">
                    <span className="text-[11px] font-bold text-indigo-300 block">{st}</span>
                  </div>
                  {i < chart.steps.length - 1 && (
                    <span className="text-indigo-400 font-bold text-sm">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* 5. MAP COMPARISON */}
        {chart.type === 'map' && (
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="font-bold text-amber-400 block mb-2">Peta Sebelum / Awal (1995):</span>
              <ul className="space-y-1 text-slate-300">
                {chart.zones && chart.zones.map((z, i) => (
                  <li key={i} className="text-[11px]">• {z.split('->')[0]}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40">
              <span className="font-bold text-emerald-400 block mb-2">Peta Transformasi (2025):</span>
              <ul className="space-y-1 text-slate-200">
                {chart.zones && chart.zones.map((z, i) => (
                  <li key={i} className="text-[11px] font-medium text-emerald-300">• {z.split('->')[1] || z}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT: KINESTHETIC COPYWORK ARENA
// =============================================================================
export default function KinestheticCopyworkArena({ xp, onAddXp }) {
  const [selectedTopicId, setSelectedTopicId] = useState('all');
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
  const [showTranslation, setShowTranslation] = useState(true);

  const inputRef = useRef(null);

  // Filter lessons by Topic and/or Level
  const filteredLessons = COPYWORK_LESSONS.filter(l => {
    const matchesTopic = selectedTopicId === 'all' || l.topicId === selectedTopicId;
    return matchesTopic;
  });

  const currentLesson = filteredLessons[selectedLessonIdx] || filteredLessons[0] || COPYWORK_LESSONS[0];
  const targetText = currentLesson ? currentLesson.modelText : '';

  // Reset when lesson or filter changes
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
  }, [selectedTopicId, selectedLessonIdx]);

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

      const levelData = COPYWORK_LEVELS.find(l => l.id === currentLesson.level);
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
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Reset current lesson
  const handleReset = () => {
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 p-6 rounded-3xl border border-purple-500/30 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30 mb-2">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Deliberate Kinesthetic Practice (70 Latihan Total • 10 per Topik)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Kinesthetic Copywork Arena
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Bangun memori otot tangan dan ketepatan sintaksis Band 8+ melalui peniruan teks master kalimat demi kalimat, paragraf PEEL, hingga grafik visual Task 1.
          </p>
        </div>

        {/* Live Metrics Widget */}
        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kecepatan</div>
            <div className="text-lg font-black text-purple-400 font-mono">{wpm} <span className="text-[10px] text-slate-500">WPM</span></div>
          </div>
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Akurasi</div>
            <div className={`text-lg font-black font-mono ${accuracy >= 95 ? 'text-emerald-400' : accuracy >= 80 ? 'text-amber-400' : 'text-rose-400'}`}>
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

      {/* TOPIC FILTER TABS (10 LATIHAN PER TOPIK + GRAFIK TASK 1) */}
      <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-400 px-1">
          <Filter className="w-3.5 h-3.5 text-purple-400" />
          <span>Pilih Topik Latihan (10 Contoh per Kategori):</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {COPYWORK_TOPICS.map(topic => (
            <button
              key={topic.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedTopicId(topic.id);
                setSelectedLessonIdx(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 border ${
                selectedTopicId === topic.id
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{topic.icon}</span>
              <span>{topic.name}</span>
              {topic.count && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedTopicId === topic.id ? 'bg-purple-800 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {topic.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* SUB-SELECTOR: LESSON LIST IN SELECTED TOPIC */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          <span className="text-slate-400 font-semibold shrink-0 mr-1">Latihan ({filteredLessons.length}):</span>
          {filteredLessons.map((l, lIdx) => (
            <button
              key={l.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedLessonIdx(lIdx);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1.5 ${
                selectedLessonIdx === lIdx
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>#{lIdx + 1}</span>
              <span className="line-clamp-1 max-w-[130px]">{l.title.split(':')[0]}</span>
              <span className="text-[10px] opacity-75 font-mono">({l.wordCount}w)</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleSpeak}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold transition text-[11px]"
            title="Dengarkan Pelafalan Aksen British"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Model</span>
          </button>
          <button
            onClick={() => setSoundKeyEnabled(prev => !prev)}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition text-[11px] ${
              soundKeyEnabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-500'
            }`}
          >
            {soundKeyEnabled ? '🔊 Suara: On' : '🔇 Suara: Off'}
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
              Level {currentLesson.level} • {currentLesson.wordCount} kata • Target Akurasi &gt; 95%
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTranslation(prev => !prev)}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition"
            >
              {showTranslation ? '🇮🇩 Sembunyikan Terjemahan' : '🇮🇩 Tampilkan Terjemahan'}
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              title="Reset Latihan"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* VISUAL CHART COMPONENT (IF THIS IS A TASK 1 VISUAL LESSON) */}
        {currentLesson.visualChart && (
          <VisualChartDisplay chart={currentLesson.visualChart} />
        )}

        {/* Translation Banner (Bilingual Compliance) */}
        {showTranslation && currentLesson.indonesianTranslation && (
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs sm:text-sm text-indigo-200 leading-relaxed font-sans">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
              🇮🇩 Terjemahan Bahasa Indonesia:
            </span>
            {currentLesson.indonesianTranslation}
          </div>
        )}

        {/* Target Text Display (With Real-Time Character Highlighting) */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-base sm:text-lg leading-relaxed select-none overflow-x-auto">
          {targetText.split('').map((char, index) => {
            let color = 'text-slate-500';
            let bg = 'transparent';

            if (index < userInput.length) {
              if (userInput[index] === char) {
                color = 'text-emerald-400 font-bold';
              } else {
                color = 'text-white font-bold';
                bg = 'bg-rose-600/60 rounded px-0.5';
              }
            } else if (index === userInput.length) {
              bg = 'bg-purple-500/40 rounded px-0.5 animate-pulse';
              color = 'text-white font-bold';
            }

            return (
              <span key={index} className={`${color} ${bg}`}>
                {char}
              </span>
            );
          })}
        </div>

        {/* Interactive Typing Input Textarea */}
        <div className="relative">
          <textarea
            ref={inputRef}
            rows={currentLesson.level >= 3 ? 6 : 3}
            value={userInput}
            onChange={handleInputChange}
            disabled={isCompleted}
            placeholder={isCompleted ? "Latihan selesai! Tinjau evaluasi di bawah." : "Mulai ketik di sini... Rasakan alur pengetikan kata demi kata..."}
            className="w-full bg-slate-950/80 border-2 border-slate-700 focus:border-purple-500 rounded-2xl p-4 text-white font-mono text-base leading-relaxed placeholder:text-slate-600 focus:outline-none transition-all disabled:opacity-60 resize-none shadow-inner"
          />
          
          {!startTime && !isCompleted && (
            <div className="absolute right-4 bottom-4 pointer-events-none text-xs text-slate-500 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Ketik huruf pertama untuk memulai</span>
            </div>
          )}
        </div>

        {/* Completion Success Card */}
        {isCompleted && (
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-500/40 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Latihan Kinetik Berhasil Selesai!</h3>
                  <p className="text-xs text-emerald-400">
                    +{COPYWORK_LEVELS.find(l => l.id === currentLesson.level)?.xpReward || 50} XP Ditambahkan ke Profil Anda
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const nextIdx = (selectedLessonIdx + 1) % filteredLessons.length;
                  setSelectedLessonIdx(nextIdx);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-lg shadow-emerald-600/30"
              >
                <span>Latihan Berikutnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Grammatical Breakdown Drawer */}
        {(showBreakdown || isCompleted) && currentLesson.grammaticalBreakdown && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Bedah Tata Bahasa & Poin Sintaksis Band 8+
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Struktur Klausa:
                </span>
                <p className="text-slate-300 leading-relaxed">{currentLesson.grammaticalBreakdown.clauseStructure}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Kosakata Akademik Kunci:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {currentLesson.grammaticalBreakdown.academicVocabulary.map((vocab, vIdx) => (
                    <span key={vIdx} className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 text-[10px] font-mono">
                      {vocab}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Fokus Tanda Baca:
                </span>
                <p className="text-slate-300 leading-relaxed">{currentLesson.grammaticalBreakdown.punctuationFocus}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
