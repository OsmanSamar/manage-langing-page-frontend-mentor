import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          <Logo alt="Logo Icon" />
        </div>

        <div className="hidden space-x-6  md:flex">
          <a href="#Pricing" className="hover:text-gray-500">
            Pricing
          </a>
          <a href="# Product" className="hover:text-gray-500">
            Product
          </a>
          <a href="#About Us" className="hover:text-gray-500">
            About Us
          </a>
          <a href="#Careers" className="hover:text-gray-500">
            Careers
          </a>
          <a href="#Community" className="hover:text-gray-500">
            Community
          </a>
        </div>

        {/* Button */}
        <a
          href="#Get Started"
          className="hidden  p-3 px-6 pt-2 text-white bg-orange-500 
            rounded-full self-baseline hover:bg-red-400 md:block"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className=""
            aria-controls=",online-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={` ${
                isOpen ? "hidden" : "block"
              }  text-gray-700 dark:text-gray-300 `}
            />

            <AiOutlineClose
              size={26}
              className={` ${
                isOpen ? "block" : "hidden"
              } h-6 w-6 dark:text-gray-400 `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={` ${isOpen ? "block pt-4" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className=" absolute flex flex-col items-center 
           self-end py-8 mt-10 space-y-6
         font-bold bg-white sm:w-auto 
         sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#home" onClick={toggleMenu} className="cursor-pointer">
            Pricing
          </a>
          <a href="#about" onClick={toggleMenu} className="cursor-pointer">
            Product
          </a>
          <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
            About Us
          </a>
          <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
            Careers
          </a>
          <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
