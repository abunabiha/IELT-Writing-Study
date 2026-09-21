// Basis Data Penguasaan Kosakata Metode Mind Map 3 Lapis (Band 8+ Lexical Mind Map)
// Lapis 1: Topik Makro (6 Domain IELTS)
// Lapis 2: Klaster Konsep (Sub-topik Tematik)
// Lapis 3: Jaringan Kata Kunci Band 8+ (Definisi, Kolokasi, Sinonim, & Contoh Kalimat Bilingual)

export const VOCAB_MINDMAP_DATA = [
  // ===========================================================================
  // LAPIS 1: LINGKUNGAN HIDUP & PERUBAHAN IKLIM
  // ===========================================================================
  {
    id: 'env',
    titleEn: 'Environment & Climate Change',
    titleId: 'Lingkungan Hidup & Perubahan Iklim',
    icon: '🌍',
    accentColor: 'from-emerald-600 to-teal-700',
    borderColor: 'border-emerald-500/40',
    tag: 'Topik Paling Sering Muncul (Task 2 & Task 1)',
    clusters: [
      {
        id: 'env-c1',
        titleEn: 'Mitigation & Renewable Transition',
        titleId: 'Mitigasi & Transisi Energi Terbarukan',
        icon: '⚡',
        summaryId: 'Kosakata seputar upaya meredam emisi, beralih dari bahan bakar fosil ke tenaga surya/angin, dan regulasi hijau.',
        words: [
          {
            id: 'env-w1',
            word: 'mitigate',
            pos: 'verb',
            phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
            meaningId: 'Mengurangi keparahan, meredam atau meringankan dampak buruk.',
            meaningEn: 'To make something less severe, serious, or damaging.',
            band8Collocation: 'mitigate catastrophic repercussions',
            academicSynonyms: ['alleviate', 'attenuate', 'cushion'],
            sampleSentenceEn: 'Stringent carbon cap-and-trade systems are indispensable to mitigate catastrophic repercussions on global agriculture.',
            sampleSentenceId: 'Sistem pembatasan dan perdagangan karbon yang ketat sangat penting untuk meredakan konsekuensi bencana terhadap pertanian global.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'env-w2',
            word: 'imperative',
            pos: 'noun / adj',
            phonetic: '/ɪmˈper.ə.tɪv/',
            meaningId: 'Keharusan mutlak; kewajiban yang mendesak dan tidak bisa ditunda.',
            meaningEn: 'An essential or urgent thing; vital obligation.',
            band8Collocation: 'an ecological imperative',
            academicSynonyms: ['pressing necessity', 'indispensable requisite'],
            sampleSentenceEn: 'Transitioning to photovoltaic solar arrays is no longer optional; it represents an urgent ecological imperative.',
            sampleSentenceId: 'Beralih ke panel surya fotovoltaik bukan lagi pilihan opsional; hal ini mencerminkan keharusan ekologis yang mendesak.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'env-w3',
            word: 'decarbonise',
            pos: 'verb',
            phonetic: '/diːˈkɑː.bən.aɪz/',
            meaningId: 'Menghilangkan atau mengurangi drastis emisi karbon dioksida dalam suatu sistem.',
            meaningEn: 'To eliminate or dramatically cut carbon dioxide emissions.',
            band8Collocation: 'rapidly decarbonise heavy industries',
            academicSynonyms: ['neutralise emissions', 'defossilise'],
            sampleSentenceEn: 'Unless emerging economies are subsidised to decarbonise heavy industries, global thermal targets will remain unattainable.',
            sampleSentenceId: 'Kecuali ekonomi berkembang diberi subsidi untuk mendekarbonisasi industri berat, target suhu global akan tetap mustahil tercapai.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'env-w4',
            word: 'subsidise',
            pos: 'verb',
            phonetic: '/ˈsʌb.sɪ.daɪz/',
            meaningId: 'Memberikan bantuan keuangan negara demi menekan biaya publik.',
            meaningEn: 'To support financially through state grants or tax breaks.',
            band8Collocation: 'heavily subsidise renewable infrastructure',
            academicSynonyms: ['underwrite', 'financially sponsor'],
            sampleSentenceEn: 'Progressive administrations choose to heavily subsidise renewable infrastructure rather than prop up declining coal extraction.',
            sampleSentenceId: 'Pemerintahan yang progresif memilih untuk memberikan subsidi besar pada infrastruktur terbarukan daripada menopang ekstraksi batu bara yang meredup.',
            bandTarget: 'Band 8.0'
          }
        ]
      },
      {
        id: 'env-c2',
        titleEn: 'Ecosystem Collapse & Biodiversity Loss',
        titleId: 'Kerusakan Ekosistem & Kehilangan Keanekaragaman Hayati',
        icon: '🐾',
        summaryId: 'Kosa kata seputar deforestasi, kepunahan spesies, hilangnya habitat, dan degradasi tanah.',
        words: [
          {
            id: 'env-w5',
            word: 'irreversible',
            pos: 'adj',
            phonetic: '/ˌɪr.ɪˈvɜː.sə.bəl/',
            meaningId: 'Tidak dapat dipulihkan atau dikembalikan ke kondisi semula.',
            meaningEn: 'Not able to be undone or altered back to its initial state.',
            band8Collocation: 'inflict irreversible ecological trauma',
            academicSynonyms: ['irrevocable', 'permanent', 'unalterable'],
            sampleSentenceEn: 'Unchecked ocean acidification may inflict irreversible ecological trauma upon sensitive coral reefs.',
            sampleSentenceId: 'Pengasaman laut yang tak terkendali dapat menimbulkan trauma ekologis yang tak dapat dipulihkan pada terumbu karang yang rapuh.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'env-w6',
            word: 'depletion',
            pos: 'noun',
            phonetic: '/dɪˈpliː.ʃən/',
            meaningId: 'Penyusutan drastis atau pengurasan sumber daya hingga menipis.',
            meaningEn: 'Reduction in the number or quantity of something vital.',
            band8Collocation: 'precipitous groundwater depletion',
            academicSynonyms: ['exhaustion', 'drainage', 'diminution'],
            sampleSentenceEn: 'Industrialized agriculture has triggered precipitous groundwater depletion across arid grain-producing plains.',
            sampleSentenceId: 'Pertanian terindustrialisasi telah memicu pengurasan air tanah yang sangat curam di dataran penghasil gandum yang gersang.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'env-w7',
            word: 'biodiversity',
            pos: 'noun',
            phonetic: '/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/',
            meaningId: 'Keanekaragaman flora, fauna, dan mikroorganisme dalam suatu ekosistem.',
            meaningEn: 'The variety of plant and animal life in a particular habitat.',
            band8Collocation: 'safeguard dwindling biodiversity',
            academicSynonyms: ['ecological variety', 'biological richness'],
            sampleSentenceEn: 'Designating maritime sanctuaries is proven to effectively safeguard dwindling biodiversity against commercial overfishing.',
            sampleSentenceId: 'Menetapkan suaka maritim terbukti efektif melindungi keanekaragaman hayati yang kian menyusut dari penangkapan ikan komersial berlebih.',
            bandTarget: 'Band 8.0'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // LAPIS 1: TEKNOLOGI & KECERDASAN BUATAN
  // ===========================================================================
  {
    id: 'tech',
    titleEn: 'Technology & Artificial Intelligence',
    titleId: 'Teknologi & Kecerdasan Buatan',
    icon: '🤖',
    accentColor: 'from-indigo-600 to-cyan-700',
    borderColor: 'border-indigo-500/40',
    tag: 'Topik Modernitas & Masa Depan Kerja',
    clusters: [
      {
        id: 'tech-c1',
        titleEn: 'Workforce Automation & Disruption',
        titleId: 'Otomasi Angkatan Kerja & Disrupsi Karir',
        icon: '🦾',
        summaryId: 'Kosakata seputar pergantian tenaga kerja manual oleh algoritma cerdas dan restrukturisasi ekonomi.',
        words: [
          {
            id: 'tech-w1',
            word: 'obsolescent',
            pos: 'adj',
            phonetic: '/ˌɒb.səˈles.ənt/',
            meaningId: 'Mulai usang, ketinggalan zaman, atau terancam punah karena teknologi baru.',
            meaningEn: 'Becoming obsolete; going out of use or currency.',
            band8Collocation: 'render routine manual roles obsolescent',
            academicSynonyms: ['antiquated', 'redundant', 'superseded'],
            sampleSentenceEn: 'Advanced generative models threaten to render routine clerical roles largely obsolescent within a decade.',
            sampleSentenceId: 'Model generatif mutakhir mengancam membuat peran administratif rutin menjadi usang dalam kurun waktu satu dekade.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'tech-w2',
            word: 'unprecedented',
            pos: 'adj',
            phonetic: '/ʌnˈpres.ɪ.den.tɪd/',
            meaningId: 'Belum pernah terjadi atau ada presedennya sebelumnya dalam sejarah.',
            meaningEn: 'Never done or known before; unparalleled.',
            band8Collocation: 'at an unprecedented velocity',
            academicSynonyms: ['unparalleled', 'singular', 'extraordinary'],
            sampleSentenceEn: 'Machine learning algorithms synthesize voluminous datasets at an unprecedented velocity.',
            sampleSentenceId: 'Algoritma pembelajaran mesin mensintesis kumpulan data bervolume raksasa dengan kecepatan yang belum pernah terjadi sebelumnya.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'tech-w3',
            word: 'displace',
            pos: 'verb',
            phonetic: '/dɪsˈpleɪs/',
            meaningId: 'Menggeser, mendepak, atau menggantikan posisi seseorang/pekerja.',
            meaningEn: 'To take over the position, role, or position of someone.',
            band8Collocation: 'involuntarily displace blue-collar employees',
            academicSynonyms: ['supplant', 'unseat', 'oust'],
            sampleSentenceEn: 'Autonomous hauling vehicles are anticipated to involuntarily displace millions of long-distance truck operators.',
            sampleSentenceId: 'Kendaraan logistik otonom diantisipasi akan menggeser jutaan operator truk jarak jauh tanpa bisa dihindari.',
            bandTarget: 'Band 8.0'
          }
        ]
      },
      {
        id: 'tech-c2',
        titleEn: 'Digital Surveillance & Algorithmic Ethics',
        titleId: 'Pengawasan Digital & Etika Algoritma',
        icon: '👁️',
        summaryId: 'Kosakata seputar privasi data pengguna, bias algoritma, dan hegemoni korporasi teknologi.',
        words: [
          {
            id: 'tech-w4',
            word: 'ubiquitous',
            pos: 'adj',
            phonetic: '/juːˈbɪk.wɪ.təs/',
            meaningId: 'Hadir atau ditemukan di mana-mana secara serentak.',
            meaningEn: 'Present, appearing, or found everywhere.',
            band8Collocation: 'the ubiquitous infiltration of smart devices',
            academicSynonyms: ['omnipresent', 'pervasive', 'universal'],
            sampleSentenceEn: 'The ubiquitous presence of facial recognition cameras in public squares evokes reasonable concerns regarding civil liberty.',
            sampleSentenceId: 'Kehadiran kamera pengenal wajah yang ada di mana-mana di ruang publik memicu kekhawatiran wajar terkait kebebasan sipil.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'tech-w5',
            word: 'algorithmic',
            pos: 'adj',
            phonetic: '/ˌæl.ɡəˈrɪð.mɪk/',
            meaningId: 'Berkaitan dengan atau dikendalikan oleh seperangkat algoritma komputasi.',
            meaningEn: 'Relating to or using a process or set of rules to be followed in calculations.',
            band8Collocation: 'systemic algorithmic bias',
            academicSynonyms: ['computational', 'automated procedural'],
            sampleSentenceEn: 'Without strict auditing, systemic algorithmic bias can perpetuate historical inequalities in automated recruitment.',
            sampleSentenceId: 'Tanpa audit yang ketat, bias algoritma sistemik dapat melanggengkan ketimpangan historis dalam rekrutmen terotomasi.',
            bandTarget: 'Band 8.5'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // LAPIS 1: PENDIDIKAN & PEDAGOGI
  // ===========================================================================
  {
    id: 'edu',
    titleEn: 'Education & Pedagogy',
    titleId: 'Pendidikan & Pedagogi',
    icon: '🎓',
    accentColor: 'from-amber-600 to-orange-700',
    borderColor: 'border-amber-500/40',
    tag: 'Topik Esensial Kurikulum & Perkembangan Mental',
    clusters: [
      {
        id: 'edu-c1',
        titleEn: 'Pedagogical Methodology & Critical Thinking',
        titleId: 'Metodologi Pedagogis & Berpikir Kritis',
        icon: '📖',
        summaryId: 'Kosakata mengenai cara mendidik, kurikulum terpadu, hafalan vs pemikiran mendalam.',
        words: [
          {
            id: 'edu-w1',
            word: 'pedagogy',
            pos: 'noun',
            phonetic: '/ˈped.ə.ɡɒdʒ.i/',
            meaningId: 'Metode dan praktik pengajaran atau ilmu pendidikan formal.',
            meaningEn: 'The method and practice of teaching, especially as an academic subject.',
            band8Collocation: 'modern student-centric pedagogy',
            academicSynonyms: ['instructional methodology', 'educational praxis'],
            sampleSentenceEn: 'Rote memorisation must be superseded by modern student-centric pedagogy that fosters inquiry.',
            sampleSentenceId: 'Menghafal buta harus digantikan oleh pedagogi modern yang berpusat pada siswa yang menumbuhkan rasa ingin tahu.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'edu-w2',
            word: 'holistic',
            pos: 'adj',
            phonetic: '/həʊˈlɪs.tɪk/',
            meaningId: 'Menyeluruh; memperhitungkan seluruh aspek mental, emosional, dan sosial secara utuh.',
            meaningEn: 'Characterized by comprehension of the parts of something as intimately interconnected.',
            band8Collocation: 'a holistic educational framework',
            academicSynonyms: ['comprehensive', 'all-encompassing', 'integrative'],
            sampleSentenceEn: 'Standardised examination metrics fail to deliver a truly holistic assessment of a pupil’s intrinsic potential.',
            sampleSentenceId: 'Metrik ujian terstandar gagal memberikan penilaian yang benar-benar menyeluruh terhadap potensi bawaan seorang murid.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'edu-w3',
            word: 'cultivate',
            pos: 'verb',
            phonetic: '/ˈkʌl.tɪ.veɪt/',
            meaningId: 'Menumbuhkembangkan bakat, kecerdasan, atau kebiasaan baik secara terencana.',
            meaningEn: 'To foster the growth, development, or refinement of something.',
            band8Collocation: 'cultivate rigorous analytical acumen',
            academicSynonyms: ['foster', 'nurture', 'instill'],
            sampleSentenceEn: 'Early childhood classrooms should strive to cultivate rigorous analytical acumen rather than mere compliance.',
            sampleSentenceId: 'Ruang kelas anak usia dini harus berupaya menumbuhkembangkan ketajaman analitis yang mendalam daripada sekadar kepatuhan pasif.',
            bandTarget: 'Band 8.0'
          }
        ]
      },
      {
        id: 'edu-c2',
        titleEn: 'Educational Equity & Tertiary Access',
        titleId: 'Keadilan Pendidikan & Akses Perguruan Tinggi',
        icon: '🏛️',
        summaryId: 'Kosakata seputar biaya kuliah, beasiswa, disparitas mutu sekolah kota vs desa.',
        words: [
          {
            id: 'edu-w4',
            word: 'prohibitive',
            pos: 'adj',
            phonetic: '/prəˈhɪb.ɪ.tɪv/',
            meaningId: 'Sangat mahal hingga mencegah atau menghalangi orang untuk membeli/mengakses.',
            meaningEn: '(Of a price or cost) too high to be afforded; restrictive.',
            band8Collocation: 'prohibitive tuition fees',
            academicSynonyms: ['exorbitant', 'unaffordable', 'extravagant'],
            sampleSentenceEn: 'Prohibitive tuition fees perpetuate socio-economic stratifications by denying gifted underprivileged youth university entry.',
            sampleSentenceId: 'Biaya kuliah yang selangit melanggengkan stratifikasi sosio-ekonomi dengan menghalangi pemuda kurang mampu yang berbakat masuk universitas.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'edu-w5',
            word: 'stratification',
            pos: 'noun',
            phonetic: '/ˌstræt.ɪ.fɪˈkeɪ.ʃən/',
            meaningId: 'Pembagian masyarakat ke dalam kasta-kasta atau tingkatan sosial-ekonomi.',
            meaningEn: 'The arrangement or classification of something into different groups or layers.',
            band8Collocation: 'entrenched socio-economic stratification',
            academicSynonyms: ['hierarchical division', 'class segregation'],
            sampleSentenceEn: 'Universal primary funding is the most potent instrument for dismantling entrenched socio-economic stratification.',
            sampleSentenceId: 'Pendanaan pendidikan dasar universal merupakan instrumen paling ampuh untuk meruntuhkan stratifikasi sosio-ekonomi yang telah mengakar.',
            bandTarget: 'Band 8.5'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // LAPIS 1: KESEHATAN MASYARAKAT & SISTEM MEDIS
  // ===========================================================================
  {
    id: 'health',
    titleEn: 'Public Health & Healthcare Systems',
    titleId: 'Kesehatan Masyarakat & Sistem Medis',
    icon: '🏥',
    accentColor: 'from-rose-600 to-red-700',
    borderColor: 'border-rose-500/40',
    tag: 'Topik Gaya Hidup, Obesitas & Layanan Kesehatan Universal',
    clusters: [
      {
        id: 'health-c1',
        titleEn: 'Sedentary Lifestyles & Chronic Ailments',
        titleId: 'Gaya Hidup Sedenter & Penyakit Kronis',
        icon: '🛋️',
        summaryId: 'Kosakata seputar kurang gerak, konsumsi gula tinggi, krisis obesitas, dan penyakit kardiovaskular.',
        words: [
          {
            id: 'health-w1',
            word: 'sedentary',
            pos: 'adj',
            phonetic: '/ˈsed.ən.tər.i/',
            meaningId: 'Banyak duduk dan sangat sedikit melakukan aktivitas fisik atau gerak badan.',
            meaningEn: 'Tending to spend much time seated; physically inactive.',
            band8Collocation: 'an increasingly sedentary routine',
            academicSynonyms: ['desk-bound', 'physically inactive', 'torpid'],
            sampleSentenceEn: 'The transition towards remote screen employment has cemented an increasingly sedentary routine among working adults.',
            sampleSentenceId: 'Peralihan menuju pekerjaan jarak jauh di depan layar telah memperkokoh rutinitas yang kian kurang gerak di kalangan orang dewasa pekerja.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'health-w2',
            word: 'exacerbate',
            pos: 'verb',
            phonetic: '/ɪɡˈzæs.ə.beɪt/',
            meaningId: 'Membuat masalah, penyakit, atau situasi buruk menjadi semakin parah.',
            meaningEn: 'To make a problem, bad situation, or negative condition worse.',
            band8Collocation: 'exacerbate chronic physiological ailments',
            academicSynonyms: ['aggravate', 'worsen', 'inflame'],
            sampleSentenceEn: 'Pervasive marketing of ultra-processed confectionary threatens to exacerbate chronic physiological ailments in adolescents.',
            sampleSentenceId: 'Pemasaran makanan olahan manis yang marak di mana-mana mengancam akan memperparah penyakit fisik kronis pada remaja.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'health-w3',
            word: 'epidemic',
            pos: 'noun / adj',
            phonetic: '/ˌep.ɪˈdem.ɪk/',
            meaningId: 'Wabah penyakit atau penyebaran masalah kesehatan secara luas dan cepat.',
            meaningEn: 'A widespread occurrence of an infectious disease or harmful phenomenon in a community.',
            band8Collocation: 'a burgeoning obesity epidemic',
            academicSynonyms: ['widespread scourge', 'rampant outbreak'],
            sampleSentenceEn: 'Public health authorities must levy sugar excise tariffs to arrest this burgeoning obesity epidemic.',
            sampleSentenceId: 'Otoritas kesehatan masyarakat harus memberlakukan tarif cukai gula demi membendung wabah obesitas yang kian merebak ini.',
            bandTarget: 'Band 8.0'
          }
        ]
      },
      {
        id: 'health-c2',
        titleEn: 'Preventative Care vs Curative Expenditure',
        titleId: 'Perawatan Preventif vs Belanja Kuratif',
        icon: '💉',
        summaryId: 'Kosakata seputar perbandingan dana pencegahan vs pengobatan rumah sakit yang mahal.',
        words: [
          {
            id: 'health-w4',
            word: 'preventative',
            pos: 'adj',
            phonetic: '/prɪˈven.tə.tɪv/',
            meaningId: 'Bersifat mencegah timbulnya penyakit sebelum terlanjur parah.',
            meaningEn: 'Designed to keep something undesirable such as illness from occurring.',
            band8Collocation: 'prioritise preventative healthcare protocols',
            academicSynonyms: ['prophylactic', 'pre-emptive'],
            sampleSentenceEn: 'Allocating national budgets to preventative healthcare protocols yields far superior longevity than expanding tertiary hospital beds.',
            sampleSentenceId: 'Mengalokasikan anggaran negara untuk protokol kesehatan preventif menghasilkan usia harapan hidup yang jauh lebih tinggi daripada memperbanyak tempat tidur rumah sakit.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'health-w5',
            word: 'longevity',
            pos: 'noun',
            phonetic: '/lɒnˈdʒev.ə.ti/',
            meaningId: 'Panjangnya usia harapan hidup seseorang atau populasi.',
            meaningEn: 'Long life or long duration of existence.',
            band8Collocation: 'promote population longevity',
            academicSynonyms: ['life expectancy', 'endurance'],
            sampleSentenceEn: 'Nutritional education combined with accessible open parks fundamentally promotes population longevity.',
            sampleSentenceId: 'Pendidikan nutrisi yang dipadukan dengan taman terbuka yang mudah diakses secara mendasar mendorong panjangnya usia hidup populasi.',
            bandTarget: 'Band 8.0'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // LAPIS 1: EKONOMI, GLOBALISASI & BISNIS
  // ===========================================================================
  {
    id: 'econ',
    titleEn: 'Economy, Globalization & Labor',
    titleId: 'Ekonomi, Globalisasi & Ketenagakerjaan',
    icon: '📈',
    accentColor: 'from-blue-600 to-indigo-800',
    borderColor: 'border-blue-500/40',
    tag: 'Topik Perdagangan Bebas, Konsumerisme & Kesenjangan',
    clusters: [
      {
        id: 'econ-c1',
        titleEn: 'Income Disparity & Socioeconomic Inequality',
        titleId: 'Disparitas Pendapatan & Kesenjangan Sosial',
        icon: '⚖️',
        summaryId: 'Kosakata seputar jurang antara kaya dan miskin, pajak progresif, dan inflasi biaya hidup.',
        words: [
          {
            id: 'econ-w1',
            word: 'disparity',
            pos: 'noun',
            phonetic: '/dɪˈspær.ə.ti/',
            meaningId: 'Perbedaan besar atau jurang ketimpangan yang mencolok.',
            meaningEn: 'A great difference or inequality between groups or metrics.',
            band8Collocation: 'yawning income disparity',
            academicSynonyms: ['imbalance', 'incongruity', 'chasm'],
            sampleSentenceEn: 'The yawning income disparity between top corporate executives and frontline laborers strains civic harmony.',
            sampleSentenceId: 'Jurang kesenjangan pendapatan yang menganga lebar antara eksekutif puncak perusahaan dan buruh garis depan membebani keharmonisan warga.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'econ-w2',
            word: 'progressive',
            pos: 'adj',
            phonetic: '/prəˈɡres.ɪv/',
            meaningId: 'Pajak atau kebijakan yang bebannya meningkat sebanding dengan tingginya pendapatan.',
            meaningEn: 'Taxation or reform that increases progressively as income increases.',
            band8Collocation: 'robust progressive taxation',
            academicSynonyms: ['graduated fiscal system', 'redistributive'],
            sampleSentenceEn: 'Economists argue that robust progressive taxation is mandatory to finance essential public transit networks.',
            sampleSentenceId: 'Para ekonom berpendapat bahwa perpajakan progresif yang kuat wajib diterapkan untuk mendanai jaringan transportasi umum esensial.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'econ-w3',
            word: 'precarious',
            pos: 'adj',
            phonetic: '/prɪˈkeə.ri.əs/',
            meaningId: 'Serba tidak pasti, rawan jatuh, atau membahayakan kestabilan hidup.',
            meaningEn: 'Not securely held in position; dangerously insecure or uncertain.',
            band8Collocation: 'relegated to precarious gig employment',
            academicSynonyms: ['perilous', 'hazardous', 'unstable'],
            sampleSentenceEn: 'Millions of young graduates find themselves relegated to precarious gig employment devoid of health insurance or retirement rights.',
            sampleSentenceId: 'Jutaan sarjana muda mendapati diri mereka terlempar ke pekerjaan lepas serabutan yang rentan tanpa asuransi kesehatan atau hak pensiun.',
            bandTarget: 'Band 8.5'
          }
        ]
      },
      {
        id: 'econ-c2',
        titleEn: 'Consumerism & Waste Culture',
        titleId: 'Konsumerisme & Budaya Buang-Beli',
        icon: '🛍️',
        summaryId: 'Kosakata seputar budaya materialistis, fast fashion, dan limbah barang sekali pakai.',
        words: [
          {
            id: 'econ-w4',
            word: 'materialistic',
            pos: 'adj',
            phonetic: '/məˌtɪə.ri.əˈlɪs.tɪk/',
            meaningId: 'Menganggap kepemilikan benda mewah lebih berharga daripada nilai batin/sosial.',
            meaningEn: 'Excessively concerned with material possessions and money.',
            band8Collocation: 'insatiably materialistic mindset',
            academicSynonyms: ['consumer-driven', 'acquisitive'],
            sampleSentenceEn: 'Relentless digital advertising has inculcated an insatiably materialistic mindset within contemporary teenagers.',
            sampleSentenceId: 'Iklan digital tanpa henti telah menanamkan pola pikir yang luar biasa materialistis ke dalam benak remaja masa kini.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'econ-w5',
            word: 'unsustainable',
            pos: 'adj',
            phonetic: '/ˌʌn.səˈsteɪ.nə.bəl/',
            meaningId: 'Tidak dapat dipertahankan terus-menerus tanpa merusak lingkungan atau sumber daya.',
            meaningEn: 'Not able to be maintained at the current rate or level without collapse.',
            band8Collocation: 'economically and ecologically unsustainable',
            academicSynonyms: ['unviable', 'tenuous', 'destructive'],
            sampleSentenceEn: 'Throwaway packaging models represent an economically and ecologically unsustainable practice that requires legislative prohibition.',
            sampleSentenceId: 'Model kemasan sekali buang mencerminkan praktik yang secara ekonomi dan ekologis tidak berkelanjutan sehingga menuntut pelarangan melalui undang-undang.',
            bandTarget: 'Band 8.0'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // LAPIS 1: MASYARAKAT, HUKUM & KEHIDUPAN KOTA
  // ===========================================================================
  {
    id: 'soc',
    titleEn: 'Society, Crime & Urban Living',
    titleId: 'Masyarakat, Hukum & Kehidupan Perkotaan',
    icon: '🏙️',
    accentColor: 'from-purple-600 to-slate-800',
    borderColor: 'border-purple-500/40',
    tag: 'Topik Urbanisasi, Penjara vs Rehabilitasi & Kohesi Sosial',
    clusters: [
      {
        id: 'soc-c1',
        titleEn: 'Penal Justice & Offender Rehabilitation',
        titleId: 'Peradilan Pidana & Rehabilitasi Pelanggar Hukum',
        icon: '⚖️',
        summaryId: 'Kosakata seputar pemenjaraan, hukuman setimpal vs pemulihan narapidana ke masyarakat.',
        words: [
          {
            id: 'soc-w1',
            word: 'rehabilitation',
            pos: 'noun',
            phonetic: '/ˌriː.həˌbɪl.ɪˈteɪ.ʃən/',
            meaningId: 'Proses pemulihan narapidana agar bisa kembali hidup normal dan bermanfaat di masyarakat.',
            meaningEn: 'The action of restoring someone to health or normal life through training.',
            band8Collocation: 'champion custodial rehabilitation',
            academicSynonyms: ['reintegration', 'reconditioning', 'reformation'],
            sampleSentenceEn: 'Penal institutions that champion custodial rehabilitation achieve substantially lower rates of recidivism than purely punitive penitentiaries.',
            sampleSentenceId: 'Lembaga pemasyarakatan yang mengedepankan rehabilitasi narapidana menghasilkan tingkat pengulangan kejahatan yang jauh lebih rendah daripada penjara yang murni menghukum.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'soc-w2',
            word: 'recidivism',
            pos: 'noun',
            phonetic: '/rɪˈsɪd.ɪ.vɪ.zəm/',
            meaningId: 'Kecenderungan mantan narapidana untuk mengulangi kembali tindak pidana setelah bebas.',
            meaningEn: 'The tendency of a convicted criminal to reoffend.',
            band8Collocation: 'curb stubborn rates of recidivism',
            academicSynonyms: ['relapse into crime', 'repeat offending'],
            sampleSentenceEn: 'Providing ex-convicts with certified vocational skills is the most reliable strategy to curb stubborn rates of recidivism.',
            sampleSentenceId: 'Membekali mantan narapidana dengan keterampilan vokasi bersertifikat adalah strategi paling andal untuk menekan tingginya angka residivisme.',
            bandTarget: 'Band 8.5'
          },
          {
            id: 'soc-w3',
            word: 'deterrent',
            pos: 'noun / adj',
            phonetic: '/dɪˈter.ənt/',
            meaningId: 'Sesuatu yang mencegah orang lain melakukan perbuatan salah karena takut akan hukumannya.',
            meaningEn: 'A thing that discourages or is intended to discourage someone from doing something.',
            band8Collocation: 'serve as a powerful psychological deterrent',
            academicSynonyms: ['disincentive', 'curb', 'check'],
            sampleSentenceEn: 'Certain criminologists maintain that severe custodial sentences serve as a powerful psychological deterrent against premeditated fraud.',
            sampleSentenceId: 'Sebagian pakar kriminologi menyatakan bahwa hukuman penjara yang berat berfungsi sebagai pencegah psikologis yang kuat terhadap penipuan terencana.',
            bandTarget: 'Band 8.0'
          }
        ]
      },
      {
        id: 'soc-c2',
        titleEn: 'Urban Sprawl & Civic Infrastructure',
        titleId: 'Perluasan Kota & Infrastruktur Publik',
        icon: '🏗️',
        summaryId: 'Kosakata seputar macetnya jalan, polusi suara kota, perumahan padat, dan ruang hijau publik.',
        words: [
          {
            id: 'soc-w4',
            word: 'infrastructure',
            pos: 'noun',
            phonetic: '/ˈɪn.frəˌstrʌk.tʃər/',
            meaningId: 'Fasilitas fisik dan organisasi dasar yang dibutuhkan untuk operasional masyarakat (jalan, air, transportasi).',
            meaningEn: 'The basic physical and organizational structures and facilities needed for the operation of a society.',
            band8Collocation: 'overburdened municipal infrastructure',
            academicSynonyms: ['public framework', 'civic amenities'],
            sampleSentenceEn: 'Unregulated rural-to-urban migration frequently paralyzes overburdened municipal infrastructure across emerging megacities.',
            sampleSentenceId: 'Migrasi desa ke kota yang tidak terkendali kerap kali melumpuhkan infrastruktur kota yang sudah kelebihan beban di berbagai kota megapolitan baru.',
            bandTarget: 'Band 8.0'
          },
          {
            id: 'soc-w5',
            word: 'congested',
            pos: 'adj',
            phonetic: '/kənˈdʒes.tɪd/',
            meaningId: 'Sangat padat, sesak, atau tersumbat oleh lalu lintas berlebihan.',
            meaningEn: 'So crowded with traffic or people as to hinder or prevent freedom of movement.',
            band8Collocation: 'chronically congested arterial thoroughfares',
            academicSynonyms: ['gridlocked', 'bottlenecked', 'crammed'],
            sampleSentenceEn: 'Implementing dynamic congestion toll pricing effectively diverts vehicular flows away from chronically congested arterial thoroughfares.',
            sampleSentenceId: 'Penerapan tarif tol kemacetan dinamis secara efektif mengalihkan arus kendaraan dari jalan arteri yang macet secara kronis.',
            bandTarget: 'Band 8.5'
          }
        ]
      }
    ]
  }
];
