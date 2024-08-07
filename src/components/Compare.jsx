import React from "react";
import Header from "./Header";
import Service from "./Service";
import Input from "./Input";
const Compare = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center w-screen h-auto md:h-28 bg-gray-100 p-2 justify-between">
        <div className="flex md:w-1/2 p-2">
          <Service />
        </div>
        <div className="flex-1 md:w-1/2 p-2">
          <Input />
        </div>
      </div>
      <div class="flex flex-col md:flex-row p-4">
        <div class="sidebar w-full md:w-1/4 bg-white p-4">
          <h2 class="text-2xl font-bold text-brown-700 mb-4">Parameters</h2>
          <ul>
            <li class="mb-2">Overall Ratings</li>
            <li class="mb-2">Overall Ratings</li>
            <li class="mb-2">Overall Ratings</li>
            <li class="mb-2">Overall Ratings</li>
            <li class="mb-2">Overall Ratings</li>
            <li class="mb-2">Overall Ratings</li>
          </ul>
        </div>
        <div class="main-content flex-1 flex flex-col md:flex-row justify-between p-4">
          <div class="card bg-white p-4 w-full md:w-1/2 mb-4 md:mb-0 mx-2 shadow-lg">
            <div class="header flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-brown-700">MyPerro</h3>
              <button class="text-gray-500">×</button>
            </div>
            <div class="image bg-gray-200 h-40 mb-4"></div>
            <div class="details text-center mb-4">
              <div class="rating flex justify-center items-center mb-2">
                <svg
                  class="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.283 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.283 3.948c.3.921-.755 1.688-1.539 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.783.57-1.838-.197-1.539-1.118l1.283-3.948a1 1 0 00-.364-1.118L2.83 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.283-3.948z" />
                </svg>
                <span class="ml-2 text-gray-700">4.5</span>
                <span class="ml-2 text-gray-500">(23 Ratings)</span>
              </div>
              <div class="distance flex items-center mb-2">
                <svg
                  class="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14zm1-7H9V7h2v3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 text-gray-700">3 km</span>
              </div>
            </div>
            <div class="buttons flex justify-around">
              <button class="bg-gray-300 px-2 py-2">something</button>
              <button class="bg-gray-300 px-2 py-2">something</button>
              <button class="bg-gray-300 px-2 py-2">something</button>
            </div>
          </div>
          <div class="card bg-white p-4 w-full md:w-1/2 mx-2 shadow-lg">
            <div class="header flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-brown-700">MyPerro</h3>
              <button class="text-gray-500">×</button>
            </div>
            <div class="image bg-gray-200 h-40 mb-4"></div>
            <div class="details text-center mb-4">
              <div class="rating flex justify-center items-center mb-2">
                <svg
                  class="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.283 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.283 3.948c.3.921-.755 1.688-1.539 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.783.57-1.838-.197-1.539-1.118l1.283-3.948a1 1 0 00-.364-1.118L2.83 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.283-3.948z" />
                </svg>
                <span class="ml-2 text-gray-700">4.5</span>
                <span class="ml-2 text-gray-500">(23 Ratings)</span>
              </div>
              <div class="distance flex items-center mb-2">
                <svg
                  class="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14zm1-7H9V7h2v3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 text-gray-700">3 km</span>
              </div>
            </div>
            <div class="buttons flex justify-around">
              <button class="bg-gray-300 px-2 py-2">something</button>
              <button class="bg-gray-300 px-2 py-2">something</button>
              <button class="bg-gray-300 px-2 py-2">something</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
