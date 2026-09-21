import React, { useState, useEffect } from 'react';
import { 
  Trophy, Award, Target, CheckCircle2, TrendingUp, 
  Printer, ArrowRight, BookOpen, Brain, Keyboard, 
  Sparkles, Layers, ShieldCheck, Zap, AlertCircle, 
  BarChart3, Compass, Check, Flame, PlusCircle, 
  Trash2, FileText, Calendar, Clock, Edit3, X, RefreshCw
} from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

const STORAGE_KEY = 'ielts_exam_records';

const SAMPLE_EXAM_RECORDS = [
  {
    id: 'sample-1',
    date: '2026-09-05',
    type: 'Task 1 Academic',
    title: 'Line Graph: Global Renewable Energy Production (2000-2025)',
    taskResponse: 6.5,
    coherenceCohesion: 6.5,
    lexicalResource: 6.5,
    grammaticalRange: 6.5,
    overallBand: 6.5,
    wordCount: 178,
    timeSpentMin: 22,
    feedbackEn: 'Good overall overview identified. However, numerical data grouping in Body 2 was slightly cluttered. Watch out for repeated prepositions like "increased by".',
    feedbackId: 'Paragraf Overview sudah teridentifikasi dengan baik. Namun pengelompokan data numerik di Body 2 masih agak menumpuk. Perhatikan variasi preposisi komparasi.'
  },
  {
    id: 'sample-2',
    date: '2026-09-12',
    type: 'Task 2 Essay',
    title: 'Opinion Essay: Universal Basic Income vs Free Tertiary Education',
    taskResponse: 7.5,
    coherenceCohesion: 7.0,
    lexicalResource: 7.5,
    grammaticalRange: 7.0,
    overallBand: 7.5,
    wordCount: 298,
    timeSpentMin: 42,
    feedbackEn: 'Compelling central thesis supported by strong PEEL paragraphing. Cohesion is fluent. Try incorporating advanced syntactic patterns like negative inversion in Body 1.',
    feedbackId: 'Tesis utama sangat meyakinkan didukung paragraf PEEL yang kokoh. Alur kohesi lancar. Disarankan menyisipkan struktur inversi negatif di paragraf tubuh 1.'
  },
  {
    id: 'sample-3',
    date: '2026-09-19',
    type: 'Mock Exam Lengkap',
    title: 'Full Mock Test: Bar Chart (CO2 Emissions) + Essay (AI in Healthcare)',
    taskResponse: 8.0,
    coherenceCohesion: 8.0,
    lexicalResource: 8.5,
    grammaticalRange: 7.5,
    overallBand: 8.0,
    wordCount: 462,
    timeSpentMin: 58,
    feedbackEn: 'Outstanding lexical repertoire with seamless nominalisation and natural collocations. Minor comma splice in Task 2 conclusion, otherwise near-flawless academic tone.',
    feedbackId: 'Diksi akademis luar biasa dengan nominalisasi yang padat dan kolokasi alami. Ada sedikit kesalahan tanda baca di kesimpulan Task 2, selebihnya sangat prima.'
  }
];

// Helper to calculate official IELTS Band rounding
export const calculateOverallBand = (tr, cc, lr, gra) => {
  const avg = (parseFloat(tr) + parseFloat(cc) + parseFloat(lr) + parseFloat(gra)) / 4;
  const decimal = avg - Math.floor(avg);
  if (decimal < 0.25) return Math.floor(avg);
  if (decimal < 0.75) return Math.floor(avg) + 0.5;
  return Math.ceil(avg);
};

