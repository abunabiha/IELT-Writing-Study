import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Award, Target, CheckCircle2, 
  ArrowRight, Layers, FileText, Compass, 
  Search, ShieldAlert, Zap, Check, Lightbulb, Bookmark
} from 'lucide-react';
import { 
  FUNDAMENTAL_WRITING_THEORY,
  INTERMEDIATE_WRITING_THEORY,
  ADVANCED_WRITING_THEORY,
  TASK1_WRITING_GUIDE, 
  TASK2_WRITING_GUIDE, 
  BAND_DESCRIPTORS_LITERACY 
} from '../../data/writingGrammarLiteracyData';
import { soundFx } from '../../utils/soundEffects';

export default function WritingGrammarLiteracy({ onAddXp }) {
  // Tabs: 'fundamental' | 'intermediate' | 'advanced' | 'blueprints' | 'rubric'
  const [activeTab, setActiveTab] = useState('fundamental');
  
  // Selection states
  const [selectedFundIdx, setSelectedFundIdx] = useState(0);
  const [selectedInterIdx, setSelectedInterIdx] = useState(0);
  const [selectedAdvIdx, setSelectedAdvIdx] = useState(0);
  const [selectedDescriptor, setSelectedDescriptor] = useState('tr');
  const [selectedEssayType, setSelectedEssayType] = useState('opinion');
  
  // Interactive practice answer reveals & completions
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [completedQuizzes, setCompletedQuizzes] = useState({});

  const fundModule = FUNDAMENTAL_WRITING_THEORY[selectedFundIdx] || FUNDAMENTAL_WRITING_THEORY[0];
  const interModule = INTERMEDIATE_WRITING_THEORY[selectedInterIdx] || INTERMEDIATE_WRITING_THEORY[0];
  const advModule = ADVANCED_WRITING_THEORY[selectedAdvIdx] || ADVANCED_WRITING_THEORY[0];
  const descriptor = BAND_DESCRIPTORS_LITERACY.find(d => d.id === selectedDescriptor) || BAND_DESCRIPTORS_LITERACY[0];
  const essayType = TASK2_WRITING_GUIDE.essayTypes.find(e => e.id === selectedEssayType) || TASK2_WRITING_GUIDE.essayTypes[0];

  const handleMastered = (id) => {
    if (!completedQuizzes[id]) {
      setCompletedQuizzes(prev => ({ ...prev, [id]: true }));
      soundFx.playLevelUp();
      if (onAddXp) onAddXp(35);
    }
  };

  const toggleRevealAnswer = (id) => {
    soundFx.playClick();
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs font-semibold text-indigo-300 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Pusat Literasi & Pengetahuan Teori IELTS Band 8+</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Literasi Writing & Tata Bahasa Akademis
            </h1>
            <p className="mt-2 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Panduan teori writing komprehensif dari <strong className="text-amber-400 font-semibold">Fundamental (Pondasi SVO)</strong>, <strong className="text-cyan-400 font-semibold">Intermediate (Parafrase & PEEL)</strong>, hingga <strong className="text-purple-400 font-semibold">Advanced (Inversi, Cleft, Partisipel & Hedging)</strong>, lengkap dengan contoh sebelum vs sesudah dan terjemahan bahasa Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-center min-w-[110px]">
              <span className="block text-xs text-slate-400 font-medium">Jenjang Teori</span>
              <span className="text-lg font-bold text-emerald-400">3 Tingkat</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-center min-w-[110px]">
              <span className="block text-xs text-slate-400 font-medium">Target Sintaksis</span>
              <span className="text-lg font-bold text-indigo-400">Band 8.5+</span>
            </div>
          </div>
        </div>

        {/* 5 Main Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
          {[
            { id: 'fundamental', label: '1. Teori Fundamental (SVO & 4 Kalimat)', icon: '🌱', color: 'border-amber-500/40' },
            { id: 'intermediate', label: '2. Teori Intermediate (Parafrase & PEEL)', icon: '🌿', color: 'border-cyan-500/40' },
            { id: 'advanced', label: '3. Teori Advanced (Inversi & Cleft)', icon: '⚡', color: 'border-purple-500/40' },
            { id: 'blueprints', label: '4. Blueprint Task 1 & Task 2', icon: '📐', color: 'border-emerald-500/40' },
            { id: 'rubric', label: '5. Rubrik Penilaian Cambridge', icon: '🎯', color: 'border-indigo-500/40' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/40'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: TEORI FUNDAMENTAL */}
      {/* ========================================================================= */}
      {activeTab === 'fundamental' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Subtopic Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FUNDAMENTAL_WRITING_THEORY.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedFundIdx(idx);
                }}
                className={`p-4 rounded-xl text-left transition-all border ${
                  selectedFundIdx === idx
                    ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-950/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{m.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/50">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold text-white line-clamp-1">{m.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{m.titleId}</p>
              </button>
            ))}
          </div>

          {/* Active Fundamental Module Detail Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {fundModule.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                  {fundModule.title}
                </h2>
                <p className="text-sm text-amber-400 font-medium mt-0.5">{fundModule.titleId}</p>
              </div>

              <button
                onClick={() => handleMastered(fundModule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  completedQuizzes[fundModule.id]
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {completedQuizzes[fundModule.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sudah Dikuasai (+35 XP)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Tandai Paham (+35 XP)</span>
                  </>
                )}
              </button>
            </div>

            {/* Formula Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 to-slate-950 border border-amber-500/30">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                📐 Rumus Struktur Baku:
              </span>
              <p className="font-mono text-xs md:text-sm text-amber-100 font-bold">{fundModule.formulaEn}</p>
              <p className="text-xs text-slate-300 mt-1.5 italic">🇮🇩 {fundModule.formulaId}</p>
            </div>

            {/* Concept Explanation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Penjelasan Konsep & Logika Teori</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{fundModule.conceptEn}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                🇮🇩 <strong className="text-slate-300">Terjemahan & Panduan Indonesia:</strong> {fundModule.conceptId}
              </p>
            </div>

            {/* Before vs After Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-rose-200">
                <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CONTOH KELIRU / LEMAH (Band 5.0 - 5.5)</span>
                </div>
                <p className="text-sm font-medium">{fundModule.badExample.en}</p>
                <p className="text-xs text-rose-300/80 mt-2 italic">🇮🇩 {fundModule.badExample.id}</p>
                <div className="mt-2 pt-2 border-t border-rose-900/40 text-[11px] text-rose-300">
                  ⚠️ <strong>Kelemahan:</strong> {fundModule.badExample.reasonId}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-200">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>CONTOH TEPAT & AKURAT (Band 8.0+)</span>
                </div>
                <p className="text-sm font-semibold">{fundModule.goodExample.en}</p>
                <p className="text-xs text-emerald-300/80 mt-2 italic">🇮🇩 {fundModule.goodExample.id}</p>
                <div className="mt-2 pt-2 border-t border-emerald-900/40 text-[11px] text-emerald-300">
                  ✨ <strong>Keunggulan:</strong> {fundModule.goodExample.reasonId}
                </div>
              </div>
            </div>

            {/* Rules List */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Aturan Emas & Kaidah Penulisan
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {fundModule.rulesId.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Practice Prompt */}
            {fundModule.practicePrompt && (
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Latihan Mandiri
                  </h4>
                  <button
                    onClick={() => toggleRevealAnswer(fundModule.id)}
                    className="px-3 py-1 rounded-lg bg-indigo-600/40 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-bold transition"
                  >
                    {revealedAnswers[fundModule.id] ? 'Sembunyikan Jawaban' : 'Lihat Model Jawaban Band 8+'}
                  </button>
                </div>
                <p className="text-xs text-slate-200 font-medium">{fundModule.practicePrompt.en}</p>
                <p className="text-xs text-slate-400 italic">🇮🇩 {fundModule.practicePrompt.id}</p>

                {revealedAnswers[fundModule.id] && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs animate-fadeIn space-y-1">
                    <span className="text-[11px] font-bold text-emerald-400 block">Jawaban Model Resmi:</span>
                    <p className="text-slate-100 font-medium">{fundModule.practicePrompt.modelAnswerEn}</p>
                    <p className="text-slate-400 italic">🇮🇩 {fundModule.practicePrompt.modelAnswerId}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TEORI INTERMEDIATE */}
      {/* ========================================================================= */}
      {activeTab === 'intermediate' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Subtopic Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {INTERMEDIATE_WRITING_THEORY.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedInterIdx(idx);
                }}
                className={`p-4 rounded-xl text-left transition-all border ${
                  selectedInterIdx === idx
                    ? 'bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{m.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold text-white line-clamp-1">{m.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{m.titleId}</p>
              </button>
            ))}
          </div>

          {/* Active Intermediate Module Detail Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {interModule.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                  {interModule.title}
                </h2>
                <p className="text-sm text-cyan-400 font-medium mt-0.5">{interModule.titleId}</p>
              </div>

              <button
                onClick={() => handleMastered(interModule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  completedQuizzes[interModule.id]
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {completedQuizzes[interModule.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sudah Dikuasai (+35 XP)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Tandai Paham (+35 XP)</span>
                  </>
                )}
              </button>
            </div>

            {/* Formula Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-950 border border-cyan-500/30">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                📐 Rumus Struktur Baku:
              </span>
              <p className="font-mono text-xs md:text-sm text-cyan-100 font-bold">{interModule.formulaEn}</p>
              <p className="text-xs text-slate-300 mt-1.5 italic">🇮🇩 {interModule.formulaId}</p>
            </div>

            {/* Concept Explanation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Penjelasan Konsep & Logika Teori</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{interModule.conceptEn}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                🇮🇩 <strong className="text-slate-300">Terjemahan & Panduan Indonesia:</strong> {interModule.conceptId}
              </p>
            </div>

            {/* Before vs After Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-rose-200">
                <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CONTOH KELIRU / LEMAH (Band 5.5 - 6.0)</span>
                </div>
                <p className="text-sm font-medium">{interModule.badExample.en}</p>
                <p className="text-xs text-rose-300/80 mt-2 italic">🇮🇩 {interModule.badExample.id}</p>
                <div className="mt-2 pt-2 border-t border-rose-900/40 text-[11px] text-rose-300">
                  ⚠️ <strong>Kelemahan:</strong> {interModule.badExample.reasonId}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-200">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>CONTOH TEPAT & AKURAT (Band 8.0+)</span>
                </div>
                <p className="text-sm font-semibold">{interModule.goodExample.en}</p>
                <p className="text-xs text-emerald-300/80 mt-2 italic">🇮🇩 {interModule.goodExample.id}</p>
                <div className="mt-2 pt-2 border-t border-emerald-900/40 text-[11px] text-emerald-300">
                  ✨ <strong>Keunggulan:</strong> {interModule.goodExample.reasonId}
                </div>
              </div>
            </div>

            {/* Rules List */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                Aturan Emas & Kaidah Penulisan
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {interModule.rulesId.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Practice Prompt */}
            {interModule.practicePrompt && (
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Latihan Mandiri
                  </h4>
                  <button
                    onClick={() => toggleRevealAnswer(interModule.id)}
                    className="px-3 py-1 rounded-lg bg-indigo-600/40 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-bold transition"
                  >
                    {revealedAnswers[interModule.id] ? 'Sembunyikan Jawaban' : 'Lihat Model Jawaban Band 8+'}
                  </button>
                </div>
                <p className="text-xs text-slate-200 font-medium">{interModule.practicePrompt.en}</p>
                <p className="text-xs text-slate-400 italic">🇮🇩 {interModule.practicePrompt.id}</p>

                {revealedAnswers[interModule.id] && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs animate-fadeIn space-y-1">
                    <span className="text-[11px] font-bold text-emerald-400 block">Jawaban Model Resmi:</span>
                    <p className="text-slate-100 font-medium">{interModule.practicePrompt.modelAnswerEn}</p>
                    <p className="text-slate-400 italic">🇮🇩 {interModule.practicePrompt.modelAnswerId}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: TEORI ADVANCED */}
      {/* ========================================================================= */}
      {activeTab === 'advanced' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Subtopic Selector */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {ADVANCED_WRITING_THEORY.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedAdvIdx(idx);
                }}
                className={`p-3 rounded-xl text-left transition-all border ${
                  selectedAdvIdx === idx
                    ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-950/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-lg">{m.icon}</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/50">
                    Band 8.5+
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white line-clamp-1">{m.title.split(' ')[0]}</h3>
                <p className="text-[10px] text-purple-300 line-clamp-1 mt-0.5">{m.titleId}</p>
              </button>
            ))}
          </div>

          {/* Active Advanced Module Detail Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {advModule.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                  {advModule.title}
                </h2>
                <p className="text-sm text-purple-400 font-medium mt-0.5">{advModule.titleId}</p>
              </div>

              <button
                onClick={() => handleMastered(advModule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  completedQuizzes[advModule.id]
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {completedQuizzes[advModule.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sudah Dikuasai (+35 XP)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Tandai Paham (+35 XP)</span>
                  </>
                )}
              </button>
            </div>

            {/* Formula Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/30 to-slate-950 border border-purple-500/30">
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                📐 Rumus Struktur Baku:
              </span>
              <p className="font-mono text-xs md:text-sm text-purple-100 font-bold">{advModule.formulaEn}</p>
              <p className="text-xs text-slate-300 mt-1.5 italic">🇮🇩 {advModule.formulaId}</p>
            </div>

            {/* Concept Explanation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Penjelasan Konsep & Logika Teori</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{advModule.conceptEn}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                🇮🇩 <strong className="text-slate-300">Terjemahan & Panduan Indonesia:</strong> {advModule.conceptId}
              </p>
            </div>

            {/* Before vs After Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-rose-200">
                <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CONTOH KELIRU / LEMAH (Band 5.5 - 6.0)</span>
                </div>
                <p className="text-sm font-medium">{advModule.badExample.en}</p>
                <p className="text-xs text-rose-300/80 mt-2 italic">🇮🇩 {advModule.badExample.id}</p>
                <div className="mt-2 pt-2 border-t border-rose-900/40 text-[11px] text-rose-300">
                  ⚠️ <strong>Kelemahan:</strong> {advModule.badExample.reasonId}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-200">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>CONTOH TEPAT & AKURAT (Band 8.5+)</span>
                </div>
                <p className="text-sm font-semibold">{advModule.goodExample.en}</p>
                <p className="text-xs text-emerald-300/80 mt-2 italic">🇮🇩 {advModule.goodExample.id}</p>
                <div className="mt-2 pt-2 border-t border-emerald-900/40 text-[11px] text-emerald-300">
                  ✨ <strong>Keunggulan:</strong> {advModule.goodExample.reasonId}
                </div>
              </div>
            </div>

            {/* Rules List */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                Aturan Emas & Kaidah Penulisan
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {advModule.rulesId.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Practice Prompt */}
            {advModule.practicePrompt && (
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Latihan Mandiri
                  </h4>
                  <button
                    onClick={() => toggleRevealAnswer(advModule.id)}
                    className="px-3 py-1 rounded-lg bg-indigo-600/40 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-bold transition"
                  >
                    {revealedAnswers[advModule.id] ? 'Sembunyikan Jawaban' : 'Lihat Model Jawaban Band 8+'}
                  </button>
                </div>
                <p className="text-xs text-slate-200 font-medium">{advModule.practicePrompt.en}</p>
                <p className="text-xs text-slate-400 italic">🇮🇩 {advModule.practicePrompt.id}</p>

                {revealedAnswers[advModule.id] && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs animate-fadeIn space-y-1">
                    <span className="text-[11px] font-bold text-emerald-400 block">Jawaban Model Resmi:</span>
                    <p className="text-slate-100 font-medium">{advModule.practicePrompt.modelAnswerEn}</p>
                    <p className="text-slate-400 italic">🇮🇩 {advModule.practicePrompt.modelAnswerId}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: BLUEPRINT TASK 1 & TASK 2 */}
      {/* ========================================================================= */}
      {activeTab === 'blueprints' && (
        <div className="space-y-8 animate-fadeIn">
          {/* TASK 1 FORMULA */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
                <span>Task 1 Academic Report</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {TASK1_WRITING_GUIDE.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{TASK1_WRITING_GUIDE.titleId}</p>
            </div>

            {/* 4 Paragraph Formula */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                Formula Standar 4 Paragraf Task 1
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TASK1_WRITING_GUIDE.academicFormula.map(f => (
                  <div key={f.stepNumber} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                        Langkah {f.stepNumber}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-2">{f.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{f.nameId}</p>
                      
                      <div className="mt-3 p-2.5 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">
                        <strong className="text-emerald-400 block mb-1">Tujuan:</strong>
                        <p>{f.purposeEn}</p>
                        <p className="text-slate-400 mt-1 italic">🇮🇩 {f.purposeId}</p>
                      </div>

                      <div className="mt-3 p-2.5 rounded-lg bg-indigo-950/40 text-xs text-indigo-200 border border-indigo-900/40">
                        <strong className="text-indigo-400 block mb-1">Template Kalimat:</strong>
                        <p className="font-mono text-[11px] leading-relaxed">{f.templateEn}</p>
                        <p className="text-slate-400 mt-1 font-sans italic">🇮🇩 {f.templateId}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-amber-400 font-medium">
                      💡 Tip: {f.keyTips}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Types Guide */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                Fokus Analisis Berdasarkan Jenis Grafik
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TASK1_WRITING_GUIDE.chartTypes.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <h5 className="text-xs font-bold text-cyan-400">{c.type}</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{c.focusEn}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">🇮🇩 {c.focusId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TASK 2 FORMULA */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
                <span>Task 2 Academic Essay</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {TASK2_WRITING_GUIDE.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{TASK2_WRITING_GUIDE.titleId}</p>
            </div>

            {/* Essay Type Switcher */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {TASK2_WRITING_GUIDE.essayTypes.map(e => (
                  <button
                    key={e.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedEssayType(e.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      selectedEssayType === e.id
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {e.type}
                  </button>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{essayType.type}</h4>
                  <span className="text-xs text-indigo-400 font-semibold">{essayType.typeId}</span>
                </div>
                
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-[11px] font-bold text-amber-400 uppercase block mb-1">Pola Pertanyaan Soal:</span>
                  <p className="text-xs text-slate-200 font-medium">{essayType.promptPatternEn}</p>
                  <p className="text-xs text-slate-400 italic mt-0.5">🇮🇩 {essayType.promptPatternId}</p>
                </div>

                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/40">
                  <span className="text-[11px] font-bold text-indigo-400 uppercase block mb-1">Rangka Struktur Paragraf:</span>
                  <p className="text-xs text-indigo-200 font-mono leading-relaxed">{essayType.structureEn}</p>
                  <p className="text-xs text-slate-300 font-sans mt-1.5 leading-relaxed">🇮🇩 <strong className="text-slate-200">Terjemahan Rangka:</strong> {essayType.structureId}</p>
                </div>
              </div>
            </div>

            {/* PEEL Paragraph Architecture */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                {TASK2_WRITING_GUIDE.peelFramework.title}
              </h3>
              <p className="text-xs text-slate-400">{TASK2_WRITING_GUIDE.peelFramework.titleId}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TASK2_WRITING_GUIDE.peelFramework.steps.map(step => (
                  <div key={step.letter} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-sm">
                        {step.letter}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{step.name}</h4>
                        <p className="text-[11px] text-slate-400">{step.descId}</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 text-xs text-slate-200 border border-slate-800">
                      <p className="font-serif italic text-[11px] text-amber-100">"{step.exampleEn}"</p>
                      <p className="text-slate-400 text-[10px] mt-1 font-sans">🇮🇩 "{step.exampleId}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: RUBRIK PENILAIAN CAMBRIDGE */}
      {/* ========================================================================= */}
      {activeTab === 'rubric' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Selector Descriptor */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {BAND_DESCRIPTORS_LITERACY.map(d => (
              <button
                key={d.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedDescriptor(d.id);
                }}
                className={`p-4 rounded-xl text-left transition-all border ${
                  selectedDescriptor === d.id
                    ? 'bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-950/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{d.icon}</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {d.weight}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1">{d.id.toUpperCase()}</h3>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{d.titleId}</p>
              </button>
            ))}
          </div>

          {/* Active Descriptor Detail Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{descriptor.icon}</span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {descriptor.title}
                  </h2>
                  <p className="text-sm text-indigo-400 font-medium">{descriptor.titleId} • {descriptor.weight}</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <p className="text-sm text-slate-200 font-medium">{descriptor.summaryEn}</p>
                <p className="text-xs text-slate-400 mt-1 italic">🇮🇩 {descriptor.summaryId}</p>
              </div>
            </div>

            {/* Band Level Breakdown */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Perbedaan Performa Berdasarkan Tingkat Band
              </h3>
              <div className="space-y-3">
                {descriptor.bandDifferences.map((b, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      b.band.includes('8.0') 
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-100'
                        : b.band.includes('7.0')
                        ? 'bg-indigo-950/20 border-indigo-500/40 text-indigo-100'
                        : 'bg-slate-950/40 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800/90 text-white">
                        {b.band}
                      </span>
                      {b.band.includes('8.0') && (
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Target Kelulusan
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed">{b.characteristicsEn}</p>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      🇮🇩 <strong className="text-slate-300 font-medium">Terjemahan:</strong> {b.characteristicsId}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Rules */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                Aturan Emas Penguji Cambridge (Golden Rules)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {descriptor.goldenRules.map((gr, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="text-xs text-indigo-300 font-semibold mb-1">
                      {idx + 1}. {gr.ruleEn}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      🇮🇩 {gr.ruleId}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
