// Gemini API Client for Deep IELTS Band 8 Examiner Evaluation

export async function evaluateEssayWithGemini(apiKey, { taskType, prompt, essayText }) {
  if (!apiKey) {
    throw new Error('API Key Gemini belum diset. Silakan masukkan API Key di menu Pengaturan (ikon gear).');
  }

  const systemInstruction = `You are a strict, veteran official IELTS Writing Senior Examiner specialized in awarding Band 8.0 to 9.0.
Evaluate the candidate's essay strictly according to the 4 official IELTS assessment criteria:
1. Task Achievement / Response (TR)
2. Coherence and Cohesion (CC)
3. Lexical Resource (LR)
4. Grammatical Range and Accuracy (GRA)

Provide specific, constructive, actionable advice in Indonesian with English linguistic examples showing how to transform basic phrases into Band 8.5 academic phrasing.`;

  const userContent = `IELTS Task Type: ${taskType.toUpperCase()}
Prompt:
"""
${prompt}
"""

Candidate's Submission:
"""
${essayText}
"""

Evaluate this essay and return a JSON object with this exact schema:
{
  "bandScores": {
    "taskResponse": 7.5,
    "coherenceCohesion": 8.0,
    "lexicalResource": 7.5,
    "grammaticalRange": 8.0,
    "overall": 8.0
  },
  "examinerSummary": "Ringkasan penilaian umum dalam 2-3 kalimat...",
  "strengths": [
    "Poin kekuatan 1...",
    "Poin kekuatan 2..."
  ],
  "areasForImprovement": [
    "Area perbaikan 1...",
    "Area perbaikan 2..."
  ],
  "sentenceUpgrades": [
    {
      "original": "kalimat asli kandidat",
      "band8Upgrade": "kalimat versi Band 8.5 akademis",
      "rationale": "alasan peningkatan kriteria (misal: nominalisation/inversion/collocation)"
    }
  ]
}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemInstruction}\n\n${userContent}` }]
          }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        }
      }),
    }
  );

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || `Gagal menghubungi Gemini API (Status ${response.status})`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) {
    throw new Error('Tidak ada respon dari Gemini API.');
  }

  try {
    return JSON.parse(rawText);
  } catch (e) {
    console.error('Error parsing JSON from Gemini:', rawText);
    throw new Error('Gagal memproses format respon evaluasi.');
  }
}
