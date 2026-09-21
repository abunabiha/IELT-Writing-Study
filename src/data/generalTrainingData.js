// IELTS General Training Task 1 (Letter Writing) Comprehensive Simulation Bank
// 12 Realistic Exam Prompts across 3 Core Categories: Formal (4), Semi-Formal (4), Informal (4)

export const GENERAL_TRAINING_PROMPTS = [
  // ==========================================
  // --- KATEGORI 1: FORMAL LETTERS (4 SOAL) ---
  // ==========================================
  {
    id: 'gt-formal-1',
    letterType: 'Formal',
    typeBadge: 'Surat Resmi (Formal)',
    recipient: 'Orang yang tidak Anda kenal namanya (e.g. Manajer Maskapai Penerbangan, Customer Service Direktur)',
    salutationRule: 'Buka dengan "Dear Sir or Madam," dan tutup dengan "Yours faithfully,"',
    toneRule: 'Sopan, resmi, TIDAK BOLEH menggunakan singkatan/kontraksi (Gunakan "I am" bukan "I\'m", "do not" bukan "don\'t").',
    promptTitle: '1. Komplain Kerusakan Bagasi Pesawat & Ganti Rugi',
    promptText: `You recently traveled by plane and your luggage was damaged during the flight. Write a letter to the airline manager.
In your letter:
• Give details of your flight (flight number, date, destination)
• Describe what happened to your luggage and the damage caused
• Explain what action you expect the airline to take`,
    promptTranslation: `Anda baru-baru ini bepergian dengan pesawat dan koper bagasi Anda rusak selama penerbangan. Tulis surat kepada manajer maskapai penerbangan.
Dalam surat Anda:
• Berikan rincian penerbangan Anda (nomor penerbangan, tanggal, tujuan)
• Jelaskan apa yang terjadi pada bagasi Anda dan kerusakan yang ditimbulkan
• Jelaskan tindakan apa yang Anda harapkan diambil oleh pihak maskapai`,
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to officially register a complaint regarding severe damage sustained by my luggage during a recent flight with your airline, and to request appropriate financial compensation.

On the 14th of September, I traveled from London Heathrow to Singapore Changi on flight SQ318, occupying seat 24A. Upon my arrival at Terminal 3 baggage reclaim, I discovered that my hard-shell suitcase (Tag No. BA892104) had been severely cracked across the main zipper compartment, resulting in irreparable structural damage and the loss of several personal souvenirs purchased abroad.

Given that this luggage was brand-new prior to departure and safely checked in according to your baggage regulations, the mishandling by the ground operations crew is profoundly disappointing. 

Therefore, I request that your customer service department reimburses the cost of the damaged suitcase, which is valued at £180, in addition to reimbursing £65 for the lost personal items. I have attached the original purchase receipts alongside photographic evidence of the damaged case for your prompt review.

I look forward to hearing from you at your earliest convenience.

Yours faithfully,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Bapak atau Ibu yang terhormat,

Saya menulis surat ini untuk secara resmi menyampaikan keluhan mengenai kerusakan parah yang dialami oleh koper bagasi saya dalam penerbangan baru-baru ini bersama maskapai Anda, serta untuk meminta kompensasi finansial yang sesuai.

Pada tanggal 14 September, saya melakukan perjalanan dari London Heathrow menuju Singapore Changi dengan penerbangan SQ318, menempati kursi 24A. Setibanya di pengambilan bagasi Terminal 3, saya mendapati bahwa koper cangkang keras saya (Nomor Label BA892104) telah retak parah di sepanjang kompartemen resleting utama, yang mengakibatkan kerusakan struktural yang tidak dapat diperbaiki serta hilangnya beberapa cinderamata pribadi yang saya beli di luar negeri.

Mengingat koper ini masih baru sebelum keberangkatan dan telah didaftarkan dengan aman sesuai ketentuan bagasi Anda, penanganan ceroboh oleh kru operasional darat sangatlah mengecewakan.

Oleh karena itu, saya meminta bagian layanan pelanggan Anda mengganti biaya koper yang rusak tersebut, yang bernilai £180, di samping mengganti £65 untuk barang-barang pribadi yang hilang. Bersama ini saya lampirkan kuitansi pembelian asli beserta bukti foto koper yang rusak untuk segera Anda tinjau.

Saya menantikan kabar dari Anda secepatnya.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan Surat', content: 'Paragraf 1: Menyebutkan maksud penulisan secara tegas dan sopan ("I am writing to officially register a complaint...").' },
      { step: 'Bullet 1 (Detail Tiket)', content: 'Paragraf 2: Menyebutkan nomor penerbangan (SQ318), tanggal (14 Sept), dan nomor label koper.' },
      { step: 'Bullet 2 (Kerusakan)', content: 'Paragraf 2-3: Menjelaskan retak struktural koper dengan diksi formal presisi.' },
      { step: 'Bullet 3 (Tuntutan)', content: 'Paragraf 4: Menyebutkan rincian biaya kompensasi (£180 koper + £65 suvenir) dan bukti foto.' },
      { step: 'Penutup Resmi', content: '"Yours faithfully," karena diawali "Dear Sir or Madam,".' }
    ]
  },
  {
    id: 'gt-formal-2',
    letterType: 'Formal',
    typeBadge: 'Surat Resmi (Formal)',
    recipient: 'Direktur Sumber Daya Manusia / Recruitment Manager',
    salutationRule: 'Buka dengan "Dear Sir or Madam," atau "Dear Hiring Manager," dan tutup dengan "Yours faithfully,"',
    toneRule: 'Profesional, percaya diri, menunjukkan kualifikasi akademik dan pengalaman kerja secara terstruktur.',
    promptTitle: '2. Surat Lamaran Pekerjaan (Job Application Cover Letter)',
    promptText: `You saw an advertisement in an international newspaper for the position of Senior Project Coordinator at a multinational NGO. Write a letter applying for the role.
In your letter:
• State where you saw the advertisement and the position you are applying for
• Outline your relevant academic qualifications and professional experience
• Explain why you are particularly suitable for this specific role`,
    promptTranslation: `Anda melihat iklan di surat kabar internasional untuk posisi Senior Project Coordinator di sebuah LSM internasional. Tulis surat lamaran untuk peran tersebut.
Dalam surat Anda:
• Sebutkan di mana Anda melihat iklan tersebut dan posisi yang Anda lamar
• Uraikan kualifikasi akademik dan pengalaman profesional Anda yang relevan
• Jelaskan mengapa Anda sangat cocok untuk peran khusus ini`,
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to express my enthusiastic interest in the Senior Project Coordinator position currently available at your organization, as advertised in The International Herald Tribune on the 12th of May.

With respect to my professional background, I possess a Master of Science in International Development from the University of Manchester, complemented by seven years of progressive project management experience within humanitarian non-governmental organizations. In my current capacity as Assistant Programme Manager at Global Aid Initiative, I have successfully overseen the logistical implementation of five multifaceted healthcare and sanitation campaigns across Southeast Asia, managing annual operational budgets exceeding £1.2 million and directing cross-functional teams of thirty field personnel.

I consider myself exceptionally well-suited for this vacancy because of my proven track record in stakeholder coordination, risk mitigation, and bilingual community engagement. Having operated in challenging cross-cultural environments, I am adept at forging robust liaisons between municipal government authorities, donor institutions, and grassroots beneficiaries to ensure project objectives are met on schedule and within statutory compliances.

I have attached my comprehensive curriculum vitae and professional references for your perusal. I welcome the opportunity to discuss my candidacy in greater depth during an interview.

Yours faithfully,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Bapak atau Ibu yang terhormat,

Saya menulis surat ini untuk menyampaikan ketertarikan mendalam saya terhadap posisi Senior Project Coordinator yang saat ini terbuka di organisasi Anda, sebagaimana diiklankan di The International Herald Tribune pada tanggal 12 Mei.

Terkait latar belakang profesional saya, saya memegang gelar Master of Science dalam Bidang Pembangunan Internasional dari University of Manchester, didukung oleh tujuh tahun pengalaman manajemen proyek yang berjenjang di organisasi non-pemerintah kemanusiaan. Dalam kapasitas saya saat ini sebagai Asisten Manajer Program di Global Aid Initiative, saya telah sukses memimpin implementasi logistik lima proyek kesehatan dan sanitasi terpadu di Asia Tenggara, mengelola anggaran operasional tahunan melebihi £1,2 juta dan membawahi tim lintas fungsi beranggotakan tiga puluh personel lapangan.

Saya menilai diri saya sangat cocok untuk posisi ini karena rekam jejak terbukti dalam koordinasi pemangku kepentingan, mitigasi risiko, dan komunikasi dwibahasa dengan masyarakat. Berpengalaman di lingkungan lintas budaya yang dinamis, saya mahir menjembatani kerja sama erat antara otoritas pemerintah daerah, lembaga donor, dan penerima manfaat di akar rumput.

Bersama surat ini saya lampirkan daftar riwayat hidup (CV) lengkap dan referensi profesional. Saya sangat menantikan kesempatan untuk berdiskusi lebih mendalam mengenai kualifikasi saya dalam sesi wawancara.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan & Sumber Info', content: 'Menyebutkan posisi yang dilamar dan media tempat iklan ditemukan.' },
      { step: 'Kualifikasi & Pengalaman', content: 'Gelar Master, 7 tahun pengalaman, pengelolaan anggaran £1.2 juta dan kepemimpinan tim.' },
      { step: 'Kesesuaian Khusus', content: 'Koordinasi pemangku kepentingan (stakeholders), mitigasi risiko, adaptasi lintas budaya.' },
      { step: 'Lampiran & Wawancara', content: 'Menyebutkan CV terlampir dan kesiapan menghadiri wawancara kerja.' }
    ]
  },
  {
    id: 'gt-formal-3',
    letterType: 'Formal',
    typeBadge: 'Surat Resmi (Formal)',
    recipient: 'Komite Beasiswa Pascasarjana (Postgraduate Admissions Office)',
    salutationRule: 'Buka dengan "Dear Sir or Madam," dan tutup dengan "Yours faithfully,"',
    toneRule: 'Santun, akademik, menjelaskan aspirasi riset dan kebutuhan bantuan pendanaan secara meyakinkan.',
    promptTitle: '3. Surat Pengajuan Beasiswa Penuh Pascasarjana',
    promptText: `You have received an unconditional offer to study a Master's degree at a foreign university, but require financial support. Write a letter to the University Scholarship Committee.
In your letter:
• Outline your program of study and when it commences
• Explain your academic achievements and current financial circumstances
• Describe how this scholarship will benefit your future professional career`,
    promptTranslation: `Anda telah menerima tawaran tanpa syarat (unconditional offer) untuk menempuh gelar Master di universitas luar negeri, namun membutuhkan bantuan dana. Tulis surat kepada Komite Beasiswa Universitas.
Dalam surat Anda:
• Uraikan program studi Anda dan kapan perkuliahan dimulai
• Jelaskan prestasi akademik Anda dan kondisi keuangan saat ini
• Jelaskan bagaimana beasiswa ini akan bermanfaat bagi karier profesional Anda di masa depan`,
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to formally submit my application for the Chancellor's Global Excellence Postgraduate Scholarship, having recently been granted an unconditional admission offer to read for the Master of Science in Renewable Energy Engineering commencing in September 2026 (Student ID: RE894021).

Throughout my undergraduate tenure at the National Institute of Technology, I consistently demonstrated scholastic diligence, graduating top of my cohort with a Cumulative Grade Point Average of 3.92 out of 4.00. Furthermore, my final-year thesis on photovoltaic semiconductor efficiency was published in an indexed international journal. Despite these scholastic accomplishments, my family's modest agricultural livelihood makes self-funding the international tuition and living expenditure of £24,000 an insurmountable financial obstacle. Without scholarship underwriting, I will be unable to take up this coveted academic place.

Securing this award will empower me to specialize in grid-scale solar storage technologies under the guidance of your faculty's distinguished researchers. Upon graduation, I intend to return to my home region to spearhead rural electrification projects, deploying decentralized clean microgrids in remote communities currently underserved by centralized fossil-fuel infrastructures.

Thank you very much for considering my application. I have enclosed my official academic transcripts, research publications, and verified financial declarations.

Yours faithfully,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Bapak atau Ibu yang terhormat,

Saya menulis surat ini untuk secara resmi mengajukan permohonan Beasiswa Keunggulan Global Pascasarjana Rektor (Chancellor's Global Excellence Postgraduate Scholarship), setelah baru-baru ini menerima surat penerimaan tanpa syarat untuk menempuh program Master of Science dalam Rekayasa Energi Terbarukan yang dimulai pada September 2026 (ID Mahasiswa: RE894021).

Sepanjang masa studi sarjana di Institut Teknologi Nasional, saya secara konsisten menunjukkan ketekunan akademik, lulus sebagai lulusan terbaik dengan Indeks Prestasi Kumulatif 3,92 dari skala 4,00. Selain itu, skripsi tingkat akhir saya tentang efisiensi semikonduktor fotovoltaik telah dipublikasikan di jurnal internasional terindeks. Kendati memiliki prestasi akademik tersebut, mata pencaharian pertanian keluarga saya yang sederhana membuat biaya kuliah internasional dan biaya hidup sebesar £24.000 menjadi hambatan finansial yang berat. Tanpa dukungan beasiswa ini, saya tidak akan mampu mengambil kesempatan berharga ini.

Memperoleh beasiswa ini akan memberdayakan saya untuk mendalami teknologi penyimpanan surya skala jaringan di bawah bimbingan para peneliti terkemuka fakultas Anda. Pasca kelulusan, saya bertekad kembali ke daerah asal untuk memimpin proyek elektrifikasi pedesaan melalui jaringan mikro energi bersih di daerah pelosok.

Terima kasih banyak atas perhatian Anda terhadap permohonan saya. Bersama ini saya lampirkan transkrip akademik resmi, publikasi riset, dan bukti keuangan.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan & Detail Program', content: 'Nama beasiswa, jurusan MSc Renewable Energy, dan jadwal masuk Sept 2026.' },
      { step: 'Prestasi & Kendala Finansial', content: 'IPK 3.92, publikasi jurnal, dan keterbatasan ekonomi keluarga agraris.' },
      { step: 'Dampak & Manfaat Karier', content: 'Riset solar microgrid dan komitmen membangun elektrifikasi pedesaan di tanah air.' }
    ]
  },
  {
    id: 'gt-formal-4',
    letterType: 'Formal',
    typeBadge: 'Surat Resmi (Formal)',
    recipient: 'Kepala Dinas Perpustakaan Daerah / Chief Town Librarian',
    salutationRule: 'Buka dengan "Dear Sir or Madam," dan tutup dengan "Yours faithfully,"',
    toneRule: 'Membangun, santun, menyampaikan kritik publik dan saran konstruktif.',
    promptTitle: '4. Keluhan Layanan Fasilitas & Usulan Renovasi Perpustakaan Kota',
    promptText: `You are a regular visitor to your local public library and recently noticed that the facilities and resources have deteriorated. Write a letter to the Chief Librarian.
In your letter:
• Explain how often you use the library and why it is important to you
• Detail the specific problems with the facilities and digital resources
• Suggest practical measures the library can take to improve the service`,
    promptTranslation: `Anda adalah pengunjung tetap perpustakaan umum kota Anda dan baru-baru ini menyadari bahwa fasilitas dan koleksi buku telah mengalami penurunan mutu. Tulis surat kepada Kepala Perpustakaan.
Dalam surat Anda:
• Jelaskan seberapa sering Anda menggunakan perpustakaan dan mengapa tempat itu penting bagi Anda
• Rincikan masalah-masalah spesifik terkait fasilitas fisik dan sumber daya digital
• Usulkan langkah-langkah praktis yang dapat diambil pihak perpustakaan untuk meningkatkan layanannya`,
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to draw your urgent attention to the deteriorating condition of the facilities and resources at the Central Borough Library, and to suggest remedial measures to restore its public utility.

As an independent academic researcher and local resident, I have patronized this library three times weekly for the past four years. The quiet ambiance and historical archive have historically provided an invaluable repository for my scholarly publications and for students from adjacent collegiate faculties.

Regrettably, over recent months, several infrastructural deficiencies have severely compromised the research environment. Primarily, more than half of the desktop terminals in the digital multimedia suite are chronically out of order, and the public Wi-Fi bandwidth repeatedly disconnects. Additionally, the quiet reading zone on the second floor suffers from malfunctioning air ventilation, resulting in uncomfortably stifling temperatures. Furthermore, numerous contemporary reference volumes across science and economics have not been updated since 2018.

To rectify these shortcomings, I respectfully recommend that the administration upgrades the high-speed fibre broadband infrastructure and schedules a certified technician to overhaul the malfunctioning computers. Additionally, expanding subscriptions to reputable digital academic databases such as JSTOR would provide patrons with cutting-edge journals without requiring costly physical shelf replenishment.

I trust you will give these suggestions thoughtful consideration.

Yours faithfully,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Bapak atau Ibu yang terhormat,

Saya menulis surat ini untuk menarik perhatian mendesak Anda terhadap kondisi fasilitas dan sumber daya yang kian menurun di Perpustakaan Pusat Kota, serta untuk menyarankan langkah perbaikan guna memulihkan manfaat publiknya.

Sebagai peneliti akademis independen dan warga setempat, saya rutin mengunjungi perpustakaan ini tiga kali seminggu selama empat tahun terakhir. Suasana tenang dan arsip sejarahnya telah lama menjadi rujukan tak ternilai bagi publikasi ilmiah saya dan mahasiswa dari perguruan tinggi sekitar.

Sayangnya, dalam beberapa bulan terakhir, sejumlah kekurangan infrastruktur telah sangat mengganggu kenyamanan riset. Hal utama adalah lebih dari separuh komputer di ruang multimedia digital rusak dan jaringan Wi-Fi publik sering kali terputus. Selain itu, ruang baca tenang di lantai dua mengalami gangguan sirkulasi udara sehingga ruangannya terasa pengap. Lebih jauh lagi, buku referensi sains dan ekonomi terkini belum diperbarui sejak tahun 2018.

Guna memperbaiki kendala ini, saya menyarankan agar pengelola memperbarui infrastruktur internet serat optik berkecepatan tinggi dan menugaskan teknisi untuk memperbaiki komputer yang rusak. Selain itu, memperluas langganan basis data digital seperti JSTOR akan menyediakan akses jurnal terkini tanpa memakan tempat rak buku fisik.

Saya percaya Anda akan mempertimbangkan masukan ini dengan bijaksana.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan Surat', content: 'Menyampaikan kepedulian terhadap fasilitas perpustakaan dan menawarkan solusi.' },
      { step: 'Frekuensi Kunjungan', content: 'Rutin 3 kali seminggu selama 4 tahun untuk riset ilmiah independen.' },
      { step: 'Rincian Kerusakan', content: 'Komputer multimedia mati, Wi-Fi putus-putus, ventilasi rusak, buku usang.' },
      { step: 'Solusi Konstruktif', content: 'Pembaruan serat optik, servis PC, dan langganan database e-journal (JSTOR).' }
    ]
  },

  // ===============================================
  // --- KATEGORI 2: SEMI-FORMAL LETTERS (4 SOAL) ---
  // ===============================================
  {
    id: 'gt-semiformal-1',
    letterType: 'Semi-Formal',
    typeBadge: 'Surat Semi-Formal',
    recipient: 'Pemilik Sewa Rumah / Landlord (Bapak/Ibu yang Anda kenal namanya)',
    salutationRule: 'Buka dengan "Dear Mr. Davies," atau "Dear Mrs. Henderson," dan tutup dengan "Yours sincerely,"',
    toneRule: 'Sopan, hangat namun tetap tegas dan jelas terkait hak sewa dan waktu kunjungan.',
    promptTitle: '5. Permintaan Perbaikan Kebocoran kepada Pemilik Rumah (Landlord)',
    promptText: `You are renting an apartment and recently noticed a leak in the kitchen ceiling. Write a letter to your landlord.
In your letter:
• Remind the landlord who you are and where you live
• Explain the problem with the leak and how it affects you
• Suggest a suitable time for a plumber to visit and fix it`,
    promptTranslation: `Anda menyewa sebuah apartemen dan baru-baru ini mendapati ada kebocoran di langit-langit dapur. Tulis surat kepada pemilik sewa (landlord).
Dalam surat Anda:
• Ingatkan pemilik rumah tentang siapa Anda dan apartemen mana yang Anda sewa
• Jelaskan masalah kebocoran dan dampaknya bagi Anda
• Sarankan waktu yang tepat bagi tukang ledeng untuk datang memperbaiki`,
    modelAnswerBand8: `Dear Mr. Davies,

I am writing to notify you of a persistent plumbing problem in Apartment 4B at Oakwood Manor, which I have been leasing from you since February of this year.

Over the past three days, a noticeable water leak has developed directly beneath the kitchen ceiling fixture, originating from the upstairs bathroom unit. Initially a minor drip, the water infiltration has accelerated into a steady trickle, which has begun to warp the plasterboard and cause peeling paintwork. For safety reasons, I have had to switch off the overhead kitchen lights to forestall an electrical short circuit, and keeping collection buckets beneath the drip has made preparing meals remarkably inconvenient.

As this issue poses a risk of lasting structural damage to the property if neglected, I would appreciate it if you could dispatch a certified plumber to examine the pipes as a matter of priority. I work from home on Thursday and Friday afternoons, so I will be readily available to provide access to the flat between 1:00 PM and 5:00 PM on either day. Alternatively, you may utilize your master key provided you give me prior written notification.

Thank you in advance for your prompt cooperation.

Yours sincerely,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Yth. Bapak Davies,

Saya menulis surat ini untuk memberi tahu Anda tentang masalah pipa bocor yang terjadi di Apartemen 4B Oakwood Manor, yang telah saya sewa dari Anda sejak Februari tahun ini.

Selama tiga hari terakhir, kebocoran air yang cukup parah muncul tepat di bawah langit-langit dapur, yang tampaknya berasal dari unit kamar mandi di lantai atas. Semula hanya berupa tetesan kecil, namun kini rembesan air semakin deras hingga mulai merusak plafon gipsum dan membuat cat mengelupas. Demi keamanan, saya terpaksa mematikan sakelar lampu dapur utama untuk mencegah korsleting listrik, dan meletakkan ember penampung di bawah tetesan sangat menyulitkan saya saat memasak.

Karena masalah ini berisiko merusak struktur bangunan apartemen Anda bila dibiarkan, saya akan sangat berterima kasih jika Anda dapat segera mengirimkan tukang ledeng bersertifikat untuk memeriksa pipa tersebut. Saya bekerja dari rumah pada hari Kamis dan Jumat siang, sehingga saya berada di tempat antara pukul 13.00 hingga 17.00 di salah satu hari tersebut. Opsi lainnya, Anda dapat menggunakan kunci cadangan asalkan memberi tahu saya terlebih dahulu.

Terima kasih atas kerja sama cepat Anda.

Salam hormat,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Identitas & Lokasi Sewa', content: 'Menyebutkan nama penyewa, unit apartemen (4B Oakwood Manor), dan durasi sewa.' },
      { step: 'Deskripsi Kebocoran & Dampak', content: 'Air menetes di dapur dari unit atas, plafon rusak, lampu dimatikan demi cegah korsleting.' },
      { step: 'Jadwal Tukang Ledeng', content: 'Kamis/Jumat pukul 13:00 - 17:00, atau izin pakai kunci cadangan.' },
      { step: 'Penutup Semi-Formal', content: '"Yours sincerely," karena diawali nama spesifik ("Dear Mr. Davies,")' }
    ]
  },
  {
    id: 'gt-semiformal-2',
    letterType: 'Semi-Formal',
    typeBadge: 'Surat Semi-Formal',
    recipient: 'Manajer Atasan Langsung di Kantor (e.g. Mr. Robertson)',
    salutationRule: 'Buka dengan "Dear Mr. Robertson," dan tutup dengan "Yours sincerely,"',
    toneRule: 'Santun, profesional, menguraikan manfaat pelatihan bagi efisiensi kerja tim perusahaan.',
    promptTitle: '6. Permohonan Izin Cuti & Dukungan Pelatihan Profesional ke Atasan',
    promptText: `You wish to attend a three-day professional training workshop relevant to your job. Write a letter to your workplace manager.
In your letter:
• Provide details about the workshop (dates, location, topics)
• Explain how attending this course will benefit your daily responsibilities and the team
• Propose how your current workload will be handled during your absence`,
    promptTranslation: `Anda ingin menghadiri lokakarya pelatihan profesional selama tiga hari yang relevan dengan pekerjaan Anda. Tulis surat kepada manajer Anda di kantor.
Dalam surat Anda:
• Berikan rincian mengenai lokakarya tersebut (tanggal, lokasi, topik materi)
• Jelaskan bagaimana kursus ini akan memberi manfaat bagi tugas harian Anda dan tim kerja
• Usulkan bagaimana beban kerja harian Anda akan ditangani selama Anda tidak ada`,
    modelAnswerBand8: `Dear Mr. Robertson,

I am writing to formally request approval to attend the Advanced Data Analytics and Predictive Modelling Workshop, scheduled to take place at the Manchester Business Centre from the 18th to the 20th of November.

The curriculum covers automated data pipelining, real-time KPI dashboards, and statistical forecasting techniques tailored for enterprise operations. As our department prepares to migrate our quarterly financial reporting into cloud-based intelligence systems next quarter, mastering these analytical methodologies will significantly expedite my reporting workflow and eliminate manual reconciliation errors. Furthermore, upon my return, I would be delighted to organize an internal knowledge-sharing seminar to train our immediate team on best practices.

To ensure that ongoing departmental operations proceed without interruption during my three-day absence, I have proactively aligned with my colleague, Sarah Jenkins. She has agreed to oversee my essential project deliverables, while I intend to complete all impending weekly client reconciliations before my departure on Wednesday. Moreover, I will monitor urgent incoming correspondence via email during workshop recess intervals.

Thank you very much for considering my professional development request. I look forward to discussing this proposal during our upcoming one-on-one meeting.

Yours sincerely,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Yth. Bapak Robertson,

Saya menulis surat ini untuk secara resmi memohon persetujuan Anda guna menghadiri Lokakarya Analisis Data Lanjutan dan Pemodelan Prediktif, yang dijadwalkan berlangsung di Manchester Business Centre dari tanggal 18 hingga 20 November.

Kurikulum lokakarya ini mencakup otomatisasi alur data, dasbor KPI waktu-nyata, dan teknik peramalan statistik yang disesuaikan untuk operasional perusahaan. Seiring rencana divisi kita yang akan memigrasikan laporan keuangan kuartalan ke sistem analitik awan (cloud) pada kuartal depan, penguasaan metode ini akan mempercepat alur kerja saya dan mengeliminasi kesalahan rekonsiliasi manual. Selain itu, sekembalinya dari pelatihan, saya dengan senang hati akan mengadakan sesi berbagi ilmu internal untuk melatih rekan-rekan satu tim.

Untuk memastikan operasional harian tetap berjalan lancar tanpa hambatan selama tiga hari ketidakhadiran saya, saya telah berkoordinasi dengan rekan kerja saya, Sarah Jenkins. Beliau bersedia menangani tugas-tugas penting harian saya, dan saya bertekad menuntaskan seluruh rekapitulasi klien sebelum keberangkatan saya pada hari Rabu. Di samping itu, saya tetap akan memeriksa email darurat di sela-sela waktu istirahat lokakarya.

Terima kasih banyak atas perhatian dan dukungan Anda terhadap pengembangan kompetensi saya. Saya menantikan kesempatan untuk membahas permohonan ini pada sesi diskusi berkala kita.

Salam hormat,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan & Rincian Acara', content: 'Nama workshop, tanggal (18-20 Nov), dan lokasi (Manchester).' },
      { step: 'Manfaat bagi Tim', content: 'Otomatisasi data pelaporan kuartalan dan rencana in-house training bagi rekan tim.' },
      { step: 'Mitigasi Beban Kerja', content: 'Pendelegasian sementara ke Sarah Jenkins, penuntasan tugas sebelum berangkat, cek email penting.' }
    ]
  },
  {
    id: 'gt-semiformal-3',
    letterType: 'Semi-Formal',
    typeBadge: 'Surat Semi-Formal',
    recipient: 'Dosen Pembimbing Skripsi / Tesis Universitas (e.g. Professor Clark)',
    salutationRule: 'Buka dengan "Dear Professor Clark," dan tutup dengan "Yours sincerely,"',
    toneRule: 'Hormat, akademis, transparan mengenai kendala teknis dan menawarkan timeline pengganti yang jelas.',
    promptTitle: '7. Permohonan Perpanjangan Tenggat Waktu Pengumpulan Tugas Akhir',
    promptText: `Due to unexpected circumstances, you cannot submit your final academic research paper on time. Write a letter to your academic supervisor.
In your letter:
• State which course you are enrolled in and your current thesis topic
• Explain the unexpected circumstances that caused the delay
• Request a reasonable extension and propose a realistic submission schedule`,
    promptTranslation: `Karena keadaan yang tidak terduga, Anda tidak dapat mengumpulkan makalah riset akhir tepat waktu. Tulis surat kepada dosen pembimbing akademik Anda.
Dalam surat Anda:
• Sebutkan mata kuliah/program studi Anda dan topik penelitian saat ini
• Jelaskan situasi tak terduga yang menyebabkan keterlambatan tersebut
• Mintalah perpanjangan waktu yang wajar dan ajukan jadwal penyerahan yang realistis`,
    modelAnswerBand8: `Dear Professor Clark,

I am writing to formally request a short two-week extension for the submission of my postgraduate dissertation titled "Comparative Economic Impact of Microfinance Schemes in Rural Southeast Asia," originally due on the 1st of October.

Over the past month, my research progressed smoothly through the secondary literature review and ethical clearance phases. However, the primary empirical phase of my study encountered an unforeseen setback last week. The rural regional agency in East Java, which was scheduled to furnish verified microcredit repayment datasets, experienced an unexpected cyber outage, delaying the transmission of raw empirical data by nearly ten days. As this quantitative dataset constitutes the empirical foundation of my regression model, proceeding without it would severely compromise the rigor of my findings.

The agency has confirmed that the complete dataset will be delivered securely by this Friday. Accordingly, I would be profoundly grateful if you would permit me to reschedule my final submission deadline to Friday, the 15th of October. This revised fortnight timeframe will allow me to finalize statistical testing, cross-tabulate anomalies, and thoroughly proofread my concluding chapter.

Thank you very much for your understanding and continuous academic mentorship.

Yours sincerely,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Yth. Profesor Clark,

Saya menulis surat ini untuk secara resmi memohon perpanjangan waktu selama dua minggu untuk pengumpulan disertasi pascasarjana saya yang berjudul "Comparative Economic Impact of Microfinance Schemes in Rural Southeast Asia," yang semula dijadwalkan terkumpul pada tanggal 1 Oktober.

Sepanjang bulan lalu, penelitian saya berjalan lancar melalui tinjauan pustaka dan persetujuan kode etik. Namun, fase pengumpulan data empiris primer mengalami kendala tak terduga minggu lalu. Lembaga keuangan daerah di Jawa Timur yang semestinya mengirimkan data pelunasan kredit mikro mengalami gangguan sistem server, sehingga pengiriman data mentah tertunda hampir sepuluh hari. Mengingat data kuantitatif ini merupakan fondasi utama model regresi saya, melanjutkan analisis tanpa data tersebut akan sangat mengurangi keabsahan temuan penelitian.

Pihak lembaga telah mengonfirmasi bahwa data lengkap akan dikirimkan secara aman paling lambat Jumat ini. Oleh karena itu, saya akan sangat bersyukur jika Bapak berkenan mengizinkan pengunduran tenggat pengumpulan tugas akhir saya menjadi Jumat, 15 Oktober. Waktu dua minggu ini akan saya manfaatkan untuk menuntaskan uji statistik, memeriksa anomali data, dan merevisi bab kesimpulan.

Terima kasih banyak atas pengertian dan bimbingan akademik yang selalu Bapak berikan.

Salam hormat,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Judul Riset & Tenggat Awal', content: 'Menyebutkan judul disertasi microfinance dan batas awal (1 Oktober).' },
      { step: 'Kendala Tak Terduga', content: 'Keterlambatan data akibat gangguan server lembaga mitra selama 10 hari.' },
      { step: 'Permohonan & Timeline Baru', content: 'Meminta perpanjangan hingga 15 Oktober (2 pekan) untuk uji regresi dan proofreading.' }
    ]
  },
  {
    id: 'gt-semiformal-4',
    letterType: 'Semi-Formal',
    typeBadge: 'Surat Semi-Formal',
    recipient: 'Manajer Pengelola Kompleks Perumahan / Building Estate Committee',
    salutationRule: 'Buka dengan "Dear Mr. Fletcher," dan tutup dengan "Yours sincerely,"',
    toneRule: 'Santun, menyampaikan keluhan kebisingan dan ketertiban lingkungan secara bermartabat.',
    promptTitle: '8. Surat Pengaduan Gangguan Kebisingan kepada Pengelola Lingkungan',
    promptText: `You live in a residential apartment complex and have been troubled by excessive noise from a neighboring unit late at night. Write a letter to the building property manager.
In your letter:
• Identify your unit and describe the nature and timing of the noise disturbance
• Explain how this disruption is adversely affecting your health and work
• Suggest what action the building management should take to resolve the matter`,
    promptTranslation: `Anda tinggal di kompleks apartemen pemukiman dan terganggu oleh kebisingan berlebihan dari unit tetangga pada larut malam. Tulis surat kepada manajer pengelola gedung.
Dalam surat Anda:
• Sebutkan nomor unit Anda dan jelaskan jenis serta waktu gangguan kebisingan tersebut
• Jelaskan bagaimana gangguan ini berdampak buruk bagi kesehatan dan pekerjaan Anda
• Sarankan tindakan apa yang harus diambil oleh pihak pengelola untuk menuntaskan masalah ini`,
    modelAnswerBand8: `Dear Mr. Fletcher,

I am writing to formally lodge a complaint regarding recurring late-night noise disturbances emanating from Flat 12B, directly adjacent to my apartment, Flat 12A, in the Elmhurst Residence complex.

For the past three weeks, the occupants of Flat 12B have repeatedly hosted loud gatherings, characterized by amplified bass music, shouting, and heavy foot traffic along the shared hallway. These disturbances typically commence around 11:30 PM and frequently persist past 3:00 AM on weekdays. Despite my polite attempt to speak directly with the tenants last Tuesday evening, the problem has remained unaddressed and the excessive noise continued unabated throughout the weekend.

This continuous sleep deprivation is severely impacting my wellbeing and professional responsibilities. As a software engineer who frequently manages overseas morning technical conferences at 8:00 AM, the lack of restful sleep has caused chronic fatigue and impaired my daytime concentration.

In accordance with Section 4 of our residential tenancy covenant, all residents are bound by mandatory quiet hours between 10:00 PM and 7:00 AM. I therefore request that management issues a formal written notification reminding the tenants of Flat 12B of these bylaws. Should the disturbances persist, I urge you to consider enforcement of the contractual penalties outlined in our tenancy agreement.

Thank you for your prompt intervention in restoring tranquility to our floor.

Yours sincerely,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Yth. Bapak Fletcher,

Saya menulis surat ini untuk secara resmi menyampaikan keluhan terkait gangguan kebisingan larut malam yang berulang kali berasal dari Flat 12B, tepat bersebelahan dengan apartemen saya, Flat 12A, di kompleks Elmhurst Residence.

Selama tiga minggu terakhir, penghuni Flat 12B kerap mengadakan pesta larut malam dengan dentuman musik bas kencang, teriakan, dan langkah kaki gaduh di lorong bersama. Gangguan ini biasanya dimulai sekitar pukul 23.30 dan sering berlanjut hingga lewat pukul 03.00 pagi di hari kerja biasa. Meskipun saya telah mencoba mengetuk pintu dan menegur penghuni secara sopan pada Selasa malam lalu, kebisingan tersebut tetap berlanjut tanpa perubahan sepanjang akhir pekan.

Kurang tidur yang berkepanjangan ini sangat merugikan kesehatan dan kewajiban profesional saya. Sebagai seorang insinyur perangkat lunak yang harus memimpin konferensi teknis dengan tim luar negeri setiap pukul 08.00 pagi, kelelahan kronis ini telah mengganggu daya konsentrasi kerja saya di siang hari.

Sesuai dengan Pasal 4 dalam peraturan tata tertib hunian kita, seluruh penghuni terikat pada aturan jam tenang wajib antara pukul 22.00 hingga 07.00 pagi. Oleh karena itu, saya meminta pengelola menerbitkan surat peringatan resmi kepada penghuni Flat 12B terkait tata tertib ini. Jika gangguan masih berlanjut, saya mendesak diberlakukannya sanksi tegas sesuai kontrak sewa.

Terima kasih atas tindakan cepat Anda dalam memulihkan ketenangan di lantai kami.

Salam hormat,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Lokasi & Masalah', content: 'Flat 12A bersebelahan dengan 12B; musik bas dan pesta larut malam hingga jam 3 pagi.' },
      { step: 'Dampak Pribadi & Pekerjaan', content: 'Kurang tidur kronis, mengganggu meeting luar negeri jam 8 pagi bagi software engineer.' },
      { step: 'Rujukan Aturan & Solusi', content: 'Merujuk aturan jam tenang 22:00 - 07:00 dan meminta surat peringatan resmi pengelola.' }
    ]
  },

  // ===============================================
  // --- KATEGORI 3: INFORMAL LETTERS (4 SOAL) ---
  // ===============================================
  {
    id: 'gt-informal-1',
    letterType: 'Informal',
    typeBadge: 'Surat Santai (Informal)',
    recipient: 'Sahabat dekat atau anggota keluarga',
    salutationRule: 'Buka dengan "Dear Mark," atau "Hi Sarah," dan tutup dengan "Warm regards," atau "All the best,"',
    toneRule: 'Santai, ramah, boleh menggunakan kontraksi/singkatan ("I\'m", "can\'t wait", "we\'ll").',
    promptTitle: '9. Undangan Berlibur Bersama ke Resor Pantai (Holiday Invitation)',
    promptText: `You have planned a holiday to a seaside resort and want to invite a friend to come along. Write a letter to your friend.
In your letter:
• Tell your friend about your holiday plans (where and when)
• Explain why you want them to join you
• Give details about accommodation and travel arrangements`,
    promptTranslation: `Anda telah merencanakan liburan ke sebuah resor tepi pantai dan ingin mengajak seorang sahabat untuk ikut serta. Tulis surat kepada teman Anda.
Dalam surat Anda:
• Ceritakan kepada teman Anda tentang rencana liburan Anda (ke mana dan kapan)
• Jelaskan mengapa Anda ingin mereka ikut bersama Anda
• Berikan rincian tentang pengaturan akomodasi dan perjalanan`,
    modelAnswerBand8: `Dear Liam,

I hope you and your family are doing great! It feels like ages since we last caught up properly over coffee.

I am writing because I have just finalized plans for a week-long getaway to Cornwall next month, from the 10th to the 17th of October, and I would absolutely love it if you could join me. The autumn scenery along the coastal cliffs is supposed to be breathtaking, and I know how much you have been longing for a peaceful break after that intense marketing audit you mentioned.

We haven't had a proper road trip together since our university days, so this would be a fantastic opportunity to unwind and reminisce about old times. I've already booked a charming seaside cottage right on the edge of St Ives. It has two separate bedrooms and a spacious kitchen with panoramic ocean views, and best of all, the rental cost is remarkably reasonable.

In terms of travel, I plan to drive down from London early on Friday morning, so I can easily pick you up on my way through Bristol. All you really need to pack is your walking boots, a waterproof jacket, and your camera gear.

Let me know if your schedule allows so we can start counting down the days!

Warm regards,
Imam`,
    modelAnswerTranslation: `Halo Liam,

Semoga kamu dan keluarga kabarnya sehat selalu! Rasanya sudah lama sekali sejak terakhir kali kita mengobrol santai sambil ngopi.

Aku menulis surat ini karena aku baru saja mematangkan rencana liburan seminggu ke Cornwall bulan depan, dari tanggal 10 sampai 17 Oktober, dan aku akan sangat senang jika kamu bisa ikut denganku. Pemandangan musim gugur di sepanjang tebing pantai konon sangat memukau, dan aku tahu betapa kamu sangat merindukan liburan yang tenang setelah audit pemasaran kantor yang melelahkan tempo hari.

Kita belum pernah road trip bareng lagi sejak masa kuliah dulu, jadi ini akan menjadi kesempatan luar biasa untuk melepas penat dan mengenang masa-masa lalu. Aku sudah memesan sebuah pondok tepi pantai yang menawan tepat di tepi St Ives. Pondok ini memiliki dua kamar tidur terpisah dan dapur luas dengan pemandangan langsung ke laut, dan yang terbaik dari semuanya, biayanya sangat terjangkau.

Terkait perjalanan, rencananya aku akan menyetir dari London pada Jumat pagi, jadi aku bisa dengan mudah menjemputmu saat melewati Bristol. Yang kamu perlukan hanyalah membawa sepatu hiking, jaket anti air, dan perlengkapan kamera.

Beri tahu aku ya kalau jadwalmu senggang, biar kita bisa mulai menghitung hari!

Salam hangat,
Imam`,
    structureBreakdown: [
      { step: 'Basa-basi Ramah', content: 'Menanyakan kabar teman dengan santai ("It feels like ages since we last caught up...").' },
      { step: 'Rencana Liburan', content: 'Tujuan (Cornwall) dan tanggal (10-17 Oktober).' },
      { step: 'Alasan Mengajak', content: 'Reuni masa kuliah, melepas lelah pekerjaan, dan hiking tebing pantai.' },
      { step: 'Akomodasi & Transportasi', content: 'Pondok 2 kamar tidur di St Ives dan rencana jemput mobil via Bristol.' }
    ]
  },
  {
    id: 'gt-informal-2',
    letterType: 'Informal',
    typeBadge: 'Surat Santai (Informal)',
    recipient: 'Sahabat yang baru saja pindah ke kota Anda / Pekerjaan baru',
    salutationRule: 'Buka dengan "Dear Daniel," atau "Hi Daniel," dan tutup dengan "Best wishes," atau "Cheers,"',
    toneRule: 'Penuh semangat, akrab, memberikan tips tempat tinggal dan tempat berkumpul lokal.',
    promptTitle: '10. Ucapan Selamat Kerja Baru & Rekomendasi Tempat Tinggal',
    promptText: `A close friend has just secured a new job in your city and has written to ask for your advice on finding accommodation. Write a letter to your friend.
In your letter:
• Congratulate them on their new job
• Suggest suitable residential neighborhoods in your city
• Offer to help them settle in when they arrive`,
    promptTranslation: `Seorang sahabat baru saja mendapatkan pekerjaan baru di kota tempat Anda tinggal dan meminta saran Anda perihal mencari tempat tinggal. Tulis surat kepada teman Anda.
Dalam surat Anda:
• Beri selamat atas pekerjaan baru mereka
• Sarankan kawasan pemukiman yang cocok dan nyaman di kota Anda
• Tawarkan bantuan untuk menemani mereka beradaptasi saat baru tiba`,
    modelAnswerBand8: `Hi Daniel,

I was absolutely thrilled to read your email this morning—huge congratulations on landing the Senior Architect role at Foster & Partners! You have worked tirelessly for this breakthrough, and nobody deserves it more than you.

Regarding places to rent, since your office is right in the city centre near Oxford Road, I would strongly recommend looking into the Northern Quarter or Didsbury. If you prefer a vibrant, creative neighborhood with indie coffee shops, live jazz bars, and everything within walking distance, the Northern Quarter is unbeatable. On the other hand, if you fancy a greener, quieter village vibe with leafy parks and quick tram connectivity, Didsbury is fantastic and very popular with young professionals.

House hunting in Manchester can be quite fast-paced, so don't stress about finding a permanent flat immediately. You are more than welcome to crash on my spare sofa bed for a couple of weeks while you attend apartment viewings in person. Once you arrive next month, I'll happily drive you around to explore the different boroughs, and we can celebrate your new appointment with dinner at that authentic tapas place you love!

Let me know your arrival flight details as soon as they are confirmed.

Cheers,
Imam`,
    modelAnswerTranslation: `Halo Daniel,

Aku sangat gembira saat membaca emailmu pagi ini—selamat luar biasa atas diterimanya kamu sebagai Senior Architect di Foster & Partners! Kamu sudah berjuang keras untuk pencapaian ini, dan tidak ada yang lebih pantas meraihnya selain dirimu.

Mengenai tempat tinggal, karena lokasimu tepat di pusat kota dekat Oxford Road, aku sangat menyarankanmu mencari di area Northern Quarter atau Didsbury. Jika kamu menyukai suasana kreatif yang hidup dengan kafe indie, bar musik jazz, dan segalanya serba dekat dengan jalan kaki, Northern Quarter adalah pilihan nomor satu. Sebaliknya, jika kamu ingin suasana yang lebih asri, tenang dengan taman rindang serta akses trem cepat, Didsbury sangat keren dan digemari kalangan profesional muda.

Mencari sewa rumah di Manchester perputarannya cukup cepat, jadi jangan buru-buru tertekan mencari flat permanen dari jauh. Kamu boleh banget menempati kamar tamu di apartemenku selama satu dua minggu pertama sambil melihat-lihat flat secara langsung. Setelah kamu tiba bulan depan, aku dengan senang hati akan mengantarmu berkeliling kota, dan kita bisa merayakan pekerjaan barumu dengan makan malam di restoran tapas favoritmu!

Kabari rincian penerbanganmu begitu tiket sudah pasti ya.

Salam hangat,
Imam`,
    structureBreakdown: [
      { step: 'Ucapan Selamat Tulus', content: 'Gembira atas jabatan Senior Architect dan mengapresiasi kerja kerasnya.' },
      { step: 'Rekomendasi Area', content: 'Northern Quarter (kreatif, sentral) vs Didsbury (hijau, asri, dekat trem).' },
      { step: 'Tawaran Bantuan Nyata', content: 'Boleh menumpang sementara di kamar tamu dan tawaran menemani survei flat.' }
    ]
  },
  {
    id: 'gt-informal-3',
    letterType: 'Informal',
    typeBadge: 'Surat Santai (Informal)',
    recipient: 'Sahabat yang baru saja menjamu Anda menginap di rumahnya',
    salutationRule: 'Buka dengan "Dear Sophie," dan tutup dengan "With love," atau "Warmest wishes,"',
    toneRule: 'Hangat, penuh rasa syukur, mengapresiasi keramahan dan mengundang balik.',
    promptTitle: '11. Ucapan Terima Kasih atas Keramahan Menginap di Luar Kota',
    promptText: `You recently spent a weekend staying at a friend's house in another town. Write a letter to thank them for their hospitality.
In your letter:
• Thank your friend for hosting you and mention what you enjoyed most
• Apologize for accidentally leaving a personal item behind
• Invite your friend to visit you at your home in the near future`,
    promptTranslation: `Anda baru-baru ini menghabiskan akhir pekan menginap di rumah sahabat di kota lain. Tulis surat untuk berterima kasih atas keramahan mereka.
Dalam surat Anda:
• Ucapkan terima kasih karena telah menjamu Anda dan sebutkan hal apa yang paling Anda nikmati
• Minta maaf karena tidak sengaja meninggalkan barang pribadi di rumahnya
• Undang teman Anda untuk berganti berkunjung ke rumah Anda dalam waktu dekat`,
    modelAnswerBand8: `Dear Sophie,

I arrived safely back home in London late yesterday evening, and I just wanted to write immediately to thank you and your family for such a wonderful weekend in the Lake District!

Your hospitality was truly heartwarming. From that mouth-watering homemade roast dinner on Saturday evening to our invigorating hike up Catbells ridge, every single moment was delightful. I haven't laughed that much in months, and waking up to the mist rolling over Derwentwater from your guest bedroom was pure bliss.

Unfortunately, in the rush to catch my Sunday train, I seem to have left my blue woollen scarf behind—I believe I draped it over the coat hanger behind the entrance door. Please don't worry about posting it right away; there is absolutely no rush, and perhaps it gives us the perfect excuse to meet up again soon!

Speaking of which, you must come down and stay with me in London next month. The autumn theatre season in the West End is kicking off, and I would love nothing more than to return your generous hospitality. Let me know which weekend suits you best!

With warmest wishes,
Imam`,
    modelAnswerTranslation: `Halo Sophie,

Aku sudah sampai dengan selamat di London kemarin malam, dan aku ingin segera menulis surat ini untuk berterima kasih banyak kepadamu dan keluargamu atas akhir pekan yang begitu berkesan di Lake District!

Keramahanmu sungguh menghangatkan hati. Mulai dari hidangan daging panggang buatan rumah yang lezat di Sabtu malam hingga pendakian kita ke bukit Catbells yang menyegarkan, setiap momennya sangat menyenangkan. Sudah berbulan-bulan aku tidak tertawa selepas itu, dan pemandangan kabut pagi di atas danau Derwentwater dari jendela kamar tamumu benar-benar damai.

Sayangnya, karena terburu-buru mengejar kereta Minggu sore, sepertinya syal wol biruku tertinggal—kurasa aku menggantungnya di gantungan mantel di balik pintu depan. Tolong jangan repot-repot memaketkannya sekarang ya, tidak mendesak sama sekali, dan mungkin ini jadi alasan pas buat kita segera bertemu lagi!

Ngomong-ngomong, giliran kamu yang wajib datang dan menginap di tempatku di London bulan depan. Musim teater musim gugur di West End baru saja dimulai, dan aku ingin sekali membalas keramahan manismu tempo hari. Beri tahu aku akhir pekan mana yang paling cocok untukmu ya!

Salam hangat penuh kasih,
Imam`,
    structureBreakdown: [
      { step: 'Ucapan Terima Kasih', content: 'Tiba dengan selamat di London dan memuji kehangatan sambutan keluarga.' },
      { step: 'Momen Paling Berkesan', content: 'Makan malam daging panggang, hiking Catbells, pemandangan danau Derwentwater.' },
      { step: 'Barang Tertinggal', content: 'Syal wol biru di gantungan pintu, meminta agar tidak usah repot dipaketkan.' },
      { step: 'Undangan Balas Kunjungan', content: 'Mengajak Sophie menginap di London untuk nonton teater West End.' }
    ]
  },
  {
    id: 'gt-informal-4',
    letterType: 'Informal',
    typeBadge: 'Surat Santai (Informal)',
    recipient: 'Teman lama yang mengadakan reuni sekolah/kampus',
    salutationRule: 'Buka dengan "Dear Alex," dan tutup dengan "All the best,"',
    toneRule: 'Menyesal namun tulus, menjelaskan alasan berhalangan hadir, dan mengusulkan pertemuan pengganti.',
    promptTitle: '12. Permohonan Maaf Melewatkan Pesta Reuni & Janji Bertemu',
    promptText: `You were invited to a high school reunion party organized by an old friend, but you are unable to attend. Write a letter to your friend.
In your letter:
• Thank your friend for organizing the reunion and inviting you
• Explain the genuine reason why you cannot make it
• Suggest an alternative time when the two of you can catch up in person`,
    promptTranslation: `Anda diundang ke pesta reuni sekolah yang diselenggarakan oleh teman lama, namun Anda berhalangan hadir. Tulis surat kepada teman Anda.
Dalam surat Anda:
• Ucapkan terima kasih atas inisiatif menyelenggarakan reuni dan undangannya
• Jelaskan alasan sebenarnya mengapa Anda tidak bisa hadir
• Usulkan waktu alternatif kapan Anda berdua bisa bertemu langsung secara pribadi`,
    modelAnswerBand8: `Dear Alex,

Thank you so much for tracking me down and sending the invitation to our ten-year high school reunion next Saturday! I was genuinely touched when I received your message, and it brought back a flood of unforgettable memories from our school days.

It is with immense regret, however, that I won't be able to attend the celebration. My sister is getting married in Edinburgh on that exact same weekend, and as the best man, I have committed to participating in the rehearsal dinner and family ceremonies across the entire three days. Given the non-negotiable family obligations, it is simply impossible for me to make the trip down to Birmingham.

I am truly devastated to miss seeing everyone, especially after all the hard work you put into tracking down our former classmates and reserving the venue. Could you please pass on my warmest regards to the gang and share some photos of the evening?

I would really hate for us to miss catching up completely, though. I have a business conference in Birmingham next month on the 24th of November. Would you be free to grab dinner and a couple of drinks that Friday evening? My treat, of course, to make up for my absence!

All the best,
Imam`,
    modelAnswerTranslation: `Halo Alex,

Terima kasih banyak sudah mencariku dan mengirimkan undangan reuni akbar sepuluh tahun sekolah kita untuk hari Sabtu depan! Aku benar-benar tersentuh saat menerima pesanmu, dan hal itu langsung membangkitkan banjir kenangan manis yang tak terlupakan dari masa-masa sekolah kita dulu.

Namun dengan penuh rasa penyesalan, aku tidak akan bisa hadir di acara istimewa tersebut. Adik perempuanku akan melangsungkan pernikahan di Edinburgh pada akhir pekan yang sama persis, dan sebagai pengiring pengantin pria (best man), aku berkewajiban menghadiri gladi resik dan rangkaian upacara adat keluarga selama tiga hari penuh. Mengingat tugas keluarga yang tidak bisa ditinggalkan ini, mustahil bagiku untuk bepergian ke Birmingham.

Aku sangat sedih melewatkan kesempatan berkumpul dengan teman-teman semua, apalagi setelah melihat betapa kerasnya usahamu melacak kontak teman-teman seangkatan dan memesan tempat. Tolong sampaikan salam hangatku untuk teman-teman semua ya, dan jangan lupa kirimkan foto-foto keseruan acaranya!

Meski demikian, aku tidak ingin kita kehilangan momen mengobrol santai. Aku ada jadwal konferensi bisnis di Birmingham bulan depan pada tanggal 24 November. Apakah kamu ada waktu senggang untuk makan malam dan ngobrol santai di Jumat malam itu? Biar aku yang traktir, sebagai permohonan maaf karena absen di reuni!

Salam sukses selalu,
Imam`,
    structureBreakdown: [
      { step: 'Apresiasi & Nostalgia', content: 'Terima kasih atas undangan reuni 10 tahun dan mengenang masa sekolah.' },
      { step: 'Alasan Berhalangan Hadir', content: 'Menjadi best man di pernikahan adik perempuan di Edinburgh pada hari yang sama.' },
      { step: 'Permintaan Titip Salam', content: 'Meminta maaf kepada teman-teman dan meminta dikirimi foto acara.' },
      { step: 'Rencana Temu Pengganti', content: 'Tawaran traktir makan malam tanggal 24 November saat dinas di Birmingham.' }
    ]
  }
];

