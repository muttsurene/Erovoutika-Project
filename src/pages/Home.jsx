import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <br />
      <h1 className="text-6xl text-blue-600 font-OpenSans font-light">
        Erovoutika Quiz Portal
      </h1>
      <div className="border-b border-blue-600 my-8" />
      <div className="flex flex-col md:flex-row gap-2 px-2">
        <Link to="/quiz" className=" flex-1 ">
          <div className=" h-[60vh] w-full border shadow-xl rounded-xl overflow-hidden group bg-white">
            <div className=" h-2/3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full object-cover duration-700 transition-transform transfrom scale-100 group-hover:scale-125"
              />
            </div>
            <div className="flex flex-col h-1/3 justify-center items-center text-blue-800">
              <p className="text-3xl">Take A Quiz</p>
              <p>Do a Graded Quiz Examination</p>
            </div>
          </div>
        </Link>

        <Link to="/review" className=" flex-1 ">
          <div className="h-[60vh] w-full border shadow-xl rounded-xl overflow-hidden group bg-white">
            <div className=" h-2/3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full object-cover duration-700 transition-transform transfrom scale-100 group-hover:scale-125 object-bottom"
              />
            </div>
            <div className="flex flex-col h-1/3 justify-center items-center text-blue-800">
              <p className="text-3xl">Review Our Lesson</p>
              <p>Review our Lessons before taking a quiz</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
