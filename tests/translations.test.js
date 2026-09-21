import test from 'node:test';
import assert from 'node:assert';
import { COPYWORK_LESSONS } from '../src/data/copyworkLessonsData.js';
import { SENTENCE_TRANSFORMER_CHALLENGES } from '../src/data/sentenceTransformerData.js';
import { IELTS_SAMPLE_PROMPTS, TOPIC_COLLOCATIONS, CURRICULUM_TIERS } from '../src/data/curriculumData.js';
import { GENERAL_TRAINING_PROMPTS, LETTER_PHRASES_BANK } from '../src/data/generalTrainingData.js';

test('Every Copywork Lesson has an accurate Indonesian translation', () => {
  assert.ok(COPYWORK_LESSONS.length >= 8);
  for (const lesson of COPYWORK_LESSONS) {
    assert.ok(lesson.indonesianTranslation, `Lesson ${lesson.id} must have an indonesianTranslation`);
    assert.ok(lesson.indonesianTranslation.trim().length > 15, `Translation for ${lesson.id} should not be empty`);
  }
});

test('Every Sentence Transformer challenge has Band 5 translation and option translations', () => {
  assert.ok(SENTENCE_TRANSFORMER_CHALLENGES.length >= 4);
  for (const chal of SENTENCE_TRANSFORMER_CHALLENGES) {
    assert.ok(chal.band5Translation, `Challenge ${chal.id} must have band5Translation`);
    for (const opt of chal.options) {
      assert.ok(opt.translation, `Option ${opt.id} in challenge ${chal.id} must have a translation`);
    }
  }
});

test('IELTS Sample Prompts have question and model answer Indonesian translations', () => {
  assert.ok(IELTS_SAMPLE_PROMPTS.length >= 2);
  for (const p of IELTS_SAMPLE_PROMPTS) {
    assert.ok(p.questionTranslation, `Prompt ${p.id} must have questionTranslation`);
    assert.ok(p.modelAnswerTranslation, `Prompt ${p.id} must have modelAnswerTranslation`);
  }
});

test('General Training Prompts have prompt and model answer translations', () => {
  assert.ok(GENERAL_TRAINING_PROMPTS.length >= 3);
  for (const p of GENERAL_TRAINING_PROMPTS) {
    assert.ok(p.promptTranslation, `GT prompt ${p.id} must have promptTranslation`);
    assert.ok(p.modelAnswerTranslation, `GT prompt ${p.id} must have modelAnswerTranslation`);
  }
});

test('Topic Collocations have Indonesian meanings and example sentence translations', () => {
  assert.ok(TOPIC_COLLOCATIONS.length >= 4);
  for (const top of TOPIC_COLLOCATIONS) {
    for (const item of top.items) {
      assert.ok(item.band5Meaning, `Item ${item.band5} must have band5Meaning`);
      assert.ok(item.band8Meaning, `Item ${item.band8} must have band8Meaning`);
      assert.ok(item.exampleTranslation, `Item ${item.band8} must have exampleTranslation`);
    }
  }
});

test('Curriculum Tier drills with English options or sentences provide Indonesian translations', () => {
  for (const tier of CURRICULUM_TIERS) {
    for (const mod of tier.modules) {
      for (const drill of mod.interactiveDrills) {
        if (drill.options) {
          for (const opt of drill.options) {
            assert.ok(opt.translation, `Drill option in ${drill.id} must have translation`);
          }
        }
        if (drill.sentencesToOrder) {
          for (const sent of drill.sentencesToOrder) {
            assert.ok(sent.translation, `Sentence in ${drill.id} must have translation`);
          }
        }
      }
    }
  }
});
