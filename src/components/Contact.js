import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import twitterIcon from "../images/twitterIcon.svg";
import linkedinLogo from "../images/linkedinLogo.svg";
import githubLogo from "../images/githubLogo.svg";



export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4r21yyp', 'template_4tu40ci', form.current, 'kT0ZWuqBEo0IrgC8P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.location.reload();

  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 pt-36 pb-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            // Embedded Google map
            src="https://www.google.com/maps/embed/v1/place?q=19803+8th+Avenue+Northwest,+Shoreline,+WA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                19803 8th Ave NW <br />
                Shoreline, WA 98177
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="mailto:klinfeldt@gmail.com&subject=Contact from Portfolio">
              klinfeldt@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <span><img src={githubLogo} alt="Github" className="bg-white float-right my-1 w-4 h-4"></img></span>GitHub
              </h2>
              <a className="text-indigo-400 leading-relaxed my-3" href="https://github.com/KarlOL82">
              github.com/KarlOL82
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <span><img src={twitterIcon} alt="Twitter" className="float-right my-1 w-4 h-4"></img></span>Twitter 
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://twitter.com/KLinfeldt">
              twitter.com/KLinfeldt
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <span><img src={linkedinLogo} alt="Linkedin" className="float-right my-1 w-4 h-4"></img></span>Linkedin
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://www.linkedin.com/in/karl-linfeldt-663513239/">
              linkedin.com
              </a>
              
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">206-475-5452</p>
              
            </div>
          </div>
        </div>
        
        <form
          // renders contact form
          name="contact"
          ref={form}
          onSubmit={sendEmail}
          
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed text-gray-200 mb-5">
            Please reach out to me if you'd like to connect. I'm interested in employment and 
            open-source collaboration.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              
            />
          </div>
          <button
            type="submit"
            value="send"
            className="text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}