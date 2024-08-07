import React from "react";

const Input = () => {
  return (
    <>
      <h4 className="mr-4 flex items-center">
        <span className="mr-2">📍</span>City/Location
      </h4>
      <div className="flex w-full mt-2 flex-col md:flex-row ">
        <div className="flex w-full items-center mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Type your location here"
            className="flex-1 bg-gray-200 h-10 rounded-l-md pl-3"
          />
          <button className="h-10 bg-gray-400 px-4 rounded-r-md flex items-center justify-center">
            🔍
          </button>
        </div>
        <div className="flex mt-2 md:mt-0 md:ml-4 space-x-2">
          <select className="h-10 px-2 rounded-md border">
            <option>Select 1</option>
          </select>
          <select className="h-10 px-2 rounded-md border">
            <option>Select 1</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Input;
