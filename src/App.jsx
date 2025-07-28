import React from "react";
import Hero from "./section/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    
      <Skills />
      <Contact />
     
    </>
  );
};

export default App;
