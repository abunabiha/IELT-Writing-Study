// Basis Data Mind Map Kosakata 3 Lapis (Band 8+ Lexical Mind Map)
// Terintegrasi penuh dengan Korpus 6.000 Kosa Kata IELTS Band 8 (ACADEMIC_CORPUS_6000)
// Lapis 1: 12 Domain Makro (@500 kata = 6.000 kata total)
// Lapis 2: Klaster Konsep Tematis & Paket Belajar Harian (Set 1 - 25 per domain)
// Lapis 3: Bulatan Kosa Kata Band 8+ Interaktif dengan Terjemahan Bahasa Indonesia Langsung

import { ACADEMIC_CORPUS_6000, CORPUS_TOPICS } from './academicCorpus6000.js';

export const MINDMAP_TOPIC_CONFIGS = [
  { id: 'env', titleEn: 'Environment & Climate', titleId: 'Lingkungan & Iklim', icon: '🌍', accentColor: 'from-emerald-600 to-teal-700', borderColor: 'border-emerald-500/40', tag: 'Topik Paling Sering Muncul (Task 2 & 1)' },
  { id: 'tech', titleEn: 'Technology & AI', titleId: 'Teknologi & Kecerdasan Buatan', icon: '🤖', accentColor: 'from-indigo-600 to-cyan-700', borderColor: 'border-indigo-500/40', tag: 'Topik Modernitas & Disrupsi Kerja' },
  { id: 'edu', titleEn: 'Education & Pedagogy', titleId: 'Pendidikan & Pedagogi', icon: '🎓', accentColor: 'from-amber-600 to-orange-700', borderColor: 'border-amber-500/40', tag: 'Kurikulum & Perkembangan Mental' },
  { id: 'soc', titleEn: 'Society, Crime & Justice', titleId: 'Masyarakat & Hukum', icon: '⚖️', accentColor: 'from-purple-600 to-slate-800', borderColor: 'border-purple-500/40', tag: 'Kohesi Sosial & Peradilan' },
  { id: 'hlt', titleEn: 'Public Health & Medicine', titleId: 'Kesehatan & Sistem Medis', icon: '🏥', accentColor: 'from-rose-600 to-red-700', borderColor: 'border-rose-500/40', tag: 'Gaya Hidup & Perawatan Preventif' },
  { id: 'glb', titleEn: 'Globalization & Culture', titleId: 'Globalisasi & Budaya', icon: '🌐', accentColor: 'from-blue-600 to-cyan-600', borderColor: 'border-blue-500/40', tag: 'Pertukaran Budaya & Tradisi' },
  { id: 'eco', titleEn: 'Economy & Labor Markets', titleId: 'Ekonomi & Ketenagakerjaan', icon: '📈', accentColor: 'from-blue-600 to-indigo-800', borderColor: 'border-blue-500/40', tag: 'Kesenjangan & Produktivitas' },
  { id: 'gov', titleEn: 'Government & Policy', titleId: 'Pemerintah & Kebijakan', icon: '🏛️', accentColor: 'from-amber-600 to-yellow-600', borderColor: 'border-amber-500/40', tag: 'Regulasi & Kewajiban Negara' },
  { id: 'sci', titleEn: 'Science & Exploration', titleId: 'Sains & Eksplorasi', icon: '🔬', accentColor: 'from-teal-600 to-emerald-800', borderColor: 'border-teal-500/40', tag: 'Uji Empiris & Penemuan' },
  { id: 'art', titleEn: 'Arts, Media & Architecture', titleId: 'Seni, Media & Arsitektur', icon: '🎨', accentColor: 'from-fuchsia-600 to-pink-700', borderColor: 'border-fuchsia-500/40', tag: 'Kreativitas & Jurnalisme' },
  { id: 'urb', titleEn: 'Urbanization & Transport', titleId: 'Urbanisasi & Transportasi', icon: '🏙️', accentColor: 'from-violet-600 to-purple-800', borderColor: 'border-violet-500/40', tag: 'Tata Ruang & Transit Kota' },
  { id: 'log', titleEn: 'Cohesion, Logic & Discourse', titleId: 'Kohesi, Logika & Wacana', icon: '🧱', accentColor: 'from-cyan-600 to-blue-700', borderColor: 'border-cyan-500/40', tag: 'Formula Penghubung Argumen' }
];

