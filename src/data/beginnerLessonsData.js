// Data Pelajaran & Latihan Khusus Pemula (Dari Level Dasar / Nol)

export const BEGINNER_PUZZLE_LEVELS = [
  {
    id: 'bp-1',
    title: 'Tingkat 1: Pondasi Kalimat (Subject + Verb + Object)',
    topic: 'Transportasi & Kota',
    indonesianGoal: 'Susunlah kalimat sederhana: "Banyak orang menggunakan bus setiap hari."',
    explanation: 'Dalam bahasa Inggris, kalimat harus dimulai dari Subjek (pelaku: Many people) + Kata Kerja (aksi: use) + Objek (yang dikenai: public buses) + Waktu (every day).',
    blocks: [
      { id: 'b1', text: 'Many people', translation: 'Banyak orang', type: 'subject' },
      { id: 'b2', text: 'use', translation: 'menggunakan', type: 'verb' },
      { id: 'b3', text: 'public buses', translation: 'bus umum', type: 'object' },
      { id: 'b4', text: 'every day', translation: 'setiap hari', type: 'adverb' }
    ],
    correctOrder: ['b1', 'b2', 'b3', 'b4'],
    completedEnglish: 'Many people use public buses every day.',
    powerUpBand8: {
      original: 'Many people use public buses every day.',
      upgraded: 'A substantial proportion of the population relies on public transit daily.',
      explanation: '"Many people" diganti "A substantial proportion of the population", dan "use" diganti "relies on". Ini meningkatkan skor dari Band 4.5 ke Band 8.0!'
    }
  },
  {
    id: 'bp-2',
    title: 'Tingkat 2: Menambahkan Alasan dengan "Because"',
    topic: 'Pendidikan & Belajar',
    indonesianGoal: 'Susunlah kalimat: "Siswa belajar giat karena mereka ingin nilai bagus."',
    explanation: 'Untuk mendapatkan skor lebih tinggi, kita menghubungkan 2 ide dengan kata sambung "because" (karena).',
    blocks: [
      { id: 'b1', text: 'Students', translation: 'Para siswa', type: 'subject' },
      { id: 'b2', text: 'study diligently', translation: 'belajar dengan giat', type: 'verb' },
      { id: 'b3', text: 'because', translation: 'karena', type: 'connector' },
      { id: 'b4', text: 'they want', translation: 'mereka ingin', type: 'sub-clause' },
      { id: 'b5', text: 'high marks', translation: 'nilai tinggi', type: 'object' }
    ],
    correctOrder: ['b1', 'b2', 'b3', 'b4', 'b5'],
    completedEnglish: 'Students study diligently because they want high marks.',
    powerUpBand8: {
      original: 'Students study diligently because they want high marks.',
      upgraded: 'Pupils dedicate themselves to rigorous study in order to achieve academic excellence.',
      explanation: '"Because they want high marks" ditingkatkan menjadi "in order to achieve academic excellence" (demi meraih keunggulan akademis).'
    }
  },
  {
    id: 'bp-3',
    title: 'Tingkat 3: Membuat Kalimat Kontras dengan "Although" (Meskipun)',
    topic: 'Teknologi & Ponsel Pintar',
    indonesianGoal: 'Susunlah kalimat: "Meskipun ponsel pintar mahal, orang tetap membelinya."',
    explanation: 'Kata "Although" (meskipun) diletakkan di depan kalimat, lalu diberi koma (,) sebelum kalimat kedua.',
    blocks: [
      { id: 'b1', text: 'Although', translation: 'Meskipun', type: 'connector' },
      { id: 'b2', text: 'smartphones are costly', translation: 'ponsel pintar mahal', type: 'clause-1' },
      { id: 'b3', text: ',', translation: ',', type: 'punctuation' },
      { id: 'b4', text: 'consumers continue', translation: 'konsumen terus', type: 'subject-verb' },
      { id: 'b5', text: 'to purchase them', translation: 'membelinya', type: 'object' }
    ],
    correctOrder: ['b1', 'b2', 'b3', 'b4', 'b5'],
    completedEnglish: 'Although smartphones are costly, consumers continue to purchase them.',
    powerUpBand8: {
      original: 'Although smartphones are costly, consumers continue to purchase them.',
      upgraded: 'Notwithstanding the steep prices of smartphones, consumer demand remains remarkably resilient.',
      explanation: '"Although" diganti "Notwithstanding" dan "people continue to purchase" diganti "consumer demand remains remarkably resilient". Inilah kunci Band 8.5!'
    }
  },
  {
    id: 'bp-4',
    title: 'Tingkat 4: Kalimat Solusi Masalah Lingkungan',
    topic: 'Lingkungan Hidup',
    indonesianGoal: 'Susunlah kalimat: "Pemerintah harus mengurangi plastik untuk melindungi laut."',
    explanation: 'Gunakan modal verb "must / should" (harus) diikuti kata kerja bentuk pertama.',
    blocks: [
      { id: 'b1', text: 'Governments', translation: 'Pemerintah', type: 'subject' },
      { id: 'b2', text: 'must curtail', translation: 'harus mengurangi / membatasi', type: 'verb' },
      { id: 'b3', text: 'plastic waste', translation: 'sampah plastik', type: 'object' },
      { id: 'b4', text: 'to safeguard', translation: 'untuk melindungi / menjaga', type: 'purpose' },
      { id: 'b5', text: 'marine ecosystems', translation: 'ekosistem laut', type: 'object-2' }
    ],
    correctOrder: ['b1', 'b2', 'b3', 'b4', 'b5'],
    completedEnglish: 'Governments must curtail plastic waste to safeguard marine ecosystems.',
    powerUpBand8: {
      original: 'Governments must curtail plastic waste to safeguard marine ecosystems.',
      upgraded: 'It is imperative that authorities enact stringent regulations to curb plastic pollution and preserve marine biodiversity.',
      explanation: 'Memakai struktur "It is imperative that..." (Sangat mendesak bahwa...) yang disukai examiner IELTS!'
    }
  }
];

