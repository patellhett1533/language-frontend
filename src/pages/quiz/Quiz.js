/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Posts } from "../../json/test";
import { Questions } from "../../json/data";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const [answer, setAnswer] = useState({
    q1: "0",
    q2: "0",
    q3: "0",
    q4: "0",
    q5: "0",
    q6: "0",
    q7: "0",
    q8: "0",
    q9: "0",
    q10: "0",
  });
  let result = 0;
  const id = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const handleQuiz = async (e) => {
    e.preventDefault();
    Object.keys(answer).map((item, i) => {
      if (answer[item][0] === Questions[id * 10 + i].answer) {
        result = result + 10;
      }
    });

    const response = await fetch(`http://localhost:5000/api/result/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ result }),
    });
    const json = await response.json();
    navigate(`/result/${id}`);
  };

  const onchange = (e) => {
    setAnswer({ ...answer, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <div className="sm:mx-auto mx-5 max-w-2xl mt-24 lg:mt-36 lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {Posts[id].title}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {Posts[id].description}
        </p>
      </div>

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex max-sm:flex-col sm:justify-between">
              <p className="max-sm:pb-3">Choose The Correct Answer</p>
              <p>10 Question</p>
            </div>
            <form
              className="question-list w-full mt-12"
              onSubmit={handleQuiz}
              method="post"
            >
              {Questions.slice(id * 10, id * 10 + 10).map((item, i) => (
                <div className="question border border-gray-200 sm:px-8 px-4 sm:py-5 py-3 rounded-xl mt-8">
                  <p className="mt-1 sm:text-xl text-lg leading-6 text-gray-900">
                    Q{i + 1} - {item.question}
                  </p>
                  <div className="mt-6 sm:space-y-6 space-y-3 sm:px-10 px-5">
                    <div className="flex items-center gap-x-3">
                      <input
                        onChange={onchange}
                        id={`q${i + 1}a1`}
                        name={`q${i + 1}`}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-sky-600"
                        value={"A"}
                      />
                      <label
                        htmlFor={`q${i + 1}a1`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.A}
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        onChange={onchange}
                        id={`q${i + 1}a2`}
                        name={`q${i + 1}`}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-sky-600 "
                        value={"B"}
                      />
                      <label
                        htmlFor={`q${i + 1}a2`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.B}
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        onChange={onchange}
                        id={`q${i + 1}a3`}
                        name={`q${i + 1}`}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-sky-600 "
                        value={"C"}
                      />
                      <label
                        htmlFor={`q${i + 1}a3`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.C}
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        onChange={onchange}
                        id={`q${i + 1}a4`}
                        name={`q${i + 1}`}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-sky-600 "
                        value={"D"}
                      />
                      <label
                        htmlFor={`q${i + 1}a4`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.D}
                      </label>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-5">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-lg font-medium text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Show Result
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
