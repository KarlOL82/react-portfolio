// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "./pattern.css";
import githubLogo from "../images/githubLogo.svg";

//Function to pull project data from data.js and map them over an html element with image links to deployed apps
export default function Projects() {
  return (
    <section
      id="projects"
      className="pattern text-gray-300 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Click on one of the images below to view the deployed Project. For
            more projects, follow this link to
          </p>
          <a
            href="https://github.com/KarlOL82?tab=repositories"
            className="text-indigo-400 hover:text-indigo-500 leading-relaxed"
            target="_blank"
            rel="noreferrer"
          >
            My Github Repositories
          </a>
          <a href="https://github.com/KarlOL82?tab=repositories"
          target="_blank"
          rel="noreferrer"
          >
            <img
              src={githubLogo}
              alt="Github"
              className="m-auto bg-white my-3 w-8 h-8 rounded-md"
            ></img>
          </a>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="flex flex-col items-center p-4 sm:w-1/2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex w-full h-full relative column-2">
                <img
                  alt="Project Screenshot"
                  className="absolute min-h-300px rounded-md inset-0 h-full w-full drop-shadow-lg object-cover"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-teal-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
