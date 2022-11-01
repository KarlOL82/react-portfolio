// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

// Pulls each skill card from array in data.js. They are mapped over an image link with
// appropriate icon and open related page in new tab
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are some of the full stack technologies I have learned including:
            HTML, CSS, and Javascript as well as the MERN stack.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
          <a
            href={skill.link}
            key={skill.image}
            className="p-2 sm:w-1/2 w-full"
            target="_blank"
            rel="noreferrer">
              
            <div key={skill} >
              <div className="bg-gray-500 bg-opacity-80 rounded flex p-4 h-full items-center">
                <img
                  src={skill.image}
                  alt="CSS"
                  className="object-cover inset-0 h-28 w-28"
                />

                <div>
                  <h1 className="title-font text-lg font-medium px-3 text-white mb-3">
                    <p>{skill.description}</p>
                  </h1>
                </div>
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </section>
  );
}
