import React from "react";
import { quiz } from "../static/quiz/quiz";

function Review({ isLoggedIn }) {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 pt-4">
      <h1 className="text-3xl font-bold text-center text-blue-600">Review</h1>

      {isLoggedIn ? (
        <div className="flex flex-col gap-4">
          <div className="p-2 shadow-md rounded-md">
            <h2 className="text-2xl font-bold">{quiz.quizTitle}</h2>
            <p>{quiz.quizSynopsis}</p>
            <p>{quiz.nrOfQuestions}</p>
          </div>
          {quiz.questions.map((question, index) => (
            <div
              key={`question_${index}`}
              className="shadow-md rounded-md overflow-hidden"
            >
              <h3 className="bg-green-500 text-white p-2">
                {question.question}
              </h3>
              <div className="p-2">
                <ul className="ml-4">
                  {question.answers.map((item, ii) => (
                    <li
                      key={`answer_${ii}`}
                      className="flex items-center w-fit mb-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <hr />
                {typeof question.correctAnswer == "string" ? (
                  <p className="bg-green-400 text-white  w-min p-1 mt-2">
                    {question.answers[question.correctAnswer - 1]}
                  </p>
                ) : (
                  <div>
                    {question.correctAnswer.map((answer, i) => (
                      <p
                        key={`correct_${i}`}
                        className="bg-green-400 text-white  w-min p-1 mt-2"
                      >
                        {question.answers[answer - 1]}
                      </p>
                    ))}
                  </div>
                )}
                <p>{question.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="flex justify-center items-center h-[50vh]">Login to view all the answers</p>
      )}

      <div className="h-28"></div>
    </div>
  );
}

export default Review;
