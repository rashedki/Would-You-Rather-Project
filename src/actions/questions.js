export const Load_Questions = "LOAD_QUESTIONS"
export function loadQuestions(questions) {
  return {type: Load_Questions, questions};
}
