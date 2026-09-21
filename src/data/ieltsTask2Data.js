// IELTS Academic & General Training Task 2 Essay Simulation Bank
// Covers all 5 official question types across 8 core IELTS exam domains:
// 1. Opinion (Agree/Disagree)
// 2. Discussion (Discuss Both Views & Give Opinion)
// 3. Problem & Solution / Causes & Effects
// 4. Advantages & Disadvantages (Outweigh)
// 5. Direct / Two-Part Questions

export const TASK2_QUESTION_TYPES = [
  'Semua Tipe Soal',
  'Opinion (Agree or Disagree)',
  'Discussion (Both Views)',
  'Problem & Solution',
  'Advantages vs Disadvantages',
  'Direct / Double Question'
];

export const IELTS_TASK2_PROMPTS = [
  // --- TIPE 1: OPINION (AGREE OR DISAGREE) ---
  {
    id: 't2-op-1',
    questionType: 'Opinion (Agree or Disagree)',
    topic: 'Education / Higher Education',
    title: 'Biaya Pendidikan Tinggi: Tanggung Jawab Negara atau Individu?',
    question: 'Some people argue that tertiary education should be fully funded by the state for all citizens, while others believe students should pay for their own university degrees. To what extent do you agree or disagree with the notion of completely free university education?',
    questionTranslation: 'Sebagian orang berpendapat bahwa pendidikan tinggi harus didanai sepenuhnya oleh negara untuk seluruh warga negara, sementara yang lain meyakini bahwa mahasiswa harus membayar gelar universitas mereka sendiri. Sejauh mana Anda setuju atau tidak setuju dengan gagasan universitas gratis sepenuhnya?',
    modelAnswerBand8: `The subsidisation of higher education remains a fiercely contested debate among policymakers and academics alike. While proponents argue that granting tuition-free access to universities democratises opportunity, I contend that universal tertiary funding places an unsustainable strain on state coffers and that a hybrid cost-sharing model is considerably more pragmatic.

Undeniably, compelling arguments can be marshalled in favour of state-funded university tuition. Proponents assert that removing financial barriers ensures meritocratic advancement, enabling brilliant minds from socioeconomically disadvantaged backgrounds to ascend the academic ladder without crippling student debt. Furthermore, an educated populace acts as an indispensable engine of macroeconomic growth, yielding substantial returns in the form of elevated tax revenues and specialized research innovation. In nations such as Norway and Germany, state-funded universities have demonstrably bolstered social mobility and maintained rigorous scholastic standards.

Nevertheless, instituting entirely cost-free tertiary tuition presents critical socioeconomic dilemmas. Foremost among these is the disproportionate fiscal burden it imposes upon taxpayers, many of whom have never accessed higher education themselves and whose contributions might be more urgently needed in basic healthcare or primary infrastructure. Moreover, when university education is treated as an unconditional entitlement rather than an investment, it frequently precipitates credential inflation—a scenario where qualifications are devalued and students spend protracted periods in academia without definitive vocational orientation.

A more sustainable compromise entails targeted financial assistance combined with income-contingent loans. Under this framework, gifted pupils facing economic precarity receive comprehensive scholarships, while affluent students contribute tuition fees that can be repaid post-graduation only after securing a viable threshold income.

In conclusion, although the principle of gratuitous higher education is ideologically laudable, universal state funding is fiscally imprudent. Equity and educational excellence are far better safeguarded through income-sensitive funding mechanisms that balance public benefit with individual responsibility.`,
    modelAnswerTranslation: `Pemberian subsidi pendidikan tinggi tetap menjadi perdebatan sengit di antara para pembuat kebijakan dan akademisi. Sementara pihak pendukung berpendapat bahwa pembebasan biaya kuliah mendemokratisasi kesempatan, saya berpendapat bahwa pendanaan universitas secara universal membebani kas negara secara tidak berkelanjutan dan bahwa model pembagian biaya campuran jauh lebih pragmatis.

Tak dapat disangkal, argumen kuat dapat diajukan untuk mendukung pembiayaan kuliah oleh negara. Pihak pendukung menegaskan bahwa penghapusan hambatan finansial menjamin kemajuan berdasarkan prestasi (meritokrasi), memungkinkan pemuda cerdas dari latar belakang ekonomi lemah menaiki tangga akademis tanpa tercekik utang pendidikan. Lebih lanjut, masyarakat terdidik menjadi mesin pendorong pertumbuhan makroekonomi, menghasilkan imbal balik besar berupa penerimaan pajak dan inovasi riset. Di negara seperti Norwegia dan Jerman, universitas gratis telah terbukti memperkuat mobilitas sosial.

Kendati demikian, penerapan kuliah gratis sepenuhnya menimbulkan dilema sosial-ekonomi yang kritis. Hal utama adalah beban fiskal yang tidak proporsional bagi para pembayar pajak, yang banyak di antaranya tidak pernah mengenyam pendidikan tinggi dan kontribusinya lebih mendesak untuk layanan kesehatan dasar atau infrastruktur primer. Selain itu, ketika kuliah dianggap sebagai hak cuma-cuma alih-alih investasi, sering terjadi inflasi gelar akademis—situasi di mana nilai kualifikasi merosot dan mahasiswa menghabiskan waktu terlalu lama di kampus tanpa orientasi karier yang jelas.

Kompromi yang lebih berkelanjutan adalah bantuan finansial tepat sasaran yang dipadukan dengan pinjaman berdasar penghasilan. Dalam skema ini, siswa berbakat yang kurang mampu menerima beasiswa penuh, sedangkan siswa mampu membayar biaya kuliah yang kelak dicicil setelah lulus dan meraih penghasilan di atas batas tertentu.

Kesimpulannya, meskipun prinsip pendidikan tinggi cuma-cuma sangat mulia secara ideologis, pembiayaan penuh oleh negara tidaklah bijak secara fiskal. Kesetaraan dan mutu pendidikan jauh lebih terjaga melalui mekanisme berjenjang yang menyeimbangkan manfaat publik dan tanggung jawab individu.`,
    peelFramework: {
      intro: 'Paraphrase kontroversi + Tesis tegas: Tolak gratis universal, dukung model pembiayaan campuran (hybrid cost-sharing).',
      body1: 'Sisi pro-gratis: Meritokrasi, mobilitas sosial, dan imbal hasil makroekonomi (contoh: Jerman/Norwegia).',
      body2: 'Kelemahan gratis universal: Beban fiskal pembayar pajak, distorsi anggaran primer, dan inflasi gelar.',
      body3orAlt: 'Solusi alternatif realistis: Beasiswa penuh bagi yang membutuhkan dipadu cicilan income-contingent.',
      conclusion: 'Tegaskan kembali posisi: Subsidi tepat sasaran jauh lebih berkelanjutan daripada gratis mutlak.'
    },
    academicCollocations: [
      { term: 'fiscally imprudent', meaning: 'tidak bijak/boros secara keuangan negara' },
      { term: 'credential inflation', meaning: 'penurunan nilai ijazah karena terlalu banyak lulusan' },
      { term: 'income-contingent loans', meaning: 'pinjaman yang baru dicicil jika gaji sudah mencukupi' },
      { term: 'socioeconomically disadvantaged', meaning: 'masyarakat dari golongan ekonomi lemah' },
      { term: 'meritocratic advancement', meaning: 'kemajuan berdasarkan bakat dan prestasi nyata' }
    ]
  },
  {
    id: 't2-op-2',
    questionType: 'Opinion (Agree or Disagree)',
    topic: 'Environment / Urban Planning',
    title: 'Larangan Kendaraan Pribadi di Pusat Kota',
    question: 'The only effective way to solve traffic congestion and air pollution in major cities is to ban private cars entirely from urban centers. To what extent do you agree or disagree?',
    questionTranslation: 'Satu-satunya cara efektif untuk mengatasi kemacetan lalu lintas dan polusi udara di kota-kota besar adalah dengan melarang mobil pribadi sepenuhnya dari pusat kota. Sejauh mana Anda setuju atau tidak setuju?',
    modelAnswerBand8: `Urban congestion and atmospheric degradation constitute two of the most pernicious challenges afflicting modern metropolises. While radical proposals suggest that an outright prohibition of private automobiles in downtown sectors is the sole viable antidote, I vehemently disagree with this absolute stance; enduring sustainability demands a multifaceted strategy centred on public transit revitalization and economic incentives rather than draconian prohibitions.

To begin with, asserting that vehicle bans are the "only" remedy ignores fundamental logistical realities. In many global cities, metropolitan layouts and suburban sprawl render residents heavily reliant on personal motor vehicles for commuting, transporting elderly family members, and conducting business. Implementing an abrupt and comprehensive ban would paralyze local commerce and impose acute hardship on populations residing in peripheries underserved by rapid transit. Without first establishing an impeccable, high-capacity public transportation network, prohibition merely shifts gridlock to peripheral boundaries rather than resolving it.

Conversely, empirical evidence indicates that diversified policy interventions achieve far superior outcomes without necessitating outright bans. Cities such as London, Singapore, and Stockholm have successfully curtailed gridlock by introducing dynamic congestion pricing zones and low-emission tariffs. By attaching a monetary cost to peak-hour driving, authorities disincentivize discretionary trips while simultaneously accumulating capital to finance green infrastructure. Furthermore, allocating dedicated lanes for zero-emission buses, expanding cycling corridors, and incentivizing electric micromobility empower citizens to transition away from automobiles voluntarily.

In conclusion, although restricting automotive access to historic city centres yields localised ecological benefits, deeming complete prohibition the sole resolution is fundamentally flawed. True urban livability is achieved not through coercive bans, but by constructing world-class public transportation infrastructure augmented by intelligent congestion pricing.`,
    modelAnswerTranslation: `Kemacetan perkotaan dan polusi udara merupakan dua tantangan paling merusak yang melanda kota-kota metropolitan modern. Meskipun ada usulan radikal yang menyatakan bahwa larangan mutlak mobil pribadi di pusat kota adalah satu-satunya obat mujarab, saya sangat tidak setuju dengan pandangan mutlak ini; keberlanjutan jangka panjang menuntut strategi berlapis yang berpusat pada revitalisasi transportasi umum dan insentif ekonomi, alih-alih larangan yang represif.

Pertama-tama, menegaskan bahwa pelarangan kendaraan adalah "satu-satunya" solusi berarti mengabaikan realitas logistik yang mendasar. Di banyak kota dunia, tata ruang kota dan pemukiman pinggiran membuat warga sangat bergantung pada kendaraan pribadi untuk bekerja, mengantar lansia, dan berniaga. Menerapkan larangan mendadak dan menyeluruh akan melumpuhkan perdagangan lokal serta menyulitkan warga pinggiran yang belum terjangkau angkutan cepat. Tanpa terlebih dahulu menyediakan jaringan transportasi massal berkapasitas tinggi yang andal, larangan hanya akan memindahkan titik kemacetan ke wilayah penyangga.

Sebaliknya, bukti empiris menunjukkan bahwa intervensi kebijakan yang terpadu memberikan hasil yang jauh lebih unggul tanpa harus memberlakukan larangan total. Kota-kota seperti London, Singapura, dan Stockholm berhasil menekan kemacetan dengan menerapkan tarif kemacetan dinamis (electronic road pricing) dan zona emisi rendah. Dengan mengenakan biaya bagi pengendara di jam sibuk, pemerintah mengurangi perjalanan tidak mendesak sekaligus menghimpun dana untuk membiayai infrastruktur ramah lingkungan. Selain itu, penyediaan jalur bus listrik khusus, jalur sepeda, dan mikromobilitas listrik mendorong masyarakat beralih secara sukarela.

Kesimpulannya, meskipun pembatasan akses kendaraan di pusat kota memberikan manfaat ekologis, menganggap pelarangan total sebagai satu-satunya jalan keluar adalah kekeliruan mendasar. Kenyamanan hidup perkotaan tercapai bukan melalui larangan paksa, melainkan melalui pembangunan transportasi publik kelas dunia yang didukung manajemen tarif kemacetan yang cerdas.`,
    peelFramework: {
      intro: 'Kritisi klausa absolut "the only way" + Tesis: Menolak larangan mutlak, dukung kombinasi transportasi publik & congestion pricing.',
      body1: 'Kelemahan larangan mutlak: Ketergantungan pinggiran kota, dampak ekonomi pada perniagaan, pemindahan kemacetan ke pinggiran.',
      body2: 'Solusi terbukti lebih unggul: Dynamic congestion charge (London, Singapura), jalur sepeda terintegrasi, dan bus nol-emisi.',
      conclusion: 'Rangkum argumen: Kebijakan insentif dan fasilitas publik jauh lebih berkelanjutan daripada pemaksaan hukum kaku.'
    },
    academicCollocations: [
      { term: 'pernicious challenges', meaning: 'tantangan yang sangat merusak' },
      { term: 'draconian prohibitions', meaning: 'larangan yang terlalu kejam/kaku' },
      { term: 'dynamic congestion pricing', meaning: 'penerapan tarif kemacetan berbasis jam sibuk' },
      { term: 'suburban sprawl', meaning: 'pemukiman kota yang melebar tak teratur ke pinggiran' },
      { term: 'disincentivize discretionary trips', meaning: 'mengurangi perjalanan yang tidak terlalu penting' }
    ]
  },
  {
    id: 't2-op-3',
    questionType: 'Opinion (Agree or Disagree)',
    topic: 'Crime / Law Enforcement',
    title: 'Hukuman Penjara vs Rehabilitasi Pelaku Kriminal',
    question: 'Some believe that longer prison sentences are the best deterrent to criminal behavior, while others think rehabilitation and vocational training are far more effective at reducing crime. To what extent do you agree or disagree with emphasizing punitive incarceration?',
    questionTranslation: 'Sebagian orang meyakini bahwa hukuman penjara yang lebih lama adalah efek jera terbaik bagi tindak kejahatan, sementara yang lain berpendapat bahwa rehabilitasi dan pelatihan vokasi jauh lebih efektif menekan angka kriminalitas. Sejauh mana Anda setuju atau tidak setuju dengan pengutamaan pemenjaraan punitif?',
    modelAnswerBand8: `The optimal paradigm for judicial penal systems is an enduring subject of sociological controversy. While a segment of society advocates for prolonged custodial sentencing on the grounds of retributive justice and deterrence, I firmly contend that prioritizing punitive incarceration is counterproductive and that comprehensive rehabilitative initiatives offer a vastly superior mechanism for crime prevention.

Proponents of severe prison terms contend that the dread of protracted deprivation of liberty serves as a potent deterrent for prospective offenders. In theory, harsh penal retribution reassures victims and temporarily incapacitates dangerous individuals by physically removing them from civil society. However, empirical criminology persistently disproves this premise. Extended custodial sentences seldom diminish recidivism; rather, conventional penitentiaries frequently function as "academies of crime," where minor offenders are institutionalised, subjected to anti-social conditioning, and permanently estranged from legitimate economic avenues.

In sharp contrast, restorative justice and vocational training target the root systemic drivers of delinquency, which predominantly stem from educational deprivation, substance dependency, and poverty. When correctional institutions invest in psychological counselling, occupational certification, and literacy programmes, inmates acquire the requisite capabilities to reintegrate productively into the labour market upon release. The Scandinavian penal model exemplarily demonstrates this efficacy: Norway's open correctional facilities, which prioritise human dignity and skill cultivation, boast recidivism rates below 20%, juxtaposed with punitive systems in other nations that consistently register recidivism rates surpassing 60%.

In conclusion, although the containment of violent sociopaths remains an unavoidable state responsibility, relying primarily upon lengthened prison terms to eradicate crime is a demonstrable failure. A truly progressive justice system must pivot decisively toward rehabilitation, vocational empowerment, and civic reintegration.`,
    modelAnswerTranslation: `Paradigma optimal bagi sistem peradilan pidana adalah topik kontroversi sosiologis yang tak kunjung usai. Meskipun sebagian masyarakat mendukung hukuman penjara yang diperpanjang atas dasar keadilan retributif dan efek jera, saya berpendapat tegas bahwa mengutamakan pemenjaraan punitif justru kontraproduktif dan bahwa inisiatif rehabilitasi komprehensif menawarkan mekanisme yang jauh lebih unggul dalam menekan kejahatan.

Para pendukung hukuman penjara yang keras berpendapat bahwa rasa takut akan hilangnya kebebasan dalam waktu lama memberikan efek jera yang kuat bagi calon pelanggar hukum. Secara teori, pembalasan pidana yang tegas menenangkan korban dan melumpuhkan sementara individu berbahaya dengan memisahkan mereka dari masyarakat. Namun, kriminologi empiris terus membantah premis ini. Hukuman penjara yang panjang jarang menurunkan tingkat kejahatan berulang (residivisme); sebaliknya, penjara konvensional kerap berfungsi sebagai "sekolah kejahatan", tempat pelanggar hukum pemula terkondisikan secara anti-sosial dan terasing secara permanen dari peluang ekonomi yang sah.

Sangat kontras, keadilan restoratif dan pelatihan keterampilan menyasar akar masalah sistemik dari kenakalan hukum, yang sebagian besar berakar dari ketiadaan pendidikan, ketergantungan obat, dan kemiskinan. Ketika lembaga pemasyarakatan berinvestasi dalam konseling psikologis, sertifikasi kejuruan, dan program keaksaraan, warga binaan memperoleh bekal yang diperlukan untuk berintegrasi secara produktif ke pasar kerja setelah bebas. Model pemasyarakatan Skandinavia menjadi bukti nyata: penjara terbuka di Norwegia yang memprioritaskan martabat dan pembinaan mencatat angka residivisme di bawah 20%, berbanding terbalik dengan sistem punitif di negara lain yang tingkat residivismenya melampaui 60%.

Kesimpulannya, meskipun pengurungan penjahat berbahaya tetap menjadi tanggung jawab negara yang tak terelakkan, hanya mengandalkan perpanjangan masa tahanan untuk memberantas kejahatan terbukti gagal. Sistem peradilan yang benar-benar maju harus bergeser ke arah rehabilitasi, pemberdayaan vokasi, dan reintegrasi sosial.`,
    peelFramework: {
      intro: 'Paraphrase retributive justice vs rehabilitation + Tesis tegas: Tolak penjara punitif yang berkepanjangan, dukung rehabilitasi edukatif.',
      body1: 'Kritik penjara punitif: Gagal memberi efek jera, menjadi "akademi kejahatan", dan memperparah residivisme.',
      body2: 'Keunggulan rehabilitasi: Mengatasi akar masalah sosial-ekonomi (keterampilan kerja, konseling, bukti model Skandinavia).',
      conclusion: 'Rangkuman: Pengurungan hanya untuk kasus ekstrem berbahaya, sisanya utamakan reintegrasi bermartabat.'
    },
    academicCollocations: [
      { term: 'retributive justice', meaning: 'keadilan berbasis pembalasan setimpal' },
      { term: 'custodial sentencing', meaning: 'vonis penahanan di lembaga pemasyarakatan' },
      { term: 'rates of recidivism', meaning: 'tingkat pengulangan tindak kejahatan' },
      { term: 'restorative justice', meaning: 'keadilan restoratif pemulihan korban dan pelaku' },
      { term: 'incapacitate dangerous individuals', meaning: 'melumpuhkan individu berbahaya dari masyarakat' }
    ]
  },

  // --- TIPE 2: DISCUSSION (DISCUSS BOTH VIEWS & GIVE OPINION) ---
  {
    id: 't2-disc-1',
    questionType: 'Discussion (Both Views)',
    topic: 'Technology / Artificial Intelligence',
    title: 'Otomasi AI: Ancaman Pengangguran Massal vs Peluang Produktivitas Baru',
    question: 'Some people believe that artificial intelligence will inevitably replace human labor, causing widespread unemployment. Others argue that AI will create new opportunities and enhance overall productivity. Discuss both views and give your own opinion.',
    questionTranslation: 'Sebagian orang berpendapat bahwa kecerdasan buatan pasti akan menggantikan tenaga kerja manusia dan memicu pengangguran massal. Sementara yang lain berpendapat bahwa AI akan menciptakan peluang-peluang baru dan meningkatkan produktivitas secara menyeluruh. Diskusikan kedua pandangan ini dan sampaikan pendapat Anda sendiri.',
    modelAnswerBand8: `The rapid emergence of generative algorithms and cognitive automation has reignited profound anxieties regarding the trajectory of human employment. While alarmists envision a dystopian future plagued by structural joblessness, technocrats maintain that automation acts as a benign catalyst for economic diversification. In my view, although transitory disruptions across vulnerable sectors are unavoidable, synthetic intelligence will ultimately augment human potential rather than render mankind economically redundant.

On the one hand, apprehensions concerning labor displacement are grounded in substantive historical and contemporary precedent. Historically, technological mechanization targeted repetitive physical toil; conversely, contemporary neural networks actively usurp sophisticated cognitive realms once presumed inviolable. Algorithms can now draft complex contracts, interpret radiographic scans, and synthesize software code at fractional costs and near-zero error rates compared with human professionals. Consequently, white-collar workers in administrative, analytical, and lower-tier legal occupations face imminent displacement, potentially exacerbating societal inequality unless massive state-directed retraining initiatives are mobilized.

On the other hand, proponents cogently argue that technological disruptions historically redefine vocational categories rather than extinguishing them. The proliferation of automated systems inevitably sparks acute demand for novel specialisms—spanning algorithmic ethics governance and data curation to prompt architecture. Moreover, by liberating human employees from mundane, routine processing tasks, AI enables professionals to refocus upon strategic innovation, empathetic client relations, and creative nuance. In healthcare, for instance, diagnostic tools empower clinicians to detect pathologies earlier, thereby expanding healthcare delivery rather than terminating physicians.

In conclusion, while the progression of artificial intelligence undoubtedly entails severe transitional friction for vulnerable vocations, it does not portend an irreversible unemployment catastrophe. Provided governments invest aggressively in lifelong digital education and reskilling programs, automation will usher in an era of unprecedented productivity and elevated standard of living.`,
    modelAnswerTranslation: `Kemunculan pesat algoritma generatif dan otomasi kognitif telah menyalakan kembali kecemasan mendalam mengenai masa depan lapangan kerja manusia. Sementara pihak yang cemas membayangkan masa depan distopia yang dirundung pengangguran struktural, para teknokrat berpendapat bahwa otomasi bertindak sebagai katalis positif bagi diversifikasi ekonomi. Menurut pandangan saya, meskipun disrupsi sementara pada sektor rentan tak terhindarkan, kecerdasan sintetis pada akhirnya akan meningkatkan potensi manusia alih-alih membuat manusia tidak berguna secara ekonomi.

Di satu sisi, kekhawatiran mengenai hilangnya lapangan kerja berpijak pada preseden historis dan kontemporer yang nyata. Secara historis, mekanisasi menargetkan pekerjaan fisik berulang; sebaliknya, jaringan neural modern secara aktif mengambil alih ranah kognitif yang dulunya dianggap tak tersentuh. Algoritma kini dapat menyusun kontrak hukum, menafsirkan hasil rontgen medis, dan memproduksi kode perangkat lunak dengan biaya jauh lebih murah dan tingkat kesalahan hampir nol dibandingkan tenaga manusia. Akibatnya, pekerja kantoran di bidang administrasi, analitik, dan hukum tingkat pemula menghadapi ancaman pemutusan kerja, yang berpotensi memperlebar ketimpangan sosial.

Di sisi lain, pihak yang optimis dengan tepat berpendapat bahwa disrupsi teknologi secara historis mendefinisikan ulang bidang pekerjaan alih-alih menghapusnya. Menjamurnya sistem otomatis melahirkan kebutuhan tinggi akan profesi-profesi baru—mulai dari tata kelola etika algoritma hingga arsitektur prompt AI. Terlebih lagi, dengan membebaskan karyawan dari pekerjaan rutin yang menjemukan, AI memungkinkan para profesional memusatkan perhatian pada inovasi strategis, hubungan klien yang penuh empati, dan kreativitas. Dalam dunia medis misalnya, alat diagnostik AI membantu dokter mendeteksi penyakit lebih dini sehingga memperluas cakupan layanan kesehatan.

Kesimpulannya, meskipun perkembangan AI membawa gesekan transisi yang berat bagi profesi rentan, hal ini bukanlah pertanda bencana pengangguran yang tak teratasi. Asalkan pemerintah berinvestasi secara masif pada pelatihan keterampilan digital seumur hidup, otomatisasi akan membuka era produktivitas dan kesejahteraan yang lebih tinggi.`,
    peelFramework: {
      intro: 'Sajikan kedua pandangan + Tesis jelas: AI menimbulkan friksi transisi, namun akhirnya meningkatkan kapasitas manusia (augmentation).',
      body1: 'Sudut Pandang 1 (Displacement): Otomasi kognitif di ranah hukum, medis, koding; risiko pekerja kerah putih.',
      body2: 'Sudut Pandang 2 (Productivity & Creation): Lahirnya profesi baru, fokus pada empati dan pemecahan masalah strategis.',
      conclusion: 'Sintesis seimbang: Investasi kebijakan reskilling digital kunci menyambut transformasi ekonomi.'
    },
    academicCollocations: [
      { term: 'structural joblessness', meaning: 'pengangguran struktural akibat perubahan teknologi' },
      { term: 'cognitive automation', meaning: 'otomasi pekerjaan berpikir/analitis' },
      { term: 'transitory disruptions', meaning: 'disrupsi / kekacauan sementara selama masa transisi' },
      { term: 'render mankind economically redundant', meaning: 'membuat manusia tidak lagi bernilai secara ekonomi' },
      { term: 'algorithmic ethics governance', meaning: 'tata kelola dan regulasi etika algoritma AI' }
    ]
  },
  {
    id: 't2-disc-2',
    questionType: 'Discussion (Both Views)',
    topic: 'Society / Lifestyle',
    title: 'Kehidupan Perkotaan Modern vs Ketenangan Pedesaan',
    question: 'Some individuals believe that residing in major metropolitan cities provides the best quality of life, whereas others argue that rural living offers far superior personal well-being. Discuss both perspectives and present your own viewpoint.',
    questionTranslation: 'Sebagian orang meyakini bahwa tinggal di kota-kota metropolitan besar memberikan kualitas hidup terbaik, sedangkan yang lain berpendapat bahwa tinggal di pedesaan menawarkan kesejahteraan pribadi yang jauh lebih unggul. Diskusikan kedua sudut pandang ini dan sampaikan pandangan Anda sendiri.',
    modelAnswerBand8: `The dichotomy between urban living and rural life represents an age-old conundrum that has acquired heightened relevance in contemporary society. While proponents of urbanization highlight the boundless cultural, healthcare, and economic prospects of the metropolis, rural advocates emphasize emotional serenity, communal cohesion, and clean ecology. In my estimation, while urban centers remain unrivaled for career progression, rural environments ultimately cultivate superior holistic well-being.

On the one hand, modern metropolises serve as the vibrant epicenters of human advancement and cosmopolitan convenience. Cities concentrate premier medical institutions, prestigious universities, and multinational corporate headquarters, thereby furnishing inhabitants with unprecedented avenues for professional upward mobility and cultural enrichment. Furthermore, metropolitan residents enjoy seamless access to round-the-clock commercial amenities, diverse gastronomy, and comprehensive public transport infrastructure. For ambitious young professionals and intellectual seekers, urban life provides an intellectually stimulating atmosphere that can seldom be replicated elsewhere.

On the other hand, the relentless velocity of urban living frequently exacts a grievous toll on individual health. City dwellers are continuously exposed to chronic acoustic noise, hazardous particulate pollution, and prohibitive housing expenses, which compound psychological distress and engender alienating isolation. Conversely, rural environments foster tranquil lifestyles grounded in intimacy with nature and tight-knit communal bonds. Abundant green spaces, clean air, and absence of chronic commuter stress contribute demonstrably to lower incidences of cardiovascular ailments and anxiety disorders, fostering long-term physiological resilience.

In conclusion, although metropolitan cities provide unmatched economic dynamism and scholastic opportunities, they increasingly compromise the fundamental tenets of physical and mental tranquility. Therefore, for long-term health and genuine psychological fulfillment, rural or peri-urban existence proves decidedly superior.`,
    modelAnswerTranslation: `Dikotomi antara kehidupan perkotaan dan pedesaan merupakan dilema klasik yang kian relevan dalam masyarakat kontemporer. Sementara para pendukung urbanisasi menonjolkan peluang budaya, kesehatan, dan karier ekonomi metropolitan yang tanpa batas, para pembela pedesaan menekankan ketenangan emosional, keakraban sosial, dan ekologi yang bersih. Menurut estimasi saya, meskipun pusat kota tak tertandingi untuk kemajuan karier, lingkungan pedesaan pada akhirnya membina kesejahteraan holistik yang jauh lebih unggul.

Di satu sisi, kota-kota metropolitan modern berfungsi sebagai pusat kemajuan manusia dan kenyamanan kosmopolitan yang dinamis. Kota memusatkan institusi medis terkemuka, universitas bergengsi, dan markas perusahaan multinasional, sehingga menyediakan peluang tak terbatas bagi penduduknya untuk mobilitas karier dan pengayaan wawasan budaya. Selain itu, warga kota menikmati akses tanpa henti terhadap fasilitas komersial 24 jam, ragam kuliner dunia, dan transportasi massal. Bagi profesional muda yang ambisius, kehidupan kota menyajikan atmosfer yang menggairahkan pemikiran.

Di sisi lain, ritme cepat kehidupan perkotaan kerap mengorbankan kesehatan pribadi secara menyedihkan. Penduduk kota terus-menerus terpapar kebisingan kronis, polusi udara berbahaya, dan biaya tempat tinggal yang mencekik, yang memperburuk stres psikologis dan memicu keterasingan sosial. Sebaliknya, lingkungan pedesaan membina gaya hidup damai yang menyatu dengan alam dan ikatan komunitas yang erat. Udara bersih, ruang hijau melimpah, dan bebas dari stres kemacetan terbukti menurunkan risiko penyakit jantung serta kecemasan mental.

Kesimpulannya, meskipun kota metropolitan menawarkan dinamisme ekonomi dan pendidikan yang tiada tanding, kota kerap mengikis ketenangan fisik dan mental dasar. Oleh karena itu, untuk kesehatan jangka panjang dan kebahagiaan psikologis yang sejati, kehidupan di pedesaan terbukti jauh lebih unggul.`,
    peelFramework: {
      intro: 'Paraphrase kontras metropolitan vs rural + Tesis: Kota unggul di karier, namun desa lebih unggul untuk kesehatan holistik.',
      body1: 'Keunggulan Kota: Pusat fasilitas medis, universitas, jaringan bisnis, dan ragam budaya kosmopolitan.',
      body2: 'Keunggulan Pedesaan: Udara bersih, minim polusi suara, ikatan sosial guyub, pencegahan stres psikologis.',
      conclusion: 'Rangkuman: Kesejahteraan hidup sejati jangka panjang lebih ditopang oleh ketenangan pedesaan.'
    },
    academicCollocations: [
      { term: 'cosmopolitan convenience', meaning: 'kemudahan gaya hidup kota dunia serba ada' },
      { term: 'upward mobility', meaning: 'peningkatan status sosial dan ekonomi ke atas' },
      { term: 'hazardous particulate pollution', meaning: 'polusi partikel udara beracun mikro' },
      { term: 'communal cohesion', meaning: 'keeratan dan kebersamaan ikatan sosial warga' },
      { term: 'physiological resilience', meaning: 'ketahanan fisik dan kesehatan tubuh alami' }
    ]
  },
  {
    id: 't2-disc-3',
    questionType: 'Discussion (Both Views)',
    topic: 'Education / Technology',
    title: 'Pembelajaran Daring vs Interaksi Tatap Muka di Kelas',
    question: 'Some educators argue that online learning will soon make traditional classroom teaching obsolete, while others maintain that face-to-face instruction remains irreplaceable. Discuss both views and share your perspective.',
    questionTranslation: 'Sebagian pakar pendidikan berpendapat bahwa pembelajaran daring akan segera membuat pengajaran tatap muka di kelas menjadi usang, sementara yang lain bersikukuh bahwa interaksi langsung di kelas tetap tak tergantikan. Diskusikan kedua pandangan ini dan sampaikan perspektif Anda.',
    modelAnswerBand8: `The ubiquity of high-speed digital networks and pedagogical software has initiated a transformative paradigm shift in educational delivery. While virtual learning proponents declare that remote platforms will soon render physical classrooms obsolete, traditionalists maintain that direct human pedagogical interaction is fundamentally irreplaceable. In my evaluation, while virtual platforms furnish unmatched geographical flexibility, the physical classroom environment remains essential for holistic emotional and social development.

Advocates of digital education highlight its unprecedented accessibility and democratising potential. Online repositories permit learners irrespective of geographic location or physical mobility to access curriculum from world-renowned academicians. Furthermore, asynchronous digital modules enable self-paced mastery, catering seamlessly to diverse cognitive learning styles through personalized multimedia content and automated assessments. For working professionals or remote communities lacking local tertiary infrastructure, virtual instruction offers an economical, highly scalable educational lifeline that traditional brick-and-mortar academies cannot match.

Conversely, physical classrooms cultivate foundational human capacities that digital interfaces cannot replicate. Real-time, face-to-face pedagogical discourse nurtures interpersonal dynamics, spontaneous debates, and empathetic collaboration among peers. Crucially, experienced educators do not merely dispense empirical knowledge; they observe micro-expressions, deduce student comprehension, and provide nuanced behavioral mentoring. In elementary and secondary schooling especially, physical socialization is paramount for developing conflict resolution, teamwork, and emotional intelligence—competencies that are profoundly diluted when mediated exclusively through computer monitors.

In conclusion, although online instruction has revolutionized educational access and administrative convenience, it represents a potent supplement rather than a wholesale replacement for traditional schooling. The optimal future of global education lies in a blended pedagogical architecture that preserves the irreplaceable human warmth of the physical classroom while leveraging digital scalability.`,
    modelAnswerTranslation: `Menjamurnya jaringan digital berkecepatan tinggi dan perangkat lunak pedagogis telah memicu pergeseran paradigma mendasar dalam penyampaian pendidikan. Sementara para pendukung pembelajaran virtual menyatakan bahwa platform daring akan segera membuat ruang kelas fisik usang, para pendidik tradisional berpendapat bahwa interaksi manusiawi langsung dalam pengajaran tetap tak tergantikan. Dalam evaluasi saya, meskipun platform virtual memberikan fleksibilitas geografis yang tak tertandingi, lingkungan kelas fisik tetap penting bagi perkembangan sosial dan emosional yang holistik.

Para pendukung pendidikan digital menyoroti aksesibilitas dan potensi demokratisasi yang belum pernah ada sebelumnya. Sumber belajar daring memungkinkan pelajar dari berbagai penjuru wilayah mengakses materi dari akademisi ternama dunia tanpa batasan jarak. Selain itu, modul digital asinkron memungkinkan siswa belajar sesuai kecepatan masing-masing, memfasilitasi ragam gaya belajar melalui konten multimedia interaktif dan evaluasi otomatis. Bagi pekerja profesional atau masyarakat di pelosok yang minim sarana kampus, pengajaran daring adalah solusi efisien dan terjangkau yang sulit disamai gedung sekolah konvensional.

Sebaliknya, ruang kelas fisik membina kemampuan dasar manusia yang tidak dapat digantikan oleh layar monitor. Dialog tatap muka langsung membangkitkan dinamika antarpribadi, debat spontan, dan kerja sama tim yang hangat di antara teman sebaya. Yang terpenting, guru yang berpengalaman tidak hanya menyalurkan teori buku; mereka membaca ekspresi mikro murid, merasakan kesulitan pemahaman, dan memberikan bimbingan moral yang mendalam. Terutama pada pendidikan dasar dan menengah, interaksi sosial fisik sangat krusial untuk melatih resolusi konflik dan kecerdasan emosional.

Kesimpulannya, meskipun pembelajaran daring telah merevolusi akses pendidikan dan kepraktisan belajar, metode ini lebih berfungsi sebagai pelengkap hebat daripada pengganti total sekolah fisik. Masa depan pendidikan yang ideal terletak pada pendekatan hibrida (blended learning) yang mempertahankan kehangatan interaksi manusia di kelas sekaligus memanfaatkan kecanggihan teknologi digital.`,
    peelFramework: {
      intro: 'Sajikan kedua kutub pandangan + Tesis tegas: Daring unggul dalam akses, tetapi kelas tatap muka tak tergantikan untuk kecerdasan emosional.',
      body1: 'Kekuatan Daring: Skalabilitas global, belajar mandiri sesuai kecepatan siswa (asynchronous), inklusif bagi wilayah terpencil.',
      body2: 'Keunggulan Tatap Muka: Pembinaan karakter, membaca bahasa tubuh murid, debat spontan, empati sosial dan resolusi konflik.',
      conclusion: 'Rekomendasi sintesis: Model hibrida (blended learning) yang menggabungkan kedua kelebihan.'
    },
    academicCollocations: [
      { term: 'pedagogical delivery', meaning: 'metode penyampaian proses belajar mengajar' },
      { term: 'render physical classrooms obsolete', meaning: 'membuat ruang kelas fisik menjadi usang/ditinggalkan' },
      { term: 'asynchronous digital modules', meaning: 'modul belajar daring yang bisa diakses kapan saja' },
      { term: 'nuanced behavioral mentoring', meaning: 'pembimbingan sikap moral yang mendalam dan peka' },
      { term: 'blended pedagogical architecture', meaning: 'sistem pembelajaran hibrida gabungan daring dan tatap muka' }
    ]
  },

  // --- TIPE 3: PROBLEM & SOLUTION / CAUSES & EFFECTS ---
  {
    id: 't2-prob-1',
    questionType: 'Problem & Solution',
    topic: 'Environment / Pollution',
    title: 'Krisis Sampah Plastik Sekali Pakai Global',
    question: 'The exponential accumulation of single-use plastic waste in marine and terrestrial ecosystems has evolved into a global ecological crisis. What are the primary causes of this phenomenon, and what actionable solutions can governments and consumers implement?',
    questionTranslation: 'Akumulasi sampah plastik sekali pakai yang berlipat ganda di ekosistem laut dan darat telah berkembang menjadi krisis ekologis global. Apa penyebab utama fenomena ini, dan solusi nyata apa yang dapat diterapkan oleh pemerintah dan konsumen?',
    modelAnswerBand8: `The proliferation of non-biodegradable synthetic polymers constitutes one of the most catastrophic ecological emergencies of our era. Millions of tonnes of discarded single-use packaging contaminate marine food webs and terrestrial ecosystems annually. This essay will examine the twin catalysts of this crisis—namely corporate reliance on cheap manufacturing and consumer convenience culture—before proposing regulatory interventions and consumer-driven circular economic models.

The genesis of the plastic catastrophe lies primarily in corporate economic calculus coupled with consumer addiction to disposable convenience. Petroleum-derived plastics remain extraordinarily inexpensive to synthesize, prompting multinational conglomerates in the food, beverage, and retail sectors to package fast-moving consumer goods in disposable polymers to maximize profit margins. Concurrently, fast-paced modern lifestyles have engendered a pervasive "throwaway culture," wherein convenience overrides ecological mindfulness. Because biodegradable alternatives require higher capital investment, market forces naturally gravitate toward the cheapest, most durable, and consequently most persistent pollutants.

To remediate this environmental degradation, a decisive multi-tiered approach is imperative. Foremost, sovereign governments must introduce stringent statutory mandates, including Extended Producer Responsibility (EPR) legislation. Under this legal framework, manufacturers are financially accountable for the complete lifecycle of their packaging, creating compelling economic incentives to transition toward mycelium, seaweed, or recycled paper alternatives. In parallel, authorities should enact outright bans or punitive taxation on virgin plastics while heavily subsidizing municipal zero-waste infrastructure. On an individual tier, consumers must cultivate conscientious purchasing behaviors by patronizing package-free markets and boycotting recalcitrant brands.

In conclusion, single-use plastic pollution is the toxic byproduct of unregulated commercial manufacturing and rampant consumer complacency. Only through robust government regulation penalizing polymer production, combined with an aggressive consumer shift toward reusable materials, can humanity avert irreversible planetary contamination.`,
    modelAnswerTranslation: `Menjamurnya polimer sintetis yang sulit terurai merupakan salah satu bencana ekologis paling merusak di zaman kita. Jutaan ton kemasan sekali pakai mencemari rantai makanan laut dan ekosistem darat setiap tahunnya. Esai ini akan menganalisis dua penyebab utama krisis ini—yaitu ketergantungan korporasi pada bahan murah dan budaya serba instan konsumen—sebelum mengusulkan intervensi regulasi pemerintah serta model ekonomi sirkular berbasis konsumen.

Akar dari bencana plastik ini terutama bersumber pada perhitungan keuntungan bisnis yang dipadukan dengan ketergantungan masyarakat pada kemudahan barang sekali pakai. Plastik berbahan dasar minyak bumi sangat murah diproduksi, mendorong konglomerat multinasional di sektor makanan dan ritel menggunakan kemasan plastik sekali pakai demi mendongkrak laba. Bersamaan dengan itu, gaya hidup modern yang serba cepat telah melahirkan "budaya buang-pakai" di mana kepraktisan mengalahkan kesadaran lingkungan. Karena bahan alternatif ramah lingkungan menuntut biaya riset yang lebih mahal, kekuatan pasar secara alami condong pada bahan termurah yang ironisnya paling mencemari alam.

Untuk mengatasi kerusakan ini, pendekatan tegas berlapis mutlak diperlukan. Yang terpenting, pemerintah harus menerbitkan regulasi hukum yang ketat, termasuk undang-undang Tanggung Jawab Produsen yang Diperluas (EPR). Di bawah aturan ini, produsen bertanggung jawab mendanai daur ulang sampah dari produk yang mereka jual, menciptakan insentif nyata untuk beralih ke kemasan berbahan jamur, rumput laut, atau kertas daur ulang. Secara paralel, otoritas harus mengenakan pajak tinggi atas plastik murni dan menyubsidi fasilitas bebas-sampah di kota-kota. Dari sisi individu, masyarakat harus membangun kebiasaan berbelanja dengan wadah guna ulang dan menolak produk berkemasan boros.

Kesimpulannya, polusi plastik sekali pakai adalah akibat dari industri yang tidak diatur ketat dan kelalaian konsumsi masyarakat. Hanya melalui ketegasan regulasi negara dan pergeseran nyata gaya hidup masyarakat ke wadah pakai-ulang, bencana pencemaran bumi dapat dicegah.`,
    peelFramework: {
      intro: 'Paraphrase krisis plastik global + Outline: Uraikan dua penyebab (korporasi murah & budaya buang) serta dua pilar solusi (hukum EPR & aksi konsumen).',
      body1: 'Penyebab: Biaya produksi polimer minyak bumi yang amat murah bagi korporasi dipadu kebiasaan konsumtif instan (throwaway culture).',
      body2: 'Solusi: Regulasi Extended Producer Responsibility (EPR), insentif bahan organik pengganti, dan gerakan konsumen nir-sampah.',
      conclusion: 'Tegaskan kembali komitmen: Kolaborasi hukum tegas pemerintah dan kesadaran etis konsumen.'
    },
    academicCollocations: [
      { term: 'Extended Producer Responsibility', meaning: 'kewajiban produsen mendanai penanganan sampah produknya' },
      { term: 'throwaway culture', meaning: 'kebiasaan konsumtif membuang barang setelah sekali pakai' },
      { term: 'biodegradable alternatives', meaning: 'bahan pengganti yang dapat terurai alami oleh tanah' },
      { term: 'stringent statutory mandates', meaning: 'kewajiban hukum tertulis yang sangat ketat' },
      { term: 'circular economic models', meaning: 'sistem ekonomi sirkular ramah lingkungan berputar' }
    ]
  },
  {
    id: 't2-prob-2',
    questionType: 'Problem & Solution',
    topic: 'Health / Lifestyle',
    title: 'Epidemi Obesitas dan Gaya Hidup Menetap (Sedentary Lifestyle)',
    question: 'In many industrialized and developing societies, rates of obesity and lifestyle-related cardiovascular illnesses have escalated dramatically over recent decades. Explore the primary causes of this health crisis and outline feasible interventions.',
    questionTranslation: 'Di banyak masyarakat negara industri maupun berkembang, angka obesitas dan penyakit kardiovaskular terkait gaya hidup telah meningkat secara dramatis dalam beberapa dekade terakhir. Telusuri penyebab utama krisis kesehatan ini dan uraikan langkah penanganan yang layak dilakukan.',
    modelAnswerBand8: `The global escalation of obesity and associated chronic metabolic conditions represents a public health emergency of unprecedented proportions. Once considered an affliction confined to affluent societies, sedentary habits and nutritional degradation now permeate all socioeconomic strata. This essay will dissect the predominant causes—namely the ubiquitous availability of hyper-processed foods and desk-bound occupational routines—before advancing tangible remedial interventions.

The epidemiological crisis is fundamentally driven by radical transformations in food manufacturing and modern labor architecture. In contemporary urban landscapes, highly palatable, calorically dense fast foods loaded with refined sugars and industrial trans-fats are aggressively marketed and sold at prices substantially lower than wholesome, organic alternatives. Simultaneously, technological mechanization has eliminated physical exertion from the modern workplace. Millions of employees spend upwards of eight continuous hours seated before computer displays, subsequently commuting in motorized vehicles only to engage in screen-based recreational entertainment at home. This drastic mismatch between caloric ingestion and energy expenditure inevitably breeds metabolic syndrome.

To reverse this hazardous public health trajectory, coordinated initiatives by public health bodies and state authorities are paramount. Primarily, governments should implement aggressive fiscal deterrents, such as the "sugar tax" on sweetened carbonated beverages and junk food advertising bans directed at minors. Tax proceeds should be directly redirected toward subsidizing fresh produce in low-income neighborhoods and funding public athletic centers. Furthermore, municipal urban planners must construct pedestrianized boulevards, protected cycling arterial paths, and open green parks to seamlessly integrate spontaneous physical activity into daily commuting routines.

In conclusion, burgeoning obesity levels stem from the lethal confluence of cheap industrial nutrition and mechanized, inactive lifestyles. Overcoming this crisis necessitates rigorous state taxation on harmful commodities, paired with infrastructural transformations that make active living accessible and desirable for all citizens.`,
    modelAnswerTranslation: `Lonjakan global kasus obesitas dan penyakit metabolik kronis merupakan darurat kesehatan masyarakat dalam skala yang belum pernah terjadi sebelumnya. Bila dahulu dianggap sebagai penyakit yang terbatas pada masyarakat makmur, kini kebiasaan kurang gerak (sedentari) dan penurunan mutu gizi telah merambah seluruh lapisan sosial ekonomi. Esai ini akan membedah penyebab utama—yaitu menjamurnya makanan ultra-proses murah dan rutinitas kerja di balik meja—sebelum mengajukan langkah-langkah solutif yang nyata.

Krisis epidemiologis ini pada dasarnya dipicu oleh transformasi radikal dalam industri makanan dan dunia kerja modern. Di kota-kota masa kini, makanan cepat saji yang padat kalori dengan kadar gula tinggi dan lemak trans dipasarkan secara agresif dengan harga yang jauh lebih murah daripada makanan segar dan bergizi. Bersamaan dengan itu, otomatisasi kantor telah melenyapkan aktivitas fisik dari jam kerja. Jutaan karyawan menghabiskan lebih dari delapan jam duduk di depan layar komputer, lalu pulang menggunakan kendaraan bermotor, dan kembali bersantai di depan layar di rumah. Ketimpangan drastis antara asupan kalori dan pembakaran energi ini memicu obesitas.

Untuk membalikkan keadaan berbahaya ini, langkah terkoordinasi dari otoritas kesehatan dan negara sangat mendesak. Pertama, pemerintah harus menerapkan disinsentif pajak yang tegas, seperti pengenaan cukai minuman berpemanis (sugar tax) serta larangan iklan makanan cepat saji bagi anak-anak. Dana cukai tersebut harus dialokasikan untuk menyubsidi sayuran dan buah segar di pemukiman warga serta membangun fasilitas olahraga publik gratis. Selain itu, perencana tata kota wajib membangun trotoar ramah pejalan kaki dan jalur sepeda yang aman agar warga dapat bergerak aktif saat bepergian harian.

Kesimpulannya, peningkatan angka obesitas disebabkan oleh kombinasi mematikan antara makanan olahan industri murah dan gaya hidup serba duduk. Mengatasi masalah ini menuntut pengenaan cukai ketat pada produk tidak sehat yang dipadukan dengan penyediaan infrastruktur aktif yang mudah diakses oleh seluruh warga.`,
    peelFramework: {
      intro: 'Paraphrase krisis obesitas global + Outline: Analisis dua akar masalah (makanan ultra-proses & kerja menetap) dan dua pilar solusi (pajak gula & infrastruktur aktif).',
      body1: 'Penyebab: Makanan manis/trans-fat berharga murah dipadu jam kerja 8 jam duduk di depan layar komputer.',
      body2: 'Solusi: Cukai minuman berpemanis (sugar tax), subsidi bahan makanan segar, dan pembangunan jalur sepeda/pejalan kaki.',
      conclusion: 'Rangkum argumen: Intervensi fiskal negara dan tata kota aktif kunci memutus lingkaran obesitas.'
    },
    academicCollocations: [
      { term: 'calorically dense', meaning: 'sangat tinggi kalori namun rendah gizi' },
      { term: 'desk-bound occupational routines', meaning: 'kebiasaan kerja duduk terus-menerus di depan meja' },
      { term: 'metabolic syndrome', meaning: 'sindrom gangguan metabolisme tubuh dan gula darah' },
      { term: 'fiscal deterrents', meaning: 'langkah pencegahan melalui kebijakan pajak' },
      { term: 'pedestrianized boulevards', meaning: 'jalan raya kota yang dikhususkan bagi pejalan kaki' }
    ]
  },

  // --- TIPE 4: ADVANTAGES & DISADVANTAGES (DO ADVANTAGES OUTWEIGH DISADVANTAGES?) ---
  {
    id: 't2-adv-1',
    questionType: 'Advantages vs Disadvantages',
    topic: 'Work / Employment',
    title: 'Tren Bekerja dari Rumah (Work From Home / Remote Working)',
    question: 'In the modern era, an increasing number of enterprises allow their employees to work remotely from home rather than commuting to physical office premises. Do the advantages of remote working outweigh its disadvantages?',
    questionTranslation: 'Di era modern, semakin banyak perusahaan yang mengizinkan karyawannya bekerja jarak jauh dari rumah daripada pergi ke kantor fisik. Apakah keuntungan dari bekerja jarak jauh melampaui kerugiannya?',
    modelAnswerBand8: `The pervasive adoption of telecommuting has irrevocably dismantled conventional workplace orthodoxies, fundamentally altering how organizations coordinate productivity. While remote working presents distinct challenges regarding social isolation and organizational cohesion, I firmly believe that its multifaceted benefits—spanning enhanced productivity, geographic equity, and work-life equilibrium—decisively outweigh the drawbacks.

Admittedly, telecommuting introduces several non-trivial disadvantages that warrant careful management. The primary concern is the erosion of spontaneous camaraderie and collaborative synergy among team members. When interpersonal communication is mediated exclusively via asynchronous messaging and scheduled video conferences, workplace relationships can become purely transactional, occasionally fostering feelings of acute professional isolation. Moreover, the blurring of physical boundaries between domestic life and professional responsibilities frequently leads to burnout, as workers struggle to mentally disengage from continuous digital connectivity after office hours.

Nonetheless, the empirical advantages of remote employment are substantially more compelling. Foremost among these is the eradication of stressful, time-consuming daily commutes, liberating upwards of two hours each day for employees to invest in physical health, familial responsibilities, and creative replenishment. From a corporate perspective, decentralization enables companies to recruit premier talent globally without geographic constraints, while dramatically curtailing real estate rental overheads. Environmentally, the precipitous contraction in automotive commuter journeys mitigates fossil fuel consumption and metropolitan carbon footprints. Studies consistently affirm that remote employees demonstrate heightened focus and autonomous output when untethered from office distractions.

In conclusion, although the telecommuting revolution requires intentional efforts to preserve organizational culture and mitigate digital burnout, its overarching merits are undeniable. The profound enhancements in personal autonomy, operational flexibility, and environmental sustainability ensure that the advantages of remote working decisively eclipse its drawbacks.`,
    modelAnswerTranslation: `Penerapan kerja jarak jauh (telecommuting) secara luas telah mendobrak kebiasaan kantor konvensional, mengubah secara mendasar bagaimana organisasi mengelola produktivitas. Meskipun kerja dari rumah menghadirkan tantangan tersendiri terkait rasa terisolasi dan kekompakan tim, saya sangat meyakini bahwa keuntungan multifasetnya—mulai dari peningkatan produktivitas, pemerataan kesempatan kerja, hingga keseimbangan hidup dan kerja—jauh melampaui kerugiannya.

Memang harus diakui, kerja jarak jauh membawa beberapa kelemahan yang patut diwaspadai. Kekhawatiran utama adalah memudarnya keakraban spontan dan sinergi kolaboratif antaranggota tim. Ketika komunikasi hanya berjalan melalui pesan obrolan dan panggilan video, hubungan kerja kerap menjadi kaku dan sebatas urusan formal, memicu rasa kesepian kerja. Selain itu, kaburnya batas antara kehidupan pribadi dan tuntutan pekerjaan dapat memicu kelelahan mental (burnout), karena karyawan kesulitan mematikan urusan kerja dari ponsel mereka di luar jam kantor.

Kendati demikian, keuntungan nyata dari bekerja jarak jauh jauh lebih menguntungkan. Hal terpenting adalah hilangnya waktu dan stres akibat kemacetan bepergian setiap hari, menghemat hingga dua jam per hari bagi pekerja untuk berolahraga, bercengkerama dengan keluarga, atau menyalurkan hobi. Dari sisi perusahaan, desentralisasi kantor memungkinkan rekrutmen bakat terbaik dari seluruh penjuru dunia tanpa batas wilayah, sekaligus memangkas biaya sewa gedung kantor secara signifikan. Secara ekologis, penurunan drastis perjalanan kendaraan memangkas konsumsi bahan bakar dan polusi kota. Berbagai studi membuktikan bahwa pekerja jarak jauh lebih fokus dan produktif tanpa gangguan bising kantor.

Kesimpulannya, meskipun era bekerja dari rumah menuntut penataan budaya kerja agar tidak terjadi burnout, manfaat besarnya tidak terbantahkan. Otonomi pribadi, efisiensi operasional, dan kelestarian lingkungan memastikan bahwa keunggulan kerja jarak jauh melampaui kerugiannya secara meyakinkan.`,
    peelFramework: {
      intro: 'Paraphrase fenomena remote work + Posisi tegas: Keuntungan (fleksibilitas, hemat waktu, talenta global) melampaui kerugiannya.',
      body1: 'Kelemahan (Disadvantages): Risiko isolasi sosial, hilangnya spontanitas tim, dan potensi burnout akibat batas kerja-rumah yang kabur.',
      body2: 'Keuntungan Utama (Advantages): Hilangnya kemacetan harian, efisiensi sewa kantor korporasi, rekrutmen talenta global, produktivitas mandiri.',
      conclusion: 'Tegaskan kembali: Keuntungan otonomi dan keberlanjutan hidup jauh mengungguli kelemahannya.'
    },
    academicCollocations: [
      { term: 'telecommuting orthodoxies', meaning: 'kebiasaan dan norma lama kerja kantor konvensional' },
      { term: 'transactional communication', meaning: 'komunikasi yang sebatas urusan bisnis tanpa kehangatan' },
      { term: 'blurring of physical boundaries', meaning: 'kaburnya batas pemisah fisik antara rumah dan tempat kerja' },
      { term: 'curtail real estate overheads', meaning: 'memangkas biaya sewa dan perawatan gedung kantor' },
      { term: 'decisively eclipse its drawbacks', meaning: 'secara meyakinkan melampaui/mengalahkan kelemahannya' }
    ]
  },
  {
    id: 't2-adv-2',
    questionType: 'Advantages vs Disadvantages',
    topic: 'Culture / Globalization',
    title: 'Ekspansi Industri Pariwisata Internasional Massal',
    question: 'International mass tourism has grown into one of the largest industries worldwide. Do the economic advantages of international tourism outweigh the cultural and environmental disadvantages it inflicts upon host destinations?',
    questionTranslation: 'Pariwisata massal internasional telah berkembang menjadi salah satu industri terbesar di dunia. Apakah keuntungan ekonomi dari pariwisata internasional melampaui kerugian budaya dan lingkungan yang ditimbulkannya pada destinasi tujuan?',
    modelAnswerBand8: `The inexorable globalization of the travel industry has converted scenic enclaves and heritage capitals into bustling tourism hubs. While foreign visitor expenditure generates indispensable employment and infrastructural modernization, unconstrained tourism inflicts profound ecological degradation and cultural dilution upon host communities. In my appraisal, the severe environmental and socio-cultural ramifications ultimately outweigh the transitory economic gains unless tourism is rigorously regulated.

On the one hand, the financial dividends yielded by international tourism are undeniable, particularly for developing economies. Tourist receipts inject foreign currency directly into national economies, revitalizing ancillary industries including hospitality, culinary arts, transportation, and traditional craftsmanship. Furthermore, governments frequently utilize tourism revenues to finance essential public infrastructure—such as airports, sanitized water networks, and highway corridors—that directly benefit indigenous residents. At iconic archaeological monuments such as Angkor Wat or Machu Picchu, conservation initiatives are substantially underwritten by visitor ticketing tariffs.

On the other hand, unrestrained mass tourism exacts devastating costs on delicate ecological and sociocultural fabrics. Overcrowded destinations suffer from acute environmental despoliation, characterized by wastewater contamination, coral reef destruction, and excessive municipal waste generation that overwhelms municipal treatment capacities. Socially, the commercialization of heritage frequently trivializes sacred ancestral customs into kitsch spectacles staged purely for superficial amusement. Most perniciously, the influx of wealthy foreigners inflates residential property prices and living costs, effectively pricing native inhabitants out of their ancestral neighborhoods in popular capitals such as Venice and Barcelona.

In conclusion, although international tourism provides an alluring economic stimulant, its uncontrolled expansion engenders irrecoverable environmental despoliation and social displacement. The ecological and cultural liabilities decisively outweigh purely fiscal benefits, underscoring the imperative for strict tourist caps and sustainable carrying-capacity policies.`,
    modelAnswerTranslation: `Globalisasi industri perjalanan yang tak terbendung telah mengubah kawasan indah dan kota bersejarah menjadi pusat pariwisata yang ramai. Sementara pengeluaran wisatawan mancanegara menghasilkan lapangan kerja dan modernisasi infrastruktur yang vital, pariwisata massal yang tak terkontrol mendatangkan kerusakan lingkungan dan pengikisan budaya asli bagi masyarakat setempat. Dalam penilaian saya, kerusakan ekologis dan dampak sosial budaya yang parah ini pada akhirnya melampaui keuntungan finansial sementara, kecuali bila pariwisata diatur secara amat ketat.

Di satu sisi, dividen finansial yang dihasilkan oleh pariwisata internasional tak dapat disangkal, terutama bagi negara berkembang. Devisa pariwisata mengalirkan mata uang asing langsung ke perekonomian lokal, membangkitkan sektor perhotelan, kuliner, transportasi, dan kerajinan tangan tradisional. Selain itu, pemerintah sering menggunakan pendapatan tiket turis untuk mendanai infrastruktur publik—seperti bandara, jaringan air bersih, dan jalan raya—yang bermanfaat langsung bagi penduduk lokal. Di situs bersejarah seperti Angkor Wat atau Borobudur, biaya perawatan cagar budaya sangat terbantu oleh tiket masuk wisatawan.

Di sisi lain, pariwisata massal yang tidak terkendali menimbulkan kerusakan dahsyat pada tatanan ekologi dan sosial budaya. Destinasi yang terlalu padat (overtourism) menderita kerusakan lingkungan akut, mulai dari pencemaran air limbah, kehancuran terumbu karang, hingga tumpukan sampah yang melebihi kapasitas pengolahan kota. Secara sosial, komersialisasi budaya kerap menurunkan kesakralan tradisi leluhur menjadi sekadar tontonan hiburan dangkal demi uang. Dampak paling merugikan adalah lonjakan harga properti dan kebutuhan pokok akibat turis kaya, yang pada akhirnya menyingkirkan penduduk asli dari tanah kelahirannya, seperti yang terjadi di Venesia dan Barcelona.

Kesimpulannya, meskipun pariwisata internasional menjanjikan rangsangan ekonomi yang memikat, pertumbuhannya yang tak terkendali menimbulkan kerusakan alam dan penggusuran sosial yang sulit dipulihkan. Kerugian ekologis dan budaya ini jelas melampaui manfaat finansial semata, menegaskan pentingnya pembatasan kuota wisatawan dan penegakan batas daya tampung lingkungan.`,
    peelFramework: {
      intro: 'Paraphrase industri pariwisata global + Tesis tegas: Kerusakan ekologi dan sosial-budaya melampaui keuntungan finansial jangka pendek.',
      body1: 'Keuntungan Ekonomi: Devisa mata uang asing, penciptaan lapangan kerja perhotelan/transportasi, dan pendanaan cagar budaya.',
      body2: 'Kerugian Parah (Kelemahan Terberat): Kerusakan ekosistem terumbu karang/sampah, komersialisasi tradisi leluhur, dan lonjakan harga rumah warga asli (gentrifikasi).',
      conclusion: 'Tegaskan kembali: Beban ekologis dan sosial lebih berat daripada keuntungan uang jika tidak ada pembatasan kuota ketat.'
    },
    academicCollocations: [
      { term: 'transitory economic gains', meaning: 'keuntungan finansial yang bersifat sementara' },
      { term: 'cultural dilution', meaning: 'pengikisan / pelunturan keaslian budaya lokal' },
      { term: 'ecological despoliation', meaning: 'perusakan dan penjarahan kelestarian lingkungan hidup' },
      { term: 'ancillary industries', meaning: 'industri-industri pendukung dan pelengkap' },
      { term: 'sustainable carrying-capacity', meaning: 'batas daya tampung lingkungan yang berkelanjutan' }
    ]
  },

  // --- TIPE 5: DIRECT / DOUBLE QUESTION (TWO-PART QUESTION) ---
  {
    id: 't2-dir-1',
    questionType: 'Direct / Double Question',
    topic: 'Society / Psychology',
    title: 'Makna Kesuksesan Hidup dan Faktor Penentunya',
    question: 'What does it mean to be truly successful in life, and which factors contribute most significantly to achieving personal success?',
    questionTranslation: 'Apa arti kesuksesan sejati dalam hidup, dan faktor-faktor apa yang berkontribusi paling signifikan dalam mencapai kesuksesan pribadi?',
    modelAnswerBand8: `Defining true success has occupied philosophical discourse for millennia, evolving dramatically from antiquated notions of monetary wealth to a multifaceted conception of human flourishing. This essay will examine how genuine success is epitomised by purposeful contribution, psychological contentment, and harmonious relationships, before identifying resilience and emotional intelligence as the two most decisive catalysts in its realization.

In contemporary society, authentic success transcends superficial metrics such as conspicuous consumption, bank balances, or executive titles. While material security provides a necessary safeguard against economic hardship, genuine accomplishment is characterized by self-actualization—the pursuit of meaningful endeavors that align with one's intrinsic values and leave a benevolent imprint on community. Furthermore, true success encompasses emotional serenity and the maintenance of profound, supportive interpersonal bonds with family and peers. A career that yields millions but culminates in acute chronic stress, moral bankruptcy, or fractured relationships cannot legitimately be deemed successful.

Turning to the determinants of personal achievement, resilience and emotional intelligence emerge as paramount. In an era marked by rapid volatility and relentless disruption, the capacity to persevere through adversity—often termed "grit"—distinguishes those who fulfill their potential from those who capitulate. Furthermore, emotional intelligence—manifested in self-regulation, empathy, and social adeptness—is empirically proven to surpass raw intellectual quotient in forging collaborative leadership and navigating organizational complexities. Without the capacity to manage failures and communicate empathetically, technical brilliance remains unactualized.

In conclusion, genuine success is not quantified by accumulated possessions, but by a purposeful existence underpinned by psychological tranquility and wholesome human relationships. Cultivating tenacity in the crucible of adversity, combined with sophisticated emotional perception, represents the true cornerstone of achieving this elevated standard of personal fulfillment.`,
    modelAnswerTranslation: `Mendefinisikan arti kesuksesan sejati telah menjadi perbincangan filosofis selama ribuan tahun, berevolusi drastis dari pandangan kuno tentang kekayaan materi menuju pemahaman holistik tentang kebahagiaan manusia. Esai ini akan menelaah bagaimana kesuksesan sejati ditandai oleh kontribusi yang bermakna, ketenteraman psikologis, dan keharmonisan relasi, sebelum mengidentifikasi ketangguhan mental serta kecerdasan emosional sebagai dua pendorong terpenting dalam mencapainya.

Dalam masyarakat kontemporer, keberhasilan yang autentik melampaui tolok ukur dangkal seperti kepemilikan barang mewah, saldo rekening, atau jabatan tinggi. Kendati keamanan finansial memberikan perlindungan penting dari kemiskinan, pencapaian sejati diwarnai oleh aktualisasi diri—yaitu menekuni ikhtiar bermakna yang selaras dengan nilai-nilai luhur dan memberi dampak baik bagi sesama. Terlebih lagi, kesuksesan sejati mencakup kedamaian batin serta terjaganya hubungan yang hangat dan penuh kasih dengan keluarga dan sahabat. Karier yang menghasilkan miliaran rupiah namun berakhir dengan stres berkepanjangan, kehampaan batin, atau keretakan rumah tangga tidak dapat disebut berhasil.

Beralih ke faktor penentu keberhasilan, ketangguhan mental (resiliensi) dan kecerdasan emosional terbukti menjadi kunci utama. Di zaman yang penuh gejolak dan perubahan cepat, kemampuan untuk bangkit dari kegagalan—sering disebut "grit"—membedakan individu yang sukses memaksimalkan potensinya dari mereka yang lekas menyerah. Selain itu, kecerdasan emosional yang tercermin dalam kendali diri, empati, dan kecakapan sosial secara empiris melampaui IQ akademis dalam memimpin tim dan menyelesaikan konflik. Tanpa kemampuan mengelola kegagalan dan berkomunikasi dengan empati, kecerdasan teknis semata tidak akan mampu mengantarkan seseorang pada puncak keberhasilan.

Kesimpulannya, kesuksesan sejati tidak diukur dari tumpukan harta benda, melainkan dari kehidupan yang bermakna, batin yang tenteram, dan hubungan yang sehat. Membina ketangguhan dalam menghadapi ujian hidup serta mengasah kepekaan emosional merupakan fondasi utama untuk mencapai kepuasan hidup yang sejati.`,
    peelFramework: {
      intro: 'Paraphrase konsep sukses + Jawab langsung kedua pertanyaan: Arti sukses sejati (batin, tujuan hidup, keluarga) & 2 faktor kunci (resiliensi & kecerdasan emosional).',
      body1: 'Pertanyaan 1 (Arti Sukses): Mengkritisi tolok ukur uang semata; mendefinisikan sukses lewat aktualisasi diri, kedamaian batin, dan keharmonisan sosial.',
      body2: 'Pertanyaan 2 (Faktor Penentu): Resiliensi/grit (bangkit dari jatuh) dipadu kecerdasan emosional (empati, kepemimpinan, kendali diri).',
      conclusion: 'Rangkum kedua jawaban dengan bahasa reflektif dan elegan.'
    },
    academicCollocations: [
      { term: 'conspicuous consumption', meaning: 'kebiasaan pamer belanja barang mewah berlebihan' },
      { term: 'self-actualization', meaning: 'aktualisasi diri mencapai potensi tertinggi manusia' },
      { term: 'persevere through adversity', meaning: 'tetap berjuang gigih melewati masa-masa sulit' },
      { term: 'emotional intelligence', meaning: 'kecerdasan emosional dalam bersosialisasi dan kendali diri' },
      { term: 'elevated standard of personal fulfillment', meaning: 'standar kepuasan batin dan hidup yang paripurna' }
    ]
  },
  {
    id: 't2-dir-2',
    questionType: 'Direct / Double Question',
    topic: 'Culture / Globalization',
    title: 'Pudar dan Tergerusnya Budaya Tradisional Daerah',
    question: 'In many nations around the globe, traditional cultural customs and native languages are vanishing at an alarming rate. Why is this occurring, and is it important to protect traditional cultural heritage?',
    questionTranslation: 'Di banyak negara di seluruh dunia, adat istiadat tradisional dan bahasa daerah memudar dengan laju yang mengkhawatirkan. Mengapa hal ini terjadi, dan apakah penting untuk melindungi warisan budaya tradisional?',
    modelAnswerBand8: `The accelerating erosion of indigenous customs, artisanal practices, and regional dialects represents an acute symptom of modern hyper-globalization. This essay will examine the twin drivers behind this cultural homogenization—namely Western cultural hegemony and commercial digital media—before substantiating why the safeguarding of ancestral traditions is indispensable for cultural diversity and societal stability.

The rapid dissolution of ancestral customs is primarily propelled by economic globalization and digital interconnectedness. The pervasive dominance of global consumer media—disproportionately originating from Anglo-Western spheres—promotes a standardized lifestyle revolving around international entertainment, western attire, and the English lingua franca. For younger generations seeking socioeconomic upward mobility in multinational commerce, mastering dominant global languages and adopting cosmopolitan conventions is viewed as economically beneficial, causing native dialects and vernacular arts to be abandoned as antiquated impediments. Furthermore, rural-to-urban migration permanently ruptures traditional communal transmission lines where elders historically passed down folklore and ceremonial rituals to youths.

Despite these homogenizing pressures, preserving cultural heritage is of paramount importance. Ancestral traditions and indigenous languages are not merely aesthetic novelties; they embody millennia of accumulated philosophical wisdom, ecological adaptations, and profound communal identity. The loss of a language extinguishes irreplaceable botanical and medicinal nomenclature gathered over centuries of native observation. Moreover, maintaining a vibrant link with ancestral roots anchors individuals psychological identity, shielding communities from the alienating disorientation that frequently accompanies unchecked westernization. Cultural diversity enriches global humanity in the same indispensable manner that biodiversity sustains ecological biomes.

In conclusion, traditional cultures are receding due to the homogenizing vortex of commercial globalization and digital dominance. Nevertheless, preserving these cultural legacies is profoundly vital, as they constitute the irreplaceable repositories of human wisdom, identity, and linguistic diversity.`,
    modelAnswerTranslation: `Pengikisan yang semakin cepat terhadap adat istiadat asli, seni tradisional, dan dialek bahasa daerah merupakan gejala akut dari hiper-globalisasi modern. Esai ini akan menelaah dua faktor pendorong penyeragaman budaya ini—yaitu hegemoni budaya global dan dominasi media digital komersial—sebelum membuktikan mengapa perlindungan terhadap warisan leluhur sangat penting bagi keberagaman budaya dan ketahanan peradaban manusia.

Pudarnya adat istiadat leluhur terutama dipicu oleh globalisasi ekonomi dan keterhubungan digital. Dominasi luas media komersial global mempromosikan gaya hidup seragam yang berkiblat pada hiburan barat, pakaian modern, dan bahasa Inggris sebagai bahasa pergaulan dunia. Bagi generasi muda yang mengejar kesuksesan karier di perusahaan multinasional, menguasai bahasa global dan mengadopsi kebiasaan kosmopolitan dipandang sebagai keuntungan ekonomi, sehingga bahasa daerah dan seni tradisi ditinggalkan karena dianggap kuno. Terlebih lagi, migrasi anak muda dari desa ke kota memutus rantai transmisi budaya tempat para tetua adat biasanya mewariskan cerita rakyat dan upacara adat kepada generasi penerus.

Terlepas dari tekanan penyeragaman ini, menjaga warisan budaya sangatlah krusial. Tradisi leluhur dan bahasa daerah bukan sekadar tontonan seni; keduanya memuat ribuan tahun kearifan filosofis, adaptasi ekologis, dan identitas kebersamaan yang mendalam. Hilangnya suatu bahasa daerah melenyapkan pengetahuan botani dan medis tradisional yang berharga yang telah dihimpun berabad-abad oleh para leluhur. Selain itu, memelihara ikatan dengan akar budaya memberikan jangkar psikologis yang kokoh bagi jati diri seseorang, melindungi warga dari kehampaan identitas akibat westernisasi membabi buta. Keberagaman budaya memperkaya peradaban manusia sama pentingnya dengan keanekaragaman hayati yang menopang bumi.

Kesimpulannya, budaya tradisional memudar akibat arus pusaran globalisasi komersial dan dominasi digital. Kendati demikian, melestarikan warisan leluhur ini sangatlah penting karena tradisi merupakan perbendaharaan kebijaksanaan, identitas sejati, dan kekayaan bahasa manusia yang tak tergantikan.`,
    peelFramework: {
      intro: 'Paraphrase erosi budaya lokal + Jawab langsung: Alasan terjadi (hegemoni media global & mobilitas karier) & Alasan penting dijaga (kearifan lokal, identitas psikologis).',
      body1: 'Mengapa memudar: Tekanan ekonomi global, hegemoni bahasa Inggris/media barat, urbanisasi memutus transfer ilmu dari tetua.',
      body2: 'Mengapa sangat penting dijaga: Pengetahuan obat tradisional/botani tak ternilai, jangkar identitas diri, dan kekayaan peradaban manusia.',
      conclusion: 'Rangkuman padat: Tradisi adalah perbendaharaan hikmah manusia yang wajib dilestarikan.'
    },
    academicCollocations: [
      { term: 'cultural homogenization', meaning: 'penyeragaman budaya menjadi satu bentuk seragam' },
      { term: 'indigenous customs', meaning: 'adat istiadat asli masyarakat setempat' },
      { term: 'vernacular arts', meaning: 'seni bahasa dan tradisi daerah lokal' },
      { term: 'botanical and medicinal nomenclature', meaning: 'tata nama tanaman obat dan khasiat herbal leluhur' },
      { term: 'homogenizing vortex of commercial globalization', meaning: 'pusaran penyeragaman akibat globalisasi komersial' }
    ]
  }
];
