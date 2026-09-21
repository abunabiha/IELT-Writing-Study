import React, { useState, useEffect } from 'react';
import { User, Award, Sparkles, Check, Star, Target, Compass, X } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';
import { AVATAR_OPTIONS, TARGET_BAND_OPTIONS, GOAL_OPTIONS } from '../../data/userProfileData';

export default function UserProfileModal({
  isOpen,
  onClose,
  userProfile,
  onSaveProfile,
  isInitialOnboarding = false
}) {
  const [name, setName] = useState(userProfile?.name || '');
  const [targetBand, setTargetBand] = useState(userProfile?.targetBand || '7.5');
  const [avatar, setAvatar] = useState(userProfile?.avatar || '🎓');
  const [goal, setGoal] = useState(userProfile?.goal || GOAL_OPTIONS[0]);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync state when props change
  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || '');
      setTargetBand(userProfile.targetBand || '7.5');
      setAvatar(userProfile.avatar || '🎓');
      setGoal(userProfile.goal || GOAL_OPTIONS[0]);
    }
  }, [userProfile]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      soundFx.playWrong();
      setErrorMsg('Silakan masukkan nama Anda terlebih dahulu sebelum memulai latihan.');
      return;
    }

    soundFx.playCorrect();
    onSaveProfile({
      name: trimmedName,
      targetBand,
      avatar,
      goal,
      joinedDate: userProfile?.joinedDate || new Date().toISOString().split('T')[0]
    }, isInitialOnboarding);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-indigo-500/40 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6">
        
        {/* Close button only available if NOT initial onboarding or if user already has a saved name */}
        {!isInitialOnboarding && userProfile?.name && (
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Header with Welcome badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/40">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isInitialOnboarding ? 'Selamat Datang di IELTS Writing Band 8 Master' : 'Pengaturan Profil Pembelajar'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {isInitialOnboarding ? 'Siapa Nama Anda?' : 'Sunting Profil & Target Anda'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
            {isInitialOnboarding 
              ? 'Masukkan nama Anda agar seluruh capaian, level, dan rapor hasil latihan tersimpan rapi.'
              : 'Perbarui nama dan target band IELTS yang tercatat di rapor GradeBook Anda.'}
          </p>
        </div>

        {/* Starter Bonus Banner for initial onboarding */}
        {isInitialOnboarding && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 flex items-center gap-3">
            <span className="text-2xl">🎁</span>
            <div className="text-xs">
              <span className="font-bold text-amber-300 block">Bonus Starter Pemula: +50 XP!</span>
              <span className="text-slate-300">Dapatkan langsung poin pengalaman pertama saat menyimpan profil Anda.</span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
            <span>⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          {/* 1. Name Input */}
          <div className="space-y-1.5">
            <label className="block text-slate-200 font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>Nama Lengkap / Panggilan Anda: <span className="text-rose-400">*</span></span>
            </label>
            <input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Contoh: Budi Pratama, Aisyah, atau Dr. Imam"
              className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-white font-semibold placeholder:text-slate-500 focus:outline-none transition shadow-inner"
              maxLength={40}
              required
            />
            <span className="text-[11px] text-slate-400">Nama ini akan dicantumkan di Navbar dan Rapor Siswa resmi GradeBook.</span>
          </div>

          {/* 2. Avatar Selection */}
          <div className="space-y-2">
            <label className="block text-slate-200 font-bold flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span>Pilih Avatar Karakter Anda:</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {AVATAR_OPTIONS.map((item) => {
                const isSelected = avatar === item.icon;
                return (
                  <button
                    key={item.icon}
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setAvatar(item.icon);
                    }}
                    className={`p-2 rounded-2xl border transition text-center flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-400 shadow-md shadow-indigo-500/20 scale-105'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-[10px] font-semibold truncate max-w-full ${isSelected ? 'text-indigo-300' : 'text-slate-400'}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Target Band Selection */}
          <div className="space-y-2">
            <label className="block text-slate-200 font-bold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>Target Skor IELTS Writing Anda:</span>
              </span>
              <span className="text-emerald-400 font-bold font-mono">Band {targetBand}</span>
            </label>
            <div className="grid grid-cols-6 gap-1.5">
              {TARGET_BAND_OPTIONS.map((b) => {
                const isSelected = targetBand === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setTargetBand(b);
                    }}
                    className={`py-2 rounded-xl text-xs font-black font-mono border transition ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30 scale-105'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Goal / Motivation */}
          <div className="space-y-1.5">
            <label className="block text-slate-200 font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tujuan / Motivasi Utama Belajar:</span>
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {GOAL_OPTIONS.map((g, idx) => (
                <option key={idx} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <Check className="w-4 h-4" />
              <span>{isInitialOnboarding ? 'Mulai Berlatih Sekarang 🚀' : 'Simpan Perubahan Profil'}</span>
            </button>
          </div>
        </form>

        <p className="text-[11px] text-center text-slate-500">
          Data Anda disimpan aman secara lokal di peramban (localStorage). Anda dapat mengubah nama ini kapan saja melalui Navbar atau Pengaturan.
        </p>

      </div>
    </div>
  );
}
