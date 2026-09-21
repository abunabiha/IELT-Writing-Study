// Basis Data Puzzle Balok Kata (Sentence Puzzle Mastery)
// Berjenjang berdasarkan Band Level: Band 5.0, Band 6.0, Band 7.0, dan Band 8.0+
// Masing-masing Band Tier memiliki 30 contoh latihan lengkap (Total: 120 Latihan)
// Dilengkapi blok kata dwibahasa, kunci urutan, dan formula upgrade Power-Up Band 8+

export const PUZZLE_BAND_TIERS = [
  { id: 'band5', label: 'Band 5.0 (Pondasi Dasar SVO)', count: 30, icon: '🌱', badge: 'Pemula', color: 'from-emerald-500 to-teal-600', border: 'border-emerald-500/40', desc: 'Melatih susunan Subjek-Predikat-Objek, kata kerja bantu, dan konjungsi setara.' },
  { id: 'band6', label: 'Band 6.0 (Konektor & Subordinasi)', count: 30, icon: '⚡', badge: 'Menengah', color: 'from-cyan-500 to-blue-600', border: 'border-cyan-500/40', desc: 'Membiasakan penyusunan klausa bertingkat dengan because, although, while, dan in order to.' },
  { id: 'band7', label: 'Band 7.0 (Pasif & Relative Clauses)', count: 30, icon: '🎯', badge: 'Kompeten', color: 'from-indigo-500 to-purple-600', border: 'border-indigo-500/40', desc: 'Menguasai kalimat pasif akademik, relative clauses (who/which/that), dan prepositional fronting.' },
  { id: 'band8', label: 'Band 8.0+ (Inversi & Cleft Sentences)', count: 30, icon: '💎', badge: 'Mahir C2', color: 'from-purple-500 to-pink-600', border: 'border-purple-500/40', desc: 'Sintaksis tingkat tinggi: Inversi negatif, Cleft sentences, Participle clauses, dan Nominalization.' }
];

