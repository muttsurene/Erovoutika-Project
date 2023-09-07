import React from 'react'
import {quiz} from '../static/quiz/quiz';
import Quiz from 'react-quiz-component';

function QuizPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 pt-4">
      <h1 className="text-3xl font-bold text-center text-blue-600">Quiz</h1>
      <div className="w-fit mx-auto p-4 pr-8">
        <Quiz quiz={quiz} shuffle={true}  />
      </div>
    </div>
  );
}

export default QuizPage;
