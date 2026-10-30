/* Textbook content is generated separately; grammar uses the existing guide. */
window.HSK_BOOK = {
  level: 4,
  chapters: window.HSK_BOOK_CONTENT.chapters.map(chapter => ({
    ...chapter,
    pictureExercise: window.HSK_BOOK_PICTURES.chapters[chapter.id - 1],
    grammar: window.HSK_GRAMMAR_GUIDE.topics.filter(t => t.lesson === chapter.id)
  }))
};
