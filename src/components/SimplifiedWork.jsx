import React from "react";

const SimplifiedWork = () => {
  return (
    <div className="bg-orange-500 simplified ">
      <div
        className="container flex flex-col items-center justify-between 
    px-6 py-24 mx-auto space-y-12 md:flex-row md:py-12 md:space-y-0"
      >
        <h2
          className="text-5xl font-bold leading-tight text-center text-white 
        md:text-4xl md:max-w-xl md:text-left "
        >
          Simplify how your team works today.
        </h2>

        <div className="my-16 ">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-orange-500 bg-white
             shadow-l rounded-full 
             self-baseline hover:bg-red-900 "
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedWork;
