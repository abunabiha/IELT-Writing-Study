import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

export default function BandCalculatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Panduan Rubrik Resmi IELTS Band 8.0</h3>
              <p className="text-xs text-slate-400">Standar penilaian resmi British Council / IDP untuk Writing Task 1 & Task 2</p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold"
          >
            ✕
          </button>
        </div>

        {/* 4 Criteria Deep Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* TR */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">1. Task Response (TR)</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">25% Bobot</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Menjawab <b>seluruh instruksi soal</b> secara tuntas dan mendalam.</li>
              <li>Menyajikan posisi/tesis yang <b>konsisten dan jelas</b> dari awal hingga akhir.</li>
              <li>Ide utama didukung bukti, elaborasi logis, dan contoh kredibel.</li>
              <li>Minimal 250 kata (Task 2) atau 150 kata (Task 1).</li>
            </ul>
          </div>

          {/* CC */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">2. Coherence & Cohesion (CC)</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">25% Bobot</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Urutan ide mengalir secara <b>alami dan logis</b> (seamless flow).</li>
              <li>Menggunakan variasi perangkat kohesi tanpa terkesan kaku atau berlebihan (*no mechanical overuse*).</li>
              <li>Paragraf terstruktur rapi (1 gagasan pokok per paragraf dengan metode PEEL).</li>
            </ul>
          </div>

          {/* LR */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">3. Lexical Resource (LR)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">25% Bobot</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Menggunakan rentang kosakata akademis tingkat lanjut (<b>C1–C2</b>) secara fleksibel.</li>
              <li>Ketepatan <b>kolokasi</b> alami (contoh: <i>precipitate a crisis, exert strain</i>).</li>
              <li>Sangat jarang terjadi kesalahan ejaan atau bentukan kata (*rare spelling slips*).</li>
            </ul>
          </div>

          {/* GRA */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">4. Grammatical Range (GRA)</span>
              <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-bold">25% Bobot</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Mayoritas kalimat <b>bebas dari kesalahan</b> (error-free sentences).</li>
              <li>Kombinasi fleksibel klausa subordinatif, relatif, pasif, nominalisasi, dan sesekali inversi akademis.</li>
              <li>Tanda baca (titik, koma, titik dua) presisi.</li>
            </ul>
          </div>

        </div>

        {/* Band Comparison Table */}
        <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-3">
          <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>Perbandingan Nyata: Band 6 vs Band 8</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30">
              <span className="text-rose-400 font-bold">Band 6.0 (Rata-rata):</span>
              <p className="text-slate-400 mt-1">
                "Firstly, traffic is very bad in big cities because many people use cars. Therefore, government must build more trains."
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30">
              <span className="text-emerald-400 font-bold">Band 8.5 (Scholastic Mastery):</span>
              <p className="text-slate-300 mt-1">
                "Prime among urban challenges is chronic vehicular congestion, largely precipitated by overreliance on private transit; consequently, substantial capital allocation towards electrified rail infrastructure is paramount."
              </p>
            </div>
          </div>
        </div>

        <div className="text-right pt-2 border-t border-slate-800">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
