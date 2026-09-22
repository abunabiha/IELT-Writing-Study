import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { 
  AI_BENCHMARK_DATASET, 
  AI_BENCHMARK_METHODOLOGY, 
  evaluateBenchmarkSuite 
} from '../src/data/aiModelBenchmarkData.js';
import { analyzeBand8Text } from '../src/utils/band8Analyzer.js';

describe('Pengujian Model AI & Automated Essay Scoring (AES) Benchmark', () => {
  test('Dataset pengujian benchmark memiliki struktur data lengkap dan valid', () => {
    assert.ok(Array.isArray(AI_BENCHMARK_DATASET), 'Benchmark dataset harus berupa array');
    assert.equal(AI_BENCHMARK_DATASET.length, 20, 'Dataset harus memiliki tepat 20 sampel terstandarisasi');

    AI_BENCHMARK_DATASET.forEach((item, index) => {
      assert.ok(item.id, `Item ${index} harus memiliki ID unik`);
      assert.ok(['task1', 'task2'].includes(item.taskType), `Task type harus task1 atau task2 (ID: ${item.id})`);
      assert.ok(item.prompt && item.prompt.length > 10, `Prompt harus ada (ID: ${item.id})`);
      assert.ok(item.essayText && item.essayText.length > 50, `Teks esai harus ada (ID: ${item.id})`);
      
      const hs = item.humanScores;
      assert.ok(hs, `Human scores harus ada (ID: ${item.id})`);
      assert.ok(hs.taskResponse >= 1 && hs.taskResponse <= 9, `TR dalam rentang 1-9 (ID: ${item.id})`);
      assert.ok(hs.coherenceCohesion >= 1 && hs.coherenceCohesion <= 9, `CC dalam rentang 1-9 (ID: ${item.id})`);
      assert.ok(hs.lexicalResource >= 1 && hs.lexicalResource <= 9, `LR dalam rentang 1-9 (ID: ${item.id})`);
      assert.ok(hs.grammaticalRange >= 1 && hs.grammaticalRange <= 9, `GRA dalam rentang 1-9 (ID: ${item.id})`);
      assert.ok(hs.overall >= 1 && hs.overall <= 9, `Overall dalam rentang 1-9 (ID: ${item.id})`);
    });
  });

  test('Metodologi pengumpulan dan pengolahan data terdokumentasi lengkap', () => {
    assert.ok(AI_BENCHMARK_METHODOLOGY.corpusSource, 'Sumber korpus harus terdokumentasi');
    assert.ok(AI_BENCHMARK_METHODOLOGY.raterProtocol, 'Protokol penilai harus terdefinisi');
    assert.ok(AI_BENCHMARK_METHODOLOGY.interRaterReliability, 'Inter-rater reliability harus tercantum');
    assert.ok(Array.isArray(AI_BENCHMARK_METHODOLOGY.featurePipeline), 'Feature pipeline harus terdokumentasi');
    assert.ok(Array.isArray(AI_BENCHMARK_METHODOLOGY.evaluationMetrics), 'Metrik evaluasi harus terdokumentasi');
  });

  test('Evaluasi model AI memenuhi standar internasional AES (MAE, RMSE, Pearson r, QWK, Adjacent Agreement)', () => {
    const evaluation = evaluateBenchmarkSuite(analyzeBand8Text);
    const { results, metrics } = evaluation;

    assert.equal(results.length, 20, 'Semua 20 sampel harus selesai dievaluasi');
    
    console.log('\n======================================================');
    console.log('HASIL PENGUJIAN BENCHMARK MODEL AI (AES METRICS):');
    console.log(`- Sample Count        : ${metrics.sampleCount} esai`);
    console.log(`- Mean Absolute Error : ${metrics.mae} Band`);
    console.log(`- Root Mean Sq Error  : ${metrics.rmse} Band`);
    console.log(`- Pearson Correlation : r = ${metrics.pearsonR}`);
    console.log(`- Spearman Rank Corr  : rho = ${metrics.spearmanRho}`);
    console.log(`- Exact Agreement     : ${metrics.exactAgreementPct}%`);
    console.log(`- Adjacent Agreement  : ${metrics.adjacentAgreementPct}% (within ±0.5 Band)`);
    console.log(`- Quadratic W. Kappa  : QWK = ${metrics.qwk}`);
    console.log('======================================================\n');

    // Standar internasional akseptabilitas Automated Essay Scoring (AES)
    // 1. MAE harus berada dalam batas toleransi human rater discrepancy (<= 0.60 Band)
    assert.ok(metrics.mae <= 0.60, `MAE harus <= 0.60 (didapat: ${metrics.mae})`);

    // 2. RMSE harus <= 0.75 Band
    assert.ok(metrics.rmse <= 0.75, `RMSE harus <= 0.75 (didapat: ${metrics.rmse})`);

    // 3. Pearson Correlation r harus kuat dan positif (> 0.80)
    assert.ok(metrics.pearsonR >= 0.80, `Pearson r harus >= 0.80 (didapat: ${metrics.pearsonR})`);

    // 4. Spearman Rank correlation harus kuat (> 0.80)
    assert.ok(metrics.spearmanRho >= 0.80, `Spearman rho harus >= 0.80 (didapat: ${metrics.spearmanRho})`);

    // 5. Adjacent Agreement (±0.5 Band) harus >= 85% (standar industri ETS e-rater / Cambridge AES)
    assert.ok(metrics.adjacentAgreementPct >= 85.0, `Adjacent agreement harus >= 85% (didapat: ${metrics.adjacentAgreementPct}%)`);

    // 6. Quadratic Weighted Kappa harus substansial (> 0.70)
    assert.ok(metrics.qwk >= 0.70, `QWK harus >= 0.70 (didapat: ${metrics.qwk})`);
  });

  test('Model AI mendeteksi perbedaan kualitas esai secara berjenjang dari Band 4.0 hingga Band 9.0', () => {
    const evaluation = evaluateBenchmarkSuite(analyzeBand8Text);
    const results = evaluation.results;

    // Sampel Band Rendah (BM-20, Band 4.0) harus mendapatkan skor AI <= 5.0
    const lowSample = results.find(r => r.id === 'BM-20');
    assert.ok(lowSample.aiScores.overall <= 5.0, `Band 4.0 harus diprediksi <= 5.0 (didapat: ${lowSample.aiScores.overall})`);

    // Sampel Band Tinggi (BM-15, Band 9.0) harus mendapatkan skor AI >= 8.5
    const eliteSample = results.find(r => r.id === 'BM-15');
    assert.ok(eliteSample.aiScores.overall >= 8.5, `Band 9.0 harus diprediksi >= 8.5 (didapat: ${eliteSample.aiScores.overall})`);

    // Perbedaan skor antara elite dan low sample harus > 3.5 Band
    const spread = eliteSample.aiScores.overall - lowSample.aiScores.overall;
    assert.ok(spread >= 3.5, `Spread diskriminasi model harus >= 3.5 band (didapat: ${spread})`);
  });
});
