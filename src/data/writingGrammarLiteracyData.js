// Basis Pengetahuan & Panduan Literasi Komprehensif: IELTS Writing & Academic Grammar (Band 8+)
// Dilengkapi penjelasan bilingual (Inggris - Indonesia), formula struktur, dan perbandingan sebelum vs sesudah.

export const BAND_DESCRIPTORS_LITERACY = [
  {
    id: 'tr',
    title: 'Task Achievement / Task Response (TR / TA)',
    titleId: 'Pencapaian Tugas & Jawaban Menyeluruh',
    weight: '25% dari Total Skor Writing',
    icon: '🎯',
    summaryEn: 'How fully, accurately, and relevantly your response answers all parts of the question prompt.',
    summaryId: 'Seberapa lengkap, akurat, dan relevan tulisan Anda menjawab seluruh bagian dari instruksi soal.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Addresses the task only partially; main ideas are limited, repetitive, or insufficiently developed; position may be unclear or inconsistent.',
        characteristicsId: 'Hanya menjawab sebagian instruksi; ide pokok terbatas, berulang, atau kurang dikembangkan; posisi/pendapat penulis mungkin tidak jelas atau inkonsisten.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Addresses all parts of the task; presents a clear position throughout; extends and supports main ideas, though there may be slight over-generalization.',
        characteristicsId: 'Menjawab seluruh bagian tugas; menyajikan sudut pandang yang konsisten; memperluas dan mendukung ide utama, meski sesekali ada generalisasi berlebih.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Fully satisfies all requirements of the task with a well-developed, highly nuanced response; relevant, fully extended, and sharply focused supporting ideas throughout.',
        characteristicsId: 'Memenuhi seluruh tuntutan tugas secara tuntas dengan argumen matang dan bernuansa; ide pendukung relevan, terelaborasi secara mendalam, dan fokus tajam.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Never leave any question prompt unaddressed (if prompt asks for causes AND solutions, both must have balanced paragraphs).',
        ruleId: 'Jangan pernah melewatkan satu pun instruksi soal (jika meminta penyebab DAN solusi, keduanya wajib dibahas secara seimbang).'
      },
      {
        ruleEn: 'In Task 1, an "Overview" identifying 2-3 key macro trends without specific numbers is non-negotiable for Band 7+.',
        ruleId: 'Pada Task 1, paragraf "Overview" yang merangkum 2-3 tren makro utama tanpa menyebut angka detail adalah syarat mutlak untuk meraih Band 7+.'
      },
      {
        ruleEn: 'Every main argument must be supported by an explanation and a concrete real-world example.',
        ruleId: 'Setiap argumen inti wajib didukung oleh penjelasan logis dan contoh nyata yang kredibel.'
      }
    ]
  },
  {
    id: 'cc',
    title: 'Coherence & Cohesion (CC)',
    titleId: 'Keterpaduan & Alur Logika Paragraf',
    weight: '25% dari Total Skor Writing',
    icon: '🔗',
    summaryEn: 'The logical flow of ideas, paragraph progression, and skillful use of cohesive devices and referencing.',
    summaryId: 'Alur logis penyampaian ide, progresivitas antar paragraf, dan kemahiran memakai kata hubung serta kata rujukan.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Mechanically uses cohesive devices (overuse of "Firstly, Secondly, In conclusion"); faulty or unclear referencing; poor paragraphing.',
        characteristicsId: 'Memakai kata hubung secara kaku/mekanis (terlalu banyak "Firstly, Secondly, In conclusion"); kata rujukan sering membingungkan pembaca.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Logically organizes information with clear progression throughout; uses a range of cohesive devices appropriately with some under-/over-use.',
        characteristicsId: 'Mengorganisir informasi secara logis dengan alur jelas; menggunakan variasi kata hubung secara tepat meski sesekali masih terasa sedikit berlebih.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Sequences information and ideas effortlessly; cohesion is seamless and attracts no unwanted attention; skillful paragraphing with central topic per paragraph.',
        characteristicsId: 'Menata ide secara alami dan mulus; kata penghubung menyatu sempurna tanpa terkesan dipaksakan; pembagian paragraf sangat terencana dan berfokus.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Employ anaphoric and cataphoric referencing (this phenomenon, such policies, these subsequent developments) instead of repeating nouns.',
        ruleId: 'Gunakan kata ganti rujukan (this phenomenon, such policies) daripada mengulang kata benda yang sama berulang kali.'
      },
      {
        ruleEn: 'Follow the PEEL method strictly: Point -> Explanation -> Evidence -> Link.',
        ruleId: 'Patuhi metode PEEL secara disiplin: Pokok Pikiran -> Penjelasan -> Bukti Contoh -> Kaitan Logis ke Tesis.'
      }
    ]
  },
  {
    id: 'lr',
    title: 'Lexical Resource (LR)',
    titleId: 'Kekayaan Kosakata & Kolokasi Alami',
    weight: '25% dari Total Skor Writing',
    icon: '📚',
    summaryEn: 'Range, precision, natural collocation, and register of academic vocabulary, with minimal spelling slips.',
    summaryId: 'Variasi, presisi makna, kolokasi alami, dan gaya bahasa formal akademis dengan kesalahan ejaan yang mendekati nol.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Uses an adequate range of vocabulary with basic phrasing; attempts less common words but makes errors in word choice, collocation, or spelling.',
        characteristicsId: 'Kosakata cukup namun mendasar; mencoba kata sulit tetapi sering salah penempatan konteks, salah kolokasi, atau salah eja.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Uses a sufficient range of vocabulary to allow flexibility; uses less common and idiomatic vocabulary with awareness of style and collocation; few spelling errors.',
        characteristicsId: 'Kosakata cukup luas dan fleksibel; mampu memakai kata akademik dan kolokasi dengan kesadaran gaya bahasa formal; sedikit kesalahan eja.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Uses a wide vocabulary naturally and flexibly; rare minor errors occur only as slips; masterly precision in conveying fine shades of meaning.',
        characteristicsId: 'Kosakata sangat luas, natural, dan luwes; kesalahan langka dan hanya kekhilafan ketik kecil; ketepatan luar biasa dalam nuansa arti yang halus.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Do not memorize fancy big words without understanding their precise collocations (e.g. "mitigate the crisis" vs "mitigate the problem").',
        ruleId: 'Hindari menghafal kata rumit tanpa memahami pasangan kolokasi aslinya (misal: "mitigate the crisis" tepat, bukan sembarang gabungan kata).'
      },
      {
        ruleEn: 'Avoid conversational informal expressions (avoid "kids", "a lot of", "stuff", use "children/offspring", "a considerable volume of", "aspects").',
        ruleId: 'Jauhi bahasa percakapan santai (ganti "kids" dengan "adolescents/offspring", ganti "a lot of" dengan "a substantial proportion of").'
      }
    ]
  },
  {
    id: 'gra',
    title: 'Grammatical Range & Accuracy (GRA)',
    titleId: 'Variasi Struktur Kalimat & Akurasi Tata Bahasa',
    weight: '25% dari Total Skor Writing',
    icon: '⚖️',
    summaryEn: 'Variety of sentence structures (compound, complex, inverted, passive) and freedom from grammatical and punctuation errors.',
    summaryId: 'Keragaman struktur kalimat (majemuk, kompleks, inversi, pasif) serta ketepatan tanda baca tanpa kesalahan tata bahasa.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Uses a mix of simple and complex sentences; produces frequent grammar errors or awkward punctuation that may cause minor reader strain.',
        characteristicsId: 'Campuran kalimat sederhana dan majemuk; sering melakukan kesalahan grammar atau tanda baca canggung yang mengganggu alur baca.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Uses a variety of complex structures; produces frequent error-free sentences; has good control of grammar and punctuation with occasional slips.',
        characteristicsId: 'Menggunakan ragam kalimat kompleks; mayoritas kalimat bebas galat; kendali tanda baca dan tata bahasa baik dengan sedikit kekhilafan.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Uses a wide range of structures with full flexibility; the vast majority of sentences are error-free; punctuation is extremely precise and sophisticated.',
        characteristicsId: 'Rentang struktur kalimat sangat fleksibel; hampir 100% kalimat bebas salah; penempatan tanda baca sangat cermat dan matang.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Incorporate at least 2 complex constructions per paragraph: participle clauses, conditional inversion, or cleft sentences.',
        ruleId: 'Sertakan minimal 2 konstruksi kalimat lanjutan per paragraf: klausa partisipial, inversi kondisional, atau kalimat cleft.'
      },
      {
        ruleEn: 'Master the semicolon (;) to connect two closely related independent clauses without conjunctions.',
        ruleId: 'Kuasai pemakaian titik koma (;) untuk menghubungkan dua klausa mandiri yang berkaitan erat tanpa konjungsi.'
      }
    ]
  }
];

