import React from "react";
import { Posts } from "../../json/test";

const Test = () => {
  return (
    <div>
      <div className="sm:mx-auto mx-5 max-w-2xl mt-24 lg:mt-36 lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          English Language Test & Exercise
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Test your knowledge of the English language with our range of online
          tests, grammar quizzes, language polls and more
        </p>
      </div>

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/quize/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <a
                    href={`/quize/${post.id}`}
                    type="button"
                    className="inline-flex items-center ml-5 rounded-md bg-sky-600 px-3 py-2 text-md font-medium text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Go To Test
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
