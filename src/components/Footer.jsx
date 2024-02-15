import React from "react";
import { ReactComponent as Logo } from "../assets/logo-white.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Youtube } from "../assets/icon-youtube.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className=" bg-[#001122]">
      <div
        className="container flex flex-col-reverse justify-between px-6 py-10 
    mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        {/* Logo and Social Links */}
        <div
          className=" flex flex-col-reverse items-center justify-between space-y-12 
        md:flex-col md:space-y-0 md:items-start"
        >
          {/* Copyright 2020. All Rights Reserved */}
          <div
            className="mx-auto my-6 text-center text-white
            md:hidden"
          >
            Copyright 2020. All Rights Reserved
          </div>

          {/* Logo */}
          <div className="h-8">
            <Logo alt="Logo Icon" />
          </div>
          {/* Social Links */}
          <div className=" flex justify-center  space-x-4">
            <Facebook alt="Facebook Icon" className="h-8" />
            <Youtube alt="Youtube Icon" className="h-8" />
            <Twitter alt="Twitter Icon" className="h-8" />
            <Pinterest alt="Pinterest Icon" className="h-8" />
            <Instagram alt="Instagram Icon" className="h-8" />
          </div>
        </div>

        {/* Tags */}

        <div className="flex justify-around space-x-32">
          {/* The First Tags */}
          <div
            className="flex flex-col space-y-3 text-white
           "
          >
            <a href="#Home" className="hover:text-red-200">
              Home
            </a>
            <a href="#Pricing" className="hover:text-red-200">
              Pricing
            </a>
            <a href="# Products" className="hover:text-red-200">
              Products
            </a>
            <a href="#AboutUs" className="hover:text-red-200">
              AboutUs
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white ">
            <a href="# Careers" className="hover:text-red-200">
              Careers
            </a>
            <a href="#Community" className="hover:text-red-200">
              Community
            </a>
            <a href="#PrivacyPolicy" className="hover:text-red-200">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* SearchBar */}

        <div className=" flex flex-col justify-between ">
          <form action="">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Update in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-orange-500
               hover:bg-red-400 focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>

          <div className=" text-white hidden md:block ">
            Copyright 2020. All Rights Reserved
          </div>
          <div className=" text-white hidden md:block ">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              ref="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="# Samar Osman"
              ref="noreferrer"
              className="hover:text-red-200"
            >
              Samar Osman
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