export const TASK1_WRITING_GUIDE = {
  title: 'Task 1 Master Blueprint: Academic Report & GT Letter',
  titleId: 'Panduan Utama Task 1: Laporan Data Akademik & Format Surat GT',
  academicFormula: [
    {
      step: 1,
      name: 'Paragraph 1: Introduction (Paraphrase Prompt)',
      nameId: 'Paragraf 1: Pendahuluan (Parafrasa Soal)',
      purposeEn: 'State clearly what the chart shows in your own words, including time periods, units, and geographical scope.',
      purposeId: 'Nyatakan secara gamblang apa yang digambarkan oleh grafik menggunakan kata-kata sendiri, termasuk periode waktu, satuan, dan wilayah geografis.',
      templateEn: 'The provided [line graph / bar chart / diagram] illustrates [the proportion / volume / distribution] of [topic] across [countries / categories] between [year] and [year].',
      templateId: 'Grafik [garis/batang/diagram] yang disediakan menggambarkan [proporsi/volume/distribusi] dari [topik] di berbagai [negara/kategori] antara tahun [tahun] dan [tahun].',
      keyTips: 'Ganti "shows" dengan "illustrates", "depicts", "delineates", atau "demonstrates". Jangan salin kata per kata dari instruksi soal.'
    },
    {
      step: 2,
      name: 'Paragraph 2: The Macro Overview (Kunci Lolos Band 7+)',
      nameId: 'Paragraf 2: Rangkuman Makro (Kunci Lolos Band 7+)',
      purposeEn: 'Highlight 2-3 dominant trends, highest/lowest peaks, or major stages without mentioning specific numerical values.',
      purposeId: 'Sorot 2-3 tren dominan, puncak tertinggi/terendah, atau fase utama tanpa menyebutkan angka nominal spesifik.',
      templateEn: 'Overall, it is readily apparent that while [Category A] experienced an upward trajectory over the examined timeframe, [Category B] underwent a noticeable decline. Furthermore, [Category C] consistently accounted for the dominant share.',
      templateId: 'Secara keseluruhan, terlihat jelas bahwa sementara [Kategori A] mengalami tren kenaikan selama periode yang diamati, [Kategori B] mengalami penurunan yang cukup besar. Selain itu, [Kategori C] secara konsisten menyumbang porsi terbesar.',
      keyTips: 'Wajib ada kata "Overall". Jangan masukkan angka absolut (seperti "35%" atau "500 ton") di paragraf overview ini!'
    },
    {
      step: 3,
      name: 'Paragraph 3: Detailed Body 1 (Key Features & Grouping)',
      nameId: 'Paragraf 3: Paragraf Tubuh 1 (Rincian Fitur Utama & Pengelompokan)',
      purposeEn: 'Analyze the first group of data or the highest category with precise figures, dates, and proportional comparisons.',
      purposeId: 'Analisis kelompok data pertama atau kategori tertinggi dengan angka akurat, tahun, dan perbandingan proporsional.',
      templateEn: 'Regarding [Theme 1], the figure for [A] commenced at approximately [X]% in [Year], before surging dramatically to peak at [Y]% by [Year]. In stark contrast, [B] hovered around [Z]% throughout the remainder of the timeline.',
      templateId: 'Terkait [Tema 1], angka untuk [A] bermula pada kisaran [X]% pada tahun [Tahun], sebelum melonjak tajam mencapai puncak di [Y]% pada tahun [Tahun]. Sebaliknya, [B] bertahan di sekitar [Z]% selama sisa jangka waktu tersebut.',
      keyTips: 'Gunakan frasa perbandingan: "in stark contrast to", "eclipsed by", "represented twice the volume of".'
    },
    {
      step: 4,
      name: 'Paragraph 4: Detailed Body 2 (Secondary Trends & Contrasts)',
      nameId: 'Paragraf 4: Paragraf Tubuh 2 (Tren Sekunder & Perbandingan Akhir)',
      purposeEn: 'Report remaining categories, fluctuations, or exceptions, concluding with a comparison of the final endpoints.',
      purposeId: 'Laporkan kategori yang tersisa, fluktuasi, atau anomali, diakhiri dengan perbandingan titik akhir pada tahun penutupan.',
      templateEn: 'Turning to the remaining categories, [C] showed modest fluctuation, fluctuating between [A] and [B] before stabilizing at [N] in the terminal year.',
      templateId: 'Beralih ke kategori yang tersisa, [C] menunjukkan fluktuasi moderat, naik turun antara [A] dan [B] sebelum akhirnya stabil pada angka [N] di tahun terakhir.',
      keyTips: 'Pastikan seluruh kategori yang ada di grafik terwakili dengan proporsional.'
    }
  ],
  chartTypes: [
    { type: 'Line Graph', focusEn: 'Trends over time, fluctuations, plateaus, steep surges, sharp drops.', focusId: 'Tren dari waktu ke waktu, fluktuasi, kestabilan/plateau, lonjakan tajam, penurunan curam.' },
    { type: 'Bar Chart', focusEn: 'Direct static comparison across categories or time snapshots.', focusId: 'Perbandingan langsung antar kategori atau perbandingan berkala.' },
    { type: 'Pie Chart', focusEn: 'Proportions, percentages, market shares, dominant vs marginal segments.', focusId: 'Proporsi, persentase, pangsa pasar, segmen dominan versus segmen kecil.' },
    { type: 'Process Diagram', focusEn: 'Sequential phases, inputs/raw materials, transformations, mechanical vs natural steps.', focusId: 'Tahapan berurutan, bahan baku masukan, proses transformasi, siklus alami versus mekanis.' },
    { type: 'Map Comparison', focusEn: 'Urban development, demolition, additions, infrastructure expansions, directional references (northward, eastward).', focusId: 'Pembangunan kota, pembongkaran, penambahan fasilitas, perluasan infrastruktur, dan referensi arah mata angin.' }
  ]
};