export default function GradeBook({ xp = 0, streak = 0, level = 1, levelTitle = 'Apprentice', completedDrills = [], onNavigateTab }) {
  const [examRecords, setExamRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecordDetail, setSelectedRecordDetail] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    type: 'Task 2 Essay',
    title: '',
    date: new Date().toISOString().split('T')[0],
    taskResponse: 7.0,
    coherenceCohesion: 7.0,
    lexicalResource: 7.0,
    grammaticalRange: 7.0,
    wordCount: 280,
    timeSpentMin: 40,
    feedbackId: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setExamRecords(parsed);
          return;
        }
      }
      // If no records exist yet, auto-populate with initial sample diagnostic records so the user never sees an empty screen!
      setExamRecords(SAMPLE_EXAM_RECORDS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_EXAM_RECORDS));
    } catch (e) {
      console.error('Failed to load exam records from localStorage', e);
      setExamRecords(SAMPLE_EXAM_RECORDS);
    }
  }, []);

  const saveRecords = (newRecords) => {
    setExamRecords(newRecords);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecords));
    } catch (e) {
      console.error('Failed to save exam records to localStorage', e);
    }
  };

  const handleLoadSampleRecords = () => {
    soundFx.playSuccess();
    saveRecords(SAMPLE_EXAM_RECORDS);
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Mohon masukkan judul atau topik soal ujian!');
      return;
    }

    const overallBand = calculateOverallBand(
      formData.taskResponse,
      formData.coherenceCohesion,
      formData.lexicalResource,
      formData.grammaticalRange
    );

    const newRecord = {
      id: 'exam-' + Date.now(),
      date: formData.date,
      type: formData.type,
      title: formData.title.trim(),
      taskResponse: parseFloat(formData.taskResponse),
      coherenceCohesion: parseFloat(formData.coherenceCohesion),
      lexicalResource: parseFloat(formData.lexicalResource),
      grammaticalRange: parseFloat(formData.grammaticalRange),
      overallBand,
      wordCount: parseInt(formData.wordCount, 10) || 0,
      timeSpentMin: parseInt(formData.timeSpentMin, 10) || 0,
      feedbackId: formData.feedbackId.trim() || 'Pengerjaan esai telah selesai sesuai alur kriteria ujian.',
      feedbackEn: 'Assessment recorded according to Cambridge band criteria.'
    };

    const updated = [newRecord, ...examRecords];
    saveRecords(updated);
    soundFx.playLevelUp();
    setIsModalOpen(false);
    
    // Reset form
    setFormData({
      type: 'Task 2 Essay',
      title: '',
      date: new Date().toISOString().split('T')[0],
      taskResponse: 7.0,
      coherenceCohesion: 7.0,
      lexicalResource: 7.0,
      grammaticalRange: 7.0,
      wordCount: 280,
      timeSpentMin: 40,
      feedbackId: ''
    });
  };

  const handleDeleteRecord = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus catatan hasil ujian ini?')) {
      soundFx.playClick();
      const updated = examRecords.filter(r => r.id !== id);
      saveRecords(updated);
      if (selectedRecordDetail?.id === id) {
        setSelectedRecordDetail(null);
      }
    }
  };

  // Calculate statistics from exam records
  const totalExams = examRecords.length;
  const avgOverallBand = totalExams > 0 
    ? (examRecords.reduce((acc, r) => acc + (r.overallBand || 0), 0) / totalExams).toFixed(1)
    : '0.0';
  const highestBand = totalExams > 0
    ? Math.max(...examRecords.map(r => r.overallBand || 0)).toFixed(1)
    : '0.0';
  const latestExam = examRecords[0] || null;

  // Dynamic projected band fallback
  let projectedBand = parseFloat(avgOverallBand) > 0 ? parseFloat(avgOverallBand) : 6.0;
  let bandStatus = 'Kandidat Kompeten (B2)';
  let bandColor = 'text-cyan-400';

  if (projectedBand >= 8.5) {
    bandStatus = 'Ahli Esai Akademik (C2 Proficient)';
    bandColor = 'text-purple-400';
  } else if (projectedBand >= 8.0) {
    bandStatus = 'Sangat Menguasai (Band 8 Target)';
    bandColor = 'text-emerald-400';
  } else if (projectedBand >= 7.0) {
    bandStatus = 'Kompeten Lanjut (C1 Advanced)';
    bandColor = 'text-indigo-400';
  } else if (projectedBand >= 6.5) {
    bandStatus = 'Menengah Atas (B2 Competent)';
    bandColor = 'text-cyan-400';
  }

  // 4 Cambridge criteria scores based on latest exam or projection
  const trScore = latestExam ? latestExam.taskResponse : projectedBand;
  const ccScore = latestExam ? latestExam.coherenceCohesion : projectedBand;
  const lrScore = latestExam ? latestExam.lexicalResource : projectedBand;
  const graScore = latestExam ? latestExam.grammaticalRange : projectedBand;

  const criteriaScores = [
    {
      id: 'tr',
      code: 'TR / TA',
      title: 'Task Achievement & Response',
      titleId: 'Pencapaian Tugas & Jawaban Soal',
      score: trScore.toFixed(1),
      weight: '25%',
      progress: Math.min(100, Math.round((trScore / 9.0) * 100)),
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
      score: ccScore.toFixed(1),
      weight: '25%',
      progress: Math.min(100, Math.round((ccScore / 9.0) * 100)),
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
      score: lrScore.toFixed(1),
      weight: '25%',
      progress: Math.min(100, Math.round((lrScore / 9.0) * 100)),
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
      score: graScore.toFixed(1),
      weight: '25%',
      progress: Math.min(100, Math.round((graScore / 9.0) * 100)),
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
      target: '120 Soal (Band 5 - 8+)',
      status: 'Aktif',
      mastery: '95%',
      color: 'text-emerald-400'
    },
    {
      id: 'writingLiteracy',
      name: 'Literasi Writing & Grammar',
      category: 'Teori',
      target: 'Fundamental s/d Advanced',
      status: 'Lengkap',
      mastery: '100%',
      color: 'text-indigo-400'
    },
    {
      id: 'mindMapVault',
      name: 'Mind Map 3 Lapis (6,000 Kata)',
      category: 'Kosa Kata',
      target: '12 Domain Makro',
      status: 'Aktif',
      mastery: '88%',
      color: 'text-cyan-400'
    },
    {
      id: 'copyworkArena',
      name: 'Kinesthetic Copywork Arena',
      category: 'Menulis Kinetik',
      target: '140+ Pelajaran (7 Topik)',
      status: 'Aktif',
      mastery: '90%',
      color: 'text-amber-400'
    }
  ];

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Buku Catatan Resmi Rekam Hasil Ujian & Rapor Siswa</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              GradeBook: Pusat Rekam Hasil Ujian IELTS
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Catat, pantau, dan analisis setiap hasil latihan maupun simulasi ujian resmi IELTS Writing Anda berdasarkan 4 kriteria penguji Cambridge (TR, CC, LR, GRA).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                setIsModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 transition shadow-lg shadow-indigo-600/30"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Catat Hasil Ujian Baru</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold flex items-center gap-2 transition shadow"
              title="Cetak Rapor ke Format PDF atau Kertas"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Cetak / PDF</span>
            </button>
          </div>
        </div>

        {/* Big Scorecard Widgets */}
        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Rata-rata Skor Band
            </span>
            <div className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${bandColor}`}>
              Band {avgOverallBand}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block line-clamp-1">{bandStatus}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Skor Tertinggi Diraih
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
              Band {highestBand}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">Dari {totalExams} Sesi Tercatat</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Total Ujian Tercatat
            </span>
            <div className="text-3xl sm:text-4xl font-black text-indigo-400 font-mono mt-1">
              {totalExams} <span className="text-xs text-slate-500 font-normal">Sesi</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">Data Tersimpan Lokal</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
              Disiplin Belajar (Streak)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono mt-1 flex items-center justify-center gap-1">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
              <span>{streak}</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">{xp} XP Terkumpul</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION: BUKU CATATAN HASIL UJIAN (EXAM RECORDS TABLE & LOG) */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400" />
              <span>Log Riwayat Hasil Ujian (Exam Record History)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Daftar seluruh rekam jejak nilai latihan esai Task 1, Task 2, dan Simulasi Lengkap Anda.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLoadSampleRecords}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
              title="Muat Ulang Sampel Data Ujian Diagnostik"
            >
              <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
              <span>Muat Sampel Ujian</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Tambah Ujian</span>
            </button>
          </div>
        </div>

        {/* Exam Records Table */}
        {examRecords.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-2xl text-slate-400">
              📝
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Belum Ada Hasil Ujian yang Dicatat</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Mulai catat hasil latihan esai Anda atau muat data sampel ujian diagnostik untuk melihat kalkulasi nilai dan grafik analitik secara instan.
              </p>
            </div>
            <button
              onClick={handleLoadSampleRecords}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold inline-flex items-center gap-2 shadow"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Muat Sampel Ujian Diagnostik</span>
            </button>
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800 text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Tanggal & Jenis</th>
                    <th className="py-3.5 px-4">Topik / Judul Soal</th>
                    <th className="py-3.5 px-3 text-center">TR/TA</th>
                    <th className="py-3.5 px-3 text-center">CC</th>
                    <th className="py-3.5 px-3 text-center">LR</th>
                    <th className="py-3.5 px-3 text-center">GRA</th>
                    <th className="py-3.5 px-4 text-center">Band Akhir</th>
                    <th className="py-3.5 px-4 text-center">Durasi & Kata</th>
                    <th className="py-3.5 px-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {examRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-850/60 transition">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                            {record.date}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            {record.type}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 max-w-xs">
                        <p className="font-medium text-white line-clamp-1">{record.title}</p>
                        {record.feedbackId && (
                          <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5 italic">
                            💬 {record.feedbackId}
                          </p>
                        )}
                      </td>

                      <td className="py-3.5 px-3 text-center font-mono font-bold text-emerald-400">
                        {record.taskResponse?.toFixed(1) || '-'}
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-indigo-400">
                        {record.coherenceCohesion?.toFixed(1) || '-'}
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-amber-400">
                        {record.lexicalResource?.toFixed(1) || '-'}
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-purple-400">
                        {record.grammaticalRange?.toFixed(1) || '-'}
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-950 border border-indigo-500/50 font-black font-mono text-sm text-indigo-200">
                          Band {record.overallBand?.toFixed(1)}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center text-slate-400 font-mono text-[11px]">
                        <div>{record.wordCount} kata</div>
                        <div className="text-[10px] text-slate-500 flex items-center justify-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {record.timeSpentMin} menit
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => {
                              soundFx.playClick();
                              setSelectedRecordDetail(record);
                            }}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                            title="Lihat Detail & Catatan Penguji"
                          >
                            <FileText className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteRecord(record.id)}
                            className="p-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900 text-rose-300 hover:text-rose-100 transition"
                            title="Hapus Catatan Ini"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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
      {/* MODULE PROGRESS MATRIX */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Matriks Ketuntasan Modul Kurikulum IELTS</span>
          </h3>
          <span className="text-xs text-slate-400">Modul Pembelajaran Terintegrasi</span>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
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
      {/* MODAL: CATAT HASIL UJIAN BARU */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-xs">
              <PlusCircle className="w-4 h-4" />
              <span>Formulir Rekam Nilai</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-6">Catat Hasil Ujian IELTS Baru</h2>

            <form onSubmit={handleAddRecord} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Tipe Ujian:</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Task 1 Academic">Task 1 Academic (Grafik / Diagram)</option>
                    <option value="Task 1 General Training">Task 1 General Training (Surat)</option>
                    <option value="Task 2 Essay">Task 2 Academic Essay</option>
                    <option value="Mock Exam Lengkap">Mock Exam Lengkap (Task 1 + Task 2)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Tanggal Pengerjaan:</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Judul Soal / Topik Ujian:</label>
                <input
                  type="text"
                  placeholder="Contoh: Line Graph Renewable Energy atau Essay Climate Policy"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* 4 Scores Inputs */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="block text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Nilai 4 Kriteria Cambridge (Rentang 0.0 - 9.0)
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-emerald-400 font-bold mb-1">TR / TA:</label>
                    <input
                      type="number"
                      step="0.5"
                      min="1.0"
                      max="9.0"
                      value={formData.taskResponse}
                      onChange={(e) => setFormData({ ...formData, taskResponse: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-white font-mono font-bold text-center"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-indigo-400 font-bold mb-1">CC:</label>
                    <input
                      type="number"
                      step="0.5"
                      min="1.0"
                      max="9.0"
                      value={formData.coherenceCohesion}
                      onChange={(e) => setFormData({ ...formData, coherenceCohesion: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-white font-mono font-bold text-center"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-amber-400 font-bold mb-1">LR:</label>
                    <input
                      type="number"
                      step="0.5"
                      min="1.0"
                      max="9.0"
                      value={formData.lexicalResource}
                      onChange={(e) => setFormData({ ...formData, lexicalResource: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-white font-mono font-bold text-center"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-purple-400 font-bold mb-1">GRA:</label>
                    <input
                      type="number"
                      step="0.5"
                      min="1.0"
                      max="9.0"
                      value={formData.grammaticalRange}
                      onChange={(e) => setFormData({ ...formData, grammaticalRange: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-white font-mono font-bold text-center"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                  Proyeksi Skor Band Akhir: <strong className="text-white text-sm font-bold">Band {calculateOverallBand(formData.taskResponse, formData.coherenceCohesion, formData.lexicalResource, formData.grammaticalRange).toFixed(1)}</strong>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Jumlah Kata (Word Count):</label>
                  <input
                    type="number"
                    value={formData.wordCount}
                    onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Waktu Selesai (Menit):</label>
                  <input
                    type="number"
                    value={formData.timeSpentMin}
                    onChange={(e) => setFormData({ ...formData, timeSpentMin: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Catatan Evaluasi / Umpan Balik Penguji:</label>
                <textarea
                  rows="3"
                  placeholder="Kekurangan atau aspek yang perlu diperbaiki (contoh: perbanyak variasi inversi, perkuat kalimat overview)"
                  value={formData.feedbackId}
                  onChange={(e) => setFormData({ ...formData, feedbackId: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Simpan Hasil Ujian</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: DETAIL CATATAN HASIL UJIAN */}
      {/* ========================================================================= */}
      {selectedRecordDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedRecordDetail(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
              <FileText className="w-4 h-4" />
              <span>Detail Hasil Ujian</span>
            </div>

            <div>
              <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                {selectedRecordDetail.type} • {selectedRecordDetail.date}
              </span>
              <h3 className="text-lg font-bold text-white mt-2">{selectedRecordDetail.title}</h3>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Skor Keseluruhan</span>
                <span className="text-3xl font-black text-indigo-300 font-mono">
                  Band {selectedRecordDetail.overallBand?.toFixed(1)}
                </span>
              </div>
              <div className="text-right text-xs text-slate-400 font-mono">
                <div>{selectedRecordDetail.wordCount} Kata</div>
                <div className="mt-0.5">{selectedRecordDetail.timeSpentMin} Menit</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">TR / TA</span>
                <span className="text-base font-black text-emerald-400 font-mono">{selectedRecordDetail.taskResponse?.toFixed(1)}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">CC</span>
                <span className="text-base font-black text-indigo-400 font-mono">{selectedRecordDetail.coherenceCohesion?.toFixed(1)}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">LR</span>
                <span className="text-base font-black text-amber-400 font-mono">{selectedRecordDetail.lexicalResource?.toFixed(1)}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">GRA</span>
                <span className="text-base font-black text-purple-400 font-mono">{selectedRecordDetail.grammaticalRange?.toFixed(1)}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 text-xs space-y-2">
              <span className="font-bold text-indigo-300 block">Evaluasi & Catatan Penguji:</span>
              <p className="text-slate-200 leading-relaxed font-medium">{selectedRecordDetail.feedbackEn}</p>
              <p className="text-slate-400 leading-relaxed italic">🇮🇩 {selectedRecordDetail.feedbackId}</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedRecordDetail(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
