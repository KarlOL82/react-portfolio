import React, { useState } from "react";
import { resume } from "../data";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex justify-center mx-auto">
        <button
          className="bg-indigo-400 text-black active:bg-indigo-700 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Expand Resume
        </button>
      </div>
      {showModal ? (
        <>
          <div className="flex flex-start justify-center h-screen bg-gray-800 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto py-12 my-6 min-h-screen  mx-auto max-h-96 max-w-3xl">
              <div className="border-4 border-indigo-400 rounded-lg bg-gray-500 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex overflow-auto items-start justify-between p-5 border-b border-solid border-indigo-400 rounded-t ">
                  <h3 className="text-2xl text-white font=semibold">
                    <p>Karl Oskar Linfeldt</p>
                    <p>19803 8th Ave NW</p>
                    <p>Shoreline, WA 98177</p>
                    <a
                      href="mailto:klinfeldt@gmail.com"
                      className="text-indigo-600"
                    >
                      klinfeldt@gmail.com
                    </a>
                  </h3>
                  <button
                    className="bg-transparent border-3 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white text-2xl opacity-3 h-8 w-10 text-xl block bg-gray-800 py-0 rounded-md">
                      x
                    </span>
                  </button>
                </div>
                <div className="PageComponent relative p-6 overflow-auto">
                  <div className="flex flex-wrap m-4">
                    {resume.map((resume) => (
                      <div className="p-4 md:w-full w-full">
                        <div className="bg-gray-900 bg-opacity-70 p-8 rounded">
                          {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
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
                                Position: {resume.position}
                              </span>
                              <span className="text-gray-300 text-sm">
                                {resume.description}
                              </span>
                              <span className="text-gray-200 text-sm">
                                Contact: {resume.contact}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-indigo-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-indigo-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
  
};



export default Modal;