export const TASK2_WRITING_GUIDE = {
  title: 'Task 2 Master Blueprint: The Band 8.5+ Essay Framework',
  titleId: 'Panduan Utama Task 2: Arsitektur Esai Akademik Band 8.5+',
  essayTypes: [
    {
      id: 'opinion',
      type: 'Opinion (Agree / Disagree)',
      typeId: 'Esai Opini (Setuju / Tidak Setuju)',
      promptPatternEn: '"To what extent do you agree or disagree?"',
      promptPatternId: '"Sejauh mana Anda setuju atau tidak setuju dengan pernyataan tersebut?"',
      structureEn: 'Intro (Paraphrase + Thesis with clear stance) -> Body 1 (Strong argument 1) -> Body 2 (Strong argument 2 or concession) -> Conclusion (Restate thesis + synthesis).',
      structureId: 'Pendahuluan (Parafrasa + Tesis dengan posisi tegas) -> Body 1 (Argumen pendukung 1) -> Body 2 (Argumen pendukung 2 atau konsesi) -> Kesimpulan (Penegasan ulang tesis + sintesis).'
    },
    {
      id: 'discussion',
      type: 'Discussion (Discuss Both Views & Give Opinion)',
      typeId: 'Esai Diskusi (Bahas Kedua Sudut Pandang & Beri Opini)',
      promptPatternEn: '"Discuss both views and give your own opinion."',
      promptPatternId: '"Bahas kedua sudut pandang dan berikan pendapat Anda sendiri."',
      structureEn: 'Intro (Introduce both sides + state your position) -> Body 1 (Examine View A objectively) -> Body 2 (Examine View B + why you favor it) -> Conclusion (Weigh both sides and solidify verdict).',
      structureId: 'Pendahuluan (Perkenalkan kedua pihak + sebutkan posisi Anda) -> Body 1 (Bahas Pandangan A secara objektif) -> Body 2 (Bahas Pandangan B + alasan Anda memihaknya) -> Kesimpulan (Timbang kedua sisi & tegaskan keputusan final).'
    },
    {
      id: 'problem_solution',
      type: 'Causes & Solutions / Problems & Solutions',
      typeId: 'Penyebab & Solusi / Masalah & Solusi',
      promptPatternEn: '"What are the primary causes, and what measures can be taken to tackle this issue?"',
      promptPatternId: '"Apa saja faktor penyebab utama, dan tindakan apa yang dapat diambil untuk menanggulangi masalah ini?"',
      structureEn: 'Intro (Paraphrase context + outline causes/solutions) -> Body 1 (2 Root causes analyzed) -> Body 2 (2 Corresponding viable solutions) -> Conclusion (Summary of urgency and impact).',
      structureId: 'Pendahuluan (Parafrasa konteks + gambaran umum faktor dan solusi) -> Body 1 (2 Akar penyebab dianalisis tuntas) -> Body 2 (2 Solusi realistis yang sepadan) -> Kesimpulan (Rangkuman urgensi dan dampak jangka panjang).'
    },
    {
      id: 'double_question',
      type: 'Two-Part Question / Direct Questions',
      typeId: 'Dua Pertanyaan Langsung',
      promptPatternEn: '"Why is this the case? Is this a positive or negative development?"',
      promptPatternId: '"Mengapa hal ini terjadi? Apakah ini merupakan perkembangan yang positif atau negatif?"',
      structureEn: 'Intro (Paraphrase + answer Q1 and Q2 directly) -> Body 1 (Direct full answer to Q1) -> Body 2 (Direct full answer to Q2) -> Conclusion (Summarize both answers into cohesive statement).',
      structureId: 'Pendahuluan (Parafrasa + jawab langsung Q1 dan Q2) -> Body 1 (Ulasan mendalam jawaban Q1) -> Body 2 (Ulasan mendalam jawaban Q2) -> Kesimpulan (Rangkum kedua jawaban menjadi simpulan terpadu).'
    }
  ],
  peelFramework: {
    title: 'The PEEL Paragraph Architecture (Formula Paragraf Tubuh Band 8+)',
    titleId: 'Arsitektur Paragraf PEEL (Kunci Paragraf Kohesif)',
    steps: [
      {
        letter: 'P',
        name: 'Point (Topik Utama)',
        descEn: 'A clear, single topic sentence stating the primary argument of the paragraph.',
        descId: 'Satu kalimat topik yang tegas dan jelas memuat ide pokok paragraf.',
        exampleEn: 'The primary impetus behind runaway urban sprawl is the escalating cost of inner-city accommodation.',
        exampleId: 'Pendorong utama di balik meluasnya pemukiman pinggiran kota adalah melonjaknya biaya hunian di pusat kota.'
      },
      {
        letter: 'E',
        name: 'Explanation (Penjelasan Logis)',
        descEn: 'Elaborate on why or how this phenomenon occurs with logical causality.',
        descId: 'Urai secara mendalam mengapa atau bagaimana fenomena tersebut terjadi melalui alur sebab-akibat yang runtut.',
        exampleEn: 'Because metropolitan real estate markets are increasingly driven by speculative investment, average working families find themselves economically priced out of central districts.',
        exampleId: 'Karena pasar properti metropolitan kian dipacu oleh investasi spekulatif, keluarga pekerja biasa mendapati diri mereka terlempar keluar dari distrik pusat kota akibat harga yang tak terjangkau.'
      },
      {
        letter: 'E',
        name: 'Evidence / Example (Bukti Nyata)',
        descEn: 'Provide concrete empirical evidence, institutional data, or recognizable case studies.',
        descId: 'Sajikan bukti empiris konkret, data institusional, atau studi kasus nyata yang dapat dipertanggungjawabkan.',
        exampleEn: 'In cities such as London and Sydney, over sixty percent of young professionals now commute upwards of two hours daily from outer commuter belts.',
        exampleId: 'Di kota-kota seperti London dan Sydney, lebih dari enam puluh persen kaum profesional muda kini menempuh perjalanan komuter lebih dari dua jam setiap hari dari daerah pinggiran.'
      },
      {
        letter: 'L',
        name: 'Link (Kaitkan Kembali ke Tesis)',
        descEn: 'Conclude the paragraph by tying the evidence directly back to the essay prompt or central thesis.',
        descId: 'Tutup paragraf dengan menautkan kembali bukti tersebut secara langsung ke pokok pertanyaan esai atau tesis awal.',
        exampleEn: 'Consequently, this spatial dislocation underscores the urgent imperative for government-mandated affordable housing quotas.',
        exampleId: 'Akibatnya, dislokasi tempat tinggal ini menegaskan kembali urgensi penerapan kuota perumahan terjangkau oleh pemerintah.'
      }
    ]
  }
};

