# 01. SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) METHODOLOGY & FRAMEWORK
## Proyek Disertasi Doktoral: Sistem Pembelajaran Gamifikasi IELTS Writing Band 8 Master

---

### Identitas Dokumen
- **Nama Proyek**: IELTS Writing Band 8 Master (GameWriting)
- **Tingkat Studi**: Doctoral Dissertation Research Project
- **Institusi**: Asia e University (AeU)
- **Fokus Keilmuan**: Educational Technology, Human-Computer Interaction (HCI), Computer-Assisted Language Learning (CALL), Natural Language Processing (NLP)
- **Status Dokumen**: Formal Standard & Approved Framework

---

## 1. Pendekatan Metodologi Pengembangan: Design Science Research Methodology (DSRM) & Agile-Scrum

Pengembangan sistem *IELTS Writing Band 8 Master* mengadopsi integrasi antara **Design Science Research Methodology (DSRM)** (Peffers et al., 2007) sebagai kerangka kerja ilmiah penelitian doktoral dan **Agile-Scrum Software Engineering** sebagai siklus rekayasa perangkat lunak iteratif.

```
       +-------------------------------------------------------------+
       |   FASE 1: Problem Identification & Pedagogical Motivation   |
       |  (Kesenjangan Band 4.5 ke Band 8.0, Tingginya Hambatan CALL)|
       +------------------------------+------------------------------+
                                      |
                                      v
       +-------------------------------------------------------------+
       |        FASE 2: Definition of the Objectives of a Solution   |
       |  (Scaffolding Balok Kata, Analisis Heuristik, AI Evaluator) |
       +------------------------------+------------------------------+
                                      |
                                      v
       +-------------------------------------------------------------+
       |          FASE 3: Design & Development (Artifact)            |
       |  [Sprint 1: Engine] -> [Sprint 2: UI/UX] -> [Sprint 3: AI]  |
       +------------------------------+------------------------------+
                                      |
                                      v
       +-------------------------------------------------------------+
       |                  FASE 4: Demonstration                      |
       |     (Simulasi Task 1 Academic & General, Task 2 PEEL)       |
       +------------------------------+------------------------------+
                                      |
                                      v
       +-------------------------------------------------------------+
       |         FASE 5: Empirical Evaluation (Multi-Testing)        |
       |  (Unit, Functional, Load, Performance, SUS, Paired t-test)  |
       +------------------------------+------------------------------+
                                      |
                                      v
       +-------------------------------------------------------------+
       |                  FASE 6: Scientific Communication           |
       |       (Dokumentasi Standar IEEE/ISO & Artikel Scopus Q1)    |
       +-------------------------------------------------------------+
```

---

## 2. Rincian Fase DSRM & Siklus Pengembangan Perangkat Lunak

### 2.1. Fase 1: Problem Identification & Motivation
- **Masalah Empiris**: Kandidat IELTS non-native dari level pemula (Band 4.0–5.0) menghadapi kesulitan kognitif yang tajam saat dituntut menghasilkan esai akademik kompleks dengan kosakata C1/C2 (Band 8.0+).
- **Hambatan Media Konvensional**: Umpan balik manual pengajar memerlukan waktu berhari-hari, sedangkan aplikasi penulisan yang ada bersifat pasif dan terlalu abstrak tanpa *gradual cognitive scaffolding*.

### 2.2. Fase 2: Formulasi Tujuan Solusi (Objectives of a Solution)
- Mengurangi *cognitive overload* pada pemula melalui representasi balok kata modular (*Sentence Puzzle*).
- Menyediakan evaluasi diagnostik instan (*instant diagnostic feedback*) berbasis 4 kriteria resmi IELTS: *Task Response (TR)*, *Coherence and Cohesion (CC)*, *Lexical Resource (LR)*, dan *Grammatical Range and Accuracy (GRA)*.
- Menggabungkan gamifikasi adaptif (*XP, Leveling, Daily Streaks, Web Audio Synthesizer*) guna mempertahankan motivasi belajar jangka panjang.

### 2.3. Fase 3: Rekayasa Komponen Sistem (Agile Sprints)
- **Sprint 1 (Fondasi & Algoritma NLP)**:
  - Pembentukan kamus leksikal akademik (*Academic Word List / AWL*), pendeteksi kata lemah (*weak words regex*), dan heuristik klasifikasi kompleksitas kalimat.
- **Sprint 2 (Interaktivitas & Gamifikasi)**:
  - Pembangunan *Sentence Puzzle (Lego blocks)* dwibahasa, *Sentence Transformer*, dan *Collocation Speed Matcher*.
- **Sprint 3 (Simulator Ujian & Integrasi AI)**:
  - Pembangunan *Task 1 Chart Lab*, *Task 1 General Training Letter Lab*, *Task 2 PEEL Arena*, dan antarmuka *Google Gemini 2.5 Flash API*.

### 2.4. Fase 4 & 5: Demonstrasi dan Pengujian Rigor
- Menjalankan uji laboratorium terhadap artefak perangkat lunak meliputi 7 dimensi pengujian komprehensif (Unit, Functional, Non-Functional, Performance, Load, Integration, dan User Acceptance Testing).

### 2.5. Fase 6: Diseminasi Ilmiah
- Penerbitan dokumentasi teknis berstandar IEEE/ISO/IEC 29110 dan penulisan naskah jurnal ilmiah standar IMRaD untuk publikasi bereputasi tinggi (Scopus Q1).

---

## 3. Manajemen Risiko & Strategi Mitigasi Rekayasa Perangkat Lunak

| Kode | Kategori Risiko | Deskripsi Risiko | Dampak | Probabilitas | Strategi Mitigasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Port Conflict | Port lokal default (e.g. 3000) terblokir firewall atau OS daemon | Tinggi | Sedang | Konfigurasi port default 5173, host multi-interface (`0.0.0.0`), dan penyediaan script launcher mandiri (`buka-aplikasi.command`). |
| **R-02** | Path Resolution | Halaman blank putih (*white screen*) akibat asset path absolut (`/assets/`) saat dibuka di sub-path | Kritis | Tinggi | Penetapan konfigurasi Vite `base: './'` sehingga seluruh berkas JS/CSS menggunakan relative addressing. |
| **R-03** | API Latency / Quota | Ketergantungan pada Gemini API pihak ketiga mengalami timeout atau kuota habis | Sedang | Sedang | Implementasi *Dual-Engine Evaluator*: Algoritma heuristik diagnostik lokal instan tanpa internet sebagai fondasi mandiri, dengan API eksternal sebagai opsi tambahan. |
| **R-04** | Usability Barrier | Peserta pemula merasa kewalahan dengan istilah linguistik Inggris rumit | Tinggi | Tinggi | Integrasi *Bilingual Scaffolding* (terjemahan bahasa Indonesia langsung pada tiap balok kata) dan mini-kamus interaktif. |
