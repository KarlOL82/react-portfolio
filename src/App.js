import React from "react";
import './App.css';
import './components/pattern.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/footer";
import Modal from "./components/Modal";

function App() {
  return (
    <main className="pattern text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Modal />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
