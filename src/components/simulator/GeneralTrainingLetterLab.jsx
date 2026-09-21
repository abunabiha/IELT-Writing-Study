import React, { useState, useMemo, useEffect } from 'react';
import { 
  Mail, Sparkles, BookOpen, Copy, Check, Bot, Clock,
  RotateCcw, CheckCircle2, BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GENERAL_TRAINING_PROMPTS, LETTER_PHRASES_BANK } from '../../data/generalTrainingData';
import { analyzeBand8Text } from '../../utils/band8Analyzer';
import { evaluateEssayWithGemini } from '../../utils/geminiApi';
import { saveExamRecord } from '../../utils/gradeBookStorage';
import { soundFx } from '../../utils/soundEffects';

export default function GeneralTrainingLetterLab({ geminiApiKey, onAddXp }) {
  const [selectedLetterType, setSelectedLetterType] = useState('Formal'); // 'Formal' | 'Semi-Formal' | 'Informal'
  const [selectedPromptId, setSelectedPromptId] = useState(GENERAL_TRAINING_PROMPTS[0].id);
  const [letterText, setLetterText] = useState('');
  const [copied, setCopied] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(20 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Filter prompts by category
  const filteredPrompts = useMemo(() => {
    return GENERAL_TRAINING_PROMPTS.filter(p => p.letterType === selectedLetterType);
  }, [selectedLetterType]);

  const activePrompt = useMemo(() => {
    return GENERAL_TRAINING_PROMPTS.find(p => p.id === selectedPromptId) || filteredPrompts[0] || GENERAL_TRAINING_PROMPTS[0];
  }, [selectedPromptId, filteredPrompts]);

  // Sync selected prompt when category changes if needed
  useEffect(() => {
    if (!filteredPrompts.some(p => p.id === selectedPromptId)) {
      if (filteredPrompts.length > 0) {
        setSelectedPromptId(filteredPrompts[0].id);
      }
    }
  }, [selectedLetterType, filteredPrompts, selectedPromptId]);

  // Timer Countdown
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  // Analyze text
  const analysis = useMemo(() => {
    return analyzeBand8Text(letterText, 'task1');
  }, [letterText]);

  const handleInsertPhrase = (phrase) => {
    soundFx.playClick();
    setLetterText(prev => prev + (prev.length > 0 && !prev.endsWith('\n') ? '\n\n' : '') + phrase);
  };

  const handleCopyModel = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(activePrompt.modelAnswerBand8);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadModelToEditor = () => {
    soundFx.playClick();
    setLetterText(activePrompt.modelAnswerBand8);
  };

  const handleEvaluateLetter = async () => {
    soundFx.playClick();
    if (analysis.wordCount < 80) {
      alert('Tuliskan minimal 80 kata sebelum meminta evaluasi surat.');
      return;
    }

    setIsAiLoading(true);
    setAiFeedback(null);

    try {
      if (geminiApiKey) {
        const result = await evaluateEssayWithGemini(geminiApiKey, {
          taskType: 'task1',
          prompt: activePrompt.promptText,
          essayText: letterText
        });
        setAiFeedback(result);
        soundFx.playLevelUp();
        if (onAddXp) onAddXp(200);
        confetti({ particleCount: 90, spread: 70 });
      } else {
        // High quality heuristic simulation
        setTimeout(() => {
          setAiFeedback({
            bandScores: {
              taskResponse: analysis.taskScore,
              coherenceCohesion: analysis.cohesionScore,
              lexicalResource: analysis.lexicalScore,
              grammaticalRange: analysis.grammarScore,
              overall: analysis.overallBand
            },
            examinerSummary: `Surat bertipe ${activePrompt.letterType} tersusun dengan ${analysis.paragraphCount} paragraf dan total ${analysis.wordCount} kata. Nada penyampaian (${activePrompt.toneRule.slice(0, 40)}...) terpelihara dengan baik.`,
            strengths: [
              `Target kata (${analysis.wordCount}/150) ${analysis.wordCount >= 150 ? 'tercapai' : 'hampir mencukupi'}.`,
              `Mengandung ${analysis.academicWordMatches.length} kata formal tingkat lanjut.`
            ],
            areasForImprovement: analysis.suggestions,
            sentenceUpgrades: analysis.weakWordMatches.slice(0, 3).map(w => ({
              original: `Penggunaan "${w.word}"`,
              band8Upgrade: `Gunakan: ${w.alternatives.slice(0, 2).join(' / ')}`,
              rationale: 'Meningkatkan register nada bahasa formal C1'
            }))
          });
          setIsAiLoading(false);
          soundFx.playSuccess();
          if (onAddXp) onAddXp(120);
          confetti({ particleCount: 80, spread: 60 });
        }, 1200);
        return;
      }
    } catch (err) {
      console.error(err);
      alert('Gagal mengevaluasi surat. Silakan coba lagi.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveToGradeBook = () => {
    soundFx.playSuccess();
    const bandScore = aiFeedback?.bandScores?.overall || analysis.overallBand || 7.0;

    const record = {
      date: new Date().toISOString().split('T')[0],
      type: 'General Training Task 1',
      title: `${activePrompt.typeBadge}: ${activePrompt.promptTitle}`,
      taskResponse: aiFeedback?.bandScores?.taskResponse || analysis.taskScore || bandScore,
      coherenceCohesion: aiFeedback?.bandScores?.coherenceCohesion || analysis.cohesionScore || bandScore,
      lexicalResource: aiFeedback?.bandScores?.lexicalResource || analysis.lexicalScore || bandScore,
      grammaticalRange: aiFeedback?.bandScores?.grammaticalRange || analysis.grammarScore || bandScore,
      overallBand: bandScore,
      wordCount: analysis.wordCount,
      timeSpentMin: Math.max(1, Math.round((20 * 60 - timerSeconds) / 60)),
      feedbackEn: aiFeedback?.examinerSummary || `Letter writing simulated test completed for ${activePrompt.letterType} style.`,
      feedbackId: `Simulasi surat ${activePrompt.letterType} selesai. Panjang kata: ${analysis.wordCount}/150 kata.`
    };

    saveExamRecord(record);
    setSaveSuccess(true);
    confetti({ particleCount: 100, spread: 70 });
    if (onAddXp) onAddXp(150);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Mail className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">General Training Task 1 (Letter Writing Lab)</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Bank simulasi lengkap 12 soal surat resmi: <b>Formal</b> (4), <b>Semi-Formal</b> (4), dan <b>Informal</b> (4).
          </p>
        </div>

        {/* 20 Min Timer */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
          <Clock className={`w-4 h-4 ${timerSeconds < 180 ? 'text-rose-400 animate-ping' : 'text-cyan-400'}`} />
          <span className="font-mono text-base font-bold text-white tracking-wider">
            {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => {
              soundFx.playClick();
              setIsTimerRunning(!isTimerRunning);
            }}
            className="ml-2 px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition"
          >
            {isTimerRunning ? 'Pause' : 'Mulai'}
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setIsTimerRunning(false);
              setTimerSeconds(20 * 60);
            }}
            className="p-1 text-slate-500 hover:text-slate-300 transition"
            title="Reset Timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Category Tabs & Sub-selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            {['Formal', 'Semi-Formal', 'Informal'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedLetterType(type);
                  setShowModel(false);
                  setAiFeedback(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedLetterType === type
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {type} (4 Soal)
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 font-semibold">
            Pilih Kasus Surat ({filteredPrompts.length} Tersedia):
          </span>
        </div>

        {/* Prompt Pills under selected category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {filteredPrompts.map((p) => {
            const isSelected = activePrompt.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedPromptId(p.id);
                  setShowModel(false);
                  setAiFeedback(null);
                  setSaveSuccess(false);
                }}
                className={`p-3 rounded-2xl text-left border transition text-xs ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-500 text-white ring-1 ring-cyan-500 shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-cyan-400 truncate">
                  {p.promptTitle}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {p.recipient}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prompt Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-bold">
            {activePrompt.typeBadge} • {activePrompt.promptTitle}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPhrases(!showPhrases)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-indigo-300 font-semibold transition"
            >
              {showPhrases ? 'Tutup Bank Frasa' : 'Buka Bank Frasa Surat'}
            </button>
            <button
              onClick={() => setShowModel(!showModel)}
              className="px-3 py-1.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-xs text-cyan-300 font-semibold border border-cyan-500/30 transition flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showModel ? 'Tutup Model Band 8.5' : 'Lihat Model Band 8.5'}</span>
            </button>
          </div>
        </div>

        {/* Rules & Guidelines Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 font-bold block">Penerima:</span>
            <span className="text-slate-200">{activePrompt.recipient}</span>
          </div>
          <div>
            <span className="text-slate-500 font-bold block">Aturan Salam & Penutup:</span>
            <span className="text-cyan-400 font-mono font-semibold">{activePrompt.salutationRule}</span>
          </div>
          <div>
            <span className="text-slate-500 font-bold block">Pedoman Nada (Register):</span>
            <span className="text-amber-400">{activePrompt.toneRule}</span>
          </div>
        </div>

        {/* Prompt Question */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
          <div className="text-xs font-serif text-slate-200 leading-relaxed whitespace-pre-line">
            {activePrompt.promptText}
          </div>
          <div className="text-xs text-slate-400 italic pt-2 border-t border-slate-850 whitespace-pre-line">
            🇮🇩 <b>Terjemahan:</b><br />
            {activePrompt.promptTranslation}
          </div>
        </div>

        {/* Model Answer Drawer */}
        {showModel && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-bold border-b border-slate-850 pb-2">
              <span>Model Surat Resmi Standar Band 8.5+ ({activePrompt.letterType}):</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyModel}
                  className="flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Surat'}</span>
                </button>
                <button
                  onClick={handleLoadModelToEditor}
                  className="text-cyan-400 hover:underline"
                >
                  Muat ke Editor Teks
                </button>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-serif leading-relaxed whitespace-pre-line">
              {activePrompt.modelAnswerBand8}
            </div>
            <div className="pt-3 border-t border-slate-800 space-y-1">
              <span className="text-xs font-bold text-amber-400">🇮🇩 Terjemahan Bahasa Indonesia:</span>
              <div className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                {activePrompt.modelAnswerTranslation}
              </div>
            </div>
          </div>
        )}

        {/* Phrase Bank Quick Insert Drawer */}
        {showPhrases && (
          <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/20 space-y-3">
            <div className="text-xs font-bold text-indigo-400">
              💡 Bank Frasa Resmi (Klik untuk memasukkan ke lembar kerja):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {(activePrompt.letterType === 'Formal' ? LETTER_PHRASES_BANK.formal.openings : LETTER_PHRASES_BANK.informal.openings).map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleInsertPhrase(p.en)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left transition"
                >
                  <div className="font-semibold text-white">{p.en}</div>
                  <div className="text-[10px] text-slate-500">{p.id}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Writing Sandbox */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white">Lembar Kerja Menulis Surat:</span>
          <span className="text-slate-400">
            Kata: <b className={`text-sm ${analysis.wordCount >= 150 ? 'text-emerald-400' : 'text-amber-400'}`}>{analysis.wordCount}</b> / 150 min
          </span>
        </div>

        <textarea
          rows={10}
          value={letterText}
          onChange={(e) => setLetterText(e.target.value)}
          placeholder={`Dear ...

I am writing to...

Yours ...`}
          className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm font-serif leading-relaxed placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleEvaluateLetter}
              disabled={isAiLoading || analysis.wordCount < 50}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:opacity-90 text-white text-xs font-bold shadow-lg transition disabled:opacity-40 flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>{isAiLoading ? 'Menganalisis...' : 'Uji Evaluasi Skor AI'}</span>
            </button>
            <button
              onClick={handleSaveToGradeBook}
              disabled={analysis.wordCount < 50}
              className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition disabled:opacity-40 flex items-center gap-1.5"
            >
              <BookmarkCheck className="w-4 h-4 text-cyan-400" />
              <span>Simpan ke Buku Nilai</span>
            </button>
          </div>

          <div className="text-xs text-slate-400">
            {analysis.wordCount >= 150 ? (
              <span className="text-emerald-400 font-semibold">✓ Standar kata minimum 150 tercapai</span>
            ) : (
              <span className="text-amber-400">Kurang {150 - analysis.wordCount} kata lagi untuk batas minimal 150</span>
            )}
          </div>
        </div>

        {saveSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Rekam nilai simulasi surat berhasil disimpan ke Buku Nilai (GradeBook)!</span>
          </div>
        )}

        {/* AI Feedback Display */}
        {aiFeedback && (
          <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white">Hasil Evaluasi Penguji (Examiner Feedback)</span>
              </div>
              <div className="text-sm font-mono font-bold text-emerald-400">
                Overall Band: {aiFeedback.bandScores?.overall || 7.0}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {aiFeedback.examinerSummary}
            </p>

            {aiFeedback.sentenceUpgrades?.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-850">
                <span className="text-xs font-bold text-amber-400">Saran Diksi Lebih Unggul:</span>
                {aiFeedback.sentenceUpgrades.map((u, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-900 text-xs text-slate-300">
                    <span className="text-rose-400 line-through">{u.original}</span> → <span className="text-emerald-400 font-bold">{u.band8Upgrade}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
