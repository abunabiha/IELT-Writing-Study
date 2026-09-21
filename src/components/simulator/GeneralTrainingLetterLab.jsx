import React, { useState, useMemo } from 'react';
import { 
  Mail, Send, Sparkles, BookOpen, Clock, CheckCircle2, 
  Copy, Check, Bot, AlertTriangle, Layers, ChevronRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GENERAL_TRAINING_PROMPTS, LETTER_PHRASES_BANK } from '../../data/generalTrainingData';
import { analyzeBand8Text } from '../../utils/band8Analyzer';
import { evaluateEssayWithGemini } from '../../utils/geminiApi';
import { soundFx } from '../../utils/soundEffects';

export default function GeneralTrainingLetterLab({ geminiApiKey, onAddXp }) {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [letterText, setLetterText] = useState('');
  const [copied, setCopied] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState(null);

  const prompt = GENERAL_TRAINING_PROMPTS[selectedPromptIdx];

  // Analyze text
  const analysis = useMemo(() => {
    return analyzeBand8Text(letterText, 'task1');
  }, [letterText]);

  const handleInsertPhrase = (phrase) => {
    soundFx.playClick();
    setLetterText(prev => prev + (prev.length > 0 && !prev.endsWith('\n') ? '\n\n' : '') + phrase);
  };

  const handleCopyModel = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(prompt.modelAnswerBand8);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadModelToEditor = () => {
    soundFx.playClick();
    setLetterText(prompt.modelAnswerBand8);
  };

  const handleEvaluateLetter = async () => {
    soundFx.playClick();
    if (analysis.wordCount < 80) {
      alert('Tuliskan minimal 80 kata sebelum meminta evaluasi surat.');
      return;
    }

    setIsAiLoading(true);
    setAiFeedback(null);

    try {
      if (geminiApiKey) {
        const result = await evaluateEssayWithGemini(geminiApiKey, {
          taskType: 'task1_general',
          prompt: `Type: ${prompt.letterType} Letter\n${prompt.promptText}`,
          essayText: letterText
        });
        setAiFeedback(result);
        soundFx.playLevelUp();
        onAddXp(180);
        confetti({ particleCount: 80, spread: 60 });
      } else {
        // Built-in intelligent diagnostic evaluator
        setTimeout(() => {
          const hasProperSalutation = /(dear sir|dear mr|dear ms|dear [a-z]+)/i.test(letterText);
          const hasProperClosing = /(yours faithfully|yours sincerely|warm regards|best wishes)/i.test(letterText);

          setAiFeedback({
            bandScores: {
              taskResponse: analysis.taskScore,
              coherenceCohesion: analysis.cohesionScore,
              lexicalResource: analysis.lexicalScore,
              grammaticalRange: analysis.grammarScore,
              overall: analysis.overallBand
            },
            examinerSummary: `Surat ${prompt.letterType} Anda memiliki ${analysis.wordCount} kata. ${
              hasProperSalutation ? 'Format salam pembuka sudah tepat.' : 'Periksa format salam pembuka (misal: Dear Sir or Madam).'
            } ${hasProperClosing ? 'Format penutup sudah tepat.' : 'Periksa kesesuaian penutup (Yours faithfully / sincerely).'}` ,
            strengths: [
              `Panjang surat: ${analysis.wordCount} kata (Target minimal 150 kata).`,
              'Struktur paragraf membagi tujuan dan rincian masalah dengan jelas.'
            ],
            areasForImprovement: analysis.suggestions,
            sentenceUpgrades: analysis.weakWordMatches.slice(0, 3).map(w => ({
              original: `Frasa "${w.word}"`,
              band8Upgrade: `Gunakan frasa formal: "${w.alternatives[0]}"`,
              rationale: 'Menjaga nada (tone) resmi khas IELTS General Training'
            }))
          });
          setIsAiLoading(false);
          soundFx.playCorrect();
          onAddXp(120);
        }, 1200);
      }
    } catch (e) {
      alert('Terjadi kesalahan: ' + e.message);
      setIsAiLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Mail className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">General Training Task 1 (Letter Writing Lab)</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Pelatihan interaktif menulis 3 jenis surat resmi: <b>Formal</b>, <b>Semi-Formal</b>, dan <b>Informal</b> untuk skor Band 8+.
          </p>
        </div>

        {/* Letter Type Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          {GENERAL_TRAINING_PROMPTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedPromptIdx(idx);
                setAiFeedback(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedPromptIdx === idx
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {p.letterType}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-bold">
            {prompt.typeBadge}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPhrases(!showPhrases)}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showPhrases ? 'Tutup Bank Frasa' : 'Buka Bank Frasa Surat'}</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setShowModel(!showModel)}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{showModel ? 'Tutup Model Band 8.5' : 'Lihat Contoh Model Band 8.5'}</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-white mb-2">{prompt.promptTitle}</h3>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
            {prompt.promptText}
          </div>
        </div>

        {/* Essential Rules Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-cyan-400 font-bold">Aturan Salam & Penutup:</span>
            <p className="text-slate-300 mt-1">{prompt.salutationRule}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-amber-400 font-bold">Aturan Nada Bahasa (Tone):</span>
            <p className="text-slate-300 mt-1">{prompt.toneRule}</p>
          </div>
        </div>

        {/* Phrase Bank Drawer */}
        {showPhrases && (
          <div className="p-5 rounded-3xl bg-slate-950 border border-indigo-500/30 space-y-4 animate-fadeIn">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              Bank Frasa Resmi (Klik untuk memasukkan ke editor):
            </div>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-slate-300 mb-1">Frasa Pembuka:</div>
                <div className="flex flex-wrap gap-2">
                  {(prompt.letterType === 'Informal' ? LETTER_PHRASES_BANK.informal.openings : LETTER_PHRASES_BANK.formal.openings).map((ph, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleInsertPhrase(ph)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white transition text-left"
                    >
                      + "{ph}"
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-300 mb-1">Frasa Permintaan / Harapan:</div>
                <div className="flex flex-wrap gap-2">
                  {(prompt.letterType === 'Informal' ? LETTER_PHRASES_BANK.informal.invitations : LETTER_PHRASES_BANK.formal.requests).map((ph, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleInsertPhrase(ph)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white transition text-left"
                    >
                      + "{ph}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Model Answer Drawer */}
        {showModel && (
          <div className="p-5 rounded-3xl bg-slate-950 border border-cyan-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Model Surat Resmi Skor Band 8.5+:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLoadModelToEditor}
                  className="text-xs text-indigo-400 hover:underline"
                >
                  Muat ke Editor
                </button>
                <button
                  onClick={handleCopyModel}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 font-serif text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
              {prompt.modelAnswerBand8}
            </div>

            <div className="pt-2 space-y-1.5 text-xs">
              <div className="font-bold text-slate-400">Analisis Struktur Paragraf:</div>
              {prompt.structureBreakdown.map((st, sIdx) => (
                <div key={sIdx} className="text-slate-300">
                  <span className="text-cyan-400 font-bold">• {st.step}:</span> {st.content}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Writing Canvas & Live Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Editor Area (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-2 text-xs">
            <span className="text-slate-400">
              Jumlah Kata: <b className={`text-sm ${analysis.wordCount >= 150 ? 'text-emerald-400' : 'text-amber-400'}`}>{analysis.wordCount}</b> / 150 kata target
            </span>
            <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${analysis.wordCount >= 150 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                style={{ width: `${Math.min(100, (analysis.wordCount / 150) * 100)}%` }}
              />
            </div>
          </div>

          <textarea
            value={letterText}
            onChange={(e) => setLetterText(e.target.value)}
            placeholder={`Tulis surat Anda di sini...\n\nContoh pembuka:\nDear Sir or Madam,\n\nI am writing to...`}
            rows={15}
            className="w-full p-5 rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 font-sans text-sm sm:text-base leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none transition shadow-inner placeholder:text-slate-600"
          />

          <div className="flex justify-end pt-1">
            <button
              onClick={handleEvaluateLetter}
              disabled={isAiLoading || letterText.trim().length === 0}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition disabled:opacity-40"
            >
              <Bot className="w-4 h-4" />
              <span>{isAiLoading ? 'Mengevaluasi Surat...' : 'Uji Skor & Evaluasi Surat'}</span>
            </button>
          </div>
        </div>

        {/* Live Diagnostic & AI Feedback (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Live Diagnostic Rubrik
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                analysis.overallBand >= 8.0 
                  ? 'bg-emerald-500/20 text-emerald-300' 
                  : 'bg-amber-500/20 text-amber-300'
              }`}>
                Band {analysis.overallBand}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <div className="text-slate-400">Task Achievement:</div>
                <div className="font-extrabold text-cyan-400">{analysis.taskScore}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <div className="text-slate-400">Cohesion & Flow:</div>
                <div className="font-extrabold text-indigo-400">{analysis.cohesionScore}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <div className="text-slate-400">Lexical Precision:</div>
                <div className="font-extrabold text-emerald-400">{analysis.lexicalScore}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <div className="text-slate-400">Grammar Accuracy:</div>
                <div className="font-extrabold text-pink-400">{analysis.grammarScore}</div>
              </div>
            </div>

            {/* AI Review Result if available */}
            {aiFeedback && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-3 animate-fadeIn text-xs">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Bot className="w-4 h-4" />
                  <span>Ulasan Examiner:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {aiFeedback.examinerSummary}
                </p>

                {aiFeedback.sentenceUpgrades?.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-850">
                    <div className="font-bold text-indigo-300">Saran Upgrade Frasa Surat:</div>
                    {aiFeedback.sentenceUpgrades.map((upg, uIdx) => (
                      <div key={uIdx} className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-rose-300 line-through text-[11px]">{upg.original}</div>
                        <div className="text-emerald-300 font-bold">{upg.band8Upgrade}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
