import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { NavBar } from "./NavbarLight";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-6 justify-between items-center navbar relative z-10">
      <div className="flex justify-between w-full items-center ">
        {/* Logo on the left */}
        <img
          src={logo}
          alt="logo"
          className="sm:w-[124px] sm:h-[54px] w-[150px] sm:ml-5 ml-10"
          style={{ backgroundColor: "transparent", imageRendering: "auto" }}
        />
        {/*New Navbar with spotlight for current section */}
        <NavBar items={navLinks} />
        {/* Mobile menu button on the right */}
        <div className="sm:hidden absolute  py-6 right-6 ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-center flex-col flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` flex-row font-poppins cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*
            <ul className="list-none sm:hidden hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold not-only:cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      
      */}
    </nav>
  );
};

export default Navbar;
