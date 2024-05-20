import React from "react";
import { ReactComponent as IllustrationIntro } from "../assets/illustration-intro.svg";

const Header = () => {
  return (
    <div
      className="container flex flex-col-reverse 
  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  md:flex-row"
    >
      {/* Left Side */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1
          className="max-w-md text-4xl font-bold text-center 
           md:text-5xl md:text-left"
        >
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-gray-500 md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <a
          href="#getstarted"
          ref="noreferrer"
          className="p-3 px-6 pt-2 text-white bg-orange-500 
            rounded-full self-baseline hover:bg-red-400 "
        >
          Get Started
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2">
        <IllustrationIntro alt="" />
      </div>
    </div>
  );
};

export default Header;
