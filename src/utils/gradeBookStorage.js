// Utility to save and manage exam records in localStorage for GradeBook

const STORAGE_KEY = 'ielts_exam_records';

export const calculateOverallBand = (tr, cc, lr, gra) => {
  const avg = (parseFloat(tr) + parseFloat(cc) + parseFloat(lr) + parseFloat(gra)) / 4;
  const decimal = avg - Math.floor(avg);
  if (decimal < 0.25) return Math.floor(avg);
  if (decimal < 0.75) return Math.floor(avg) + 0.5;
  return Math.ceil(avg);
};

export const saveExamRecord = (record) => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    let records = existing ? JSON.parse(existing) : [];
    
    // Create complete record object
    const newRecord = {
      id: record.id || `exam-${Date.now()}`,
      date: record.date || new Date().toISOString().split('T')[0],
      type: record.type || 'Task 2 Essay',
      title: record.title || 'Simulasi Ujian IELTS Writing',
      taskResponse: Number(record.taskResponse || 7.0),
      coherenceCohesion: Number(record.coherenceCohesion || 7.0),
      lexicalResource: Number(record.lexicalResource || 7.0),
      grammaticalRange: Number(record.grammaticalRange || 7.0),
      overallBand: Number(record.overallBand || calculateOverallBand(
        record.taskResponse || 7.0,
        record.coherenceCohesion || 7.0,
        record.lexicalResource || 7.0,
        record.grammaticalRange || 7.0
      )),
      wordCount: Number(record.wordCount || 0),
      timeSpentMin: Number(record.timeSpentMin || 20),
      feedbackEn: record.feedbackEn || 'Good task achievement with appropriate register.',
      feedbackId: record.feedbackId || 'Pencapaian tugas baik dengan tata bahasa dan diksi yang sesuai.'
    };

    records.unshift(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

    // Dispatch custom event for reactive UI updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gradebook_updated', { detail: newRecord }));
    }

    return true;
  } catch (err) {
    console.error('Error saving exam record:', err);
    return false;
  }
};