export const LETTER_PHRASES_BANK = {
  formal: {
    openings: [
      { en: 'I am writing to inform you that...', id: 'Saya menulis surat ini untuk memberi tahu Anda bahwa...' },
      { en: 'I am writing to officially register a complaint regarding...', id: 'Saya menulis untuk secara resmi menyampaikan keluhan terkait...' },
      { en: 'I am writing to express my profound dissatisfaction with...', id: 'Saya menulis untuk menyampaikan ketidakpuasan mendalam saya atas...' },
      { en: 'I am writing to inquire about the possibility of...', id: 'Saya menulis untuk menanyakan tentang kemungkinan...' }
    ],
    requests: [
      { en: 'I would be most grateful if you could look into this matter urgently.', id: 'Saya akan sangat berterima kasih jika Anda dapat menyelidiki masalah ini dengan segera.' },
      { en: 'I would appreciate it if you could arrange for an immediate replacement.', id: 'Saya akan sangat menghargai jika Anda dapat mengatur penggantian segera.' },
      { en: 'Could you please furnish me with detailed information regarding...', id: 'Bisakah Anda memberikan informasi rinci kepada saya mengenai...' }
    ],
    closings: [
      { en: 'Thank you for your prompt attention to this matter.', id: 'Terima kasih atas perhatian cepat Anda terhadap masalah ini.' },
      { en: 'I look forward to hearing from you at your earliest convenience.', id: 'Saya menantikan kabar dari Anda secepatnya.' },
      { en: 'Yours faithfully, (jika diawali Dear Sir or Madam)', id: 'Hormat saya (bila nama penerima tidak diketahui)' },
      { en: 'Yours sincerely, (jika diawali nama e.g. Dear Mr. Smith)', id: 'Hormat saya (bila nama penerima diketahui)' }
    ]
  },
  informal: {
    openings: [
      { en: 'How have you been doing?', id: 'Bagaimana kabarmu sekarang?' },
      { en: 'It was so wonderful to hear from you the other day!', id: 'Senang sekali bisa mendengar kabarmu tempo hari!' },
      { en: 'I hope everything is going smoothly with your new job.', id: 'Semoga semuanya berjalan lancar dengan pekerjaan barumu.' }
    ],
    invitations: [
      { en: 'I was wondering if you would like to come with me to...', id: 'Aku ingin tahu apakah kamu ingin ikut denganku ke...' },
      { en: 'It would be absolutely brilliant if you could make it!', id: 'Akan sangat menyenangkan jika kamu bisa datang!' },
      { en: 'You really must join us, you will love it!', id: 'Kamu benar-benar harus ikut kami, kamu pasti akan menyukainya!' }
    ],
    closings: [
      { en: 'Can\'t wait to catch up soon!', id: 'Tidak sabar untuk segera bertemu dan mengobrol!' },
      { en: 'Give my best to your family.', id: 'Sampaikan salam hangatku untuk keluargamu.' },
      { en: 'All the best, / Warm regards,', id: 'Salam hangat dan yang terbaik untukmu,' }
    ]
  }
};
