import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart2, BookOpen, Sparkles, Copy, Check, Clock, 
  RotateCcw, CheckCircle2, BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACADEMIC_TASK1_PROMPTS } from '../../data/academicTask1Data';
import { saveExamRecord } from '../../utils/gradeBookStorage';
import { soundFx } from '../../utils/soundEffects';

export default function Task1ChartLab({ onAddXp }) {
  const [selectedPromptId, setSelectedPromptId] = useState(ACADEMIC_TASK1_PROMPTS[0].id);
  const [activeStep, setActiveStep] = useState(1);
  const [reportText, setReportText] = useState('');
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showModelTranslation, setShowModelTranslation] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(20 * 60); // 20 mins standard Task 1
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const activePrompt = useMemo(() => {
    return ACADEMIC_TASK1_PROMPTS.find(p => p.id === selectedPromptId) || ACADEMIC_TASK1_PROMPTS[0];
  }, [selectedPromptId]);

  // Word count calculator
  const wordCount = useMemo(() => {
    const trimmed = reportText.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [reportText]);

  // Timer countdown
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

  const handleSelectPrompt = (id) => {
    soundFx.playClick();
    setSelectedPromptId(id);
    setShowModelAnswer(false);
    setShowModelTranslation(false);
    setSaveSuccess(false);
  };

  const handleVerbToggle = (verb) => {
    soundFx.playClick();
    if (selectedVerbs.includes(verb)) {
      setSelectedVerbs(selectedVerbs.filter(v => v !== verb));
    } else {
      setSelectedVerbs([...selectedVerbs, verb]);
      if (onAddXp) onAddXp(15);
    }
  };

  const handleCopyModel = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(activePrompt.modelAnswerBand8);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLoadModelIntoEditor = () => {
    soundFx.playClick();
    setReportText(activePrompt.modelAnswerBand8);
  };

  const handleSaveToGradeBook = () => {
    soundFx.playSuccess();
    // Estimate band score based on word count and completeness
    let bandScore = 6.0;
    if (wordCount >= 150) bandScore = 7.0;
    if (wordCount >= 170) bandScore = 7.5;
    if (reportText.includes('Overall') || reportText.includes('overall')) bandScore = Math.min(8.5, bandScore + 0.5);

    const record = {
      date: new Date().toISOString().split('T')[0],
      type: 'Task 1 Academic',
      title: `${activePrompt.categoryLabel}: ${activePrompt.title}`,
      taskResponse: bandScore,
      coherenceCohesion: bandScore,
      lexicalResource: bandScore,
      grammaticalRange: bandScore,
      overallBand: bandScore,
      wordCount: wordCount,
      timeSpentMin: Math.max(1, Math.round((20 * 60 - timerSeconds) / 60)),
      feedbackEn: `Task 1 simulation completed. Word count: ${wordCount}/150 words. Report covers ${activePrompt.category} key features.`,
      feedbackId: `Simulasi Task 1 terselesaikan. Jumlah kata: ${wordCount}/150 kata. Laporan mencakup data kunci ${activePrompt.categoryLabel}.`
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-blue-500/20 text-blue-400">
              <BarChart2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">IELTS Academic Task 1 Visual Lab</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Simulasi lengkap 6 format visual resmi: Line Graph, Bar Chart, Pie Charts, Table, Process, dan Map.
          </p>
        </div>

        {/* 20 Min Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <Clock className={`w-4 h-4 ${timerSeconds < 180 ? 'text-rose-400 animate-ping' : 'text-blue-400'}`} />
            <span className="font-mono text-base font-bold text-white tracking-wider">
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => {
                soundFx.playClick();
                setIsTimerRunning(!isTimerRunning);
              }}
              className="ml-2 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition"
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
      </div>

      {/* Visual Category Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {ACADEMIC_TASK1_PROMPTS.map((prompt) => {
          const isSelected = selectedPromptId === prompt.id;
          return (
            <button
              key={prompt.id}
              onClick={() => handleSelectPrompt(prompt.id)}
              className={`p-3 rounded-2xl text-left border transition ${
                isSelected
                  ? 'bg-blue-900/30 border-blue-500 text-white shadow-lg ring-1 ring-blue-500'
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-wider text-blue-400 truncate">
                {prompt.category}
              </div>
              <div className="text-xs font-semibold mt-1 line-clamp-2 leading-tight">
                {prompt.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Sandbox: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (7 cols): Visual Graphic & Prompt Detail */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Visual Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider">
                  {activePrompt.categoryLabel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                  {activePrompt.title}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {activePrompt.timeframe}
              </span>
            </div>

            {/* DYNAMIC VISUAL RENDERER BASED ON CATEGORY */}
            <div className="w-full min-h-64 bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col justify-center">
              
              {/* 1. LINE GRAPH VISUAL */}
              {activePrompt.category === 'Line Graph' && (
                <div className="space-y-3">
                  <svg viewBox="0 0 500 220" className="w-full h-56 overflow-visible">
                    {[0, 4, 8, 12, 16].map((val) => {
                      const y = 190 - (val / 16) * 160;
                      return (
                        <g key={val}>
                          <line x1="40" y1={y} x2="480" y2={y} stroke="#1e293b" strokeDasharray="3 3" />
                          <text x="15" y={y + 4} fill="#64748b" fontSize="10" fontFamily="sans-serif">{val} Gt</text>
                        </g>
                      );
                    })}
                    {activePrompt.dataPoints.map((d, idx) => {
                      const x = 50 + idx * 70;
                      return (
                        <text key={d.year} x={x} y="210" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">
                          {d.year}
                        </text>
                      );
                    })}
                    {/* Industry Line (Indigo) */}
                    <polyline
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3.5"
                      points="50,128 120,120 190,109 260,92 330,76 400,62 470,55"
                    />
                    {/* Transport Line (Pink) */}
                    <polyline
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="3"
                      points="50,145 120,138 190,130 260,119 330,110 400,101 470,108"
                    />
                    {/* Agriculture Line (Emerald) */}
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                      points="50,152 120,151 190,149 260,148 330,146 400,145 470,144"
                    />
                    <circle cx="470" cy="55" r="4" fill="#6366f1" />
                    <circle cx="470" cy="108" r="4" fill="#ec4899" />
                    <circle cx="470" cy="144" r="4" fill="#10b981" />
                  </svg>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-slate-850 text-xs">
                    {activePrompt.seriesMetadata.map(s => (
                      <span key={s.key} className="flex items-center gap-1.5 font-semibold" style={{ color: s.color }}>
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name} ({s.description})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. BAR CHART VISUAL */}
              {activePrompt.category === 'Bar Chart' && (
                <div className="space-y-3 py-2">
                  <div className="flex items-center justify-end gap-4 text-xs mb-2">
                    <span className="flex items-center gap-1.5 text-slate-300 font-bold">
                      <span className="w-3 h-3 rounded bg-blue-500" /> 2015
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="w-3 h-3 rounded bg-emerald-500" /> 2025 (Proyeksi)
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {activePrompt.barData.map((item) => (
                      <div key={item.country} className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-300 font-semibold">
                          <span>{item.country}</span>
                          <span className="font-mono text-slate-400">
                            {item.val2015}% → <b className="text-emerald-400">{item.val2025}%</b>
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 h-4">
                          <div className="bg-slate-900 rounded overflow-hidden flex items-center">
                            <div
                              className="h-full bg-blue-500 rounded transition-all duration-500"
                              style={{ width: `${item.val2015}%` }}
                            />
                          </div>
                          <div className="bg-slate-900 rounded overflow-hidden flex items-center">
                            <div
                              className="h-full bg-emerald-500 rounded transition-all duration-500"
                              style={{ width: `${item.val2025}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. PIE CHARTS VISUAL */}
              {activePrompt.category === 'Pie Chart' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-center">
                    <span className="text-xs font-bold text-amber-400">Tahun 1980 (Distribusi Pengeluaran)</span>
                    <div className="space-y-1.5 text-xs text-left">
                      {activePrompt.pieData1980.map(p => (
                        <div key={p.label} className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                            {p.label}
                          </span>
                          <span className="font-mono font-bold text-white">{p.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-center">
                    <span className="text-xs font-bold text-blue-400">Tahun 2020 (Distribusi Pengeluaran)</span>
                    <div className="space-y-1.5 text-xs text-left">
                      {activePrompt.pieData2020.map(p => (
                        <div key={p.label} className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                            {p.label}
                          </span>
                          <span className="font-mono font-bold text-white">{p.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. DATA TABLE VISUAL */}
              {activePrompt.category === 'Data Table' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800">
                      <tr>
                        {activePrompt.tableHeaders.map((h, i) => (
                          <th key={i} className="p-2.5">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850">
                      {activePrompt.tableRows.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-900/50">
                          <td className="p-2.5 font-bold text-white">{r.country}</td>
                          <td className="p-2.5 font-mono text-cyan-400 font-semibold">{r.arrivals}</td>
                          <td className="p-2.5 font-mono text-emerald-400 font-semibold">{r.revenue}</td>
                          <td className="p-2.5 font-mono text-amber-400 font-bold">{r.spend}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 5. PROCESS DIAGRAM VISUAL */}
              {activePrompt.category === 'Process Diagram' && (
                <div className="space-y-2 py-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activePrompt.processSteps.map(step => (
                      <div key={step.stepNumber} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">
                          {step.stepNumber}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-200">{step.title}</div>
                          <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. MAP / SPATIAL PLAN VISUAL */}
              {activePrompt.category === 'Map / Plan' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold text-[10px] uppercase">
                      Denah 1995 (Zona Industri Lama)
                    </span>
                    <div className="space-y-2 text-xs">
                      {activePrompt.mapElements1995.map(el => (
                        <div key={el.area} className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                          <span className="font-bold text-amber-400">📍 Sektor {el.area}: </span>
                          <span className="text-slate-300">{el.feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase">
                      Denah 2025 (Kawasan Modern Tepi Laut)
                    </span>
                    <div className="space-y-2 text-xs">
                      {activePrompt.mapElements2025.map(el => (
                        <div key={el.area} className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                          <span className="font-bold text-emerald-400">✨ Sektor {el.area}: </span>
                          <span className="text-slate-200">{el.feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Prompt Instruction Box */}
            <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-2">
              <div className="text-xs font-bold text-blue-300">
                📝 Instruksi Resmi Task 1:
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                "{activePrompt.question}"
              </p>
              <div className="text-xs text-slate-400 italic pt-1 border-t border-slate-800/80">
                🇮🇩 <b>Terjemahan:</b> "{activePrompt.questionTranslation}"
              </div>
            </div>

            {/* Task Achievement Key Features Tips */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4" />
                <span>Fitur Kunci yang Wajib Dilaporkan (Task Achievement):</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {activePrompt.keyFeatures.map((kf, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 shrink-0">•</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Model Answer Drawer */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Model Jawaban Resmi Band 8.5+</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowModelTranslation(!showModelTranslation)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  {showModelTranslation ? 'Sembunyikan Terjemahan' : '🇮🇩 Terjemahan'}
                </button>
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-indigo-300 font-semibold transition"
                >
                  {showModelAnswer ? 'Tutup Model' : 'Buka Model'}
                </button>
              </div>
            </div>

            {showModelAnswer && (
              <div className="space-y-3 pt-2">
                <div className="flex justify-end gap-2 text-xs">
                  <button
                    onClick={handleCopyModel}
                    className="flex items-center gap-1 text-slate-400 hover:text-white"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Salin Teks</span>
                  </button>
                  <button
                    onClick={handleLoadModelIntoEditor}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    Muat ke Lembar Kerja
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-serif text-slate-300 leading-relaxed whitespace-pre-line">
                  {activePrompt.modelAnswerBand8}
                </div>

                {showModelTranslation && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-amber-400 block mb-1">🇮🇩 Terjemahan Bahasa Indonesia:</span>
                    {activePrompt.modelAnswerTranslation}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Right Column (5 cols): Writing Arena Sandbox & Rubric */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Writing Sandbox */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Lembar Kerja Laporan Task 1:</span>
              <span className={`font-mono font-bold ${wordCount >= 150 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {wordCount} / 150 kata
              </span>
            </div>

            <textarea
              rows={12}
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="The given visual illustrates...

Overall, it is readily apparent that...

In detail,..."
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono leading-relaxed placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
              <div className="text-[11px] text-slate-400">
                {wordCount < 150 ? (
                  <span className="text-amber-400">⚠️ Minimal 150 kata untuk menghindari penalti Task Achievement.</span>
                ) : (
                  <span className="text-emerald-400 font-semibold">✓ Standar panjang kata terpenuhi!</span>
                )}
              </div>
              <button
                onClick={handleSaveToGradeBook}
                disabled={wordCount < 30}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-md transition disabled:opacity-40 flex items-center gap-1.5"
              >
                <BookmarkCheck className="w-4 h-4" />
                <span>Simpan ke Buku Nilai</span>
              </button>
            </div>

            {saveSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hasil simulasi Task 1 berhasil disimpan ke Buku Nilai (GradeBook)!</span>
              </div>
            )}
          </div>

          {/* Lexical Bank Picker */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>Trend Lexical Bank (Klik untuk koleksi):</span>
              <span className="text-blue-400">{selectedVerbs.length} Terpilih</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { word: 'precipitous contraction', meaning: 'penurunan drastis' },
                { word: 'exponential expansion', meaning: 'lonjakan eksponensial' },
                { word: 'oscillated marginally', meaning: 'berfluktuasi tipis' },
                { word: 'plummeted to', meaning: 'anjlok hingga' },
                { word: 'surged dramatically', meaning: 'melonjak tinggi' },
                { word: 'remained notably stable', meaning: 'stabil/konstan' },
                { word: 'in stark juxtaposition', meaning: 'sangat kontras' },
                { word: 'commanded lion\'s share', meaning: 'porsi paling dominan' },
              ].map((item) => {
                const isSelected = selectedVerbs.includes(item.word);
                return (
                  <button
                    key={item.word}
                    onClick={() => handleVerbToggle(item.word)}
                    className={`p-2.5 rounded-xl text-left text-xs transition border ${
                      isSelected
                        ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-md ring-1 ring-emerald-500'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold truncate">{item.word}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.meaning}</div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
