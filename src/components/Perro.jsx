import React from "react";

const Perro = ({
  title,
  overallRating,
  starRating,
  home,
  cleanlinessRating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72 m-2">
      <div className="bg-gray-200 h-32 rounded-t-lg"></div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.75l1.31 2.652 2.928.426-2.119 2.064.5 2.914L12 10.4l-2.62 1.38.5-2.914-2.119-2.064 2.928-.426L12 3.75z"
              />
            </svg>
            <span className="ml-1 text-gray-500">{overallRating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">{starRating}</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.25V3m0 0l-1.92 1.92M12 3l1.92 1.92M4.2 6.29c.525-.71 1.68-.71 2.205 0L12 14.5l5.595-8.21c.525-.71 1.68-.71 2.205 0l.45.61a1.562 1.562 0 010 1.89l-7.5 11.02c-.525.71-1.68.71-2.205 0l-7.5-11.02a1.562 1.562 0 010-1.89l.45-.61z"
              />
            </svg>
            <span className="ml-2">{home.label}</span>
          </div>
          <div className="flex items-center ml-4 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.37a9.05 9.05 0 01-1.63 4.31C17.26 17.75 14.15 19 12 19c-2.14 0-5.25-1.25-7.37-4.31A9.05 9.05 0 013 10.37C3 7.02 5.58 4 9 4c1.82 0 3.53.74 4.61 1.86A6.492 6.492 0 0117.89 4C20.3 4 23 7.02 23 10.37c0 .57-.05 1.12-.13 1.66M14 16h.01"
              />
            </svg>
            <span className="ml-2">{home.distance}</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.75v-3.36a1 1 0 00-.276-.684l-2.054-2.054A1 1 0 019.25 14v-4.75a3 3 0 116 0V14a1 1 0 00.276.684l2.054 2.054a1 1 0 00.274.684v3.36m-12 0h12"
              />
            </svg>
            <span className="ml-2">
              {cleanlinessRating.score} ({cleanlinessRating.label})
            </span>
          </div>
        </div>
        <div className="flex mt-4 space-x-2">
          <button>Something</button>
          <button>something</button>
        </div>
        <div className="mt-4 flex place-center gap-2">
          <input
            type="text"
            placeholder="Type your remarks here..."
            className="w-11/12 border rounded-full py-1 px-3 flex-1 "
          />
          <button className="bg-gray-500 text-white font-bold rounded-full text-2xl h-8 w-8">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perro;
