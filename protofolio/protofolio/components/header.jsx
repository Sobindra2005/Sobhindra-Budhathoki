"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navigation bar for screens above 478px */}
      <nav className="z-11 hidden border border-gray-500 md:text-md lg:text-lg capitalize m-auto bg-black sm:max-w-[35rem] md:max-w-[50rem] p-2 px-5 items-center rounded-xl min-[478px]:block">
        <ul className="flex justify-between text-gray-700">
          <a href="#home">
            <li className="cursor-pointer navBar hover:text-white">home</li>
          </a>
          <a href="#about">
            <li className="cursor-pointer navBar hover:text-white">about</li>
          </a>
          <a href="#recentWorks">
            <li className="cursor-pointer navBar hover:text-white">
              recent works
            </li>
          </a>
          <a href="#blogs">
            <li className="cursor-pointer navBar hover:text-white">blogs</li>
          </a>
          <li className="cursor-pointer flex space-x-6 hover:text-white">
            <a href="#footer">
              <span className="navBar">get in touch</span>
            </a>

            <div className="hidden md:flex space-x-2">
              <a href="">
                <div className="cursor-pointer hover:text-white text-blue-400">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
              <a href="https://www.facebook.com/sobindra.budhathoki">
                <div className="cursor-pointer hover:text-white text-blue-400">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
              <a href="https://github.com/Sobindra2005">
                <div className="cursor-pointer hover:text-white text-gray-400">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </a>
              <a href="mailto:sobhindra2005@gmail.com">
                <div className="cursor-pointer hover:text-white text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Navigation bar for screens below 478px */}
      <nav className="z-11 block border border-gray-500 md:text-md lg:text-lg capitalize m-auto bg-black sm:max-w-[35rem] md:max-w-[50rem] p-2 px-5 items-center rounded-xl min-[478px]:hidden">
        <div className="flex justify-between items-center">
          <div onClick={toggleMenu} className="cursor-pointer text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>
        </div>

        {menuOpen && (
         <ul
         className={`flex flex-col mt-4 space-y-4 text-gray-300 transition-all duration-300 ease-in-out transform ${
           menuOpen
             ? "scale-100 opacity-100 translate-y-0"
             : "scale-95 opacity-0 -translate-y-2"
         }`}
       >
            <li>
              <a
                href="#home"
                className="navBar hover:text-white cursor-pointer"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="navBar hover:text-white cursor-pointer"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#recentWorks"
                className="navBar hover:text-white cursor-pointer"
              >
                recent works
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="navBar hover:text-white cursor-pointer"
              >
                blogs
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="navBar hover:text-white cursor-pointer"
              >
                get in touch
              </a>
            </li>
            <li className="flex space-x-4">
              <a href="https://www.linkedin.com" className="hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/sobindra.budhathoki"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://github.com/Sobindra2005"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:sobhindra2005@gmail.com"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