export const BEGINNER_PUZZLE_LEVELS = [
  {
    "id": "bp5-1",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pola Dasar Subjek-Predikat-Objek",
    "topic": "Transportasi Perkotaan",
    "indonesianGoal": "Banyak komuter menggunakan kereta api setiap pagi.",
    "explanation": "Mulai dari Subjek (Many commuters) + Kata Kerja (use) + Objek (trains) + Keterangan Waktu (every morning).",
    "blocks": [
      {
        "id": "b1",
        "text": "Many commuters",
        "translation": "Banyak komuter",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "use",
        "translation": "menggunakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "trains",
        "translation": "kereta api",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every morning",
        "translation": "setiap pagi",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Many commuters use trains every morning.",
    "powerUpBand8": {
      "original": "Many commuters use trains every morning.",
      "upgraded": "A substantial proportion of the urban workforce relies on metropolitan rail networks daily.",
      "explanation": "Mengganti \"Many commuters\" menjadi \"A substantial proportion of the urban workforce\" dan \"use\" menjadi \"relies on\"."
    }
  },
  {
    "id": "bp5-2",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Subjek Jamak dengan Kata Kerja Bentuk Pertama",
    "topic": "Pendidikan & Sekolah",
    "indonesianGoal": "Siswa membaca buku pelajaran di perpustakaan.",
    "explanation": "Subjek jamak (Students) diikuti kata kerja bentuk dasar tanpa -s (read) + Objek (textbooks) + Keterangan tempat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Students",
        "translation": "Para siswa",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "read",
        "translation": "membaca",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "textbooks",
        "translation": "buku pelajaran",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in the library",
        "translation": "di perpustakaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Students read textbooks in the library.",
    "powerUpBand8": {
      "original": "Students read textbooks in the library.",
      "upgraded": "Undergraduates actively consult academic literature within campus research facilities.",
      "explanation": "\"Students read textbooks\" ditingkatkan menjadi \"Undergraduates actively consult academic literature\"."
    }
  },
  {
    "id": "bp5-3",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Penggunaan Konjungsi Setara \"and\"",
    "topic": "Gaya Hidup & Kesehatan",
    "indonesianGoal": "Olahraga teratur membakar kalori dan menurunkan stres.",
    "explanation": "Dua predikat paralel dihubungkan oleh kata hubung setara \"and\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Regular exercise",
        "translation": "Olahraga teratur",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "burns calories",
        "translation": "membakar kalori",
        "type": "verb-obj-1"
      },
      {
        "id": "b3",
        "text": "and",
        "translation": "dan",
        "type": "connector"
      },
      {
        "id": "b4",
        "text": "reduces stress",
        "translation": "menurunkan stres",
        "type": "verb-obj-2"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Regular exercise burns calories and reduces stress.",
    "powerUpBand8": {
      "original": "Regular exercise burns calories and reduces stress.",
      "upgraded": "Consistent physical activity expends excess calories while mitigating psychological distress.",
      "explanation": "Menggunakan \"consistent physical activity\" dan \"mitigating psychological distress\"."
    }
  },
  {
    "id": "bp5-4",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Penggunaan Modal Verb \"can\"",
    "topic": "Teknologi & Internet",
    "indonesianGoal": "Internet dapat menyediakan informasi bermanfaat bagi siswa.",
    "explanation": "Subjek + modal verb \"can\" + kata kerja bentuk dasar \"provide\" + objek langsung.",
    "blocks": [
      {
        "id": "b1",
        "text": "The internet",
        "translation": "Internet",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "can provide",
        "translation": "dapat menyediakan",
        "type": "modal-verb"
      },
      {
        "id": "b3",
        "text": "useful information",
        "translation": "informasi bermanfaat",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "for students",
        "translation": "bagi para siswa",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The internet can provide useful information for students.",
    "powerUpBand8": {
      "original": "The internet can provide useful information for students.",
      "upgraded": "Digital networks disseminate invaluable academic resources to learners worldwide.",
      "explanation": "\"disseminate invaluable academic resources\" adalah diksi C1/C2 pengganti \"provide useful information\"."
    }
  },
  {
    "id": "bp5-5",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Bentuk Negatif Sederhana dengan \"do not\"",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Banyak warga tidak memilah sampah plastik.",
    "explanation": "Subjek jamak + kata bantu negatif \"do not\" + kata kerja \"separate\" + objek.",
    "blocks": [
      {
        "id": "b1",
        "text": "Many citizens",
        "translation": "Banyak warga",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "do not separate",
        "translation": "tidak memilah",
        "type": "verb-neg"
      },
      {
        "id": "b3",
        "text": "plastic waste",
        "translation": "sampah plastik",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "at home",
        "translation": "di rumah",
        "type": "place"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Many citizens do not separate plastic waste at home.",
    "powerUpBand8": {
      "original": "Many citizens do not separate plastic waste at home.",
      "upgraded": "Numerous residents fail to segregate recyclable polymers within domestic residences.",
      "explanation": "\"fail to segregate recyclable polymers\" menaikkan register bahasa secara formal."
    }
  },
  {
    "id": "bp5-6",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Konjungsi Pertentangan \"but\"",
    "topic": "Teknologi Ponsel",
    "indonesianGoal": "Ponsel pintar berguna tetapi harganya cukup mahal.",
    "explanation": "Klausa pertama + koma + \"but\" + klausa kedua yang berlawanan makna.",
    "blocks": [
      {
        "id": "b1",
        "text": "Smartphones are useful",
        "translation": "Ponsel pintar berguna",
        "type": "clause-1"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "but",
        "translation": "tetapi",
        "type": "connector"
      },
      {
        "id": "b4",
        "text": "they are quite expensive",
        "translation": "mereka cukup mahal",
        "type": "clause-2"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Smartphones are useful, but they are quite expensive.",
    "powerUpBand8": {
      "original": "Smartphones are useful, but they are quite expensive.",
      "upgraded": "While smartphones afford immense utility, their procurement involves substantial financial outlays.",
      "explanation": "\"afford immense utility\" dan \"substantial financial outlays\" adalah kolokasi formal."
    }
  },
  {
    "id": "bp5-7",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Konjungsi Akibat \"so\"",
    "topic": "Transportasi Kota",
    "indonesianGoal": "Jalanan sangat macet sehingga bus datang terlambat.",
    "explanation": "Pernyataan sebab + koma + \"so\" + akibat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Traffic was congested",
        "translation": "Lalu lintas macet",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "so",
        "translation": "sehingga",
        "type": "connector"
      },
      {
        "id": "b4",
        "text": "the bus arrived late",
        "translation": "bus tiba terlambat",
        "type": "result"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Traffic was congested, so the bus arrived late.",
    "powerUpBand8": {
      "original": "Traffic was congested, so the bus arrived late.",
      "upgraded": "Owing to severe vehicular congestion, public transit suffered protracted schedule delays.",
      "explanation": "\"Owing to severe vehicular congestion\" menyusun hubungan sebab-akibat dengan anggun."
    }
  },
  {
    "id": "bp5-8",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Kata Keterangan Frekuensi \"always\"",
    "topic": "Dunia Kerja",
    "indonesianGoal": "Karyawan profesional selalu datang tepat waktu.",
    "explanation": "Adverb of frequency diletakkan di antara Subjek dan Kata Kerja utama.",
    "blocks": [
      {
        "id": "b1",
        "text": "Professional employees",
        "translation": "Karyawan profesional",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "always arrive",
        "translation": "selalu tiba",
        "type": "adv-verb"
      },
      {
        "id": "b3",
        "text": "on time",
        "translation": "tepat waktu",
        "type": "adverb"
      },
      {
        "id": "b4",
        "text": "for meetings",
        "translation": "untuk rapat",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Professional employees always arrive on time for meetings.",
    "powerUpBand8": {
      "original": "Professional employees always arrive on time for meetings.",
      "upgraded": "Diligent corporate personnel consistently maintain punctuality for scheduled conferences.",
      "explanation": "\"consistently maintain punctuality\" menggantikan \"always arrive on time\"."
    }
  },
  {
    "id": "bp5-9",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Struktur Ada / Terdapat (\"There is / There are\")",
    "topic": "Fasilitas Kota",
    "indonesianGoal": "Ada banyak fasilitas olahraga di kota modern.",
    "explanation": "\"There are\" digunakan untuk kata benda jamak (sports facilities) + keterangan tempat.",
    "blocks": [
      {
        "id": "b1",
        "text": "There are",
        "translation": "Ada",
        "type": "existential"
      },
      {
        "id": "b2",
        "text": "many sports facilities",
        "translation": "banyak fasilitas olahraga",
        "type": "subject-noun"
      },
      {
        "id": "b3",
        "text": "in modern cities",
        "translation": "di kota-kota modern",
        "type": "place"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3"
    ],
    "completedEnglish": "There are many sports facilities in modern cities.",
    "powerUpBand8": {
      "original": "There are many sports facilities in modern cities.",
      "upgraded": "Contemporary urban centers accommodate a myriad of state-of-the-art athletic amenities.",
      "explanation": "\"accommodate a myriad of athletic amenities\" menggantikan \"there are many sports facilities\"."
    }
  },
  {
    "id": "bp5-10",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Bentuk Lampau Sederhana (Past Simple)",
    "topic": "Sejarah & Pendidikan",
    "indonesianGoal": "Pemerintah membangun sekolah baru tahun lalu.",
    "explanation": "Subjek + kata kerja bentuk kedua (built) + objek + keterangan waktu lampau (last year).",
    "blocks": [
      {
        "id": "b1",
        "text": "The government",
        "translation": "Pemerintah",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "built",
        "translation": "membangun",
        "type": "verb-past"
      },
      {
        "id": "b3",
        "text": "a new school",
        "translation": "sebuah sekolah baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "last year",
        "translation": "tahun lalu",
        "type": "time-past"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The government built a new school last year.",
    "powerUpBand8": {
      "original": "The government built a new school last year.",
      "upgraded": "State authorities commissioned an innovative pedagogical institution during the preceding fiscal year.",
      "explanation": "\"commissioned an innovative pedagogical institution\" adalah frasa formal Task 2."
    }
  },
  {
    "id": "bp5-11",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #11",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 11 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-12",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #12",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 12 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-13",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #13",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 13 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-14",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #14",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 14 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-15",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #15",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 15 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-16",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #16",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 16 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-17",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #17",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 17 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-18",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #18",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 18 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-19",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #19",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 19 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-20",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #20",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 20 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-21",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #21",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 21 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-22",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #22",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 22 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-23",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #23",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 23 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-24",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #24",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 24 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-25",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #25",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 25 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-26",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #26",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 26 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-27",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #27",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 27 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-28",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #28",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 28 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-29",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #29",
    "topic": "Ekonomi & Lapangan Kerja",
    "indonesianGoal": "Susun kalimat sederhana nomor 29 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Small businesses",
        "translation": "Bisnis kecil",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "create",
        "translation": "menciptakan",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "new jobs",
        "translation": "lapangan kerja baru",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "in rural areas",
        "translation": "di daerah pedesaan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Small businesses create new jobs in rural areas.",
    "powerUpBand8": {
      "original": "Small businesses create new jobs in rural areas.",
      "upgraded": "Enterprising small ventures generate vital employment opportunities across provincial territories.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp5-30",
    "bandTier": "band5",
    "bandLabel": "Band 5.0 (Pondasi SVO)",
    "title": "Pondasi Kalimat Sederhana #30",
    "topic": "Masyarakat & Budaya",
    "indonesianGoal": "Susun kalimat sederhana nomor 30 dengan struktur subjek, verba, dan objek yang tepat.",
    "explanation": "Pastikan subjek dan kata kerja memiliki kesesuaian jumlah (singular/plural) serta tata letak kata benda yang runtut.",
    "blocks": [
      {
        "id": "b1",
        "text": "Local residents",
        "translation": "Warga lokal",
        "type": "subject"
      },
      {
        "id": "b2",
        "text": "support",
        "translation": "mendukung",
        "type": "verb"
      },
      {
        "id": "b3",
        "text": "community events",
        "translation": "acara komunitas",
        "type": "object"
      },
      {
        "id": "b4",
        "text": "every weekend",
        "translation": "setiap akhir pekan",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Local residents support community events every weekend.",
    "powerUpBand8": {
      "original": "Local residents support community events every weekend.",
      "upgraded": "Indigenous inhabitants enthusiastically patronize communal festivities on a weekly basis.",
      "explanation": "Memperkaya kosakata SVO dengan kolokasi formal dan padanan kata akademik Band 8+."
    }
  },
  {
    "id": "bp6-1",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #1 (because)",
    "topic": "Lingkungan",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-2",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #2 (although)",
    "topic": "Pendidikan",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-3",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #3 (in order to)",
    "topic": "Teknologi",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-4",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #4 (while)",
    "topic": "Kesehatan",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-5",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #5 (because)",
    "topic": "Masyarakat",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-6",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #6 (although)",
    "topic": "Ekonomi",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-7",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #7 (in order to)",
    "topic": "Lingkungan",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-8",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #8 (while)",
    "topic": "Pendidikan",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-9",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #9 (because)",
    "topic": "Teknologi",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-10",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #10 (although)",
    "topic": "Kesehatan",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-11",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #11 (in order to)",
    "topic": "Masyarakat",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-12",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #12 (while)",
    "topic": "Ekonomi",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-13",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #13 (because)",
    "topic": "Lingkungan",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-14",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #14 (although)",
    "topic": "Pendidikan",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-15",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #15 (in order to)",
    "topic": "Teknologi",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-16",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #16 (while)",
    "topic": "Kesehatan",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-17",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #17 (because)",
    "topic": "Masyarakat",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-18",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #18 (although)",
    "topic": "Ekonomi",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-19",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #19 (in order to)",
    "topic": "Lingkungan",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-20",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #20 (while)",
    "topic": "Pendidikan",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-21",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #21 (because)",
    "topic": "Teknologi",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-22",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #22 (although)",
    "topic": "Kesehatan",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-23",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #23 (in order to)",
    "topic": "Masyarakat",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-24",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #24 (while)",
    "topic": "Ekonomi",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-25",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #25 (because)",
    "topic": "Lingkungan",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-26",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #26 (although)",
    "topic": "Pendidikan",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp6-27",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #27 (in order to)",
    "topic": "Teknologi",
    "indonesianGoal": "Pemerintah kota berinvestasi pada taman umum demi meningkatkan kesejahteraan warga.",
    "explanation": "\"In order to\" menghubungkan tindakan dengan tujuan formal.",
    "blocks": [
      {
        "id": "b1",
        "text": "Municipalities invest",
        "translation": "Pemerintah kota berinvestasi",
        "type": "subject-verb"
      },
      {
        "id": "b2",
        "text": "in public parks",
        "translation": "pada taman umum",
        "type": "prep-object"
      },
      {
        "id": "b3",
        "text": "in order to improve",
        "translation": "demi meningkatkan",
        "type": "purpose-connector"
      },
      {
        "id": "b4",
        "text": "citizen well-being",
        "translation": "kesejahteraan warga",
        "type": "purpose-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Municipalities invest in public parks in order to improve citizen well-being.",
    "powerUpBand8": {
      "original": "Municipalities invest in public parks in order to improve citizen well-being.",
      "upgraded": "Civic authorities channel capital into urban green spaces so as to bolster resident psychiatric health."
    }
  },
  {
    "id": "bp6-28",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #28 (while)",
    "topic": "Kesehatan",
    "indonesianGoal": "Sementara teknologi menghemat waktu, hal itu juga menyebabkan kecanduan digital.",
    "explanation": "\"While\" di awal kalimat menciptakan klausa kontras seimbang.",
    "blocks": [
      {
        "id": "b1",
        "text": "While",
        "translation": "Sementara",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "technology saves time",
        "translation": "teknologi menghemat waktu",
        "type": "clause-1"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "it also causes",
        "translation": "hal itu juga menyebabkan",
        "type": "clause-2-verb"
      },
      {
        "id": "b5",
        "text": "digital addiction",
        "translation": "kecanduan digital",
        "type": "clause-2-obj"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "While technology saves time, it also causes digital addiction.",
    "powerUpBand8": {
      "original": "While technology saves time, it also causes digital addiction.",
      "upgraded": "Whereas technological innovation optimizes labor efficiency, it concurrently precipitates acute behavioral dependency."
    }
  },
  {
    "id": "bp6-29",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #29 (because)",
    "topic": "Masyarakat",
    "indonesianGoal": "Emisi karbon meningkat karena pabrik membakar bahan bakar fosil.",
    "explanation": "Gunakan konjungsi subordinatif \"because\" tanpa koma jika klausa alasan berada di belakang.",
    "blocks": [
      {
        "id": "b1",
        "text": "Carbon emissions rise",
        "translation": "Emisi karbon meningkat",
        "type": "cause"
      },
      {
        "id": "b2",
        "text": "because",
        "translation": "karena",
        "type": "connector"
      },
      {
        "id": "b3",
        "text": "factories burn",
        "translation": "pabrik membakar",
        "type": "sub-subject-verb"
      },
      {
        "id": "b4",
        "text": "fossil fuels",
        "translation": "bahan bakar fosil",
        "type": "sub-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Carbon emissions rise because factories burn fossil fuels.",
    "powerUpBand8": {
      "original": "Carbon emissions rise because factories burn fossil fuels.",
      "upgraded": "Atmospheric carbon concentrations escalate primarily because industrial manufacturing facilities consume excessive non-renewable fuels."
    }
  },
  {
    "id": "bp6-30",
    "bandTier": "band6",
    "bandLabel": "Band 6.0 (Konektor & Subordinasi)",
    "title": "Kalimat Kompleks Subordinasi #30 (although)",
    "topic": "Ekonomi",
    "indonesianGoal": "Meskipun biaya kuliah mahal, para siswa tetap mengejar gelar universitas.",
    "explanation": "Klausa \"Although\" di awal kalimat wajib diakhiri koma sebelum induk kalimat.",
    "blocks": [
      {
        "id": "b1",
        "text": "Although",
        "translation": "Meskipun",
        "type": "connector"
      },
      {
        "id": "b2",
        "text": "tuition fees are high",
        "translation": "biaya kuliah mahal",
        "type": "concessive-clause"
      },
      {
        "id": "b3",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b4",
        "text": "students pursue",
        "translation": "siswa mengejar",
        "type": "main-subject-verb"
      },
      {
        "id": "b5",
        "text": "university degrees",
        "translation": "gelar universitas",
        "type": "main-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Although tuition fees are high, students pursue university degrees.",
    "powerUpBand8": {
      "original": "Although tuition fees are high, students pursue university degrees.",
      "upgraded": "Notwithstanding exorbitant tuition charges, aspiring undergraduates persistently seek tertiary qualifications."
    }
  },
  {
    "id": "bp7-1",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #1 (Passive Voice)",
    "topic": "Hukum & Keadilan",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-2",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #2 (Relative Clause)",
    "topic": "Kesehatan Masyarakat",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-3",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #3 (Prepositional Fronting)",
    "topic": "Pendidikan Tinggi",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-4",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #4 (Passive Voice)",
    "topic": "Ekonomi Global",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-5",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #5 (Relative Clause)",
    "topic": "Sains & Riset",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-6",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #6 (Prepositional Fronting)",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-7",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #7 (Passive Voice)",
    "topic": "Hukum & Keadilan",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-8",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #8 (Relative Clause)",
    "topic": "Kesehatan Masyarakat",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-9",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #9 (Prepositional Fronting)",
    "topic": "Pendidikan Tinggi",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-10",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #10 (Passive Voice)",
    "topic": "Ekonomi Global",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-11",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #11 (Relative Clause)",
    "topic": "Sains & Riset",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-12",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #12 (Prepositional Fronting)",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-13",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #13 (Passive Voice)",
    "topic": "Hukum & Keadilan",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-14",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #14 (Relative Clause)",
    "topic": "Kesehatan Masyarakat",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-15",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #15 (Prepositional Fronting)",
    "topic": "Pendidikan Tinggi",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-16",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #16 (Passive Voice)",
    "topic": "Ekonomi Global",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-17",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #17 (Relative Clause)",
    "topic": "Sains & Riset",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-18",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #18 (Prepositional Fronting)",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-19",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #19 (Passive Voice)",
    "topic": "Hukum & Keadilan",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-20",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #20 (Relative Clause)",
    "topic": "Kesehatan Masyarakat",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-21",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #21 (Prepositional Fronting)",
    "topic": "Pendidikan Tinggi",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-22",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #22 (Passive Voice)",
    "topic": "Ekonomi Global",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-23",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #23 (Relative Clause)",
    "topic": "Sains & Riset",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-24",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #24 (Prepositional Fronting)",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-25",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #25 (Passive Voice)",
    "topic": "Hukum & Keadilan",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-26",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #26 (Relative Clause)",
    "topic": "Kesehatan Masyarakat",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-27",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #27 (Prepositional Fronting)",
    "topic": "Pendidikan Tinggi",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp7-28",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #28 (Passive Voice)",
    "topic": "Ekonomi Global",
    "indonesianGoal": "Sanksi hukum yang lebih ketat harus dijatuhkan pada korporasi pencemar oleh pengadilan internasional.",
    "explanation": "Gunakan bentuk pasif (should be imposed on) untuk menggeser fokus dari pelaku ke tindakan hukum.",
    "blocks": [
      {
        "id": "b1",
        "text": "Stricter legal sanctions",
        "translation": "Sanksi hukum yang lebih ketat",
        "type": "subject-passive"
      },
      {
        "id": "b2",
        "text": "should be imposed on",
        "translation": "harus dijatuhkan pada",
        "type": "modal-passive-verb"
      },
      {
        "id": "b3",
        "text": "corporate polluters",
        "translation": "korporasi pencemar",
        "type": "object-agent"
      },
      {
        "id": "b4",
        "text": "by international tribunals",
        "translation": "oleh pengadilan internasional",
        "type": "agent-by"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
    "powerUpBand8": {
      "original": "Stricter legal sanctions should be imposed on corporate polluters by international tribunals.",
      "upgraded": "Punitive legal countermeasures ought to be levied against industrial polluters to ensure ecological accountability."
    }
  },
  {
    "id": "bp7-29",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #29 (Relative Clause)",
    "topic": "Sains & Riset",
    "indonesianGoal": "Komuter perkotaan yang mengandalkan kereta bawah tanah mengalami stres yang jauh lebih rendah selama perjalanan harian.",
    "explanation": "Defining relative clause \"who rely on subways\" membatasi subjek tanpa menggunakan koma.",
    "blocks": [
      {
        "id": "b1",
        "text": "Urban commuters",
        "translation": "Komuter perkotaan",
        "type": "main-subject"
      },
      {
        "id": "b2",
        "text": "who rely on subways",
        "translation": "yang mengandalkan kereta bawah tanah",
        "type": "relative-clause"
      },
      {
        "id": "b3",
        "text": "experience",
        "translation": "mengalami",
        "type": "main-verb"
      },
      {
        "id": "b4",
        "text": "significantly lower stress",
        "translation": "stres yang jauh lebih rendah",
        "type": "main-object"
      },
      {
        "id": "b5",
        "text": "during daily journeys",
        "translation": "selama perjalanan harian",
        "type": "prep-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
    "powerUpBand8": {
      "original": "Urban commuters who rely on subways experience significantly lower stress during daily journeys.",
      "upgraded": "City travelers utilizing underground transit infrastructure encounter markedly diminished commuter anxiety."
    }
  },
  {
    "id": "bp7-30",
    "bandTier": "band7",
    "bandLabel": "Band 7.0 (Pasif & Relatif)",
    "title": "Sintaksis Band 7.0 #30 (Prepositional Fronting)",
    "topic": "Lingkungan Hidup",
    "indonesianGoal": "Dalam beberapa dekade terakhir, pengaturan kerja jarak jauh telah berkembang secara eksponensial di seluruh ekonomi dunia.",
    "explanation": "Prepositional fronting (meletakkan frasa preposisi di awal kalimat) diikuti koma untuk variasi struktur.",
    "blocks": [
      {
        "id": "b1",
        "text": "In recent decades",
        "translation": "Dalam beberapa dekade terakhir",
        "type": "fronted-prep"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "remote working arrangements",
        "translation": "pengaturan kerja jarak jauh",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "have expanded exponentially",
        "translation": "telah berkembang secara eksponensial",
        "type": "verb-perfect"
      },
      {
        "id": "b5",
        "text": "across global economies",
        "translation": "di seluruh ekonomi dunia",
        "type": "place-phrase"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
    "powerUpBand8": {
      "original": "In recent decades, remote working arrangements have expanded exponentially across global economies.",
      "upgraded": "Over the course of recent epochs, telecommuting modalities have proliferated substantially across transnational markets."
    }
  },
  {
    "id": "bp8-1",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #1 (Negative Inversion)",
    "topic": "Etika AI & Teknologi",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-2",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #2 (Cleft Sentence)",
    "topic": "Geopolitik & Lingkungan",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-3",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #3 (Participle Clause)",
    "topic": "Makroekonomi",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-4",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #4 (Nominalization)",
    "topic": "Pedagogi Modern",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-5",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #5 (Negative Inversion)",
    "topic": "Sosiologi & Hukum",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-6",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #6 (Cleft Sentence)",
    "topic": "Kesehatan Mental",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-7",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #7 (Participle Clause)",
    "topic": "Etika AI & Teknologi",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-8",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #8 (Nominalization)",
    "topic": "Geopolitik & Lingkungan",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-9",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #9 (Negative Inversion)",
    "topic": "Makroekonomi",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-10",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #10 (Cleft Sentence)",
    "topic": "Pedagogi Modern",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-11",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #11 (Participle Clause)",
    "topic": "Sosiologi & Hukum",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-12",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #12 (Nominalization)",
    "topic": "Kesehatan Mental",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-13",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #13 (Negative Inversion)",
    "topic": "Etika AI & Teknologi",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-14",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #14 (Cleft Sentence)",
    "topic": "Geopolitik & Lingkungan",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-15",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #15 (Participle Clause)",
    "topic": "Makroekonomi",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-16",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #16 (Nominalization)",
    "topic": "Pedagogi Modern",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-17",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #17 (Negative Inversion)",
    "topic": "Sosiologi & Hukum",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-18",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #18 (Cleft Sentence)",
    "topic": "Kesehatan Mental",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-19",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #19 (Participle Clause)",
    "topic": "Etika AI & Teknologi",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-20",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #20 (Nominalization)",
    "topic": "Geopolitik & Lingkungan",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-21",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #21 (Negative Inversion)",
    "topic": "Makroekonomi",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-22",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #22 (Cleft Sentence)",
    "topic": "Pedagogi Modern",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-23",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #23 (Participle Clause)",
    "topic": "Sosiologi & Hukum",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-24",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #24 (Nominalization)",
    "topic": "Kesehatan Mental",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-25",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #25 (Negative Inversion)",
    "topic": "Etika AI & Teknologi",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-26",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #26 (Cleft Sentence)",
    "topic": "Geopolitik & Lingkungan",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
    }
  },
  {
    "id": "bp8-27",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #27 (Participle Clause)",
    "topic": "Makroekonomi",
    "indonesianGoal": "Setelah bertransisi ke energi hijau, banyak negara industri mengurangi jejak karbon mereka secara substansial.",
    "explanation": "Perfect participle clause \"Having transitioned...\" menggantikan \"After they had transitioned...\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Having transitioned to green energy",
        "translation": "Setelah bertransisi ke energi hijau",
        "type": "participle-clause"
      },
      {
        "id": "b2",
        "text": ",",
        "translation": ",",
        "type": "punctuation"
      },
      {
        "id": "b3",
        "text": "many industrialized nations",
        "translation": "banyak negara terindustrialisasi",
        "type": "main-subject"
      },
      {
        "id": "b4",
        "text": "reduced their carbon footprints",
        "translation": "mengurangi jejak karbon mereka",
        "type": "main-verb-obj"
      },
      {
        "id": "b5",
        "text": "substantially",
        "translation": "secara substansial",
        "type": "adverb"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
    "powerUpBand8": {
      "original": "Having transitioned to green energy, many industrialized nations reduced their carbon footprints substantially.",
      "upgraded": "Having embraced renewable energetic infrastructures, numerous sovereign states witnessed an unprecedented contraction in carbon discharge."
    }
  },
  {
    "id": "bp8-28",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #28 (Nominalization)",
    "topic": "Pedagogi Modern",
    "indonesianGoal": "Penyebaran luas komunikasi digital telah merevolusi perdagangan bisnis internasional.",
    "explanation": "Nominalization mengubah kata kerja \"proliferate\" menjadi kata benda \"The proliferation of...\" agar bernada akademis.",
    "blocks": [
      {
        "id": "b1",
        "text": "The proliferation",
        "translation": "Penyebaran luas",
        "type": "nominal-subject"
      },
      {
        "id": "b2",
        "text": "of digital communications",
        "translation": "dari komunikasi digital",
        "type": "prep-mod"
      },
      {
        "id": "b3",
        "text": "has revolutionized",
        "translation": "telah merevolusi",
        "type": "perfect-verb"
      },
      {
        "id": "b4",
        "text": "international business commerce",
        "translation": "perdagangan bisnis internasional",
        "type": "object-formal"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "The proliferation of digital communications has revolutionized international business commerce.",
    "powerUpBand8": {
      "original": "The proliferation of digital communications has revolutionized international business commerce.",
      "upgraded": "The exponential diffusion of telecommunication protocols has fundamentally restructured transnational economic exchange."
    }
  },
  {
    "id": "bp8-29",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #29 (Negative Inversion)",
    "topic": "Sosiologi & Hukum",
    "indonesianGoal": "Dalam situasi apa pun pemerintah tidak boleh mengabaikan implikasi etis dari kecerdasan buatan.",
    "explanation": "Inversi negatif membalik susunan: kata bantu verba \"should\" diletakkan di depan subjek \"governments\".",
    "blocks": [
      {
        "id": "b1",
        "text": "Under no circumstances",
        "translation": "Dalam situasi apa pun tidak",
        "type": "neg-adverbial"
      },
      {
        "id": "b2",
        "text": "should governments ignore",
        "translation": "boleh pemerintah mengabaikan",
        "type": "inverted-aux-subj-verb"
      },
      {
        "id": "b3",
        "text": "the ethical implications",
        "translation": "implikasi etis",
        "type": "object-core"
      },
      {
        "id": "b4",
        "text": "of artificial intelligence",
        "translation": "dari kecerdasan buatan",
        "type": "prep-mod"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4"
    ],
    "completedEnglish": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
    "powerUpBand8": {
      "original": "Under no circumstances should governments ignore the ethical implications of artificial intelligence.",
      "upgraded": "On no account ought administrative bodies to discount the profound moral ramifications engendered by autonomous algorithms."
    }
  },
  {
    "id": "bp8-30",
    "bandTier": "band8",
    "bandLabel": "Band 8.0+ (Inversi & Cleft)",
    "title": "Sintaksis Mahir Band 8.5+ #30 (Cleft Sentence)",
    "topic": "Kesehatan Mental",
    "indonesianGoal": "Reformasi kebijakan yang sistematis inilah yang pada akhirnya menyelesaikan ketimpangan sosioekonomi yang mendalam.",
    "explanation": "Cleft sentence \"It is X that Y\" memberikan penekanan khusus pada elemen kunci argumen.",
    "blocks": [
      {
        "id": "b1",
        "text": "It is",
        "translation": "Adalah",
        "type": "cleft-intro"
      },
      {
        "id": "b2",
        "text": "systematic policy reform",
        "translation": "reformasi kebijakan yang sistematis",
        "type": "focused-element"
      },
      {
        "id": "b3",
        "text": "that",
        "translation": "yang",
        "type": "cleft-rel"
      },
      {
        "id": "b4",
        "text": "ultimately resolves",
        "translation": "pada akhirnya menyelesaikan",
        "type": "cleft-verb"
      },
      {
        "id": "b5",
        "text": "deep socioeconomic inequality",
        "translation": "ketimpangan sosioekonomi yang mendalam",
        "type": "cleft-object"
      }
    ],
    "correctOrder": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5"
    ],
    "completedEnglish": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
    "powerUpBand8": {
      "original": "It is systematic policy reform that ultimately resolves deep socioeconomic inequality.",
      "upgraded": "It is concerted statutory restructuring, rather than superficial philanthropy, that definitively alleviates entrenched disparities."
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
    intermediate: 'harmful / damaging',
    band8: 'detrimental / pernicious / disastrous',
    simpleExample: 'Pollution is very bad for nature.',
    band8Example: 'Uncontrolled industrial effluent exerts a pernicious influence on delicate wetland biomes.'
  },
  {
    basicWord: 'a lot of',
    basicMeaning: 'banyak',
    intermediate: 'numerous / various',
    band8: 'a myriad of / a substantial proportion of',
    simpleExample: 'There are a lot of problems.',
    band8Example: 'Urban administrations confront a myriad of multifaceted infrastructural dilemmas.'
  },
  {
    basicWord: 'make better',
    basicMeaning: 'membuat lebih baik',
    intermediate: 'improve / enhance',
    band8: 'ameliorate / optimize / elevate',
    simpleExample: 'The government should make life better.',
    band8Example: 'Authorities must introduce statutory reforms to ameliorate socioeconomic inequities.'
  }
];
