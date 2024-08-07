import React from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="lg:flex md:flex  flex-cols space-y-2 align-center justify-between bg-peach  p-2 w-screen h-auto">
      <div className="flex items-center space-x-2">
        <img src={logo} className="h-10 w-100" alt="Logo" />
      </div>

      <div className=" lg:flex md:flex   list-none  flex-cols   place-center   gap-12 text-xl font-bold p-1 ">
        <Link to={"/"}>
          <li className="border-b-2 border-transparent hover:border-black mt-2 ">
            HOME
          </li>
        </Link>
        <li className="border-b-2 border-transparent hover:border-black mt-2">
          ABOUT US
        </li>
        <li className="border-b-2 border-transparent hover:border-b-black mt-2">
          CONTACT US
        </li>

        <button className="bg-gray-600 h-auto w-auto text-white text-xl px-4 py-1 rounded-lg mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
