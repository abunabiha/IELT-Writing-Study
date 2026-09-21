// Data Pelajaran Latihan Menulis Kinetik (Deliberate Copywork Lessons)
// 4 Tingkatan Kemahiran Sesuai Target Band (Kalimat Sederhana -> Kalimat Kompleks -> Paragraf PEEL -> Esai Penuh Band 8.5+)

export const COPYWORK_LEVELS = [
  {
    id: 1,
    title: 'Level 1: Kalimat Dasar & Klausa Inti',
    targetBand: 'Band 5.0 -> 6.0',
    badge: 'Pondasi Kinetik',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-500/40',
    xpReward: 40,
    desc: 'Melatih ritme motorik mengetik subjek-predikat yang utuh, tanda baca dasar, dan konjungsi koordinatif tanpa salah tik.'
  },
  {
    id: 2,
    title: 'Level 2: Kalimat Kompleks, Variasi Pasif & Inversi',
    targetBand: 'Band 6.5 -> 7.5',
    badge: 'Sintaksis Lanjut',
    color: 'from-indigo-500 to-purple-600',
    border: 'border-indigo-500/40',
    xpReward: 75,
    desc: 'Membiasakan tangan mengetik variasi klausa bertingkat (Whereas, Despite), non-defining relative clause, dan inversi negatif.'
  },
  {
    id: 3,
    title: 'Level 3: Paragraf Analitis PEEL & Overview Task 1',
    targetBand: 'Band 7.5 -> 8.0',
    badge: 'Paragraf Utuh',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/40',
    xpReward: 140,
    desc: 'Mengetik 1 paragraf tubuh lengkap mengikuti kaidah PEEL (Point, Explanation, Evidence, Link) serta Overview grafik Task 1.'
  },
  {
    id: 4,
    title: 'Level 4: Esai Utuh Band 8.5+ (Full Essay Mastery)',
    targetBand: 'Band 8.5 -> 9.0',
    badge: 'Stamina Ujian',
    color: 'from-purple-600 to-pink-600',
    border: 'border-purple-500/40',
    xpReward: 300,
    desc: 'Mengetik esai lengkap 250-290 kata dari pembuka sampai penutup untuk membangun memori otot dan kecepatan di hari ujian.'
  }
];

