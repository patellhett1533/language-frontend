import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Result = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const id = useParams().id;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const getResult = async () => {
    const response = await fetch(`http://localhost:5000/api/result/${id}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    return json;
  };
  useEffect(() => {
    getResult().then((json) => setResult(json));
  });
  return (
    <div>
      <div className="sm:mx-auto mx-5 max-w-2xl mt-24 lg:mt-36 lg:text-center">
        <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-4xl">
          Result : 'And & But' Quiz
        </p>
        <p className="mt-10 text-5xl font-bold leading-8 text-gray-900">
          Your Grade : {result} %
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          You got {result / 10} / 10 questions correct.
        </p>
        <Link
          to={`/quize/${id}`}
          type="button"
          className="inline-flex mt-24 items-center rounded-md bg-sky-600 px-3 py-2 text-lg font-medium text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Take Test Again
        </Link>
      </div>
    </div>
  );
};

export default Result;
