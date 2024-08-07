import React from "react";
import Header from "./Header";
import Service from "./Service";
import Input from "./Input";

const Details = () => {
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
      <div className="max-w-4xl mx-auto p-4 w-full">
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">MyPerro</h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-300">⭐</span>
              </div>
              <span className="ml-2 text-gray-500">(23 Ratings)</span>
            </div>
          </div>

          <div className="flex flex-wrap space-x-2 mt-4 md:mt-0">
            <div className="bg-gray-300 w-24 h-24 rounded-lg"></div>
            <div className="space-y-2">
              <div className="bg-gray-300 w-24 h-12 rounded-lg"></div>
              <div className="bg-gray-300 w-24 h-12 rounded-lg flex items-center justify-center">
                +3
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col space-y-2 w-full md:w-[280px] mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span>⚙️</span>
              <span className="font-semibold">4.4</span>
              <span className="text-gray-500">(23 Ratings)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>3 km</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>3 km</span>
            </div>
            <div className="self-end mt-2">
              <span className="bg-gray-300 text-sm font-semibold py-1 px-2 rounded-full">
                Verified
              </span>
            </div>

            <div className="flex space-x-2 mt-2">
              <button className="bg-gray-300 px-4 py-2 rounded-md">
                something
              </button>
              <button className="bg-gray-300 px-4 py-2 rounded-md">
                Something
              </button>
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Type your remarks here..."
                className="flex-1 bg-gray-200 p-2 rounded-l-md"
              />
              <button className="bg-gray-400 p-2 rounded-r-md">➕</button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            urna risus. Praesent feugiat eros vel mauris tincidunt, ac ultricies
            sapien egestas. Fusce at nisl in ligula suscipit interdum. In hac
            habitasse platea dictumst.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-red-500">Lorem ip</h2>
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex items-center">
                  <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="ml-2">
                    <span className="font-bold">User1</span>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-300">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae urna risus. Praesent feugiat eros vel mauris tincidunt, ac
                ultricies sapien egestas. Fusce at nisl in ligula suscipit
                interdum. In hac habitasse platea dictumst.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex items-center">
                  <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="ml-2">
                    <span className="font-bold">User2</span>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-300">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae urna risus. Praesent feugiat eros vel mauris tincidunt, ac
                ultricies sapien egestas. Fusce at nisl in ligula suscipit
                interdum. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
