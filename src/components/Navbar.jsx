import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          <Logo alt="Logo Icon" />
        </div>
        <div className="hidden space-x-6  md:flex">
          <a href="#" className="hover:text-gray-500">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-500">
            Product
          </a>
          <a href="#" className="hover:text-gray-500">
            About Us
          </a>
          <a href="#" className="hover:text-gray-500">
            Careers
          </a>
          <a href="#" className="hover:text-gray-500">
            Community
          </a>
        </div>

        <button>
          <a
            href="#"
            className="hidden  p-3 px-6 pt-2 text-white bg-orange-500 
            rounded-full self-baseline hover:bg-red-400 md:block"
          >
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
