# 02. SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
## Berdasarkan Standar IEEE 830 / ISO/IEC/IEEE 29148
### Proyek: IELTS Writing Band 8 Master (GameWriting)

---

## 1. Pendahuluan

### 1.1. Tujuan Dokumen
Dokumen Spesifikasi Kebutuhan Perangkat Lunak (*Software Requirements Specification* - SRS) ini mendefinisikan secara lengkap dan terstruktur seluruh kebutuhan fungsional dan non-fungsional untuk aplikasi *IELTS Writing Band 8 Master*. Dokumen ini menjadi acuan utama verifikasi, validasi, serta pengembangan arsitektural sistem.

### 1.2. Lingkup Produk
*IELTS Writing Band 8 Master* adalah perangkat lunak berbasis web interaktif tergamifikasi yang membimbing pembelajar dari tingkat kecakapan dasar bahasa Inggris (*Basic/A2-B1, setara Band 4.0*) menuju penguasaan kompetensi penulisan akademik tinggi (*Band 8.0–9.0, setara C1-C2 CEFR*).

---

## 2. Karakteristik Pengguna (User Persona)

- **Nama Persona**: Dimas (Pembelajar Mandiri Pemula / Mahasiswa Pascasarjana).
- **Latar Belakang**: Memiliki pemahaman dasar kosakata umum namun sering mengalami *run-on sentences*, ketidaksesuaian subjek-kata kerja (*subject-verb agreement*), serta kosakata pasaran (*very good, bad, many*).
- **Tujuan Utama**: Meraih skor penulisan IELTS minimal Band 7.5–8.0 untuk persyaratan beasiswa doktoral internasional.
- **Kebutuhan Khusus**: Membutuhkan instruksi dwibahasa (Indonesia-Inggris) pada fase awal, balok penyusun kalimat interaktif, serta evaluasi diagnostik instan tanpa harus menunggu pemeriksa manusia.

---

## 3. Kebutuhan Fungsional (Functional Requirements - FR)

| ID Kebutuhan | Nama Fitur | Deskripsi Fungsional | Tingkat Prioritas |
| :--- | :--- | :--- | :--- |
| **FR-01** | *Beginner Sentence Puzzle* | Sistem harus menyediakan antarmuka balok kata modular (Subjek, Kata Kerja, Objek, Keterangan) dengan terjemahan Bahasa Indonesia yang dapat disusun secara klik/lepas. | Esensial (High) |
| **FR-02** | *Band 8 Power-Up Visualizer* | Sistem harus menampilkan perbandingan langsung kalimat dasar dengan transformasi versi Band 8.5 beserta rasional pedagogis linguistiknya. | Esensial (High) |
| **FR-03** | *Sentence Transformer Lab* | Sistem harus menyediakan kuis interaktif transformasi struktur kalimat dari Band 5 ke Band 8.5 dengan meteran skor instan. | Tinggi (High) |
| **FR-04** | *Academic Collocation Forge* | Sistem harus menyediakan latihan kolokasi C1/C2 per topik dengan mode eksplorasi kartu dan mode tantangan kecepatan (*Speed Matcher 60 Detik*). | Tinggi (High) |
| **FR-05** | *Task 1 Academic Data Lab* | Sistem harus menyajikan visualisasi data grafik SVG interaktif, panduan penulisan Overview tanpa data numerik spesifik, dan bank frasa tren. | Tinggi (High) |
| **FR-06** | *Task 1 General Letter Lab* | Sistem harus menyediakan modul latihan 3 jenis surat (Formal, Semi-Formal, Informal) dengan bank frasa pembuka, penutup, dan pemenuhan 3 *bullet points*. | Tinggi (High) |
| **FR-07** | *Task 2 PEEL Arena* | Sistem harus menyediakan kanvas penulisan esai penuh dengan pemisahan struktur PEEL (*Point, Explanation, Evidence, Link*). | Esensial (High) |
| **FR-08** | *Real-time Word & Timer Tracker* | Sistem harus memantau batas kata secara langsung (150 kata Task 1, 250 kata Task 2) dan menyediakan hitung mundur waktu ujian (40 menit Task 2). | Sedang (Medium) |
| **FR-09** | *Heuristic Band 8 Text Analyzer* | Sistem harus memindai teks esai secara lokal dan menghitung skor estimasi 4 kriteria: Task Response, Coherence/Cohesion, Lexical Resource, dan Grammatical Range. | Esensial (High) |
| **FR-10** | *Weak Words Detection* | Sistem harus mendeteksi keberadaan kata-kata lemah/informal (misal: *very, bad, good, things*) dan menawarkan alternatif leksikal C1/C2. | Tinggi (High) |
| **FR-11** | *AI Senior Examiner Integration* | Sistem harus menyediakan opsi evaluasi esai berbasis LLM (*Google Gemini 2.5 Flash*) menggunakan API Key yang disimpan di peramban lokal pengguna. | Tinggi (High) |
| **FR-12** | *Gamification XP & Streak Engine* | Sistem harus menghitung akumulasi *Experience Points* (XP), kenaikan tingkatan (*leveling*), dan hari berturut-turut (*streak*). | Sedang (Medium) |
| **FR-13** | *Web Audio Synthesizer* | Sistem harus memainkan umpan balik audio sintetis murni (klik, benar, salah, kombo, level up) tanpa memerlukan aset audio eksternal. | Sedang (Medium) |
| **FR-14** | *Persistent Local Storage* | Sistem harus menyimpan kemajuan latihan, skor XP, kunci API, dan draf tulisan di `localStorage` peramban tanpa risiko hilang saat refresh. | Esensial (High) |
| **FR-15** | *Band 8 Rubric Educational Modal* | Sistem harus menyediakan jendela panduan resmi kriteria penilaian IELTS dan perbandingan karakteristik tulisan Band 6 vs Band 8.5. | Rendah (Low) |

