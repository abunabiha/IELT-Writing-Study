// Gemini API Client for Deep IELTS Band 8 Examiner Evaluation

const PRIMARY_MODEL = 'gemini-3.5-flash';
const FALLBACK_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-flash-latest',
  'gemini-3.1-flash-lite',
  'gemini-3.6-flash'
];

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

  const modelsToTry = [PRIMARY_MODEL, ...FALLBACK_MODELS];
  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`,
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

      if (response.ok) {
        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          try {
            return JSON.parse(rawText);
          } catch (jsonErr) {
            console.warn(`Error parsing JSON with model ${model}:`, jsonErr);
          }
        }
      } else {
        const errData = await response.json().catch(() => ({}));
        const errMsg = errData.error?.message || `Status ${response.status}`;
        lastError = new Error(errMsg);
        console.warn(`Model ${model} gagal: ${errMsg}. Mencoba model alternatif...`);
      }
    } catch (netErr) {
      lastError = netErr;
      console.warn(`Network error with model ${model}:`, netErr);
    }
  }

  throw lastError || new Error('Gagal menghubungi Gemini API. Periksa kembali API Key Anda.');
}
