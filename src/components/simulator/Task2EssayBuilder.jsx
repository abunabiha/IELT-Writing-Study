import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, Clock, AlertTriangle, CheckCircle2, 
  RefreshCw, BookOpen, Bot, BookmarkCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { IELTS_TASK2_PROMPTS, TASK2_QUESTION_TYPES } from '../../data/ieltsTask2Data';
import { analyzeBand8Text } from '../../utils/band8Analyzer';
import { evaluateEssayWithGemini } from '../../utils/geminiApi';
import { saveExamRecord } from '../../utils/gradeBookStorage';
import { soundFx } from '../../utils/soundEffects';

export default function Task2EssayBuilder({ geminiApiKey, xp, onAddXp }) {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('Semua Tipe Soal');
  const [selectedPromptId, setSelectedPromptId] = useState(IELTS_TASK2_PROMPTS[0].id);
  const [essayText, setEssayText] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(40 * 60); // 40 minutes standard exam
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showPeelGuide, setShowPeelGuide] = useState(true);
  const [activeTab, setActiveTab] = useState('diagnostics'); // 'diagnostics' | 'aiFeedback' | 'peel' | 'collocations'
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Filter prompts by question type
  const filteredPrompts = useMemo(() => {
    if (selectedTypeFilter === 'Semua Tipe Soal') return IELTS_TASK2_PROMPTS;
    return IELTS_TASK2_PROMPTS.filter(p => p.questionType === selectedTypeFilter);
  }, [selectedTypeFilter]);

  const promptObj = useMemo(() => {
    return IELTS_TASK2_PROMPTS.find(p => p.id === selectedPromptId) || filteredPrompts[0] || IELTS_TASK2_PROMPTS[0];
  }, [selectedPromptId, filteredPrompts]);

  // Keep selected prompt valid when filter changes
  useEffect(() => {
    if (!filteredPrompts.some(p => p.id === selectedPromptId)) {
      if (filteredPrompts.length > 0) {
        setSelectedPromptId(filteredPrompts[0].id);
      }
    }
  }, [selectedTypeFilter, filteredPrompts, selectedPromptId]);

  // Timer Countdown
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timerSeconds]);

  // Real-time Text Analysis
  const analysis = useMemo(() => {
    return analyzeBand8Text(essayText, 'task2');
  }, [essayText]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const handleToggleTimer = () => {
    soundFx.playClick();
    setIsTimerActive(!isTimerActive);
  };

  const handleResetTimer = () => {
    soundFx.playClick();
    setIsTimerActive(false);
    setTimerSeconds(40 * 60);
  };

  const handleLoadModelIntoEditor = () => {
    soundFx.playClick();
    setEssayText(promptObj.modelAnswerBand8);
  };

  const handleRequestAiEvaluation = async () => {
    soundFx.playClick();
    if (analysis.wordCount < 100) {
      alert('Tuliskan minimal 100 kata sebelum meminta evaluasi AI.');
      return;
    }

    setIsAiLoading(true);
    setAiError(null);
    setActiveTab('aiFeedback');

    try {
      if (geminiApiKey) {
        const result = await evaluateEssayWithGemini(geminiApiKey, {
          taskType: 'task2',
          prompt: promptObj.question,
          essayText: essayText
        });
        setAiResult(result);
        soundFx.playLevelUp();
        if (onAddXp) onAddXp(200);
        confetti({ particleCount: 90, spread: 70 });
      } else {
        // Heuristic AI simulation
        setTimeout(() => {
          setAiResult({
            bandScores: {
              taskResponse: analysis.taskScore,
              coherenceCohesion: analysis.cohesionScore,
              lexicalResource: analysis.lexicalScore,
              grammaticalRange: analysis.grammarScore,
              overall: analysis.overallBand
            },
            examinerSummary: `Tulisan menunjukkan struktur ${analysis.paragraphCount} paragraf dengan total ${analysis.wordCount} kata. Rentang kosa kata menunjukkan ${analysis.academicWordMatches.length} kata C1/C2 akademis, namun masih terdeteksi ${analysis.weakWordMatches.length} kata informal dasar yang perlu ditingkatkan ke kolokasi Band 8.`,
            strengths: [
              `Penyusunan paragraf memadai (${analysis.paragraphCount} paragraf).`,
              analysis.sentenceStructures.advanced > 0 
                ? 'Penggunaan struktur kalimat kompleks/inversi terdeteksi.' 
                : 'Struktur klausa dasar cukup terkontrol.'
            ],
            areasForImprovement: analysis.suggestions,
            sentenceUpgrades: analysis.weakWordMatches.slice(0, 3).map(w => ({
              original: `Penggunaan kata "${w.word}"`,
              band8Upgrade: `Gunakan: ${w.alternatives.slice(0, 2).join(' atau ')}`,
              rationale: 'Meningkatkan skor Lexical Resource dari Band 5 ke C1/C2'
            }))
          });
          setIsAiLoading(false);
          soundFx.playSuccess();
          if (onAddXp) onAddXp(150);
          confetti({ particleCount: 90, spread: 70 });
        }, 1200);
        return;
      }
    } catch (err) {
      console.error(err);
      setAiError('Gagal memproses evaluasi AI. Silakan coba kembali.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveToGradeBook = () => {
    soundFx.playSuccess();
    const finalBand = aiResult?.bandScores?.overall || analysis.overallBand || 7.0;

    const record = {
      date: new Date().toISOString().split('T')[0],
      type: 'Task 2 Essay',
      title: `${promptObj.questionType}: ${promptObj.title || promptObj.topic}`,
      taskResponse: aiResult?.bandScores?.taskResponse || analysis.taskScore || finalBand,
      coherenceCohesion: aiResult?.bandScores?.coherenceCohesion || analysis.cohesionScore || finalBand,
      lexicalResource: aiResult?.bandScores?.lexicalResource || analysis.lexicalScore || finalBand,
      grammaticalRange: aiResult?.bandScores?.grammaticalRange || analysis.grammarScore || finalBand,
      overallBand: finalBand,
      wordCount: analysis.wordCount,
      timeSpentMin: Math.max(1, Math.round((40 * 60 - timerSeconds) / 60)),
      feedbackEn: aiResult?.examinerSummary || `Task 2 essay simulation completed on topic: ${promptObj.topic}. Word count: ${analysis.wordCount}.`,
      feedbackId: `Simulasi esai Task 2 selesai untuk topik ${promptObj.title || promptObj.topic}. Panjang esai: ${analysis.wordCount}/250 kata.`
    };

    saveExamRecord(record);
    setSaveSuccess(true);
    confetti({ particleCount: 100, spread: 70 });
    if (onAddXp) onAddXp(200);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">IELTS Task 2 Writing Arena</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Simulasi resmi 5 format esai IELTS: Opinion, Discussion, Problem-Solution, Advantages-Disadvantages, & Double Question.
          </p>
        </div>

        {/* Exam Countdown & Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800">
            <Clock className={`w-4 h-4 ${timerSeconds < 300 ? 'text-rose-400 animate-ping' : 'text-indigo-400'}`} />
            <span className="font-mono text-base font-bold text-white tracking-wider">
              {formatTime(timerSeconds)}
            </span>
            <button
              onClick={handleToggleTimer}
              className="ml-2 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
            >
              {isTimerActive ? 'Pause' : 'Mulai'}
            </button>
            <button
              onClick={handleResetTimer}
              className="p-1 text-slate-500 hover:text-slate-300 transition text-xs"
              title="Reset Timer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleRequestAiEvaluation}
            disabled={isAiLoading || essayText.trim().length === 0}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white text-xs font-extrabold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition disabled:opacity-40"
          >
            <Bot className="w-4 h-4" />
            <span>{isAiLoading ? 'Menganalisis...' : 'Uji Skor AI Examiner'}</span>
          </button>
        </div>
      </div>

      {/* Question Type Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5 text-xs">
          <span className="font-bold text-slate-300">Filter Format Pertanyaan Resmi IELTS:</span>
          <span className="text-slate-400 font-mono">
            {filteredPrompts.length} Soal Tersedia
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TASK2_QUESTION_TYPES.map((qType) => (
            <button
              key={qType}
              onClick={() => {
                soundFx.playClick();
                setSelectedTypeFilter(qType);
                setShowModelAnswer(false);
                setAiResult(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedTypeFilter === qType
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {qType}
            </button>
          ))}
        </div>

        {/* Prompt Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
          {filteredPrompts.map((p) => {
            const isSelected = promptObj.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedPromptId(p.id);
                  setShowModelAnswer(false);
                  setAiResult(null);
                  setSaveSuccess(false);
                }}
                className={`p-3 rounded-2xl text-left border transition text-xs ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500 text-white ring-1 ring-purple-500 shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider truncate">
                  {p.questionType}
                </div>
                <div className="font-bold text-slate-100 mt-1 line-clamp-1">
                  {p.title || p.topic}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                  {p.question}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Prompt Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
              {promptObj.questionType}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
              Topik: {promptObj.topic}
            </span>
          </div>
          <button
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{showModelAnswer ? 'Sembunyikan Model Band 8.5' : 'Lihat Model Jawaban Band 8.5'}</span>
          </button>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
          "{promptObj.question}"
        </h3>

        {promptObj.questionTranslation && (
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
            <span className="font-bold text-amber-400 shrink-0">🇮🇩 Terjemahan Soal:</span>
            <span>{promptObj.questionTranslation}</span>
          </div>
        )}

        {/* Optional Model Answer Modal / Dropdown */}
        {showModelAnswer && (
          <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-bold border-b border-slate-850 pb-2">
              <span>Model Answer Resmi Skor Band 8.5+:</span>
              <button
                onClick={handleLoadModelIntoEditor}
                className="text-xs text-indigo-400 hover:underline"
              >
                Muat ke Editor Teks
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-serif leading-relaxed whitespace-pre-line">
              {promptObj.modelAnswerBand8}
            </div>
            {promptObj.modelAnswerTranslation && (
              <div className="pt-3 border-t border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400">🇮🇩 Terjemahan Bahasa Indonesia:</span>
                <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed whitespace-pre-line">
                  {promptObj.modelAnswerTranslation}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Dual-Column Sandbox Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Col (7 cols): Writing Canvas */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Writing Toolbar */}
          <div className="flex items-center justify-between px-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">
                Kata: <b className={`text-sm ${analysis.wordCount >= 250 ? 'text-emerald-400' : 'text-amber-400'}`}>{analysis.wordCount}</b> / 250 min
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">
                Paragraf: <b className="text-slate-200">{analysis.paragraphCount}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveToGradeBook}
                disabled={analysis.wordCount < 50}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition disabled:opacity-40 flex items-center gap-1.5"
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Simpan Nilai ke Buku Nilai</span>
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            rows={14}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder="Tuliskan esai IELTS Task 2 Anda di sini... (Gunakan struktur 4 paragraf: Pendahuluan, Tubuh 1, Tubuh 2, Kesimpulan)"
            className="w-full p-5 rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 text-sm font-serif leading-relaxed shadow-inner"
          />

          {saveSuccess && (
            <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Skor simulasi Task 2 berhasil disimpan ke Buku Nilai (GradeBook)!</span>
            </div>
          )}

          {/* PEEL Paragraph Framework Helper */}
          {promptObj.peelFramework && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Outline Argumen Esai Ini:</span>
                <span className="text-purple-400 font-semibold">Formula PEEL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="font-bold text-purple-400 block mb-0.5">Paragraf 1 (Intro):</span>
                  <span className="text-slate-300">{promptObj.peelFramework.intro}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="font-bold text-blue-400 block mb-0.5">Paragraf 2 (Body 1):</span>
                  <span className="text-slate-300">{promptObj.peelFramework.body1}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="font-bold text-emerald-400 block mb-0.5">Paragraf 3 (Body 2):</span>
                  <span className="text-slate-300">{promptObj.peelFramework.body2}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="font-bold text-amber-400 block mb-0.5">Paragraf 4 (Kesimpulan):</span>
                  <span className="text-slate-300">{promptObj.peelFramework.conclusion}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Col (5 cols): Diagnostics & AI Examiner Panel */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Diagnostic Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('diagnostics')}
              className={`flex-1 py-2 rounded-xl font-bold transition ${
                activeTab === 'diagnostics' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Live Rubrik
            </button>
            <button
              onClick={() => setActiveTab('aiFeedback')}
              className={`flex-1 py-2 rounded-xl font-bold transition ${
                activeTab === 'aiFeedback' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Feedback {aiResult && '✓'}
            </button>
            {promptObj.academicCollocations && (
              <button
                onClick={() => setActiveTab('collocations')}
                className={`flex-1 py-2 rounded-xl font-bold transition ${
                  activeTab === 'collocations' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Kolokasi Kunci
              </button>
            )}
          </div>

          {/* TAB 1: Live Heuristic Rubrics */}
          {activeTab === 'diagnostics' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-300">Estimasi Band Saat Ini:</span>
                <span className="text-xl font-extrabold font-mono text-emerald-400">
                  Band {analysis.overallBand}
                </span>
              </div>

              {/* 4 Assessment Criteria */}
              <div className="space-y-3">
                {[
                  { name: 'Task Response', score: analysis.taskScore, max: 9.0, desc: `${analysis.wordCount}/250 kata tercapai` },
                  { name: 'Coherence & Cohesion', score: analysis.cohesionScore, max: 9.0, desc: `${analysis.paragraphCount} paragraf terstruktur` },
                  { name: 'Lexical Resource', score: analysis.lexicalScore, max: 9.0, desc: `${analysis.academicWordMatches.length} kata akademik C1/C2` },
                  { name: 'Grammatical Range', score: analysis.grammarScore, max: 9.0, desc: `${analysis.sentenceStructures.advanced} struktur kalimat kompleks` }
                ].map((c) => (
                  <div key={c.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-semibold">{c.name}</span>
                      <span className="font-mono text-indigo-400 font-bold">{c.score}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-300"
                        style={{ width: `${(c.score / 9.0) * 100}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500">{c.desc}</div>
                  </div>
                ))}
              </div>

              {/* Word suggestions */}
              {analysis.weakWordMatches.length > 0 && (
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400">Kata Kurang Formal Terdeteksi:</span>
                  <div className="space-y-1 text-xs">
                    {analysis.weakWordMatches.slice(0, 3).map((w, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-950 text-slate-300">
                        <span className="text-rose-400 font-mono">"{w.word}"</span> → ganti dengan <span className="text-emerald-400 font-semibold">{w.alternatives.slice(0, 2).join(' / ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: AI Examiner Feedback */}
          {activeTab === 'aiFeedback' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
              {isAiLoading && (
                <div className="py-12 text-center space-y-3">
                  <Bot className="w-8 h-8 text-indigo-400 animate-bounce mx-auto" />
                  <p className="text-xs text-slate-300">AI Examiner sedang memeriksa Task Response, Kohesi, Kosa Kata, dan Tata Bahasa Anda...</p>
                </div>
              )}

              {!isAiLoading && !aiResult && (
                <div className="py-10 text-center space-y-2 text-slate-400 text-xs">
                  <Bot className="w-8 h-8 text-slate-600 mx-auto" />
                  <p>Tuliskan esai minimal 100 kata dan klik tombol <b>"Uji Skor AI Examiner"</b> di kanan atas.</p>
                </div>
              )}

              {!isAiLoading && aiResult && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
                    <span className="text-xs font-bold text-indigo-300 block mb-1">Ringkasan Penguji (Examiner Summary):</span>
                    <p className="text-xs text-slate-200 leading-relaxed">{aiResult.examinerSummary}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-400">Kekuatan Esai:</span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {aiResult.strengths?.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">✓</span> <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400">Area yang Perlu Ditingkatkan:</span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {aiResult.areasForImprovement?.map((a, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400">•</span> <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Key Collocations */}
          {activeTab === 'collocations' && promptObj.academicCollocations && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-purple-400 block">
                Kolokasi Akademis Band 8+ untuk Topik Ini:
              </span>
              <div className="space-y-2">
                {promptObj.academicCollocations.map((col, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-0.5">
                    <div className="font-bold text-emerald-400 font-mono">
                      {col.term}
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      🇮🇩 {col.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