// Helper: Membangun daftar klaster tematis untuk suatu topik makro
export function getClustersForTopic(topicId) {
  const topicWords = ACADEMIC_CORPUS_6000.filter(w => w.topicId === topicId);
  const totalSetsInTopic = 25; // 500 kata / 20 kata per set = 25 set

  // Buat 5 klaster tematis per domain makro yang masing-masing menampung beberapa set
  const clusters = [
    {
      id: `${topicId}-c1`,
      titleEn: 'Core Academic Foundations (AWL Tier 1)',
      titleId: 'Pondasi Akademik Inti (Tier 1)',
      icon: '🌱',
      summaryId: 'Kosakata frekuensi tinggi yang wajib dikuasai untuk esai akademik.',
      setRange: [1, 5],
      words: topicWords.slice(0, 100)
    },
    {
      id: `${topicId}-c2`,
      titleEn: 'Advanced Collocations & Phrasing (Tier 2)',
      titleId: 'Kolokasi & Frasa Lanjutan (Tier 2)',
      icon: '⚡',
      summaryId: 'Pasangan kata formal alami untuk menaikkan skor Lexical Resource.',
      setRange: [6, 10],
      words: topicWords.slice(100, 200)
    },
    {
      id: `${topicId}-c3`,
      titleEn: 'Critical Analysis & Causes (Tier 2)',
      titleId: 'Analisis Kritis & Faktor Penyebab (Tier 2)',
      icon: '🔍',
      summaryId: 'Kosakata analitis untuk menguraikan sebab-akibat fenomena di Body Paragraph.',
      setRange: [11, 15],
      words: topicWords.slice(200, 300)
    },
    {
      id: `${topicId}-c4`,
      titleEn: 'Policy Solutions & Counter-Arguments (Tier 3)',
      titleId: 'Solusi Kebijakan & Sanggahan (Tier 3)',
      icon: '🛡️',
      summaryId: 'Istilah tingkat C1/C2 untuk merumuskan rekomendasi dan sudut pandang berimbang.',
      setRange: [16, 20],
      words: topicWords.slice(300, 400)
    },
    {
      id: `${topicId}-c5`,
      titleEn: 'Master C2 Nuances & Idiomatic Collocations',
      titleId: 'Nuansa Diksi Master C2 (Band 8.5+)',
      icon: '💎',
      summaryId: 'Diksi tingkat paling mahir untuk mengekspresikan nuansa arti secara presisi.',
      setRange: [21, 25],
      words: topicWords.slice(400, 500)
    }
  ];

  return clusters;
}

// Generate the 12 Macro Theme Tree Data
export const VOCAB_MINDMAP_DATA = MINDMAP_TOPIC_CONFIGS.map(cfg => {
  const clusters = getClustersForTopic(cfg.id);
  return {
    ...cfg,
    totalWordsInTopic: 500,
    clusters: clusters.map(c => ({
      id: c.id,
      titleEn: c.titleEn,
      titleId: c.titleId,
      icon: c.icon,
      summaryId: c.summaryId,
      words: c.words.map(w => ({
        id: w.id,
        word: w.word,
        pos: w.pos,
        phonetic: `/ˈæk.ə.dɛm.ɪk/`,
        meaningId: w.meaning,
        meaningEn: `Band 8 academic usage of "${w.word}" (Basic: ${w.basic})`,
        band8Collocation: w.word,
        academicSynonyms: [w.basic, 'academic precision', 'formal register'],
        sampleSentenceEn: w.example,
        sampleSentenceId: `Contoh penerapan: ${w.example}`,
        bandTarget: w.tier === 3 ? 'Band 8.5' : w.tier === 2 ? 'Band 8.0' : 'Band 7.5',
        mnemonic: w.mnemonic,
        basic: w.basic
      }))
    }))
  };
});