---

## 4. Kebutuhan Non-Fungsional (Non-Functional Requirements - NFR)

### 4.1. Kinerja (Performance - NFR-01 s/d NFR-03)
- **NFR-01 (Waktu Respon Diagnostik)**: Analisis diagnostik heuristik lokal (pencocokan kata lemah, rasio kalimat kompleks, dan word count) harus dieksekusi dalam waktu kurang dari **50 milidetik** untuk esai hingga 1.000 kata.
- **NFR-02 (Waktu Muat Halaman / FCP)**: *First Contentful Paint* (FCP) sistem harus tercapai dalam waktu kurang dari **1,5 detik** pada koneksi broadband lokal.
- **NFR-03 (Konsumsi Memori Klien)**: Penggunaan alokasi memori heap peramban (*browser JavaScript heap*) tidak boleh melebihi **80 MB** selama sesi belajar aktif selama 60 menit.

### 4.2. Keandalan & Ketersediaan (Reliability & Availability - NFR-04 s/d NFR-05)
- **NFR-04 (Operasional Offline / Zero Dependency)**: Seluruh fungsi inti (Puzzle, Transformer, Collocations, Task 1 Lab, Evaluator Heuristik Lokal, dan Audio FX) harus berfungsi **100% tanpa koneksi internet**.
- **NFR-05 (Data Loss Prevention)**: Sistem harus mencegah kehilangan draf tulisan pengguna saat jendela browser tidak sengaja tertutup melalui mekanisme penyimpanan sinkron ke `localStorage`.

### 4.3. Aksesibilitas & Kegunaan (Usability - NFR-06 s/d NFR-07)
- **NFR-06 (Skor System Usability Scale - SUS)**: Target kepuasan pengguna akhir terhadap antarmuka sistem minimal bernilai **80,0** (Kategori *Excellent / Grade A*).
- **NFR-07 (Dukungan Responsif Lintas Perangkat)**: Antarmuka harus menyesuaikan tata letak secara mulus (*responsive fluid layout*) pada resolusi layar mulai dari 375px (smartphone) hingga 1920px (desktop workstation).

### 4.4. Keamanan & Privasi (Security & Privacy - NFR-08 s/d NFR-09)
- **NFR-08 (Kerahasiaan API Key)**: Google Gemini API Key milik pengguna tidak boleh dikirimkan ke server perantara manapun selain langsung ke endpoint resmi Google API melalui HTTPS terenkripsi.
- **NFR-09 (Zero Telemetry Leakage)**: Tidak ada data pribadi atau naskah tulisan pengguna yang ditransmisikan ke pelacak analitik pihak ketiga tanpa persetujuan eksplisit.

### 4.5. Portabilitas & Kompatibilitas (Portability - NFR-10)
- **NFR-10 (Kompatibilitas Peramban)**: Aplikasi harus kompatibel penuh dengan rilis terkini Google Chrome (v115+), Apple Safari (v16+), Mozilla Firefox (v115+), dan Microsoft Edge (v115+).
