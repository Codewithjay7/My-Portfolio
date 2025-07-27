import React from "react";
import Hero from "./section/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contect from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Contect />
      <Skills />
    </>
  );
};

export default App;
