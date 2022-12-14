import React from "react";
import resume_portfolio from "../docs/Resume_portfolio.docx"

// Renders text for resume section with option to view as read only .docx
export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-18 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <p className="leading-relaxed text-gray-200 mb-5">
            Click below to view my employment history. I am a newcomer to the tech industry but have learned
            many useful skills in various fields that can make me a great addition to a team. 
          </p>
      </div>
      <div className="text-indigo-400 text-center py-6">
        <a href={resume_portfolio}>
          View resume as a Word document
        </a>
      </div>
    </section>
  );
}
