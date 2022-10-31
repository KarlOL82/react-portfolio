import React from "react";
// import { resume } from "../data";



export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        {/* <div className="flex flex-wrap m-4">
          {resume.map((resume) => (
            <div className="p-4 md:w-full w-full">
              <div className="h-full bg-gray-900 bg-opacity-30 p-8 rounded">
                
                <p className="leading-relaxed mb-6">{resume.quote}</p>
                <div className="inline-flex items-center">
                  
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {resume.company}
                    </span>
                    <span className="text-gray-200 text-sm">
                      {resume.dates}
                    </span>
                    <span className="text-gray-200 text-sm">
                      {resume.position}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {resume.description}
                    </span>
                    <span className="text-gray-200 text-sm">
                      {resume.contact}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

