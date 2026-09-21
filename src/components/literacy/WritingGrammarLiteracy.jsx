import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Award, Target, CheckCircle2, 
  HelpCircle, ArrowRight, Layers, FileText, Compass, 
  Search, ShieldAlert, Zap, Feather, Check
} from 'lucide-react';
import { 
  BAND_DESCRIPTORS_LITERACY, 
  TASK1_WRITING_GUIDE, 
  TASK2_WRITING_GUIDE, 
  ADVANCED_GRAMMAR_MODULES 
} from '../../data/writingGrammarLiteracyData';
import { soundFx } from '../../utils/soundEffects';

export default function WritingGrammarLiteracy({ onAddXp }) {
  const [activeTab, setActiveTab] = useState('rubric'); // 'rubric' | 'blueprints' | 'grammar' | 'peel'
  const [selectedDescriptor, setSelectedDescriptor] = useState('tr');
  const [selectedGrammarIdx, setSelectedGrammarIdx] = useState(0);
  const [selectedEssayType, setSelectedEssayType] = useState('opinion');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedGrammarQuizzes, setCompletedGrammarQuizzes] = useState({});

  const descriptor = BAND_DESCRIPTORS_LITERACY.find(d => d.id === selectedDescriptor) || BAND_DESCRIPTORS_LITERACY[0];
  const grammarModule = ADVANCED_GRAMMAR_MODULES[selectedGrammarIdx] || ADVANCED_GRAMMAR_MODULES[0];
  const essayType = TASK2_WRITING_GUIDE.essayTypes.find(e => e.id === selectedEssayType) || TASK2_WRITING_GUIDE.essayTypes[0];

  const handleGrammarMastered = (id) => {
    if (!completedGrammarQuizzes[id]) {
      setCompletedGrammarQuizzes(prev => ({ ...prev, [id]: true }));
      soundFx.playLevelUp();
      if (onAddXp) onAddXp(35);
    }
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
              Kuasai 4 kriteria penilaian penguji Cambridge (TR, CC, LR, GRA), arsitektur baku esai Task 1 & Task 2, serta formula sintaksis tingkat lanjut secara dwibahasa (English & Bahasa Indonesia).
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-center min-w-[110px]">
              <span className="block text-xs text-slate-400 font-medium">Kriteria Penguji</span>
              <span className="text-lg font-bold text-emerald-400">4 Pilar</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-center min-w-[110px]">
              <span className="block text-xs text-slate-400 font-medium">Target Grammar</span>
              <span className="text-lg font-bold text-indigo-400">Band 8.5+</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-800 pt-6">
          {[
            { id: 'rubric', label: '1. Rubrik & 4 Kriteria Band', icon: '🎯' },
            { id: 'blueprints', label: '2. Blueprint Task 1 & Task 2', icon: '📐' },
            { id: 'grammar', label: '3. Lab Grammar Band 8.5+', icon: '⚡' },
            { id: 'peel', label: '4. Formula Paragraf PEEL', icon: '🧱' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
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
      {/* TAB 1: 4 BAND DESCRIPTORS LITERACY */}
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

      {/* ========================================================================= */}
      {/* TAB 2: TASK 1 & TASK 2 MASTER BLUEPRINTS */}
      {/* ========================================================================= */}
      {activeTab === 'blueprints' && (
        <div className="space-y-8 animate-fadeIn">
          {/* TASK 1 FORMULA */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                <span>Task 1 Academic & General Training</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {TASK1_WRITING_GUIDE.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{TASK1_WRITING_GUIDE.titleId}</p>
            </div>

            {/* 4 Paragraph Formula */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Formula Standar 4 Paragraf Task 1
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TASK1_WRITING_GUIDE.academicFormula.map(f => (
                  <div key={f.step} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        Langkah {f.step}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-2">{f.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{f.nameId}</p>
                      
                      <div className="mt-3 p-2.5 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">
                        <strong className="text-cyan-400 block mb-1">Tujuan:</strong>
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
                    <h5 className="text-xs font-bold text-white text-cyan-400">{c.type}</h5>
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
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LAB GRAMMAR AKADEMIS BAND 8.5+ */}
      {/* ========================================================================= */}
      {activeTab === 'grammar' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Horizontal Module Selector */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {ADVANCED_GRAMMAR_MODULES.map((g, idx) => (
              <button
                key={g.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedGrammarIdx(idx);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedGrammarIdx === idx
                    ? 'bg-indigo-950 border-indigo-500 shadow-md shadow-indigo-950/60'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <span className="text-xs font-bold text-white block line-clamp-1">{g.title.split(' ')[0]}</span>
                <span className="text-[10px] text-indigo-400 block line-clamp-1 mt-0.5">{g.badge}</span>
              </button>
            ))}
          </div>

          {/* Module Deep-Dive Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {grammarModule.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                  {grammarModule.title}
                </h2>
              </div>

              <button
                onClick={() => handleGrammarMastered(grammarModule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  completedGrammarQuizzes[grammarModule.id]
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {completedGrammarQuizzes[grammarModule.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sudah Dikuasai (+35 XP)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Tandai Paham (+35 XP)</span>
                  </>
                )}
              </button>
            </div>

            {/* Concept Explanation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Konsep Gramatikal</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{grammarModule.conceptEn}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                🇮🇩 <strong className="text-slate-300">Penjelasan Indonesia:</strong> {grammarModule.conceptId}
              </p>
            </div>

            {/* Before vs After Transformer Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-rose-200">
                <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>SEBELUM (Band 5.5 - 6.0: Informal / Canggung)</span>
                </div>
                <p className="text-sm font-medium">{grammarModule.beforeTextEn}</p>
                <p className="text-xs text-rose-300/80 mt-2 italic">{grammarModule.beforeTextId}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-200">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>SESUDAH (Band 8.5: Padat & Presisi Akademik)</span>
                </div>
                <p className="text-sm font-semibold">{grammarModule.afterTextEn}</p>
                <p className="text-xs text-emerald-300/80 mt-2 italic">{grammarModule.afterTextId}</p>
              </div>
            </div>

            {/* Key Rules List */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Panduan Praktis di Hari Ujian
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {grammarModule.rulesId.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PEEL PARAGRAPH ARCHITECTURE */}
      {/* ========================================================================= */}
      {activeTab === 'peel' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
                <span>Metode Menulis Paragraf Kohesif</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {TASK2_WRITING_GUIDE.peelFramework.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{TASK2_WRITING_GUIDE.peelFramework.titleId}</p>
            </div>

            {/* PEEL 4 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TASK2_WRITING_GUIDE.peelFramework.steps.map(step => (
                <div key={step.letter} className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-base">
                        {step.letter}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{step.name}</h4>
                        <p className="text-xs text-slate-400">{step.descId}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {step.descEn}
                    </p>

                    <div className="p-3 rounded-lg bg-slate-900 text-xs border border-slate-800 text-slate-200">
                      <strong className="text-amber-400 block mb-1">Contoh Kalimat Model:</strong>
                      <p className="font-serif italic text-[11px] leading-relaxed text-amber-100">"{step.exampleEn}"</p>
                      <p className="text-slate-400 text-[11px] mt-1.5 font-sans">
                        🇮🇩 <strong className="text-slate-300 font-medium">Terjemahan:</strong> "{step.exampleId}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Synthesized Complete Paragraph Illustration */}
            <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/40">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Paragraf Tubuh Utuh yang Terbentuk dari Rangkaian PEEL di Atas:
              </h4>
              <p className="text-xs text-indigo-200 font-serif leading-relaxed">
                "The primary impetus behind runaway urban sprawl is the escalating cost of inner-city accommodation. Because metropolitan real estate markets are increasingly driven by speculative investment, average working families find themselves economically priced out of central districts. In cities such as London and Sydney, over sixty percent of young professionals now commute upwards of two hours daily from outer commuter belts. Consequently, this spatial dislocation underscores the urgent imperative for government-mandated affordable housing quotas."
              </p>
              <div className="mt-3 pt-3 border-t border-indigo-900/60 text-[11px] text-slate-400 leading-relaxed">
                🇮🇩 <strong className="text-slate-300">Terjemahan Indonesia:</strong> "Pendorong utama di balik meluasnya pemukiman pinggiran kota adalah melonjaknya biaya hunian di pusat kota. Karena pasar properti metropolitan kian dipacu oleh investasi spekulatif, keluarga pekerja biasa mendapati diri mereka terlempar keluar dari distrik pusat kota akibat harga yang tak terjangkau. Di kota-kota seperti London dan Sydney, lebih dari enam puluh persen kaum profesional muda kini menempuh perjalanan komuter lebih dari dua jam setiap hari dari daerah pinggiran. Akibatnya, dislokasi tempat tinggal ini menegaskan kembali urgensi penerapan kuota perumahan terjangkau oleh pemerintah."
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
