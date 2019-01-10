const QUESTIONS_API = 'https://nbacc6yaod.execute-api.us-east-1.amazonaws.com/v1/questions';
const ANSWERS_API   = 'https://nbacc6yaod.execute-api.us-east-1.amazonaws.com/v1/answers';

export const getQuestions = async () => {
  const response = await fetch(QUESTIONS_API);
  return await response.json();
}

export const getAnswers = async () => {
  const response = await fetch(ANSWERS_API);
  return await response.json();
}

export const hydrate = async () => {
  const data = await Promise.all([
    getQuestions(),
    getAnswers()
  ]);

  return {
    questions: data[0],
    answers: data[1]
  };
};
