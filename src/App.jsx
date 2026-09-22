import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SkillTree from './components/SkillTree';
import BeginnerSentencePuzzle from './components/drills/BeginnerSentencePuzzle';
import SentenceTransformerGame from './components/drills/SentenceTransformerGame';
import CollocationDrill from './components/drills/CollocationDrill';
import VocabMemoryVault from './components/drills/VocabMemoryVault';
import VocabMindMap3Lapis from './components/drills/VocabMindMap3Lapis';
import KinestheticCopyworkArena from './components/drills/KinestheticCopyworkArena';
import WritingGrammarLiteracy from './components/literacy/WritingGrammarLiteracy';
import Task1ChartLab from './components/simulator/Task1ChartLab';
import GeneralTrainingLetterLab from './components/simulator/GeneralTrainingLetterLab';
import Task2EssayBuilder from './components/simulator/Task2EssayBuilder';
import GradeBook from './components/analytics/GradeBook';
import BandCalculatorModal from './components/analytics/BandCalculatorModal';
import SettingsModal from './components/settings/SettingsModal';
import UserProfileModal from './components/profile/UserProfileModal';
import { soundFx } from './utils/soundEffects';
import confetti from 'canvas-confetti';

// Resilient localStorage wrapper that never throws in incognito or restricted browser contexts
const safeStorage = {
  get: (key, fallback = null) => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return fallback;
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  },
  getJSON: (key, fallback = null) => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return fallback;
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: (key, val) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
      }
    } catch (e) {}
  }
};

