import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SkillTree from './components/SkillTree';
import BeginnerSentencePuzzle from './components/drills/BeginnerSentencePuzzle';
import SentenceTransformerGame from './components/drills/SentenceTransformerGame';
import CollocationDrill from './components/drills/CollocationDrill';
import VocabMemoryVault from './components/drills/VocabMemoryVault';
import Task1ChartLab from './components/simulator/Task1ChartLab';
import GeneralTrainingLetterLab from './components/simulator/GeneralTrainingLetterLab';
import Task2EssayBuilder from './components/simulator/Task2EssayBuilder';
import BandCalculatorModal from './components/analytics/BandCalculatorModal';
import SettingsModal from './components/settings/SettingsModal';
import { soundFx } from './utils/soundEffects';
import confetti from 'canvas-confetti';

export default function App() {
  // Persistent user state
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('ielts_game_xp');
    return saved ? parseInt(saved, 10) : 100;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('ielts_game_streak');
    return saved ? parseInt(saved, 10) : 3;
  });

  const [completedDrills, setCompletedDrills] = useState(() => {
    const saved = localStorage.getItem('ielts_game_drills');
    return saved ? JSON.parse(saved) : [];
  });

  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return localStorage.getItem('ielts_gemini_api_key') || '';
  });

  const [soundMuted, setSoundMuted] = useState(() => {
    return localStorage.getItem('ielts_sound_muted') === 'true';
  });

  // Default to 'beginnerPuzzle' so beginners start from comfortable, friendly foundation
  const [activeTab, setActiveTab] = useState('beginnerPuzzle');
  const [isRubricOpen, setIsRubricOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync sound muted with soundFx
  useEffect(() => {
    soundFx.setMuted(soundMuted);
    localStorage.setItem('ielts_sound_muted', String(soundMuted));
  }, [soundMuted]);

  // Persist XP and completed drills
  useEffect(() => {
    localStorage.setItem('ielts_game_xp', String(xp));
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('ielts_game_drills', JSON.stringify(completedDrills));
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

  const handleResetProgress = () => {
    setXp(50);
    setStreak(1);
    setCompletedDrills([]);
    localStorage.removeItem('ielts_game_xp');
    localStorage.removeItem('ielts_game_drills');
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

        {/* TAB: Sentence Transformer */}
        {activeTab === 'sentenceLab' && (
          <SentenceTransformerGame
            xp={xp}
            onAddXp={handleAddXp}
          />
        )}

        {/* TAB: Vocab Memory Vault (Band 8 Lexical Master) */}
        {activeTab === 'vocabMaster' && (
          <VocabMemoryVault
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
        onResetProgress={handleResetProgress}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>IELTS Writing Band 8 Master • Interactive Gamified Learning System for Beginners & Advanced Aspirants</p>
      </footer>

    </div>
  );
}
