import React from 'react';
import { 
  Trophy, Award, Target, CheckCircle2, TrendingUp, 
  Printer, ArrowRight, BookOpen, Brain, Keyboard, 
  Sparkles, Layers, ShieldCheck, Zap, AlertCircle, 
  BarChart3, Compass, Check
} from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

export default function GradeBook({ xp, streak, level, levelTitle, completedDrills = [], onNavigateTab }) {
  
  // Calculate dynamic projected band score based on XP and activity
  let projectedBand = 5.5;
  let bandStatus = 'Pondasi Awal';
  let bandColor = 'text-amber-400';

  if (xp >= 3500) {
    projectedBand = 8.5;
    bandStatus = 'Ahli Esai Akademik (C2 Proficient)';
    bandColor = 'text-purple-400';
  } else if (xp >= 2200) {
    projectedBand = 8.0;
    bandStatus = 'Sangat Menguasai (Band 8 Target)';
    bandColor = 'text-emerald-400';
  } else if (xp >= 1400) {
    projectedBand = 7.5;
    bandStatus = 'Kompeten Lanjut (C1 Advanced)';
    bandColor = 'text-indigo-400';
  } else if (xp >= 700) {
    projectedBand = 6.5;
    bandStatus = 'Menengah Atas (B2 Competent)';
    bandColor = 'text-cyan-400';
  } else if (xp >= 300) {
    projectedBand = 6.0;
    bandStatus = 'Menengah (B2 Independent)';
    bandColor = 'text-teal-400';
  }

  // 4 Cambridge Writing Criteria Diagnostic Scores (out of 9.0)
  const criteriaScores = [
    {
      id: 'tr',
      code: 'TR / TA',
      title: 'Task Achievement & Response',
      titleId: 'Pencapaian Tugas & Jawaban Soal',
      score: Math.min(9.0, (projectedBand + 0.0).toFixed(1)),
      weight: '25%',
      progress: Math.min(100, Math.round((projectedBand / 9.0) * 100)),
      icon: '🎯',
      color: 'bg-emerald-500',
      evalEn: 'Consistently presents a well-developed response, addressing all prompt angles with logical supporting evidence.',
      evalId: 'Menjawab seluruh pertanyaan secara tuntas dengan ide pendukung yang matang dan terarah.'
    },
    {
      id: 'cc',
      code: 'CC',
      title: 'Coherence & Cohesion',
      titleId: 'Keterpaduan & Alur Logika Paragraf',
      score: Math.min(9.0, (projectedBand - 0.2).toFixed(1)),
      weight: '25%',
      progress: Math.min(100, Math.round(((projectedBand - 0.2) / 9.0) * 100)),
      icon: '🔗',
      color: 'bg-indigo-500',
      evalEn: 'Sequences ideas logically using fluent cohesive devices; paragraphing is sharp with clear central topics (PEEL framework).',
      evalId: 'Menyusun alur paragraf secara kohesif dengan metode PEEL dan kata transisi formal.'
    },
    {
      id: 'lr',
      code: 'LR',
      title: 'Lexical Resource',
      titleId: 'Kekayaan Kosa Kata & Kolokasi',
      score: Math.min(9.0, (projectedBand + 0.3).toFixed(1)),
      weight: '25%',
      progress: Math.min(100, Math.round(((projectedBand + 0.3) / 9.0) * 100)),
      icon: '📚',
      color: 'bg-amber-500',
      evalEn: 'Deploys a wide lexical repertoire with natural collocations, subtle precision, and zero awkward repetition.',
      evalId: 'Kekayaan kosa kata Band 8+ sangat kuat, kolokasi alami, serta minim pengulangan kata canggung.'
    },
    {
      id: 'gra',
      code: 'GRA',
      title: 'Grammatical Range & Accuracy',
      titleId: 'Variasi Struktur & Akurasi Grammar',
      score: Math.min(9.0, (projectedBand - 0.1).toFixed(1)),
      weight: '25%',
      progress: Math.min(100, Math.round(((projectedBand - 0.1) / 9.0) * 100)),
      icon: '⚖️',
      color: 'bg-purple-500',
      evalEn: 'Uses a rich mix of complex, compound, and inverted sentences; vast majority of sentences are error-free.',
      evalId: 'Rentang kalimat kompleks, pasif, dan inversi luas dengan tingkat kesalahan gramatikal mendekati nol.'
    }
  ];

  // Module Progress Status
  const modulesTrack = [
    {
      id: 'beginnerPuzzle',
      name: 'Puzzle Balok Kata (S-V-O)',
      category: 'Pondasi',
      target: 'Level 0 - 5',
      status: 'Selesai / Aktif',
      mastery: '95%',
      color: 'text-emerald-400'
    },
    {
      id: 'writingLiteracy',
      name: 'Literasi Writing & Grammar',
      category: 'Pondasi',
      target: '4 Rubrik & Formula PEEL',
      status: 'Terdokumentasi',
      mastery: '100%',
      color: 'text-cyan-400'
    },
    {
      id: 'skillTree',
      name: 'Skill Tree Roadmap',
      category: 'Pondasi',
      target: 'Peta 5 Level',
      status: `${completedDrills.length} Level Tuntas`,
      mastery: `${Math.min(100, completedDrills.length * 20)}%`,
      color: 'text-indigo-400'
    },
    {
      id: 'mindMapVault',
      name: 'Mind Map Kosakata 3 Lapis',
      category: 'Latihan Skill',
      target: '6 Domain Makro',
      status: 'Aktif Belajar',
      mastery: '88%',
      color: 'text-emerald-400'
    },
    {
      id: 'vocabMaster',
      name: 'Vocab Memory Vault 6000',
      category: 'Latihan Skill',
      target: '300 Set Harian',
      status: 'Dalam Progres',
      mastery: `${Math.min(100, Math.round((xp / 3000) * 100))}%`,
      color: 'text-amber-400'
    },
    {
      id: 'copyworkArena',
      name: 'Kinesthetic Copywork Arena',
      category: 'Latihan Skill',
      target: '70 Teks + Visual Grafik',
      status: 'Kinetik Aktif',
      mastery: '82%',
      color: 'text-purple-400'
    },
    {
      id: 'sentenceLab',
      name: 'Sentence Transformer',
      category: 'Latihan Skill',
      target: 'Transformasi Band 8',
      status: 'Rutin',
      mastery: '78%',
      color: 'text-blue-400'
    },
    {
      id: 'collocations',
      name: 'Collocation Forge',
      category: 'Latihan Skill',
      target: 'Frasa Akademik',
      status: 'Terkalibrasi',
      mastery: '85%',
      color: 'text-rose-400'
    },
    {
      id: 'task1Lab',
      name: 'Task 1: Grafik & Data',
      category: 'Simulasi',
      target: 'Line, Bar, Pie, Process, Map',
      status: 'Siap Uji',
      mastery: '75%',
      color: 'text-teal-400'
    },
    {
      id: 'task2Builder',
      name: 'Task 2: Arena Esai Penuh',
      category: 'Simulasi',
      target: 'Esai 250+ Kata',
      status: 'Siap Uji',
      mastery: '80%',
      color: 'text-orange-400'
    }
  ];

  // Print handler
  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* GradeBook Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Transkrip Nilai Akademik & Rapor Siswa Resmi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              GradeBook Evaluasi Belajar IELTS Writing
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Analisis diagnostik menyeluruh performa menulis Anda berdasarkan 4 kriteria penguji Cambridge (Task Response, Coherence, Lexical Resource, dan Grammatical Accuracy).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold flex items-center gap-2 transition shadow"
              title="Cetak Rapor ke Format PDF atau Kertas"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>

        {/* Big Scorecard Widgets */}
        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Proyeksi Nilai Band
            </span>
            <div className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${bandColor}`}>
              Band {projectedBand.toFixed(1)}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block line-clamp-1">{bandStatus}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Total Pengalaman (XP)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mt-1">
              {xp} <span className="text-xs text-slate-500 font-normal">XP</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">Tingkat: {levelTitle || 'Apprentice'}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Disiplin Belajar
            </span>
            <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono mt-1 flex items-center justify-center gap-1">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
              <span>{streak}</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">Hari Beruntun</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Kesiapan Ujian
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
              {Math.min(95, Math.round(50 + (xp / 100)))}%
            </div>
            <span className="text-[10px] text-emerald-300 mt-1 block font-semibold">Siap Uji Cambridge</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 CAMBRIDGE CRITERIA DIAGNOSTIC DASHBOARD */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-400" />
            <span>Diagnostik 4 Kriteria Band Descriptors Cambridge (Skor Maksimal 9.0)</span>
          </h3>
          <span className="text-xs text-slate-400">Bobot 25% Tiap Kriteria</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criteriaScores.map(crit => (
            <div key={crit.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{crit.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-300 font-mono bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800/40">
                        {crit.code}
                      </span>
                      <h4 className="text-sm font-bold text-white">{crit.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{crit.titleId}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black text-white font-mono">{crit.score}</span>
                  <span className="text-xs text-slate-500 font-mono"> / 9.0</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full ${crit.color} transition-all duration-1000 rounded-full`} 
                  style={{ width: `${crit.progress}%` }} 
                />
              </div>

              {/* Bilingual Evaluation Text */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                <p className="text-slate-300 leading-relaxed font-medium">{crit.evalEn}</p>
                <p className="text-slate-400 mt-1.5 leading-relaxed italic">🇮🇩 {crit.evalId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODULE PROGRESS MATRIX (TABEL KETUNTASAN SELURUH MODUL BELAJAR) */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Matriks Ketuntasan Modul Kurikulum IELTS</span>
          </h3>
          <span className="text-xs text-slate-400">{modulesTrack.length} Modul Terintegrasi</span>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800 text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Nama Modul</th>
                  <th className="py-3.5 px-4">Kategori</th>
                  <th className="py-3.5 px-4">Cakupan Target</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 text-right">Tingkat Penguasaan</th>
                  {onNavigateTab && <th className="py-3.5 px-4 text-center">Aksi</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {modulesTrack.map(mod => (
                  <tr key={mod.id} className="hover:bg-slate-850/60 transition">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{mod.name}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                        {mod.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{mod.target}</td>
                    <td className="py-3.5 px-4 text-center font-medium text-emerald-400">{mod.status}</td>
                    <td className="py-3.5 px-4 text-right font-bold font-mono text-white">
                      <span className={mod.color}>{mod.mastery}</span>
                    </td>
                    {onNavigateTab && (
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            onNavigateTab(mod.id);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-[10px] font-bold transition flex items-center gap-1 mx-auto"
                        >
                          <span>Buka</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STRENGTHS & ACTION PLAN RECOMMENDATIONS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Kekuatan Utama Siswa (Diagnostik Positif)</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Kekayaan Kosa Kata C1/C2:</strong> Menunjukkan daya serap tinggi terhadap kolokasi Band 8 pada topik Lingkungan, Teknologi, dan Pendidikan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Ketepatan Struktur S-V-O:</strong> Pemahaman klausa dasar dan konjungsi koordinatif telah melekat kuat tanpa kesalahan tata bahasa elementer.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Konsistensi Belajar:</strong> Disiplin latihan beruntun membangun memori otot motorik pengetikan kinetik secara berkelanjutan.</span>
            </li>
          </ul>
        </div>

        {/* Action Plan */}
        <div className="p-6 rounded-3xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
            <Compass className="w-5 h-5" />
            <span>Rekomendasi Peningkatan Menuju Band 8.5+</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">➔</span>
              <span><strong>Perbanyak Latihan Inversi Negatif:</strong> Tingkatkan skor GRA dengan mengetik variasi klausa "Under no circumstances..." dan "Seldom do..." di Copywork Arena.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">➔</span>
              <span><strong>Kuasai Paragraf Overview Task 1:</strong> Pastikan paragraf kedua selalu merangkum tren makro tanpa mencantumkan angka numerik absolut.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">➔</span>
              <span><strong>Eksplorasi Mind Map Bulatan:</strong> Hafalkan pasangan kata tematik Lapis 3 di domain Hukum & Kriminalitas untuk memperluas variasi diksi esai.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
