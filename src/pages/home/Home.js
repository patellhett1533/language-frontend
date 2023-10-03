import React from "react";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Improve Your Language With Quiz.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is a all levels-level quiz containing multichoice questions
              from our 'level tests' quiz category. Simply answer all questions
              and press the 'Grade Me' button to see your score
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/test"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
