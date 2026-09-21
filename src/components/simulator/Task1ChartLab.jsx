import React, { useState } from 'react';
import { 
  BarChart2, TrendingUp, TrendingDown, Eye, CheckCircle2, 
  HelpCircle, BookOpen, Sparkles, Copy, Check 
} from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

export default function Task1ChartLab({ onAddXp }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showModelTranslation, setShowModelTranslation] = useState(false);

  const sampleData = [
    { year: 2000, coal: 55, gas: 25, solar: 4, hydro: 16 },
    { year: 2005, coal: 46, gas: 30, solar: 8, hydro: 16 },
    { year: 2010, coal: 38, gas: 33, solar: 15, hydro: 17 },
    { year: 2015, coal: 24, gas: 28, solar: 29, hydro: 18 },
    { year: 2020, coal: 12, gas: 22, solar: 46, hydro: 16 },
  ];

  const handleVerbToggle = (verb) => {
    soundFx.playClick();
    if (selectedVerbs.includes(verb)) {
      setSelectedVerbs(selectedVerbs.filter(v => v !== verb));
    } else {
      setSelectedVerbs([...selectedVerbs, verb]);
      onAddXp(15);
    }
  };

  const copyModelAnswer = () => {
    soundFx.playClick();
    const text = `The line graph delineates the proportional contributions of four primary energy sources—namely coal, natural gas, hydroelectricity, and wind/solar—to the overall electrical generation in a European nation from 2000 to 2020.

Overall, it is readily apparent that conventional fossil fuel reliance witnessed a precipitous contraction, with coal suffering the most acute diminution. Conversely, renewable power avenues, particularly wind and solar, exhibited an exponential expansion, consolidating their position as the preeminent electricity generator by the culmination of the timeframe.

Commencing in 2000, coal stood as the uncontested dominant electricity source, generating approximately 55% of the country's power. However, this figure embarked on a consistent downward trajectory, tumbling to 38% in 2010 before plummeting to a negligible 12% in 2020. Natural gas manifested moderate volatility; having initiated the period at 25%, it escalated to a peak of 33% midway through before moderating to 22% in the final recorded year.

In stark contrast, sustainable alternatives progressed rapidly. In 2000, combined solar and wind generation accounted for a nominal 4%. Following a steady ascent to 15% in 2010, this segment surged dramatically over the subsequent decade, overtaking all counterparts to conclude at a formidable 46%. Meanwhile, hydroelectric generation remained notably stable throughout the twenty-year span, oscillating marginally around the 15% to 18% threshold.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-3xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-blue-500/20 text-blue-400">
              <BarChart2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white">IELTS Academic Task 1 Visual Lab</h2>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Pelajari anatomi laporan grafik Band 8.5: Formula Paraphrase, Overview tanpa angka, dan Diksi Tren Presisi.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          {[
            { num: 1, label: 'Visual Data' },
            { num: 2, label: 'Overview' },
            { num: 3, label: 'Trend Lexis' },
            { num: 4, label: 'Band 8 Model' },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => {
                soundFx.playClick();
                setActiveStep(s.num);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeStep === s.num
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Step {s.num}: {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* STEP 1: Interactive SVG Line Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Interactive Graph */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-200">
                Electricity Generation by Source (European Nation, 2000-2020)
              </h3>
              <p className="text-xs text-amber-400 font-medium mt-0.5">
                🇮🇩 Pembangkitan Listrik Berdasarkan Sumber Energi (Negara Eropa, 2000-2020)
              </p>
            </div>
            <span className="text-xs text-indigo-400 font-semibold shrink-0">Proportions (%)</span>
          </div>

          {/* SVG Canvas Line Chart */}
          <div className="w-full h-64 sm:h-72 bg-slate-950 rounded-2xl p-4 border border-slate-800 relative">
            <svg viewBox="0 0 500 240" className="w-full h-full overflow-visible">
              {/* Horizontal Grid lines */}
              {[0, 20, 40, 60].map((val) => {
                const y = 200 - (val / 60) * 180;
                return (
                  <g key={val}>
                    <line x1="40" y1={y} x2="480" y2={y} stroke="#1e293b" strokeDasharray="3 3" />
                    <text x="15" y={y + 4} fill="#64748b" fontSize="10" fontFamily="sans-serif">{val}%</text>
                  </g>
                );
              })}

              {/* X Axis labels */}
              {sampleData.map((d, idx) => {
                const x = 50 + idx * 100;
                return (
                  <text key={d.year} x={x} y="225" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">
                    {d.year}
                  </text>
                );
              })}

              {/* Line 1: Coal (Rose) 55 -> 46 -> 38 -> 24 -> 12 */}
              <polyline
                fill="none"
                stroke="#f43f5e"
                strokeWidth="3.5"
                points="50,35 150,62 250,86 350,128 450,164"
              />
              {/* Line 2: Solar/Wind (Emerald) 4 -> 8 -> 15 -> 29 -> 46 */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                points="50,188 150,176 250,155 350,113 450,62"
              />
              {/* Line 3: Natural Gas (Amber) 25 -> 30 -> 33 -> 28 -> 22 */}
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                points="50,125 150,110 250,101 350,116 450,134"
              />
              {/* Line 4: Hydroelectric (Cyan) 16 -> 16 -> 17 -> 18 -> 16 */}
              <polyline
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                points="50,152 150,152 250,149 350,146 450,152"
              />

              {/* Dots on key data points */}
              <circle cx="50" cy="35" r="4" fill="#f43f5e" />
              <circle cx="450" cy="164" r="4" fill="#f43f5e" />
              <circle cx="50" cy="188" r="4" fill="#10b981" />
              <circle cx="450" cy="62" r="4" fill="#10b981" />
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 pt-2 border-t border-slate-850 text-xs">
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <span className="w-3 h-3 rounded-full bg-rose-500" /> Coal (Batu bara)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-3 h-3 rounded-full bg-emerald-500" /> Solar & Wind (EBT)
              </span>
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <span className="w-3 h-3 rounded-full bg-amber-500" /> Natural Gas
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <span className="w-3 h-3 rounded-full bg-cyan-500" /> Hydroelectric
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300">
            <b>Instruksi Soal:</b> "The chart illustrates the proportions of electricity generated by four distinct energy sources in a European nation between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
          </div>
        </div>

        {/* Right Col: Interactive Breakdown Panels */}
        <div className="space-y-4">
          
          {/* Step 1 or 2 Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Formula Paraphrase Band 8</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                <span className="text-slate-200 font-bold">1. Intro Verb:</span> The line graph <i>delineates / illustrates / depicts</i>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                <span className="text-slate-200 font-bold">2. Metric:</span> the proportional contributions of four primary energy sources
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                <span className="text-slate-200 font-bold">3. Timespan:</span> spanning a two-decade timeframe between 2000 and 2020.
              </div>
            </div>

            {/* Crucial Band 8 Rule */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed">
              ⚠️ <b>Golden Rule Band 8 Overview:</b> Jangan pernah memasukkan angka spesifik di paragraf Overview! Cukup sebutkan 2 fitur makro paling kontras.
            </div>
          </div>

          {/* Lexical Bank Picker */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>Trend Lexical Bank (Klik untuk koleksi):</span>
              <span className="text-indigo-400">{selectedVerbs.length} Terpilih</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { word: 'precipitous contraction', meaning: 'penurunan drastis' },
                { word: 'meteoric rise', meaning: 'kenaikan pesat' },
                { word: 'oscillated marginally', meaning: 'berfluktuasi tipis' },
                { word: 'plummeted to', meaning: 'anjlok hingga' },
                { word: 'surged dramatically', meaning: 'melonjak tinggi' },
                { word: 'remained notably stable', meaning: 'stabil/konstan' },
              ].map((item) => {
                const isSelected = selectedVerbs.includes(item.word);
                return (
                  <button
                    key={item.word}
                    onClick={() => handleVerbToggle(item.word)}
                    className={`p-2.5 rounded-xl text-left text-xs transition border ${
                      isSelected
                        ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-md ring-1 ring-emerald-500'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold truncate">{item.word}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.meaning}</div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* STEP 4: Full Band 8.5 Model Answer Comparison */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Contoh Jawaban Model Resmi (Band 8.5)</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModelTranslation(prev => !prev)}
              className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition border border-amber-500/30"
            >
              <span>{showModelTranslation ? '🇮🇩 Tutup Terjemahan' : '🇮🇩 Lihat Terjemahan Indonesia'}</span>
            </button>
            <button
              onClick={copyModelAnswer}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Contoh'}</span>
            </button>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 font-serif text-sm sm:text-base text-slate-200 leading-relaxed space-y-4">
          <p>
            The line graph delineates the proportional contributions of four primary energy sources—namely coal, natural gas, hydroelectricity, and wind/solar—to the overall electrical generation in a European nation from 2000 to 2020.
          </p>
          <p className="bg-indigo-950/30 p-3 rounded-xl border-l-4 border-indigo-500">
            <span className="text-indigo-300 font-bold not-italic">[OVERVIEW] </span>
            Overall, it is readily apparent that conventional fossil fuel reliance witnessed a precipitous contraction, with coal suffering the most acute diminution. Conversely, renewable power avenues, particularly wind and solar, exhibited an exponential expansion, consolidating their position as the preeminent electricity generator by the culmination of the timeframe.
          </p>
          <p>
            Commencing in 2000, coal stood as the uncontested dominant electricity source, generating approximately 55% of the country's power. However, this figure embarked on a consistent downward trajectory, tumbling to 38% in 2010 before plummeting to a negligible 12% in 2020. Natural gas manifested moderate volatility; having initiated the period at 25%, it escalated to a peak of 33% midway through before moderating to 22% in the final recorded year.
          </p>
          <p>
            In stark contrast, sustainable alternatives progressed rapidly. In 2000, combined solar and wind generation accounted for a nominal 4%. Following a steady ascent to 15% in 2010, this segment surged dramatically over the subsequent decade, overtaking all counterparts to conclude at a formidable 46%. Meanwhile, hydroelectric generation remained notably stable throughout the twenty-year span, oscillating marginally around the 15% to 18% threshold.
          </p>
        </div>

        {/* Indonesian Translation Drawer */}
        {showModelTranslation && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <span>🇮🇩 Terjemahan Lengkap Bahasa Indonesia:</span>
            </div>
            <p>
              Grafik garis ini memetakan kontribusi proporsional dari empat sumber energi utama—yaitu batu bara, gas alam, pembangkit listrik tenaga air, dan angin/surya—terhadap keseluruhan produksi listrik di suatu negara Eropa dari tahun 2000 hingga 2020.
            </p>
            <p className="bg-amber-950/20 p-3 rounded-xl border-l-4 border-amber-500 text-amber-200">
              <span className="font-bold">[OVERVIEW] </span>
              Secara keseluruhan, terlihat nyata bahwa ketergantungan pada bahan bakar fosil mengalami penurunan drastis, dengan batu bara mengalami penurunan paling tajam. Sebaliknya, energi terbarukan, khususnya angin dan surya, menunjukkan lonjakan besar, memperkokoh posisinya sebagai produsen listrik utama di akhir periode waktu tersebut.
            </p>
            <p>
              Dimulai pada tahun 2000, batu bara merupakan sumber listrik utama yang mendominasi, menghasilkan sekitar 55% listrik negara tersebut. Namun, angka ini terus menurun hingga menjadi 38% di tahun 2010 sebelum anjlok ke angka kecil 12% pada tahun 2020. Gas alam mengalami fluktuasi sedang; berawal dari 25%, naik ke puncak 33% di pertengahan periode, lalu turun kembali ke 22% pada tahun terakhir.
            </p>
            <p>
              Sangat kontras, energi terbarukan berkembang pesat. Pada tahun 2000, gabungan surya dan angin hanya menyumbang 4%. Setelah naik stabil menjadi 15% pada tahun 2010, segmen ini melonjak tajam dalam dekade berikutnya, melampaui sumber energi lainnya hingga mencapai 46%. Sementara itu, tenaga air tetap stabil sepanjang 20 tahun tersebut, berfluktuasi tipis di kisaran 15% sampai 18%.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
