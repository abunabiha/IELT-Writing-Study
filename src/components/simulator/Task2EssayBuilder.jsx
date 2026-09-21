import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, Clock, AlertTriangle, CheckCircle2, 
  Send, RefreshCw, BookOpen, Layers, BarChart, ChevronDown, 
  ChevronUp, Bot, FileText, Award 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { IELTS_SAMPLE_PROMPTS } from '../../data/curriculumData';
import { analyzeBand8Text } from '../../utils/band8Analyzer';
import { evaluateEssayWithGemini } from '../../utils/geminiApi';
import { soundFx } from '../../utils/soundEffects';

export default function Task2EssayBuilder({ geminiApiKey, xp, onAddXp }) {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [essayText, setEssayText] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(40 * 60); // 40 minutes standard exam
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showPeelGuide, setShowPeelGuide] = useState(true);
  const [activeTab, setActiveTab] = useState('diagnostics'); // 'diagnostics' | 'aiFeedback' | 'peel'
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState(null);

  const promptObj = IELTS_SAMPLE_PROMPTS[selectedPromptIdx];

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
        onAddXp(200);
        confetti({ particleCount: 90, spread: 70 });
      } else {
        // High quality simulated AI assessment based on heuristic rubrics
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
          soundFx.playCorrect();
          onAddXp(150);
        }, 1200);
        return;
      }
    } catch (err) {
      setAiError(err.message);
      soundFx.playWrong();
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Top Header & Exam Timer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">IELTS Task 2 Writing Arena</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Sandbox simulasi ujian resmi dengan live Band 8 diagnostic rubric & feedback AI examiner.
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

      {/* Question Prompt Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
            {promptObj.category}
          </span>
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

            {/* Word count progress mini-bar */}
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 rounded-full ${
                  analysis.wordCount >= 250 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.min(100, (analysis.wordCount / 250) * 100)}%` }}
              />
            </div>
          </div>

          {/* Textarea Canvas */}
          <div className="relative flex-1">
            <textarea
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Tulis esai Anda di sini... Mulai dengan Paragraf 1 (Paraphrase & Tesis), diikuti Body 1 (PEEL), Body 2 (PEEL), dan Kesimpulan..."
              rows={18}
              className="w-full p-5 rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 font-sans text-sm sm:text-base leading-relaxed focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none transition shadow-inner placeholder:text-slate-600"
            />
          </div>

        </div>

        {/* Right Col (5 cols): Diagnostic Radar & Feedback Tabs */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Diagnostic Tabs */}
          <div className="flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('diagnostics')}
              className={`flex-1 py-2 rounded-xl transition ${
                activeTab === 'diagnostics' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              📊 Live Rubrik
            </button>
            <button
              onClick={() => setActiveTab('peel')}
              className={`flex-1 py-2 rounded-xl transition ${
                activeTab === 'peel' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              🏗️ Metode PEEL
            </button>
            <button
              onClick={() => setActiveTab('aiFeedback')}
              className={`flex-1 py-2 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === 'aiFeedback' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI Examiner</span>
            </button>
          </div>

          {/* TAB 1: Real-time Rubric Diagnostics */}
          {activeTab === 'diagnostics' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-5 shadow-lg">
              
              {/* Overall Estimated Band Meter */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Estimasi Band Score
                  </div>
                  <div className="text-2xl font-black text-white mt-0.5">
                    Band {analysis.overallBand}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-xl text-xs font-extrabold ${
                  analysis.overallBand >= 8.0 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : analysis.overallBand >= 6.5
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  {analysis.overallBand >= 8.0 ? 'Mastery (Band 8+)' : analysis.overallBand >= 6.5 ? 'Competent' : 'Developing'}
                </div>
              </div>

              {/* 4 Official Criteria Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Task Response (TR)', score: analysis.taskScore, hint: 'Menjawab prompt & word count' },
                  { label: 'Coherence & Cohesion (CC)', score: analysis.cohesionScore, hint: 'Alur logis & signposting' },
                  { label: 'Lexical Resource (LR)', score: analysis.lexicalScore, hint: 'Kosakata C1/C2 akademis' },
                  { label: 'Grammar Accuracy (GRA)', score: analysis.grammarScore, hint: 'Variasi kalimat kompleks' },
                ].map((crit, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                      <span className="truncate">{crit.label.split('(')[0]}</span>
                      <span className="text-indigo-400 font-extrabold">{crit.score}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 truncate">{crit.hint}</div>
                  </div>
                ))}
              </div>

              {/* Weak Words Alert */}
              {analysis.weakWordMatches.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>Kata Lemah/Pasaran Terdeteksi ({analysis.weakWordMatches.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {analysis.weakWordMatches.slice(0, 5).map((w, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-lg bg-rose-900/40 text-rose-200 text-xs border border-rose-700/40">
                        {w.word} ➔ <span className="text-emerald-300 font-semibold">{w.alternatives[0]}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic Words Detected */}
              {analysis.academicWordMatches.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Kosakata C1/C2 Terpakai:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {analysis.academicWordMatches.map((w, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-emerald-900/30 text-emerald-300 text-[11px] font-semibold">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentence Complexity Distribution */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300">Distribusi Struktur Kalimat:</div>
                <div className="grid grid-cols-4 gap-1 text-center text-xs">
                  <div className="p-1.5 rounded-lg bg-slate-900">
                    <div className="text-[10px] text-slate-500">Simple</div>
                    <div className="font-bold text-slate-300">{analysis.sentenceStructures.simple}</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900">
                    <div className="text-[10px] text-slate-500">Compound</div>
                    <div className="font-bold text-slate-300">{analysis.sentenceStructures.compound}</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900">
                    <div className="text-[10px] text-slate-500">Complex</div>
                    <div className="font-bold text-indigo-400">{analysis.sentenceStructures.complex}</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900">
                    <div className="text-[10px] text-slate-500">Advanced</div>
                    <div className="font-bold text-emerald-400">{analysis.sentenceStructures.advanced}</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PEEL Method Guide */}
          {activeTab === 'peel' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Formula Paragraf Tubuh (PEEL Architecture)
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-950 border border-indigo-500/30">
                  <div className="font-bold text-indigo-300 mb-1">P - Point (Topic Sentence)</div>
                  <p className="text-slate-400">Satu gagasan utama yang tegas, langsung menjawab aspek pertanyaan.</p>
                  <p className="text-slate-300 italic mt-1 font-serif">Contoh: "Prime among the merits of automation is the eradication of laborious tasks."</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950 border border-purple-500/30">
                  <div className="font-bold text-purple-300 mb-1">E - Explanation (Sebab-Akibat)</div>
                  <p className="text-slate-400">Uraikan secara analitis mengapa dan bagaimana hal itu terjadi.</p>
                  <p className="text-slate-300 italic mt-1 font-serif">Contoh: "By delegating repetitive duties to algorithmic systems, organizations diminish margin for error..."</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950 border border-pink-500/30">
                  <div className="font-bold text-pink-300 mb-1">E - Example / Evidence (Bukti Konkret)</div>
                  <p className="text-slate-400">Berikan contoh realistis dan terpercaya.</p>
                  <p className="text-slate-300 italic mt-1 font-serif">Contoh: "A case in point is the logistics sector, where automated inventorying bolstered output..."</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950 border border-emerald-500/30">
                  <div className="font-bold text-emerald-300 mb-1">L - Link (Sintesis ke Tesis)</div>
                  <p className="text-slate-400">Simpulkan kembali ke tesis dan tujuan esai.</p>
                  <p className="text-slate-300 italic mt-1 font-serif">Contoh: "Consequently, technological integration acts as an imperative catalyst for efficiency."</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI Examiner Feedback */}
          {activeTab === 'aiFeedback' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bot className="w-4 h-4" />
                  <span>Senior Examiner Review</span>
                </span>
                {geminiApiKey ? (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    Powered by Gemini AI
                  </span>
                ) : (
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                    Built-in Diagnostic
                  </span>
                )}
              </div>

              {isAiLoading && (
                <div className="p-8 text-center space-y-3">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs text-slate-400">Sedang memeriksa esai sesuai standar penilaian resmi IELTS Band 8...</p>
                </div>
              )}

              {aiError && (
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300">
                  ⚠️ {aiError}
                </div>
              )}

              {aiResult && !isAiLoading && (
                <div className="space-y-4 text-xs">
                  {/* Summary */}
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed">
                    <b>Catatan Pemeriksa:</b> {aiResult.examinerSummary}
                  </div>

                  {/* Areas for Improvement */}
                  {aiResult.areasForImprovement?.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-amber-400">Rekomendasi Peningkatan Band 8:</div>
                      {aiResult.areasForImprovement.map((sug, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-slate-300">
                          • {sug}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Upgrades */}
                  {aiResult.sentenceUpgrades?.length > 0 && (
                    <div className="space-y-2">
                      <div className="font-bold text-indigo-300">Rekomendasi Upgrade Kalimat:</div>
                      {aiResult.sentenceUpgrades.map((upg, uIdx) => (
                        <div key={uIdx} className="p-3 rounded-xl bg-slate-950 border border-indigo-500/20 space-y-1">
                          <div className="text-rose-300 line-through text-[11px]">{upg.original}</div>
                          <div className="text-emerald-300 font-bold">{upg.band8Upgrade}</div>
                          <div className="text-slate-500 text-[10px]">{upg.rationale}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!aiResult && !isAiLoading && !aiError && (
                <div className="p-8 text-center text-slate-500 text-xs">
                  Klik tombol <b>"Uji Skor AI Examiner"</b> di atas untuk mendapatkan umpan balik mendalam terhadap tulisan Anda.
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
