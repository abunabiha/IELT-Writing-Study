import React, { useState } from 'react';
import { Settings, Key, Volume2, VolumeX, RotateCcw, Check, ExternalLink } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

export default function SettingsModal({
  isOpen,
  onClose,
  apiKey,
  onSaveApiKey,
  soundMuted,
  onToggleSound,
  userProfile,
  onOpenProfileModal,
  onResetProgress
}) {
  const [tempKey, setTempKey] = useState(apiKey || '');
  const [isSaved, setIsSaved] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    soundFx.playClick();
    onSaveApiKey(tempKey.trim());
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = (resetProfile = false) => {
    soundFx.playWrong();
    onResetProgress(resetProfile);
    setShowConfirmReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pengaturan Aplikasi</h3>
              <p className="text-xs text-slate-400">Kelola preferensi akun, audio, dan integrasi AI</p>
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

        {/* User Profile Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/40 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{userProfile?.avatar || '🎓'}</span>
            <div>
              <div className="text-xs font-extrabold text-white">
                {userProfile?.name ? userProfile.name : 'Profil Belum Diisi'}
              </div>
              <div className="text-[11px] text-indigo-300 font-mono">
                Target: Band {userProfile?.targetBand || '7.5'} • {userProfile?.goal ? userProfile.goal.split('(')[0] : 'IELTS Writing'}
              </div>
            </div>
          </div>
          {onOpenProfileModal && (
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenProfileModal();
              }}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-md"
            >
              Ubah Nama & Profil
            </button>
          )}
        </div>

        {/* Gemini API Key Setting */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <Key className="w-4 h-4" />
            <span>Google Gemini API Key (Opsional)</span>
          </label>
          <p className="text-xs text-slate-400 leading-relaxed">
            Digunakan untuk evaluasi esai mendalam dengan Gemini 3.6 Flash. Kunci API hanya disimpan di peramban (localStorage) Anda dan tidak pernah dikirim ke server pihak ketiga manapun.
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
              placeholder="AIzaSy..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
            />
            <button
              onClick={handleSave}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition flex items-center gap-1.5"
            >
              {isSaved ? <Check className="w-4 h-4 text-emerald-300" /> : 'Simpan'}
            </button>
          </div>
          <div className="text-[11px] text-slate-500 flex items-center gap-1">
            <span>Belum punya kunci API?</span>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noreferrer"
              className="text-indigo-400 hover:underline flex items-center gap-0.5"
            >
              Dapatkan gratis di Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Sound FX Toggle */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${soundMuted ? 'bg-slate-800 text-slate-500' : 'bg-emerald-500/20 text-emerald-400'}`}>
              {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Efek Suara Sintetis (Web Audio)</div>
              <div className="text-[11px] text-slate-500">Umpan balik audio saat jawaban benar/combo</div>
            </div>
          </div>
          <button
            onClick={() => {
              onToggleSound();
              soundFx.playClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              soundMuted 
                ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' 
                : 'bg-emerald-600 text-white shadow-md'
            }`}
          >
            {soundMuted ? 'Muted' : 'Aktif'}
          </button>
        </div>

        {/* Reset Learning Progress */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-slate-300">Reset Progres Pembelajaran</div>
            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 text-xs font-semibold transition flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleReset(false)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 text-white text-[11px] font-bold hover:bg-amber-500 transition"
                  title="Mereset latihan namun nama pengguna tetap tersimpan"
                >
                  Reset Latihan Saja
                </button>
                <button
                  onClick={() => handleReset(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-500 transition"
                  title="Mereset semua data termasuk nama pengguna"
                >
                  Reset Total
                </button>
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-[11px] hover:bg-slate-700 transition"
                >
                  Batal
                </button>
              </div>
            )}
          </div>
          <p className="text-[11px] text-slate-500">
            Mengembalikan skor XP, level, dan latihan ke awal tanpa harus kehilangan nama profil Anda jika memilih 'Reset Latihan Saja'.
          </p>
        </div>

      </div>
    </div>
  );
}
