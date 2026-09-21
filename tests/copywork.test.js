import test from 'node:test';
import assert from 'node:assert';
import { COPYWORK_LEVELS, COPYWORK_TOPICS, COPYWORK_LESSONS } from '../src/data/copyworkLessonsData.js';

test('COPYWORK_LEVELS contains 4 graduated proficiency tiers', () => {
  assert.strictEqual(COPYWORK_LEVELS.length, 4);
  const levelIds = COPYWORK_LEVELS.map(l => l.id);
  assert.deepStrictEqual(levelIds, [1, 2, 3, 4]);
});

test('COPYWORK_TOPICS contains valid topics including Visual Chart Topic', () => {
  assert.ok(COPYWORK_TOPICS.length >= 8);
  const chartTopic = COPYWORK_TOPICS.find(t => t.id === 'chart');
  assert.ok(chartTopic, 'Visual chart topic should exist');
  assert.strictEqual(chartTopic.count, 20);
});

test('COPYWORK_LESSONS contains at least 20 lessons per topic for all 7 key domains (total >= 140)', () => {
  const topics = ['chart', 'env', 'tech', 'edu', 'health', 'soc', 'econ'];
  
  for (const tId of topics) {
    const topicLessons = COPYWORK_LESSONS.filter(l => l.topicId === tId);
    assert.strictEqual(
      topicLessons.length, 
      20, 
      `Topic "${tId}" should have exactly 20 lessons, but found ${topicLessons.length}`
    );
  }

  assert.strictEqual(COPYWORK_LESSONS.length, 140);
});

test('Every copywork lesson has Indonesian translation and complete grammatical breakdown', () => {
  for (const lesson of COPYWORK_LESSONS) {
    assert.ok(lesson.id, 'Lesson must have an id');
    assert.ok(lesson.modelText && lesson.modelText.length > 20, `Lesson ${lesson.id} must have model text`);
    assert.ok(lesson.indonesianTranslation && lesson.indonesianTranslation.length > 20, `Lesson ${lesson.id} must have indonesianTranslation`);
    assert.ok(lesson.wordCount > 10, `Lesson ${lesson.id} must have wordCount`);
    assert.ok(lesson.grammaticalBreakdown, `Lesson ${lesson.id} must have grammaticalBreakdown`);
    assert.ok(lesson.grammaticalBreakdown.clauseStructure, `Lesson ${lesson.id} must have clauseStructure`);
    assert.ok(lesson.grammaticalBreakdown.academicVocabulary.length > 0, `Lesson ${lesson.id} must have academicVocabulary`);
    assert.ok(lesson.grammaticalBreakdown.punctuationFocus, `Lesson ${lesson.id} must have punctuationFocus`);
  }
});

test('Task 1 Visual Chart lessons contain valid SVG chart structures with bilingual prompts', () => {
  const chartLessons = COPYWORK_LESSONS.filter(l => l.topicId === 'chart');
  assert.strictEqual(chartLessons.length, 20);

  for (const lesson of chartLessons) {
    assert.ok(lesson.visualChart, `Chart lesson ${lesson.id} must have visualChart object`);
    const chart = lesson.visualChart;
    assert.ok(['line', 'bar', 'pie', 'process', 'map'].includes(chart.type), `Chart ${lesson.id} has invalid type ${chart.type}`);
    assert.ok(chart.titleEn, `Chart ${lesson.id} missing titleEn`);
    assert.ok(chart.titleId, `Chart ${lesson.id} missing titleId`);
    assert.ok(chart.promptEn, `Chart ${lesson.id} missing promptEn`);
    assert.ok(chart.promptId, `Chart ${lesson.id} missing promptId`);
  }
});

test('Full essay lessons have at least 250 words and complete bilingual translations', () => {
  const fullEssays = COPYWORK_LESSONS.filter(l => l.level === 4 && l.topicId !== 'chart');
  assert.ok(fullEssays.length >= 12);
  for (const essay of fullEssays) {
    assert.ok(essay.wordCount >= 250, `Full essay ${essay.id} must be at least 250 words`);
    assert.ok(essay.indonesianTranslation.length >= 500, `Full essay translation ${essay.id} must be comprehensive`);
  }
  const fullChartReports = COPYWORK_LESSONS.filter(l => l.level === 4 && l.topicId === 'chart');
  assert.ok(fullChartReports.length >= 2);
  for (const report of fullChartReports) {
    assert.ok(report.wordCount >= 150, `Full chart report ${report.id} must be at least 150 words`);
  }
});