export const COPYWORK_LESSONS = [
  // ===========================================================================
  // LEVEL 1: KALIMAT DASAR & KLAUSA INTI (Band 5.0 -> 6.0)
  // ===========================================================================
  {
    id: 'cw-l1-1',
    level: 1,
    topic: 'Lingkungan',
    title: 'Pemisahan Klausa Bebas & Konjungsi Waktu',
    bandTarget: 'Band 5.5',
    wordCount: 19,
    modelText: 'Although urbanization brings noticeable economic advantages, it frequently accelerates environmental degradation across developing nations.',
    indonesianTranslation: 'Meskipun urbanisasi membawa keuntungan ekonomi yang nyata, hal tersebut kerap kali mempercepat degradasi lingkungan di berbagai negara berkembang.',
    grammaticalBreakdown: {
      clauseStructure: 'Subordinate clause konsesif ("Although...") diikuti Main clause independen ("it frequently accelerates...").',
      academicVocabulary: ['noticeable economic advantages', 'accelerates environmental degradation'],
      punctuationFocus: 'Koma wajib diletakkan tepat setelah subordinate clause berakhir sebelum subjek utama "it".'
    }
  },
  {
    id: 'cw-l1-2',
    level: 1,
    topic: 'Teknologi',
    title: 'Kalimat Majemuk Setara dengan Konjungsi Logis',
    bandTarget: 'Band 6.0',
    wordCount: 22,
    modelText: 'Computers perform calculations with superior speed, but human professionals are still required for strategic and empathetic decision-making.',
    indonesianTranslation: 'Komputer melakukan perhitungan dengan kecepatan luar biasa, namun tenaga profesional manusia tetap diperlukan untuk pengambilan keputusan yang strategis dan berempati.',
    grammaticalBreakdown: {
      clauseStructure: 'Compound sentence dengan konjungsi koordinatif adversatif ("but") menghubungkan dua klausa independen.',
      academicVocabulary: ['superior speed', 'strategic and empathetic decision-making'],
      punctuationFocus: 'Koma diletakkan sebelum konjungsi koordinatif "but" saat menggabungkan dua klausa lengkap.'
    }
  },
  {
    id: 'cw-l1-3',
    level: 1,
    topic: 'Pendidikan',
    title: 'Penggunaan Modalitas & Pasif Akademis',
    bandTarget: 'Band 6.0',
    wordCount: 18,
    modelText: 'Financial support must be allocated to public libraries because books provide essential knowledge to underprivileged students.',
    indonesianTranslation: 'Dukungan finansial harus dialokasikan ke perpustakaan umum karena buku menyediakan ilmu pengetahuan esensial bagi para siswa yang kurang mampu.',
    grammaticalBreakdown: {
      clauseStructure: 'Passive modal clause ("must be allocated") diikuti adverbial clause alasan ("because...").',
      academicVocabulary: ['allocated', 'essential knowledge', 'underprivileged students'],
      punctuationFocus: 'Tidak membutuhkan koma sebelum "because" jika klausa alasan berada di akhir kalimat.'
    }
  },
  {
    id: 'cw-l1-4',
    level: 1,
    topic: 'Kesehatan',
    title: 'Gerund sebagai Subjek Kalimat',
    bandTarget: 'Band 6.0',
    wordCount: 19,
    modelText: 'Consuming excessive sugary beverages on a daily basis inevitably increases the risk of severe cardiovascular disease.',
    indonesianTranslation: 'Mengonsumsi minuman berpemanis secara berlebihan setiap hari tak terelakkan lagi meningkatkan risiko penyakit kardiovaskular yang parah.',
    grammaticalBreakdown: {
      clauseStructure: 'Gerund phrase ("Consuming excessive sugary beverages...") bertindak sebagai Subjek tunggal dengan kata kerja "increases".',
      academicVocabulary: ['inevitably increases', 'severe cardiovascular disease'],
      punctuationFocus: 'Tidak ada koma pemisah antara subjek gerund yang panjang dengan kata kerja utamanya.'
    }
  },

  // ===========================================================================
  // LEVEL 2: KALIMAT KOMPLEKS, VARIASI PASIF & INVERSI (Band 6.5 -> 7.5)
  // ===========================================================================
  {
    id: 'cw-l2-1',
    level: 2,
    topic: 'Teknologi & AI',
    title: 'Non-defining Relative Clause Komentar Analitis',
    bandTarget: 'Band 7.0',
    wordCount: 34,
    modelText: 'Generative algorithms can process vast legal repositories within seconds, which significantly diminishes the administrative burden on junior solicitors and allows organizations to optimize operational expenditure.',
    indonesianTranslation: 'Algoritma generatif mampu memproses repositori hukum yang sangat luas dalam hitungan detik, yang secara signifikan mengurangi beban administratif bagi pengacara junior dan memungkinkan organisasi mengoptimalkan pengeluaran operasional.',
    grammaticalBreakdown: {
      clauseStructure: 'Main clause diikuti sentential relative clause (", which...") yang mengomentari seluruh situasi klausa pertama.',
      academicVocabulary: ['legal repositories', 'significantly diminishes', 'administrative burden', 'optimize operational expenditure'],
      punctuationFocus: 'Koma sebelum "which" wajib ada karena klausa tersebut memberikan komentar evaluatif non-esensial.'
    }
  },
  {
    id: 'cw-l2-2',
    level: 2,
    topic: 'Ekonomi & Energi',
    title: 'Preposisi Konsesif dengan Frasa Gerund Berkolokasi',
    bandTarget: 'Band 7.5',
    wordCount: 36,
    modelText: 'Despite renewable energy sources becoming progressively more cost-effective, numerous industrialized economies remain heavily reliant on traditional fossil fuels, thereby impeding international efforts to curb greenhouse gas emissions.',
    indonesianTranslation: 'Meskipun sumber energi terbarukan menjadi semakin hemat biaya secara bertahap, banyak negara industri tetap sangat bergantung pada bahan bakar fosil konvensional, sehingga menghambat upaya internasional untuk menekan emisi gas rumah kaca.',
    grammaticalBreakdown: {
      clauseStructure: 'Prepositional concession ("Despite + noun phrase/gerund") + Main clause + Participial result clause ("thereby impeding...").',
      academicVocabulary: ['progressively more cost-effective', 'heavily reliant', 'thereby impeding', 'curb greenhouse gas emissions'],
      punctuationFocus: 'Koma setelah klausa "Despite" dan koma sebelum kata transisi adverbial participle ", thereby impeding".'
    }
  },
  {
    id: 'cw-l2-3',
    level: 2,
    topic: 'Pemerintah & Kriminalitas',
    title: 'Inversi Negatif (Negative Inversion) Tingkat Tinggi',
    bandTarget: 'Band 8.0',
    wordCount: 38,
    modelText: 'Not only does custodial sentencing frequently fail to rehabilitate habitual offenders, but it also imposes an onerous fiscal burden on state treasuries, which undermines long-term public investments in educational infrastructure.',
    indonesianTranslation: 'Hukuman penjara tidak hanya sering kali gagal merehabilitasi residivis kejahatan, tetapi juga membebankan beban keuangan yang berat pada kas negara, yang pada akhirnya melemahkan investasi publik jangka panjang di bidang infrastruktur pendidikan.',
    grammaticalBreakdown: {
      clauseStructure: 'Negative inversion ("Not only does [Subject] [Verb]... but it also...") + Non-defining relative clause.',
      academicVocabulary: ['custodial sentencing', 'rehabilitate habitual offenders', 'onerous fiscal burden', 'undermines long-term public investments'],
      punctuationFocus: 'Inversi menggunakan auxiliary "does" mendahului subjek; koma memisahkan klausa sebelum "but it also".'
    }
  },

  // ===========================================================================
  // LEVEL 3: PARAGRAF ANALITIS PEEL & OVERVIEW TASK 1 (Band 7.5 -> 8.0)
  // ===========================================================================
  {
    id: 'cw-l3-1',
    level: 3,
    topic: 'Pendidikan & Karir',
    title: 'Paragraf Tubuh Argumentatif Formula PEEL',
    bandTarget: 'Band 8.0',
    wordCount: 96,
    modelText: 'Prime among the merits of higher vocational apprenticeships is their direct alignment with prevailing industrial requirements. By immersing learners in authentic workplace ecosystems, technical institutions ensure that theoretical knowledge is reinforced through practical application. A compelling illustration can be observed in the precision manufacturing sector, where dual-track apprentices attain proficiency in advanced robotic assembly far swifter than their traditional university counterparts. Consequently, vocational graduates enjoy superior employability rates, effectively dispelling the archaic misconception that tertiary academic degrees represent the sole viable conduit to lucrative employment.',
    indonesianTranslation: 'Keunggulan utama dari program magang kejuruan tingkat tinggi adalah keselarasan langsungnya dengan kebutuhan industri saat ini. Dengan membenamkan peserta didik ke dalam ekosistem tempat kerja autentik, institusi teknik memastikan bahwa pengetahuan teoritis diperkuat melalui penerapan praktis. Contoh nyata yang meyakinkan dapat diamati pada sektor manufaktur presisi, di mana peserta magang jalur ganda meraih keahlian dalam perakitan robotik tingkat lanjut jauh lebih cepat dibanding rekan mereka dari universitas tradisional. Akibatnya, lulusan kejuruan menikmati tingkat keterterimaan kerja yang lebih tinggi, sekaligus secara efektif mematahkan kesalahpahaman kuno bahwa gelar sarjana akademis merupakan satu-satunya jalur yang layak menuju pekerjaan bergaji tinggi.',
    grammaticalBreakdown: {
      clauseStructure: 'P (Point: "Prime among the merits...") ➔ E (Explanation: "By immersing...") ➔ E (Evidence: "A compelling illustration...") ➔ L (Link: "Consequently...").',
      academicVocabulary: ['direct alignment', 'prevailing industrial requirements', 'authentic workplace ecosystems', 'compelling illustration', 'dual-track apprentices', 'superior employability', 'sole viable conduit'],
      punctuationFocus: 'Penggunaan perangkat kohesif formal ("By immersing...", "Consequently,...") dengan penempatan koma analitis yang rapi.'
    }
  },
  {
    id: 'cw-l3-2',
    level: 3,
    topic: 'Academic Task 1 Data',
    title: 'Paragraf Overview Resmi Task 1 Grafik Multi-Tren',
    bandTarget: 'Band 8.0',
    wordCount: 88,
    modelText: 'Overall, it is readily apparent that renewable energy consumption experienced a substantial upward trajectory throughout the twenty-year span, with solar generation demonstrating the most pronounced growth. Conversely, reliance on traditional hydrocarbons, most notably coal, witnessed a precipitous diminution, ultimately tumbling to its lowest recorded share by the culmination of the timeframe. Meanwhile, nuclear and hydroelectric outputs manifested nominal fluctuations, consolidating their position as stable secondary contributors within the nation’s aggregate electrical grid.',
    indonesianTranslation: 'Secara keseluruhan, terlihat sangat jelas bahwa konsumsi energi terbarukan mengalami tren kenaikan yang signifikan sepanjang rentang dua puluh tahun tersebut, dengan pembangkitan tenaga surya menunjukkan pertumbuhan yang paling mencolok. Sebaliknya, ketergantungan pada hidrokarbon tradisional, khususnya batu bara, mengalami penurunan drastis, hingga akhirnya anjlok ke pangsa terendah yang pernah tercatat di akhir periode waktu tersebut. Sementara itu, produksi tenaga nuklir dan hidroelektrik memperlihatkan fluktuasi tipis, memperkokoh posisi keduanya sebagai kontributor sekunder yang stabil di dalam jaringan listrik nasional secara agregat.',
    grammaticalBreakdown: {
      clauseStructure: 'Overall sentence (General trend 1: Renewable boom) ➔ Contrast transition (Hydrocarbon drop) ➔ Secondary stability trend.',
      academicVocabulary: ['readily apparent', 'substantial upward trajectory', 'pronounced growth', 'precipitous diminution', 'culmination of the timeframe', 'nominal fluctuations', 'aggregate electrical grid'],
      punctuationFocus: 'Bebas dari angka statistik spesifik (aturan mutlak Band 8+ untuk Task 1 Overview), menggunakan bahasa tren presisi.'
    }
  },

  // ===========================================================================
  // LEVEL 4: ESAI PENUH BAND 8.5+ (Full Essay Mastery - 250-280 Kata)
  // ===========================================================================
  {
    id: 'cw-l4-1',
    level: 4,
    topic: 'Teknologi & Ketenagakerjaan (AI Automation)',
    title: 'Esai Penuh Cambridge Model Band 8.5 (Displacement vs Augmentation)',
    bandTarget: 'Band 8.5',
    wordCount: 268,
    modelText: `It is widely posited that the relentless ascent of artificial intelligence portends a future characterized by catastrophic structural unemployment. Conversely, proponents maintain that automated technologies serve as an unprecedented catalyst for economic expansion. In my estimation, while transitory disruption is undeniable, automation will ultimately augment human capability rather than precipitate widespread obsolescence.

On the one hand, apprehensions regarding workforce displacement are well-founded. Historically, mechanization targeted routine manual labor; however, modern neural algorithms increasingly encroach upon complex cognitive domains. Parallels can be observed in clerical and diagnostic sectors, wherein software interprets medical radiographs with superior velocity and negligible error margins. Consequently, professionals lacking specialized technological literacy confront the imminent threat of marginalization, thereby exacerbating the socioeconomic divide unless comprehensive retraining regimens are instituted.

On the other hand, technological revolutions have perpetually redefined labor paradigms rather than eradicating work altogether. The proliferation of automated systems inevitably engenders demand for specialized vocations spanning algorithm auditing to ethics compliance. Furthermore, when routine administrative duties are delegated to synthetic intelligence, human workers are liberated to prioritize empathetic and strategic problem-solving. In the software industry, for example, automated code generation has empowered programmers to engineer multifaceted applications at scale, bolstering output rather than terminating employment.

In conclusion, although the proliferation of artificial intelligence undoubtedly entails severe friction for vulnerable segments of the workforce, it does not herald an insurmountable employment crisis. By proactively orchestrating educational realignments and fostering lifelong human capital development, societies can harness this transformative paradigm to elevate aggregate prosperity.`,
    indonesianTranslation: `Banyak pihak berpendapat bahwa kemajuan kecerdasan buatan yang tak terbendung menandakan masa depan yang diwarnai oleh pengangguran struktural massal yang parah. Sebaliknya, para pendukungnya berpendapat bahwa teknologi otomatisasi berfungsi sebagai pemicu ekspansi ekonomi yang belum pernah ada sebelumnya. Menurut perkiraan saya, meskipun disrupsi sementara tidak dapat disangkal, otomatisasi pada akhirnya akan meningkatkan kemampuan manusia daripada menyebabkan keusangan lapangan kerja secara luas.

Di satu sisi, kekhawatiran mengenai pergeseran tenaga kerja memiliki dasar yang kuat. Secara historis, mekanisasi menargetkan pekerjaan manual rutin; namun, algoritma neural modern kian merambah ranah kognitif yang kompleks. Kesamaan dapat diamati pada sektor administrasi dan diagnostik kesehatan, di mana perangkat lunak menafsirkan hasil radiografi medis dengan kecepatan lebih unggul dan margin kesalahan yang sangat minim. Konsekuensinya, para profesional yang kekurangan literasi teknologi khusus menghadapi ancaman marjinalisasi yang nyata, sehingga memperlebar jurang sosial-ekonomi kecuali jika program pelatihan ulang yang menyeluruh segera diberlakukan.

Di sisi lain, revolusi teknologi sepanjang sejarah selalu mendefinisikan ulang paradigma kerja alih-alih menghapus pekerjaan sama sekali. Menjamurnya sistem otomatis tak terelakkan lagi melahirkan permintaan akan profesi-profesi spesialis, mulai dari audit algoritma hingga kepatuhan etika AI. Terlebih lagi, ketika tugas-tugas administratif rutin dilimpahkan kepada kecerdasan sintetis, pekerja manusia dibebaskan untuk memprioritaskan pemecahan masalah yang berorientasi empati dan strategis. Di industri perangkat lunak, contohnya, pembuatan kode otomatis telah memberdayakan pemrogram untuk merancang aplikasi berskala besar, yang justru mendongkrak produktivitas alih-alih memberhentikan pegawai.

Kesimpulannya, meskipun proliferasi kecerdasan buatan tidak diragukan lagi menimbulkan gesekan berat bagi segmen tenaga kerja yang rentan, hal ini tidak mengisyaratkan krisis pengangguran yang tak teratasi. Dengan secara proaktif mengatur penyesuaian kurikulum pendidikan dan membina pengembangan modal manusia seumur hidup, masyarakat dapat memanfaatkan paradigma transformatif ini untuk meningkatkan kemakmuran bersama.`,
    grammaticalBreakdown: {
      clauseStructure: '4 Paragraf Utuh IELTS Standar: Introduction (Paraphrase + Balanced Thesis) ➔ Body 1 (Displacement arguments) ➔ Body 2 (Augmentation & New Opportunities) ➔ Conclusion (Balanced synthesis).',
      academicVocabulary: [
        'relentless ascent', 'catastrophic structural unemployment', 'precedent catalyst', 
        'precipitate widespread obsolescence', 'encroach upon complex cognitive domains', 
        'negligible error margins', 'imminent threat of marginalization', 
        'redefined labor paradigms', 'engenders demand', 'synthetic intelligence', 
        'insurmountable employment crisis', 'educational realignments'
      ],
      punctuationFocus: 'Penerapan semicolon (;), titik dua, tanda petik, dan konjungsi bertingkat (On the one hand, Conversely, Furthermore) dengan konsistensi 100% formal.'
    }
  },
  {
    id: 'cw-l4-2',
    level: 4,
    topic: 'Lingkungan & Tanggung Jawab Global (Climate Change)',
    title: 'Esai Penuh Cambridge Model Band 8.5 (Individual vs State Responsibility)',
    bandTarget: 'Band 8.5',
    wordCount: 262,
    modelText: `Whether environmental preservation is the primary responsibility of individual citizens or state governments remains a subject of intense debate. While individual lifestyle adjustments undoubtedly cultivate collective environmental awareness, I contend that substantive and lasting ecological remediation can only be accomplished through decisive governmental intervention.

On the one hand, personal lifestyle modifications exert a meaningful grassroots influence. When consumers consciously curtail single-use plastics and adopt public transportation, aggregate municipal waste and vehicular emissions diminish correspondingly. Furthermore, widespread consumer preference for sustainable merchandise compels commercial enterprises to adopt ethical manufacturing practices. A case in point is the burgeoning market for organic produce, which expanded largely due to heightened consumer vigilance regarding pesticide contamination.

Nevertheless, personal initiatives are intrinsically constrained in their capacity to combat global ecological degradation. The preeminent drivers of climate change—namely industrial coal combustion, cross-border maritime shipping, and extensive deforestation—transcend the jurisdiction of private citizens. Only sovereign governments possess the requisite legislative authority to penalize corporate polluters and mandate carbon emissions ceilings. Moreover, the transition to renewable power grids requires colossal capital investments that can solely be financed through public treasuries or international green bonds.

In conclusion, although conscientious citizen behavior is pivotal in establishing a culture of conservation, it remains fundamentally inadequate as an isolated solution. Governments must spearhead the environmental agenda by enforcing stringent statutory regulations and funding macroscopic renewable infrastructure, thereby ensuring the preservation of the planet for posterity.`,
    indonesianTranslation: `Apakah pelestarian lingkungan merupakan tanggung jawab utama individu warga negara ataukah pemerintah negara tetap menjadi bahan perdebatan yang sengit. Kendati penyesuaian gaya hidup individu tidak diragukan lagi menumbuhkan kesadaran lingkungan kolektif, saya berpendapat bahwa pemulihan ekologis yang nyata dan bertahan lama hanya dapat dicapai melalui intervensi tegas dari pemerintah.

Di satu sisi, modifikasi gaya hidup pribadi memberikan pengaruh akar rumput yang bermakna. Ketika konsumen secara sadar mengurangi plastik sekali pakai dan beralih ke transportasi umum, jumlah total sampah perkotaan dan emisi kendaraan akan berkurang seiring berjalannya waktu. Selain itu, preferensi konsumen yang meluas terhadap produk ramah lingkungan mendorong pelaku usaha untuk mengadopsi proses manufaktur yang etis. Contoh nyatanya adalah pesatnya pasar produk organik, yang tumbuh sebagian besar berkat meningkatnya kehati-hatian konsumen terhadap kontaminasi pestisida.

Kendati demikian, inisiatif pribadi secara mendasar terbatas kemampuannya dalam memerangi kerusakan ekologis global. Pemicu utama perubahan iklim—yaitu pembakaran batu bara industri, pelayaran kargo maritim lintas negara, dan deforestasi skala luas—melampaui batas kewenangan warga negara biasa. Hanya pemerintah berdaulat yang memiliki otoritas legislatif yang sah untuk menjatuhkan sanksi hukum kepada korporasi perusak lingkungan dan menetapkan batas atas emisi karbon. Terlebih lagi, transisi menuju jaringan listrik energi terbarukan memerlukan investasi modal kolosal yang hanya dapat dibiayai melalui kas negara atau obligasi hijau internasional.

Kesimpulannya, meskipun perilaku warga yang peduli lingkungan sangat penting dalam membangun budaya konservasi, tindakan tersebut secara mendasar tetap tidak memadai jika berdiri sendiri. Pemerintah harus memimpin agenda lingkungan hidup dengan menegakkan peraturan hukum yang ketat serta mendanai infrastruktur energi terbarukan berskala makro, guna memastikan kelestarian bumi bagi generasi mendatang.`,
    grammaticalBreakdown: {
      clauseStructure: '4 Paragraf Lengkap: Introduction (Dilemma + Clear Thesis) ➔ Body 1 (Consumer grassroot power) ➔ Body 2 (State legislative & fiscal supremacy) ➔ Conclusion (Strategic synthesis).',
      academicVocabulary: [
        'substantive ecological remediation', 'decisive governmental intervention', 
        'curtail single-use plastics', 'aggregate municipal waste', 'heightened consumer vigilance', 
        'intrinsically constrained', 'preeminent drivers of climate change', 
        'requisite legislative authority', 'colossal capital investments', 
        'stringent statutory regulations', 'preservation of the planet for posterity'
      ],
      punctuationFocus: 'Em-dash (—) untuk penekanan contoh industri, serta konektor konsesif formal (Nevertheless, Moreover, Consequently).'
    }
  }
];