export const BEGINNER_VOCAB_UPGRADES = [
  {
    basicWord: 'very good',
    basicMeaning: 'sangat bagus',
    intermediate: 'effective / beneficial',
    band8: 'advantageous / commendable / exemplary',
    simpleExample: 'Exercise is very good for health.',
    band8Example: 'Regular physical activity is highly advantageous to cardiovascular health.'
  },
  {
    basicWord: 'very bad',
    basicMeaning: 'sangat buruk',
    intermediate: 'harmful / negative',
    band8: 'detrimental / adverse / deleterious',
    simpleExample: 'Pollution is very bad for children.',
    band8Example: 'Environmental contamination exerts a detrimental impact on pediatric health.'
  },
  {
    basicWord: 'big problem',
    basicMeaning: 'masalah besar',
    intermediate: 'major issue / serious challenge',
    band8: 'pressing dilemma / formidable obstacle / predicament',
    simpleExample: 'Traffic jam is a big problem.',
    band8Example: 'Vehicular congestion presents a formidable obstacle to urban productivity.'
  },
  {
    basicWord: 'a lot of people',
    basicMeaning: 'banyak orang',
    intermediate: 'many citizens / numerous individuals',
    band8: 'a substantial proportion of the populace',
    simpleExample: 'A lot of people work from home now.',
    band8Example: 'A substantial proportion of the populace currently engages in telecommuting.'
  },
  {
    basicWord: 'make something better',
    basicMeaning: 'membuat lebih baik',
    intermediate: 'improve / upgrade',
    band8: 'ameliorate / optimize / enhance',
    simpleExample: 'We should make public transport better.',
    band8Example: 'Policymakers ought to optimize mass transit infrastructure.'
  }
];
