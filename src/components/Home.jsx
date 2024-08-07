import React, { useState } from "react";
import Header from "./Header";
import Service from "./Service";
import dog from "../assets/images/dog.jpg";
import Input from "./Input";
import Perro from "./Perro";
import data from "../assets/data.json";
import { Link } from "react-router-dom";
const Home = () => {
  const [items] = useState(data);

  return (
    <>
      <Header />
      <div className="w-screen flex flex-col lg:flex-row bg-gray-100 p-4">
        <div className=" md:h-[170px] md:w-[170px] w-[200px] h-[200px] p-1 mx-auto lg:mx-0">
          <img className="h-full w-full object-cover" src={dog} alt="Dog" />
        </div>

        <div className="text-3xl mb-7 md:text-5xl font-bold ml-0 lg:ml-5 flex justify-center items-center text-center lg:text-left  ">
          Heythisis
          <br /> good
        </div>
        <div className="bg-peach h-auto w-full lg:w-9/12 p-3 rounded-md relative mt-4 lg:mt-0 lg:absolute lg:z-10 lg:top-56 lg:left-40">
          <Input />
        </div>
        <div className="flex justify-center bg-white rounded-lg shadow-md mt-4 lg:mt-0 lg:absolute lg:right-64 lg:top-32 z-10">
          <Service />
        </div>
      </div>

      <div className="flex flex-wrap justify-around bg-gray-100 p-4 mt-8">
        {items.map((item, index) => (
          <Link to={"/details"}>
            <Perro
              key={index}
              title={item.title}
              overallRating={item.overallRating}
              starRating={item.starRating}
              home={item.home}
              cleanlinessRating={item.cleanlinessRating}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-10 mr-4 lg:mr-16">
        <Link to={"/compare"}>
          <button className="bg-gray-600 text-white py-2 px-6 rounded-md">
            Compare
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
