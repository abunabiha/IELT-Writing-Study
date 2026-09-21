# IELTS Writing Band 8 Master (GameWriting) 🎯✍️

[![CI/CD Pipeline](https://github.com/abunabiha/IELT-Writing-Study/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/abunabiha/IELT-Writing-Study/actions/workflows/ci-cd.yml)
[![Node.js](https://img.shields.io/badge/Node.js-v22-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Aplikasi Pembelajaran Interaktif IELTS Writing Berbasis Gamifikasi (GameWriting) dari Level Dasar (Band 4.0) hingga Mahir (Band 8.0+).**  
> Proyek Riset Doktoral (*Doctoral Dissertation Research Artifact*) — **Asia e University (AeU)**.

---

## 🌟 Fitur Utama (Key Features)

1. **🧩 Puzzle Balok Kata (Ramah Pemula dari Nol)**:
   - Menyusun kalimat bahasa Inggris seperti bermain balok Lego (Subject + Verb + Object + Adverb).
   - Dilengkapi terjemahan dwibahasa (Indonesia - Inggris) dan fitur **Band 8 Power-Up 🚀**.
2. **🗺️ 5-Tier Skill Tree Roadmap**:
   - Kurikulum terstruktur berjenjang dari pemula (Band 4.5) hingga scholastic master (Band 8.5+).
3. **⚡ Sentence Transformer Lab**:
   - Latihan interaktif meng-upgrade kalimat pasaran menjadi konstruksi sintaksis akademik C1/C2 (Inversi, Nominalisasi, Passive Voice).
4. **💎 Academic Collocation Forge**:
   - Bank kolokasi C1/C2 per topik (*Environment, AI, Education, Society*) dengan mode *Speed Matcher (60s)*.
5. **📊 Task 1 Academic Visual Lab**:
   - Lab grafik garis SVG interaktif dengan formula *Overview Statement* tanpa angka spesifik.
6. **✉️ Task 1 General Training (Letter Writing Lab)**:
   - Pelatihan lengkap 3 jenis surat resmi: **Formal**, **Semi-Formal**, dan **Informal** dengan Bank Frasa.
7. **✍️ Task 2 Essay Arena**:
   - Kanvas penulisan esai penuh dengan countdown timer 40 menit, panduan paragraf **PEEL**, dan penghitung kata dinamis.
8. **🤖 Dual-Engine Diagnostic Feedback**:
   - **Offline Deterministic Heuristic Engine**: Ulasan instan sub-50ms kriteria TR, CC, LR, GRA tanpa internet.
   - **Google Gemini 2.5 Flash Integration**: Ulasan examiner mendalam menggunakan API Key pribadi.
9. **🎮 Gamifikasi & Audio Sintetis**:
   - XP, Leveling, Daily Streaks, efek konfeti, serta efek suara murni via **Web Audio API**.

---

## 🚀 Memulai Aplikasi (Quick Start)

### Opsi A: 1-Klik di macOS (Paling Mudah)
Klik ganda (*double-click*) file berikut langsung di Finder:
```bash
buka-aplikasi.command
```
Aplikasi akan otomatis menyalakan server lokal dan membuka peramban Anda di `http://localhost:5173`.

### Opsi B: Melalui Terminal (CLI)
```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan server pengembang
npm run dev

# 3. Jalankan pengujian unit otomatis
npm test

# 4. Bangun versi produksi
npm run build
```

---

## 🔄 Alur CI/CD (Continuous Integration & Continuous Deployment)

Repositori ini telah mengintegrasikan alur **GitHub Actions** (`.github/workflows/ci-cd.yml`):
- **Continuous Integration (CI)**: Setiap `git push` atau `pull request` ke cabang `main` akan secara otomatis menguji validitas kode melalui unit test bawaan (`npm test`) dan menguji keberhasilan kompilasi (`npm run build`).
- **Continuous Deployment (CD)**: Setelah pengujian lolos, bundel aplikasi secara otomatis dirilis ke **GitHub Pages**:  
  🌐 `https://abunabiha.github.io/IELT-Writing-Study/`

---

## 📚 Dokumentasi Ilmiah & Riset Doktoral

Dokumentasi akademik dan rekayasa perangkat lunak lengkap tersedia di folder [`docs/`](./docs):
- [01_SDLC_METHODOLOGY_AND_FRAMEWORK.md](./docs/01_SDLC_METHODOLOGY_AND_FRAMEWORK.md)
- [02_REQUIREMENTS_SPECIFICATION_SRS.md](./docs/02_REQUIREMENTS_SPECIFICATION_SRS.md)
- [03_SYSTEM_ARCHITECTURE_AND_DESIGN_SDD.md](./docs/03_SYSTEM_ARCHITECTURE_AND_DESIGN_SDD.md)
- [04_ALGORITHMS_AND_MATHEMATICAL_FORMULATIONS.md](./docs/04_ALGORITHMS_AND_MATHEMATICAL_FORMULATIONS.md)
- [05_VERIFICATION_VALIDATION_AND_TESTING_STD.md](./docs/05_VERIFICATION_VALIDATION_AND_TESTING_STD.md)
- [06_SCIENTIFIC_EVALUATION_AND_PEDAGOGICAL_RUBRICS.md](./docs/06_SCIENTIFIC_EVALUATION_AND_PEDAGOGICAL_RUBRICS.md)
- [07_JOURNAL_PAPER_IMRAD_SCOPUS_Q1.md](./docs/07_JOURNAL_PAPER_IMRAD_SCOPUS_Q1.md)
- [08_CI_CD_PIPELINE_AND_DEVOPS_SPECIFICATION.md](./docs/08_CI_CD_PIPELINE_AND_DEVOPS_SPECIFICATION.md)

---

## 📄 Lisensi
Hak Cipta © 2026 Imam Asrowardi. Didistribusikan di bawah lisensi [MIT](LICENSE).
