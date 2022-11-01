
import React from "react";

// function to display the navbat at the top of the page
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href="#about">
          <a href="#about" className="ml-3 text-xl hover:text-gray-400">
            Karl Linfeldt
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-800 flex flex-wrap items-center justify-evenly text-gray-200 justify-center">
          <a href="#projects" className="mr-5 hover:text-indigo-400">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-indigo-400">
            Skills
          </a>
          <a href="#resume" className="mr-5 hover:text-indigo-400">
            Resume
          </a>
          <a href="#contact" className="mr-5 hover:text-indigo-400">
            Contact
          </a>
        </nav>
        
      </div>
    </header>
  );
}