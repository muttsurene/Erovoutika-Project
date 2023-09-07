const _quiz = {
  quizTitle: "Web Development Quiz",
  quizSynopsis:
    "A collection of quiz related to web development involving both frontend and backend. This will include frameworks, technologies, programming conventions, and more.",
  nrOfQuestions: "0",
  questions: [],
};

_quiz.questions.push({
  question:
    "Which of the following web framework technologies were developed by facebook engineers?",
  questionType: "text",
  answerSelectionType: "single",
  answers: ["Vue", "Angular", "React", "Ember"],
  correctAnswer: "3",
  messageForCorrectAnswer: "Correct answer. Good job.",
  messageForIncorrectAnswer: "Incorrect answer. Please try again.",
  explanation:
    "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (also known as Facebook) and a community of individual developers and companies.",
  point: "20",
});

_quiz.questions.push({
  question:
    "Which of these programming language were the most used on almost 70% of all website backend server built today?",
  questionType: "text",
  answerSelectionType: "single",
  answers: ["PHP", "Javascript", "Ruby", "Java"],
  correctAnswer: "1",
  messageForCorrectAnswer: "Correct answer. Good job.",
  messageForIncorrectAnswer: "Incorrect answer. Please try again.",
  explanation:
    "According to W3Techs' data, PHP is used by 78.9% of all websites with a known server-side programming language.",
  point: "20",
});

_quiz.questions.push({
  question: "Which of the following framework uses React?",
  questionType: "text",
  answerSelectionType: "multiple",
  answers: ["Next.JS", "Ruby on Rails", "Redwood", "Angular"],
  correctAnswer: [1, 3],
  messageForCorrectAnswer: "Correct answer. Good job.",
  messageForIncorrectAnswer: "Incorrect answer. Please try again.",
  explanation:
    "Next.JS is a React with SSR and SSG web server. Redwood is more of a complete full-stack dev solution.",
  point: "20",
});

_quiz.nrOfQuestions = _quiz.questions.length.toString();
export const quiz = _quiz;