export default function App() {
  // Persistent user profile state (Name, Target Band, Avatar)
  const [userProfile, setUserProfile] = useState(() => {
    return safeStorage.getJSON('ielts_user_profile', null);
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Persistent user state
  const [xp, setXp] = useState(() => {
    const saved = safeStorage.get('ielts_game_xp', '100');
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 100 : parsed;
  });

  const [streak, setStreak] = useState(() => {
    const saved = safeStorage.get('ielts_game_streak', '3');
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 3 : parsed;
  });

  const [completedDrills, setCompletedDrills] = useState(() => {
    const saved = safeStorage.getJSON('ielts_game_drills', []);
    return Array.isArray(saved) ? saved : [];
  });

  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return safeStorage.get('ielts_gemini_api_key', '');
  });

  const [soundMuted, setSoundMuted] = useState(() => {
    return safeStorage.get('ielts_sound_muted', 'false') === 'true';
  });

  // Persistent active tab (resumes where user left off)
  const [activeTab, setActiveTab] = useState(() => {
    return safeStorage.get('ielts_active_tab', 'beginnerPuzzle');
  });
  const [isRubricOpen, setIsRubricOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync activeTab to localStorage
  useEffect(() => {
    safeStorage.set('ielts_active_tab', activeTab);
  }, [activeTab]);

  // Daily streak check with ielts_last_active_date
  useEffect(() => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const lastDate = safeStorage.get('ielts_last_active_date', null);
      if (!lastDate) {
        safeStorage.set('ielts_last_active_date', today);
      } else if (lastDate !== today) {
        const diffDays = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          setStreak(prev => {
            const next = prev + 1;
            safeStorage.set('ielts_game_streak', String(next));
            return next;
          });
        } else if (diffDays > 1) {
          setStreak(1);
          safeStorage.set('ielts_game_streak', '1');
        }
        safeStorage.set('ielts_last_active_date', today);
      }
    } catch (err) {
      console.warn('Streak check error:', err);
    }
  }, []);

  // Open profile modal automatically if user hasn't set their name yet
  useEffect(() => {
    if (!userProfile || !userProfile.name) {
      setIsProfileModalOpen(true);
    }
  }, [userProfile]);

  // Sync sound muted with soundFx
  useEffect(() => {
    soundFx.setMuted(soundMuted);
    safeStorage.set('ielts_sound_muted', String(soundMuted));
  }, [soundMuted]);

  // Persist XP and completed drills
  useEffect(() => {
    safeStorage.set('ielts_game_xp', String(xp));
  }, [xp]);

  useEffect(() => {
    safeStorage.set('ielts_game_drills', completedDrills);
  }, [completedDrills]);


  const level = Math.floor(xp / 500) + 1;
  const getLevelTitle = (lvl) => {
    if (lvl === 1) return 'Novice Scribe (Band 4.5)';
    if (lvl === 2) return 'Clause Architect (Band 5.5)';
    if (lvl === 3) return 'Lexical Alchemist (Band 6.5)';
    if (lvl === 4) return 'Cohesion Virtuoso (Band 7.5)';
    return 'Scholastic Grandmaster (Band 8.5+)';
  };

  const handleAddXp = (amount) => {
    setXp((prevXp) => {
      const oldLevel = Math.floor(prevXp / 500) + 1;
      const newXp = prevXp + amount;
      const newLevel = Math.floor(newXp / 500) + 1;

      if (newLevel > oldLevel) {
        soundFx.playLevelUp();
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
      }
      return newXp;
    });
  };

  const handleCompleteDrill = (drillId) => {
    if (!completedDrills.includes(drillId)) {
      setCompletedDrills([...completedDrills, drillId]);
    }
  };

  const handleToggleSound = () => {
    setSoundMuted((prev) => !prev);
  };

  const handleSaveApiKey = (key) => {
    setGeminiApiKey(key);
    localStorage.setItem('ielts_gemini_api_key', key);
  };

  const handleSaveProfile = (newProfile, isInitial) => {
    setUserProfile(newProfile);
    localStorage.setItem('ielts_user_profile', JSON.stringify(newProfile));
    setIsProfileModalOpen(false);
    
    if (isInitial) {
      handleAddXp(50);
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
    }
  };

  const handleResetProgress = (resetProfile = false) => {
    setXp(50);
    setStreak(1);
    setCompletedDrills([]);
    localStorage.removeItem('ielts_game_xp');
    localStorage.removeItem('ielts_game_streak');
    localStorage.removeItem('ielts_game_drills');
    localStorage.removeItem('ielts_puzzle_completed');
    localStorage.removeItem('ielts_puzzle_typed_completed');
    localStorage.removeItem('ielts_puzzle_band');
    localStorage.removeItem('ielts_copywork_completed');
    localStorage.removeItem('ielts_copywork_lesson_idx');
    
    if (resetProfile) {
      setUserProfile(null);
      localStorage.removeItem('ielts_user_profile');
      setIsProfileModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top App Navbar */}
      <Navbar
        xp={xp}
        level={level}
        levelTitle={getLevelTitle(level)}
        streak={streak}
        soundMuted={soundMuted}
        userProfile={userProfile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        onToggleSound={handleToggleSound}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenRubricGuide={() => setIsRubricOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* TAB: Beginner Sentence Puzzle (Friendly Foundation) */}
        {activeTab === 'beginnerPuzzle' && (
          <BeginnerSentencePuzzle
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Literasi Writing & Grammar */}
        {activeTab === 'writingLiteracy' && (
          <WritingGrammarLiteracy
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: GradeBook (Buku Nilai & Rapor Siswa) */}
        {activeTab === 'gradeBook' && (
          <GradeBook
            xp={xp}
            streak={streak}
            level={Math.floor(xp / 500) + 1}
            levelTitle={getLevelTitle(level)}
            userProfile={userProfile}
            onOpenProfileModal={() => setIsProfileModalOpen(true)}
            completedDrills={completedDrills}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* TAB: Skill Tree */}
        {activeTab === 'skillTree' && (
          <SkillTree
            xp={xp}
            onAddXp={handleAddXp}
            completedDrills={completedDrills}
            onCompleteDrill={handleCompleteDrill}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* TAB: Mind Map Kosakata 3 Lapis */}
        {activeTab === 'mindMapVault' && (
          <VocabMindMap3Lapis
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Sentence Transformer */}
        {activeTab === 'sentenceLab' && (
          <SentenceTransformerGame
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Vocab Memory Vault (Band 8 Lexical Master 6000) */}
        {activeTab === 'vocabMaster' && (
          <VocabMemoryVault
            xp={xp}
            onAddXp={handleAddXp}
            geminiApiKey={geminiApiKey}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* TAB: Kinesthetic Copywork Arena (Typing Imitation Practice) */}
        {activeTab === 'copyworkArena' && (
          <KinestheticCopyworkArena
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Collocation Forge */}
        {activeTab === 'collocations' && (
          <CollocationDrill
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Task 1 Academic Chart */}
        {activeTab === 'task1Lab' && (
          <Task1ChartLab
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Task 1 General Training Letter */}
        {activeTab === 'gtLetterLab' && (
          <GeneralTrainingLetterLab
            geminiApiKey={geminiApiKey}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Task 2 Essay Builder Arena */}
        {activeTab === 'task2Builder' && (
          <Task2EssayBuilder
            geminiApiKey={geminiApiKey}
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}
      </main>

      {/* Modals */}
      <BandCalculatorModal
        isOpen={isRubricOpen}
        onClose={() => setIsRubricOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        apiKey={geminiApiKey}
        onSaveApiKey={handleSaveApiKey}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        userProfile={userProfile}
        onOpenProfileModal={() => {
          setIsSettingsOpen(false);
          setIsProfileModalOpen(true);
        }}
        onResetProgress={handleResetProgress}
      />

      {/* User Onboarding & Profile Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen || !userProfile?.name}
        isInitialOnboarding={!userProfile?.name}
        onClose={() => setIsProfileModalOpen(false)}
        userProfile={userProfile}
        onSaveProfile={handleSaveProfile}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>IELTS Writing Band 8 Master • Interactive Gamified Learning System for Beginners & Advanced Aspirants</p>
      </footer>

    </div>
  );
}