export const ADVANCED_GRAMMAR_MODULES = [
  {
    id: 'nominalisation',
    title: 'Nominalisation (Pembendaan Akademik)',
    badge: 'Band 8.0+ Lexical Density',
    conceptEn: 'Transforming verbs and adjectives into academic nouns to condense meaning, increase formal tone, and eradicate informal narrative phrasing.',
    conceptId: 'Mengubah kata kerja dan kata sifat menjadi nomina abstrak akademik untuk memadatkan makna, meningkatkan register formal, dan melenyapkan gaya bercerita santai.',
    beforeTextEn: 'People are cutting down trees rapidly, and because of this, the soil erodes and animals lose their natural habitats.',
    beforeTextId: 'Orang-orang menebangi pohon dengan cepat, dan karena itu, tanah menjadi terkikis dan hewan kehilangan habitat alaminya. (Band 5.5 - Bergaya bicara santai)',
    afterTextEn: 'Rapid deforestation inevitably precipitates severe soil erosion and widespread habitat loss.',
    afterTextId: 'Deforestasi yang pesat tak terelakkan memicu erosi tanah yang parah dan hilangnya habitat secara luas. (Band 8.5 - Padat akademis)',
    rulesId: [
      'Ganti konstruksi "because people verb" menjadi frasa nomina yang menjadi subjek utama kalimat.',
      'Manfaatkan akhiran umum nominalisasi: -tion, -ment, -ance, -ity, -sion (misal: develop -> development, eradicate -> eradication).'
    ]
  },
  {
    id: 'inversion',
    title: 'Negative & Limiting Inversion (Pembalikan Kalimat Berpenekanan)',
    badge: 'Band 8.5 Syntactic Variety',
    conceptEn: 'Placing negative or limiting adverbs at the beginning of a clause followed by auxiliary verb inversion (Auxiliary + Subject + Verb) to emphasize critical points.',
    conceptId: 'Meletakkan kata keterangan pembatas atau negatif di awal klausa yang diikuti pembalikan kata bantu kerja (Auxiliary + Subject + Verb) untuk memberi penekanan tajam.',
    beforeTextEn: 'Governments should never sacrifice environmental sustainability for immediate corporate profit under any circumstances.',
    beforeTextId: 'Pemerintah tidak boleh mengorbankan keberlanjutan lingkungan demi keuntungan korporat jangka pendek dalam kondisi apa pun. (Band 6.0)',
    afterTextEn: 'Under no circumstances should governments sacrifice ecological sustainability for fleeting commercial gain.',
    afterTextId: 'Dalam kondisi apa pun pemerintah tidak selayaknya mengorbankan keberlanjutan ekologis demi keuntungan komersial yang sesaat. (Band 8.5 - Berwibawa)',
    rulesId: [
      'Frasa pemicu inversi: "Under no circumstances...", "Not only [auxiliary]... but also...", "Seldom do...", "Rarely have...".',
      'Ingat rumus: Frasa Negatif + Kata Kerja Bantu (should / do / did / have) + Subjek + Kata Kerja Utama.'
    ]
  },
  {
    id: 'cleft_sentences',
    title: 'Cleft Sentences (Kalimat Terbelah Penegas Fokus)',
    badge: 'Band 8.0 Rhetorical Focus',
    conceptEn: 'Splitting a simple sentence into two clauses using "It is/was... that" or "What... is" to shine a spotlight on the decisive causative factor.',
    conceptId: 'Membelah kalimat tunggal menjadi dua klausa dengan pola "It is/was... that" atau "What... is" untuk menegaskan faktor pemicu utama.',
    beforeTextEn: 'Inadequate public healthcare infrastructure causes high mortality rates in remote rural regions.',
    beforeTextId: 'Infrastruktur kesehatan publik yang tidak memadai menyebabkan tingginya angka kematian di wilayah pelosok pedesaan. (Band 6.0)',
    afterTextEn: 'It is the acute deficit of localized medical infrastructure that primarily exacerbates preventable mortality rates across rural communities.',
    afterTextId: 'Kekurangan akut infrastruktur medis lokallah yang terutama memperparah angka kematian yang seharusnya dapat dicegah di komunitas pedesaan. (Band 8.5)',
    rulesId: [
      'Gunakan struktur: "It is [faktor yang ingin disorot] that [konsekuensi atau peristiwa lanjutan]".',
      'Atau gunakan pola Wh-cleft: "What governments must urgently implement is a stringent progressive taxation system."'
    ]
  },
  {
    id: 'participle_clauses',
    title: 'Participle Clauses (Klausa Partisipial Pemadat Kalimat)',
    badge: 'Band 8.0 Flow & Cohesion',
    conceptEn: 'Condensing relative and adverbial clauses using present (-ing) or past (-ed) participles to create seamless transitions without repetitive pronouns.',
    conceptId: 'Memadatkan anak kalimat keterangan menggunakan partisipel aktif (-ing) atau pasif (-ed) untuk menciptakan alur tulisan yang mengalir tanpa pengulangan kata ganti.',
    beforeTextEn: 'When companies adopt automated robotic systems, they reduce overhead expenditure, and this results in greater profit margins.',
    beforeTextId: 'Ketika perusahaan mengadopsi sistem robotik terotomasi, mereka mengurangi belanja operasional, dan hal ini menghasilkan margin laba yang lebih besar. (Band 6.0)',
    afterTextEn: 'Adopting robotic automation dramatically curtails operational overhead, thereby yielding substantially higher profit margins.',
    afterTextId: 'Pengadopsian otomasi robotik secara dramatis memangkas biaya operasional, sehingga menghasilkan margin laba yang jauh lebih tinggi. (Band 8.5)',
    rulesId: [
      'Gunakan klausa partisipial berpenghubung ", thereby [verb-ing]..." di akhir kalimat untuk menunjukkan akibat logis langsung.',
      'Hindari dangling participle: pastikan subjek logis dari partisipel sesuai dengan subjek klausa utama.'
    ]
  },
  {
    id: 'punctuation_mastery',
    title: 'Punctuation Precision (Ketepatan Tanda Baca Akademis)',
    badge: 'Band 8.5+ GRA Criterion',
    conceptEn: 'Using semicolons, colons, em-dashes, and non-defining comma boundaries with exact syntactic purpose.',
    conceptId: 'Memanfaatkan titik koma (;), titik dua (:), tanda pisah em-dash (—), dan pembatas koma klausa non-restriktif secara presisi.',
    beforeTextEn: 'Renewable energy is becoming cheaper however fossil fuels still receive huge government subsidies.',
    beforeTextId: 'Energi terbarukan menjadi semakin murah namun bahan bakar fosil masih menerima subsidi pemerintah yang sangat besar. (Run-on sentence/salah tanda baca)',
    afterTextEn: 'Renewable energy generation has become economically viable; however, traditional fossil fuels continue to enjoy disproportionate state subsidies.',
    afterTextId: 'Pembangkitan energi terbarukan telah layak secara ekonomi; namun demikian, bahan bakar fosil tradisional terus menikmati subsidi negara yang tidak proporsional. (Band 8.5 - Sempurna)',
    rulesId: [
      'Titik Koma (;): Digunakan sebelum konjungsi adverbial (however, consequently, furthermore) saat menghubungkan dua kalimat mandiri, diikuti tanda koma.',
      'Koma Non-Defining: Kalimat tambahan yang jika dihapus tidak mengubah makna utama wajib diapit sepasang koma (contoh: "Artificial intelligence, which has expanded rapidly, now impacts...").'
    ]
  }
];
