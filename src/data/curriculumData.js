// Interactive Curriculum Data: The Band 8 Writing Journey

export const CURRICULUM_TIERS = [
  {
    id: 'tier-1',
    level: 1,
    targetBand: 'Band 4.5 -> 5.5',
    title: 'Tier 1: Ground Zero (Sentence Mechanics)',
    subtitle: 'Membasmi kesalahan fatal: fragment, run-on sentence, comma splice, & subject-verb agreement.',
    color: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/30',
    xpReward: 350,
    modules: [
      {
        id: 't1-m1',
        title: 'Modul 1: Membedakan Fragment vs Kalimat Lengkap',
        description: 'Banyak peserta Band 5 menulis kalimat tanpa klausa independen (hanya dependent clause). Di Band 8, setiap kalimat harus utuh secara struktural.',
        rules: [
          'Kalimat lengkap WAJIB memiliki Subject + Finite Verb.',
          'Klausa yang diawali subordinating conjunction (Because, Although, If) TIDAK BISA berdiri sendiri dengan titik.',
          'Contoh salah: "Because pollution is increasing rapidly." -> Salah (Fragment!)',
          'Contoh benar: "Because pollution is increasing rapidly, governments must intervene."'
        ],
        interactiveDrills: [
          {
            id: 'd1-1',
            type: 'identify-error',
            prompt: 'Manakah kalimat di bawah ini yang merupakan FRAGMENT (bukan kalimat lengkap)?',
            options: [
              { text: 'Although urbanization brings economic advantages to developing countries.', translation: 'Meskipun urbanisasi membawa keuntungan ekonomi bagi negara-negara berkembang.', isCorrect: true, explanation: 'Tepat! Ini adalah dependent clause yang tidak memiliki induk kalimat (main clause).' },
              { text: 'Urbanization offers significant economic prospects.', translation: 'Urbanisasi menawarkan prospek ekonomi yang signifikan.', isCorrect: false, explanation: 'Kalimat ini lengkap (Subject: Urbanization, Verb: offers, Object: significant economic prospects).' },
              { text: 'Governments should invest in renewable energy sources.', translation: 'Pemerintah harus berinvestasi pada sumber energi terbarukan.', isCorrect: false, explanation: 'Kalimat ini lengkap dengan modal verb "should invest".' }
            ]
          },
          {
            id: 'd1-2',
            type: 'sentence-fix',
            prompt: 'Perbaiki kalimat run-on ini: "The population grew quickly the city lacked infrastructure."',
            promptTranslation: 'Perbaiki kalimat gabung tanpa konjungsi: "Populasi bertumbuh cepat kota tersebut kekurangan infrastruktur."',
            options: [
              { text: 'The population grew quickly, however the city lacked infrastructure.', translation: 'Populasi bertumbuh cepat, namun kota tersebut kekurangan infrastruktur.', isCorrect: false, explanation: 'Ini masih comma splice (however adalah adverb, bukan konjungsi koordinatif).' },
              { text: 'While the population grew quickly, the city lacked adequate infrastructure.', translation: 'Meskipun populasi bertumbuh cepat, kota tersebut kekurangan infrastruktur yang memadai.', isCorrect: true, explanation: 'Sempurna! Menggunakan klausa konsesif "While..." mengubah run-on menjadi kalimat kompleks akademis.' },
              { text: 'The population grew quickly so the city lacked infrastructure.', translation: 'Populasi bertumbuh cepat sehingga kota tersebut kekurangan infrastruktur.', isCorrect: false, explanation: 'Hubungan makna tidak tepat (pertumbuhan penduduk bukan alasan kurangnya infrastruktur).' }
            ]
          }
        ]
      },
      {
        id: 't1-m2',
        title: 'Modul 2: Subject-Verb Agreement & Tense Consistency',
        description: 'Examiner IELTS langsung menurunkan skor Grammatical Accuracy jika menemukan subjek tunggal dengan kata kerja jamak.',
        rules: [
          'Subjek jamak abstrak (e.g. "The number of..." vs "A number of..."): "The number of students IS..." sedangkan "A number of students ARE...".',
          'Kata benda tak terhitung (uncountable: information, research, equipment, traffic, garbage) SELALU memakai kata kerja tunggal!',
          'Di IELTS Task 1, jika data tahun lalu (misal 2010), WAJIB past simple ("rose", bukan "rises").'
        ],
        interactiveDrills: [
          {
            id: 'd1-3',
            type: 'fill-blank',
            prompt: 'Pilihlah bentuk kata kerja yang tepat: "Recent research into microplastics _______ that aquatic life is severely compromised."',
            promptTranslation: 'Riset terbaru mengenai mikroplastik _______ bahwa kehidupan akuatik sangat terancam.',
            options: [
              { text: 'demonstrates', translation: 'menunjukkan (kata kerja tunggal present)', isCorrect: true, explanation: 'Benar! Subjek utama adalah "research" (uncountable noun tunggal), maka membutuhkan kata kerja tunggal "demonstrates".' },
              { text: 'demonstrate', translation: 'menunjukkan (kata kerja jamak)', isCorrect: false, explanation: 'Salah. "Research" adalah kata benda tak terhitung tunggal, bukan jamak.' },
              { text: 'are demonstrating', translation: 'sedang menunjukkan (jamak continuous)', isCorrect: false, explanation: 'Salah secara agreement dan continuous tense kurang umum untuk kesimpulan riset ilmiah.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier-2',
    level: 2,
    targetBand: 'Band 5.5 -> 6.5',
    title: 'Tier 2: The Structure Architect (Complex Sentences)',
    subtitle: 'Menguasai variasi kalimat kompleks: Adverbial clauses, Relative clauses, & Passive Voice.',
    color: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/30',
    xpReward: 500,
    modules: [
      {
        id: 't2-m1',
        title: 'Modul 1: Subordinating Clauses & Non-defining Relative Clauses',
        description: 'Untuk menembus Band 6.5+, Anda tidak boleh hanya mengandalkan "And, But, So". Anda harus menggunakan konjungsi bertingkat secara fleksibel.',
        rules: [
          'Gunakan "Whereas" atau "While" untuk membandingkan dua fakta kontras di satu kalimat.',
          'Gunakan non-defining relative clause ", which..." untuk memberikan komentar analitis pada data di Task 1 atau argumen di Task 2.',
          'Contoh Band 8: "The sales of EVs surged by 45%, which clearly reflects growing environmental consciousness."'
        ],
        interactiveDrills: [
          {
            id: 'd2-1',
            type: 'sentence-upgrade',
            prompt: 'Gabungkan dua kalimat sederhana ini menjadi satu kalimat kompleks Band 7.5+: "Renewable energy is becoming cheaper. Many countries still rely heavily on coal."',
            promptTranslation: 'Energi terbarukan menjadi semakin murah. Banyak negara masih sangat bergantung pada batu bara.',
            options: [
              { text: 'Renewable energy is becoming cheaper, but many countries still rely on coal.', translation: 'Energi terbarukan menjadi makin murah, tetapi banyak negara masih bergantung pada batu bara.', isCorrect: false, explanation: 'Ini kalimat compound biasa (Band 5.5-6.0), belum menunjukkan kompleksitas sintaksis.' },
              { text: 'Despite renewable energy becoming progressively more cost-effective, numerous nations remain heavily reliant on fossil fuels.', translation: 'Meskipun energi terbarukan secara bertahap menjadi semakin hemat biaya, banyak negara tetap sangat bergantung pada bahan bakar fosil.', isCorrect: true, explanation: 'Luar biasa! Menggunakan preposisi konsesif "Despite + gerund" dan diksi akademis ("progressively more cost-effective", "remain heavily reliant").' },
              { text: 'Renewable energy is cheap. Because countries still rely on coal.', translation: 'Energi terbarukan murah. Karena negara-negara masih bergantung pada batu bara.', isCorrect: false, explanation: 'Mengandung fragment dan makna tidak koheren.' }
            ]
          }
        ]
      },
      {
        id: 't2-m2',
        title: 'Modul 2: Passive Voice & Academic Objectivity',
        description: 'Hindari menulis "I think people should..." atau "We can see in the chart...". Gunakan konstruksi pasif objektif untuk nada akademis formal.',
        rules: [
          'Ganti "We can see from the graph that..." -> "It can be observed from the graph that..." atau "The data reveals that...".',
          'Ganti "I believe governments must do this" -> "It is widely contended that corrective measures must be implemented."'
        ],
        interactiveDrills: [
          {
            id: 'd2-2',
            type: 'passive-transform',
            prompt: 'Ubah kalimat informal ini menjadi kalimat pasif akademis: "People must ban single-use plastics immediately."',
            promptTranslation: 'Masyarakat harus melarang plastik sekali pakai dengan segera.',
            options: [
              { text: 'People have to ban single-use plastics quickly.', translation: 'Masyarakat harus melarang plastik sekali pakai dengan cepat.', isCorrect: false, explanation: 'Masih sangat informal dan aktif.' },
              { text: 'An immediate prohibition should be imposed on single-use plastics.', translation: 'Larangan segera harus diberlakukan terhadap penggunaan plastik sekali pakai.', isCorrect: true, explanation: 'Sangat tepat! Menggunakan passive nominalisation ("prohibition should be imposed") yang menjadi standar penulisan Band 8.' },
              { text: 'Single-use plastics should be banned by people.', translation: 'Plastik sekali pakai harus dilarang oleh masyarakat.', isCorrect: false, explanation: 'Penggunaan "by people" mubazir dan canggung.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier-3',
    level: 3,
    targetBand: 'Band 6.5 -> 7.5',
    title: 'Tier 3: Lexical Power & Academic Collocations',
    subtitle: 'Singkirkan kata lemah/pasaran. Gunakan kolokasi C1-C2 presisi untuk topik-topik populer IELTS.',
    color: 'from-amber-600 to-orange-600',
    border: 'border-amber-500/30',
    xpReward: 650,
    modules: [
      {
        id: 't3-m1',
        title: 'Modul 1: The Banned Words List (Eliminating Band 5 Diction)',
        description: 'Kandidat Band 8 tidak pernah menggunakan kata: "big problem", "very good", "bad thing", "get a job".',
        rules: [
          'Ganti "big problem" -> "pressing issue / formidable obstacle / predicament".',
          'Ganti "bad impact" -> "detrimental repercussion / adverse effect".',
          'Ganti "make it better" -> "ameliorate / optimize / enhance".',
          'Ganti "a lot of" -> "a myriad of / a plethora of / substantial numbers of".'
        ],
        interactiveDrills: [
          {
            id: 'd3-1',
            type: 'vocab-upgrade',
            prompt: 'Pilihlah pengganti frasa bergaris bawah untuk skor Band 8: "Traffic congestion is a [very big problem] in modern metropolises."',
            promptTranslation: 'Kemacetan lalu lintas merupakan [masalah yang sangat besar] di kota-kota metropolitan modern.',
            options: [
              { text: 'a colossal predicament', translation: 'krisis/kesulitan yang teramat besar', isCorrect: true, explanation: 'Tepat! "Colossal predicament" atau "pressing urban crisis" menunjukkan kekayaan leksikal tingkat tinggi.' },
              { text: 'a super large trouble', translation: 'masalah yang super besar', isCorrect: false, explanation: 'Sangat tidak alami dan bukan kolokasi akademis.' },
              { text: 'an extremely huge dilemma', translation: 'dilema yang luar biasa besar', isCorrect: false, explanation: 'Redundan dan berlebihan secara gaya bahasa.' }
            ]
          }
        ]
      },
      {
        id: 't3-m2',
        title: 'Modul 2: Topic-Specific Academic Collocations',
        description: 'Examiner menilai fleksibilitas leksikal berdasarkan kemampuan merangkai kata kerja + kata benda akademis yang alami.',
        rules: [
          'Topik Lingkungan: "exert severe strain on resources", "curb greenhouse gas emissions", "mitigate environmental degradation".',
          'Topik Pendidikan: "foster critical thinking", "cultivate well-rounded individuals", "bridge the educational divide".',
          'Topik Teknologi: "usher in unprecedented disruption", "streamline manual processes", "pose ethical conundrums".'
        ],
        interactiveDrills: [
          {
            id: 'd3-2',
            type: 'collocation-match',
            prompt: 'Kolokasi manakah yang paling alami dan formal untuk kata kerja "bridge" dalam konteks sosial?',
            options: [
              { text: 'bridge the socioeconomic divide', translation: 'menjembatani jurang pemisah sosial-ekonomi', isCorrect: true, explanation: 'Sempurna! "Bridge the divide/gap" adalah kolokasi tingkat C2 yang sering dipuji examiner.' },
              { text: 'bridge the big internet problem', translation: 'menjembatani masalah internet besar', isCorrect: false, explanation: 'Kombinasi kata ini canggung (*awkward collocation*).' },
              { text: 'bridge the students and books', translation: 'menjembatani siswa dan buku', isCorrect: false, explanation: 'Makna harfiah yang keliru.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier-4',
    level: 4,
    targetBand: 'Band 7.5 -> 8.5',
    title: 'Tier 4: Academic Sophistication (Mastering Band 8+ Nuances)',
    subtitle: 'Inversion, Cleft Sentences, Nominalisation, & Subtle Cohesive Signposting.',
    color: 'from-purple-600 to-pink-600',
    border: 'border-purple-500/30',
    xpReward: 800,
    modules: [
      {
        id: 't4-m1',
        title: 'Modul 1: Grammatical Inversion for Academic Emphasis',
        description: 'Struktur inversi (membalik posisi subjek dan kata kerja bantu) menunjukkan kendali gramatikal tingkat C2 yang menjadi ciri khas Band 8.5 - 9.0.',
        rules: [
          'Pola 1: Negative/Limiting Adverbials: "Seldom / Rarely / Under no circumstances + Auxiliary + Subject + Verb".',
          'Pola 2: "Not only + Aux + Subject + Verb, but also..."',
          'Contoh: "Under no circumstances should governments neglect rural development."',
          'Gunakan maksimal 1 kali per esai agar tidak terkesan dipaksakan (*natural flow*).'
        ],
        interactiveDrills: [
          {
            id: 'd4-1',
            type: 'inversion-craft',
            prompt: 'Ubah kalimat ini ke dalam bentuk Inversion Band 8: "Governments rarely invest enough in foundational healthcare in impoverished regions."',
            promptTranslation: 'Pemerintah jarang berinvestasi cukup pada layanan kesehatan dasar di wilayah-wilayah tertinggal/miskin.',
            options: [
              { text: 'Rarely do governments allocate sufficient capital to foundational healthcare in impoverished regions.', translation: 'Jarang sekali pemerintah mengalokasikan modal memadai untuk layanan kesehatan dasar di daerah-daerah tertinggal.', isCorrect: true, explanation: 'Sempurna! Inversi "Rarely do + subject + verb" dengan diksi presisi ("allocate sufficient capital").' },
              { text: 'Rarely governments invest enough in foundational healthcare.', translation: 'Jarang pemerintah berinvestasi cukup pada layanan kesehatan dasar.', isCorrect: false, explanation: 'Salah inversi (tidak ada auxiliary verb "do" setelah "Rarely").' },
              { text: 'Governments rarely do invest enough in foundational healthcare.', translation: 'Pemerintah jarang memang berinvestasi cukup pada layanan kesehatan dasar.', isCorrect: false, explanation: 'Ini penekanan biasa, bukan konstruksi inversi formal.' }
            ]
          }
        ]
      },
      {
        id: 't4-m2',
        title: 'Modul 2: Nominalisation (Densitas Konseptual)',
        description: 'Bahasa akademis Band 8 mengubah kata kerja menjadi konsep kata benda (*nominalisation*). Ini membuat tulisan lebih padat, ringkas, dan berwibawa.',
        rules: [
          'Band 6 (Verbal/Clause-heavy): "When cities expand, the air gets dirty and that harms people\'s health."',
          'Band 8.5 (Nominalised): "Urban expansion inevitably leads to air degradation, precipitating severe public health crises."'
        ],
        interactiveDrills: [
          {
            id: 'd4-2',
            type: 'nominalisation-drill',
            prompt: 'Pilihlah versi nominalisasi terbaik untuk kalimat: "Because automation has replaced many factory workers, unemployment has risen sharply."',
            promptTranslation: 'Karena otomatisasi telah menggantikan banyak pekerja pabrik, pengangguran melonjak dengan tajam.',
            options: [
              { text: 'The widespread displacement of manual labor by automation has catalyzed a steep surge in unemployment rates.', translation: 'Pergeseran tenaga kerja manual secara luas oleh otomatisasi telah memicu lonjakan curam dalam tingkat pengangguran.', isCorrect: true, explanation: 'Mastery! "Displacement of manual labor" dan "catalyzed a steep surge" mengubah klausa bertele-tele menjadi kalimat padat khas artikel jurnal/Band 8+.' },
              { text: 'Workers getting replaced by automation caused a big rise in people without jobs.', translation: 'Pekerja yang digantikan oleh otomatisasi menyebabkan lonjakan besar pada orang tanpa pekerjaan.', isCorrect: false, explanation: 'Masih sangat lisan dan kata-katanya sederhana.' },
              { text: 'Automation replaced workers and therefore unemployment was very high.', translation: 'Otomatisasi menggantikan pekerja dan oleh karena itu pengangguran sangat tinggi.', isCorrect: false, explanation: 'Struktur compound sederhana tanpa nominalisasi.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier-5',
    level: 5,
    targetBand: 'Band 8.0 -> 9.0',
    title: 'Tier 5: Exam Simulation Arena (Task 1 & Task 2)',
    subtitle: 'Simulasi real-exam dengan live trend analyzer, PEEL paragraph constructor, dan instant rubric evaluator.',
    color: 'from-amber-500 via-rose-500 to-indigo-600',
    border: 'border-amber-400/40',
    xpReward: 1200,
    modules: [
      {
        id: 't5-m1',
        title: 'Task 1: The Overview Master & Trend Matrix',
        description: 'Kunci mutlak Band 8 di Task 1: Overview yang jelas tanpa data angka rinci, pengelompokan data logis (Body 1 vs Body 2), dan variasi leksikal tren.',
        rules: [
          'Paragraf 1: Paraphrase the prompt (1 kalimat).',
          'Paragraf 2: OVERVIEW (2 kalimat yang merangkum 2 fitur paling mencolok: tren tertinggi/terendah/perubahan terbesar).',
          'Paragraf 3: Body Paragraph 1 (Detail tren kelompok A dengan angka spesifik).',
          'Paragraf 4: Body Paragraph 2 (Detail tren kelompok B dengan perbandingan).'
        ],
        interactiveDrills: [
          {
            id: 'd5-1',
            type: 'overview-pick',
            prompt: 'Sebuah grafik menunjukkan konsumsi batu bara turun dari 60% ke 20%, sementara energi surya naik dari 5% ke 45%. Manakah OVERVIEW yang pantas mendapat Band 8?',
            options: [
              { text: 'Overall, coal was 60% in 1990 and dropped to 20% in 2020, while solar started at 5% and ended at 45%.', translation: 'Secara keseluruhan, batu bara sebesar 60% di tahun 1990 dan turun ke 20% di 2020, sedangkan tenaga surya mulai dari 5% dan berakhir di 45%.', isCorrect: false, explanation: 'Salah fatal untuk Band 8! Overview TIDAK BOLEH mencantumkan angka spesifik. Angka hanya untuk Body Paragraphs.' },
              { text: 'Overall, it is manifest that while reliance on fossil fuels underwent a pronounced decline, renewable solar energy experienced a meteoric rise, emerging as the dominant power source by the period\'s close.', translation: 'Secara keseluruhan, tampak nyata bahwa sementara ketergantungan pada bahan bakar fosil mengalami penurunan yang kentara, energi surya terbarukan mengalami kenaikan pesat, muncul sebagai sumber energi dominan pada penutupan periode tersebut.', isCorrect: true, explanation: 'Sempurna! Merangkum tren utama secara holistik dengan kosakata C2 tanpa membocorkan angka spesifik.' },
              { text: 'In summary, things changed a lot over the years for energy.', translation: 'Ringkasnya, banyak hal berubah selama bertahun-tahun untuk energi.', isCorrect: false, explanation: 'Terlalu kabur dan tidak informatif (Band 4-5).' }
            ]
          }
        ]
      },
      {
        id: 't5-m2',
        title: 'Task 2: The PEEL Cohesion Architecture',
        description: 'Paragraf Body Task 2 yang mendapat Band 8 harus memiliki alur kedap udara: Point -> Explanation -> Example/Evidence -> Link back.',
        rules: [
          'P (Point): Topic sentence jelas dalam 1 kalimat.',
          'E (Explanation): Mengapa dan bagaimana poin tersebut terjadi (logika sebab-akibat mendalam).',
          'E (Evidence/Example): Contoh spesifik dan kredibel (misal: "A case in point is...").',
          'L (Link): Hubungkan kembali kesimpulan paragraf ke pertanyaan esai.'
        ],
        interactiveDrills: [
          {
            id: 'd5-2',
            type: 'peel-order',
            prompt: 'Urutkan 4 kalimat berikut agar membentuk paragraf PEEL yang koheren sempurna:',
            sentencesToOrder: [
              { id: 's-point', text: 'Prime among the advantages of remote work is the dramatic reduction in commuting-related stress and environmental pollution.', translation: 'Keunggulan utama bekerja jarak jauh adalah penurunan dramatis pada stres akibat perjalanan komuter dan polusi lingkungan.' },
              { id: 's-explain', text: 'By eliminating the daily transit, employees not only reclaim substantial hours each week but also diminish carbon emissions generated by private vehicular usage.', translation: 'Dengan meniadakan transit harian, karyawan tidak hanya memulihkan jam-jam substansial tiap pekan namun juga mengurangi emisi karbon dari kendaraan pribadi.' },
              { id: 's-example', text: 'To exemplify, a recent study by the Urban Mobility Institute revealed a 28% decrease in rush-hour traffic in metropolises that embraced hybrid arrangements.', translation: 'Sebagai contoh, studi terkini oleh Urban Mobility Institute mengungkap penurunan 28% dalam lalu lintas jam sibuk di kota-kota yang mengadopsi pola hibrida.' },
              { id: 's-link', text: 'Consequently, telecommuting emerges as a pragmatic mechanism for fostering both workforce well-being and ecological sustainability.', translation: 'Konsekuensinya, telecommuting muncul sebagai mekanisme pragmatis guna membina kesejahteraan tenaga kerja sekaligus keberlanjutan ekologis.' }
            ],
            explanation: 'Struktur PEEL lengkap: Topic sentence -> Elaborasi sebab-akibat -> Contoh empiris spesifik -> Kalimat penutup yang menghubungkan kembali ke topik.'
          }
        ]
      }
    ]
  }
];

export const TOPIC_COLLOCATIONS = [
  {
    topic: 'Environment & Climate Change',
    icon: 'Leaf',
    items: [
      { 
        band5: 'hurt nature', 
        band5Meaning: 'merusak alam',
        band8: 'inflict irreversible ecological damage', 
        band8Meaning: 'menimbulkan kerusakan ekologis yang tidak dapat dipulihkan',
        example: 'Unchecked industrial discharge inflicts irreversible ecological damage on local estuaries.',
        exampleTranslation: 'Pembuangan limbah industri tanpa pengawasan menimbulkan kerusakan ekologis yang tak dapat dipulihkan pada muara lokal.'
      },
      { 
        band5: 'use less plastic', 
        band5Meaning: 'menggunakan lebih sedikit plastik',
        band8: 'curtail plastic consumption', 
        band8Meaning: 'memangkas konsumsi plastik',
        example: 'Stringent policies must be enacted to curtail single-use plastic consumption.',
        exampleTranslation: 'Kebijakan ketat harus diberlakukan guna memangkas konsumsi plastik sekali pakai.'
      },
      { 
        band5: 'fix climate change', 
        band5Meaning: 'memperbaiki perubahan iklim',
        band8: 'mitigate the ramifications of global warming', 
        band8Meaning: 'memitigasi konsekuensi pemanasan global',
        example: 'International accords are imperative to mitigate the ramifications of global warming.',
        exampleTranslation: 'Kesepakatan internasional sangat penting untuk memitigasi konsekuensi pemanasan global.'
      },
      { 
        band5: 'run out of resources', 
        band5Meaning: 'kehabisan sumber daya',
        band8: 'deplete finite natural endowments', 
        band8Meaning: 'menguras sumber daya alam yang terbatas',
        example: 'Overexploitation threatens to deplete finite natural endowments before the century ends.',
        exampleTranslation: 'Eksploitasi berlebihan mengancam akan menguras sumber daya alam yang terbatas sebelum abad ini berakhir.'
      }
    ]
  },
  {
    topic: 'Technology & Artificial Intelligence',
    icon: 'Cpu',
    items: [
      { 
        band5: 'computers take our jobs', 
        band5Meaning: 'komputer mengambil pekerjaan kita',
        band8: 'displace the traditional human workforce', 
        band8Meaning: 'menggeser tenaga kerja manusia konvensional',
        example: 'Autonomous systems threaten to displace the traditional human workforce across administrative sectors.',
        exampleTranslation: 'Sistem otonom mengancam untuk menggeser tenaga kerja manusia konvensional di berbagai sektor administratif.'
      },
      { 
        band5: 'make life easier', 
        band5Meaning: 'membuat hidup lebih mudah',
        band8: 'streamline laborious domestic tasks', 
        band8Meaning: 'menyederhanakan tugas-tugas domestik yang melelahkan',
        example: 'Smart home algorithms streamline laborious domestic tasks, granting individuals unprecedented leisure.',
        exampleTranslation: 'Algoritma rumah pintar menyederhanakan tugas-tugas domestik yang melelahkan, memberikan individu waktu luang yang melimpah.'
      },
      { 
        band5: 'a dangerous tool', 
        band5Meaning: 'alat yang berbahaya',
        band8: 'a double-edged sword fraught with ethical perils', 
        band8Meaning: 'pedang bermata dua yang sarat dengan bahaya etis',
        example: 'Generative AI represents a double-edged sword fraught with ethical perils regarding intellectual copyright.',
        exampleTranslation: 'AI generatif mewakili pedang bermata dua yang sarat dengan risiko etis terkait hak cipta intelektual.'
      },
      { 
        band5: 'change quickly', 
        band5Meaning: 'berubah dengan cepat',
        band8: 'evolve at an unprecedented trajectory', 
        band8Meaning: 'berkembang dengan lintasan yang belum pernah terjadi sebelumnya',
        example: 'Computational power continues to evolve at an unprecedented trajectory.',
        exampleTranslation: 'Kekuatan komputasi terus berkembang dengan lintasan pesat yang belum pernah terjadi sebelumnya.'
      }
    ]
  },
  {
    topic: 'Education & Academic Development',
    icon: 'GraduationCap',
    items: [
      { 
        band5: 'teach students to think', 
        band5Meaning: 'mengajari murid untuk berpikir',
        band8: 'foster analytical acumen and cognitive dexterity', 
        band8Meaning: 'menumbuhkan ketajaman analitis dan ketangkasan kognitif',
        example: 'Tertiary curricula must strive to foster analytical acumen and cognitive dexterity.',
        exampleTranslation: 'Kurikulum perguruan tinggi harus berupaya menumbuhkan ketajaman analitis dan ketangkasan kognitif mahasiswa.'
      },
      { 
        band5: 'poor students can study', 
        band5Meaning: 'murid miskin bisa belajar',
        band8: 'bridge the socioeconomic educational disparity', 
        band8Meaning: 'menjembatani disparitas pendidikan sosial-ekonomi',
        example: 'Subsidized digital access serves to bridge the socioeconomic educational disparity.',
        exampleTranslation: 'Akses digital bersubsidi berfungsi untuk menjembatani disparitas pendidikan sosial-ekonomi.'
      },
      { 
        band5: 'good teachers', 
        band5Meaning: 'guru yang baik',
        band8: 'seasoned pedagogues', 
        band8Meaning: 'pendidik yang berpengalaman matang',
        example: 'The retention of seasoned pedagogues is pivotal to scholastic excellence.',
        exampleTranslation: 'Mempertahankan pendidik yang berpengalaman matang sangat krusial bagi keunggulan akademik.'
      },
      { 
        band5: 'memorize facts', 
        band5Meaning: 'menghafal fakta',
        band8: 'rote memorization devoid of practical synthesis', 
        band8Meaning: 'hafalan mekanis tanpa sintesis praktis',
        example: 'Examinations should eschew rote memorization devoid of practical synthesis.',
        exampleTranslation: 'Ujian hendaknya menghindari hafalan mekanis yang miskin sintesis praktis.'
      }
    ]
  },
  {
    topic: 'Society, Crime & Urban Living',
    icon: 'Building2',
    items: [
      { 
        band5: 'stop criminals', 
        band5Meaning: 'menghentikan pelaku kejahatan',
        band8: 'act as a potent deterrent against recidivism', 
        band8Meaning: 'bertindak sebagai pencegah ampuh terhadap residivisme kejahatan',
        example: 'Rigorous rehabilitative regimens act as a potent deterrent against recidivism.',
        exampleTranslation: 'Program rehabilitasi yang ketat bertindak sebagai pencegah ampuh terhadap pengulangan tindak kriminal.'
      },
      { 
        band5: 'crowded cities', 
        band5Meaning: 'kota yang padat',
        band8: 'densely populated metropolises grappling with congestion', 
        band8Meaning: 'kota metropolitan berpenduduk padat yang bergelut dengan kemacetan',
        example: 'Urban planners in densely populated metropolises grappling with congestion must prioritize mass transit.',
        exampleTranslation: 'Perencana perkotaan di kota-kota metropolitan padat yang bergelut dengan kemacetan harus memprioritaskan angkutan massal.'
      },
      { 
        band5: 'gap between rich and poor', 
        band5Meaning: 'jurang si kaya dan si miskin',
        band8: 'the burgeoning wealth disparity', 
        band8Meaning: 'disparitas kekayaan yang kian melebar pesat',
        example: 'Regressive taxation exacerbates the burgeoning wealth disparity within modern economies.',
        exampleTranslation: 'Pajak regresif memperburuk kesenjangan kekayaan yang kian melebar di dalam perekonomian modern.'
      },
      { 
        band5: 'make rules', 
        band5Meaning: 'membuat aturan',
        band8: 'promulgate stringent legislative frameworks', 
        band8Meaning: 'memberlakukan kerangka peraturan perundang-undangan yang ketat',
        example: 'Authorities ought to promulgate stringent legislative frameworks to govern financial speculation.',
        exampleTranslation: 'Pihak berwenang seyogianya memberlakukan kerangka perundang-undangan yang ketat guna mengawasi spekulasi finansial.'
      }
    ]
  }
];

export const IELTS_SAMPLE_PROMPTS = [
  {
    id: 't2-prompt-1',
    type: 'task2',
    category: 'Technology / Employment',
    question: 'Some people believe that artificial intelligence will inevitably replace human labor, causing widespread unemployment. Others argue that AI will create new opportunities and enhance productivity. Discuss both views and give your own opinion.',
    questionTranslation: 'Sebagian orang berpendapat bahwa kecerdasan buatan pasti akan menggantikan tenaga kerja manusia dan memicu pengangguran massal. Sementara yang lain berpendapat bahwa AI akan menciptakan peluang-peluang baru dan meningkatkan produktivitas. Diskusikan kedua pandangan ini dan sampaikan pendapat Anda sendiri.',
    modelAnswerBand8: `It is widely posited that the relentless ascent of artificial intelligence portends a future characterized by catastrophic structural unemployment. Conversely, proponents maintain that automated technologies serve as an unprecedented catalyst for economic expansion and job diversification. In my estimation, while transitory disruption is undeniable, automation will ultimately augment human capability rather than precipitate widespread obsolescence.

On the one hand, apprehensions regarding job displacement are well-founded. Historically, mechanization targeted routine manual tasks; however, modern neural algorithms increasingly encroach upon cognitive and creative domains. Parallels can be observed in clerical, legal, and diagnostic fields, wherein generative models analyze contracts or interpret radiographs with superior velocity and nominal error rates. Consequently, individuals lacking specialized technological literacy confront the imminent threat of marginalization, thereby exacerbating the socioeconomic divide unless comprehensive retraining programs are implemented.

On the other hand, technological revolutions have perpetually redefined labor paradigms rather than eradicating work altogether. The proliferation of automated systems inevitably engenders demand for specialized vocations that were previously non-existent, spanning algorithm auditing and data curation to ethics compliance. Furthermore, when routine administrative duties are delegated to synthetic intelligence, human professionals are liberated to prioritize empathetic, strategic, and multifaceted creative problem-solving. A case in point is the software industry, where automated code generation has empowered programmers to engineer complex applications at unprecedented scales, bolstering output rather than terminating positions.

In conclusion, although the proliferation of artificial intelligence undoubtedly entails severe friction for vulnerable segments of the workforce, it does not herald an insurmountable unemployment crisis. By proactively orchestrating educational realignments and investing in lifelong human capital development, societies can harness this transformative paradigm to elevate aggregate productivity and create novel occupational avenues.`,
    modelAnswerTranslation: `Banyak pihak berpendapat bahwa kemajuan pesat kecerdasan buatan menandakan masa depan yang diwarnai oleh pengangguran struktural yang parah. Sebaliknya, para pendukungnya berpendapat bahwa teknologi otomatisasi berfungsi sebagai pemicu kemajuan ekonomi dan diversifikasi pekerjaan yang belum pernah ada sebelumnya. Menurut perkiraan saya, meskipun disrupsi sementara tidak dapat disangkal, otomatisasi pada akhirnya akan meningkatkan kemampuan manusia alih-alih melenyapkan lapangan kerja secara luas.

Di satu sisi, kekhawatiran tentang hilangnya pekerjaan sangat beralasan. Secara historis, mekanisasi menargetkan pekerjaan manual rutin; namun, algoritma neural modern kian merambah ranah kognitif dan kreatif. Kesamaan dapat diamati di bidang administrasi, hukum, dan medis, di mana model generatif menganalisis kontrak atau menafsirkan radiografi medis dengan kecepatan superior dan tingkat kesalahan yang amat kecil. Akibatnya, orang yang tidak memiliki literasi teknologi khusus menghadapi ancaman marjinalisasi, sehingga memperlebar jurang pemisah sosial-ekonomi kecuali jika program pelatihan ulang yang komprehensif segera dijalankan.

Di sisi lain, revolusi teknologi senantiasa mengubah paradigma kerja alih-alih menghapus pekerjaan sama sekali. Menjamurnya sistem otomatis tak terelakkan lagi melahirkan kebutuhan akan profesi baru, mulai dari audit algoritma hingga kepatuhan etika AI. Terlebih lagi, ketika tugas rutin dilimpahkan kepada AI, tenaga manusia dapat difokuskan pada pemecahan masalah yang berorientasi empati dan strategis. Sebagai contoh pada industri perangkat lunak, pembuatan kode otomatis membantu pemrogram menciptakan aplikasi besar dengan cepat, yang justru mendongkrak produktivitas alih-alih mengurangi karyawan.

Kesimpulannya, meskipun proliferasi AI memicu gesekan berat bagi pekerja rentan, hal ini bukanlah krisis yang tak teratasi. Dengan langkah proaktif menyesuaikan pendidikan dan melatih keterampilan baru, masyarakat dapat memanfaatkan perubahan ini untuk mendongkrak kesejahteraan bersama.`,
    breakdown: {
      intro: 'Paraphrase kontras + Tesis berimbang yang tegas.',
      body1: 'Sudut pandang A (Displacement) dengan contoh kognitif/diagnostik konkret.',
      body2: 'Sudut pandang B (Augmentation & New Opportunities) dengan analogi sejarah industri.',
      conclusion: 'Sintesis rekomendasi kebijakan pendidikan holistik.'
    }
  },
  {
    id: 't1-prompt-1',
    type: 'task1',
    category: 'Academic Chart / Energy Mix',
    question: 'The chart illustrates the proportions of electricity generated by four distinct energy sources (Coal, Natural Gas, Hydroelectric, and Solar/Wind) in a European nation between 2000 and 2020.',
    questionTranslation: 'Grafik berikut menguraikan proporsi listrik yang dihasilkan oleh empat sumber energi berbeda (Batu Bara, Gas Alam, Tenaga Air, dan Tenaga Surya/Angin) di sebuah negara Eropa antara tahun 2000 dan 2020.',
    modelAnswerBand8: `The line graph delineates the proportional contributions of four primary energy sources—namely coal, natural gas, hydroelectricity, and wind/solar—to the overall electrical generation in a European nation from 2000 to 2020.

Overall, it is readily apparent that conventional fossil fuel reliance witnessed a precipitous contraction, with coal suffering the most acute diminution. Conversely, renewable power avenues, particularly wind and solar, exhibited an exponential expansion, consolidating their position as the preeminent electricity generator by the culmination of the timeframe.

Commencing in 2000, coal stood as the uncontested dominant electricity source, generating approximately 55% of the country's power. However, this figure embarked on a consistent downward trajectory, tumbling to 38% in 2010 before plummeting to a negligible 12% in 2020. Natural gas manifested moderate volatility; having initiated the period at 25%, it escalated to a peak of 33% midway through before moderating to 22% in the final recorded year.

In stark contrast, sustainable alternatives progressed rapidly. In 2000, combined solar and wind generation accounted for a nominal 4%. Following a steady ascent to 15% in 2010, this segment surged dramatically over the subsequent decade, overtaking all counterparts to conclude at a formidable 46%. Meanwhile, hydroelectric generation remained notably stable throughout the twenty-year span, oscillating marginally around the 15% to 18% threshold.`,
    modelAnswerTranslation: `Grafik garis ini memetakan kontribusi proporsional dari empat sumber energi utama—yaitu batu bara, gas alam, pembangkit listrik tenaga air, dan angin/surya—terhadap keseluruhan produksi listrik di suatu negara Eropa dari tahun 2000 hingga 2020.

Secara keseluruhan, terlihat nyata bahwa ketergantungan pada bahan bakar fosil mengalami penurunan drastis, dengan batu bara mengalami penurunan paling tajam. Sebaliknya, energi terbarukan, khususnya angin dan surya, menunjukkan lonjakan besar, memperkokoh posisinya sebagai produsen listrik utama di akhir periode waktu tersebut.

Dimulai pada tahun 2000, batu bara merupakan sumber listrik utama yang mendominasi, menghasilkan sekitar 55% listrik negara tersebut. Namun, angka ini terus menurun hingga menjadi 38% di tahun 2010 sebelum anjlok ke angka kecil 12% pada tahun 2020. Gas alam mengalami fluktuasi sedang; berawal dari 25%, naik ke puncak 33% di pertengahan periode, lalu turun kembali ke 22% pada tahun terakhir.

Sangat kontras, energi terbarukan berkembang pesat. Pada tahun 2000, gabungan surya dan angin hanya menyumbang 4%. Setelah naik stabil menjadi 15% pada tahun 2010, segmen ini melonjak tajam dalam dekade berikutnya, melampaui sumber energi lainnya hingga mencapai 46%. Sementara itu, tenaga air tetap stabil sepanjang 20 tahun tersebut, berfluktuasi tipis di kisaran 15% sampai 18%.`,
    breakdown: {
      intro: 'Paraphrase prompt lengkap dengan interval tahun dan kategori energi.',
      overview: 'Paragraf 2 merangkum tren kontras utama (fossil drop vs renewables surge) tanpa angka spesifik!',
      body1: 'Detail bahan bakar fosil (Coal & Natural Gas) dengan angka dan bahasa tren presisi.',
      body2: 'Detail energi terbarukan (Solar/Wind & Hydroelectric) dengan kolokasi kontras.'
    }
  }
];
