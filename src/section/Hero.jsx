import React from "react";
import { words } from "../constants/index";
import Button from "../components/Button";
//import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Hero = () => {
  //using this animation gsap
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout flex flex-row items-center justify-between">
        {/* header left hero content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5">
          <div className="flex flex-col gap-7 ">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgpath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that delivery Result</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-event-none">
              Hi, I'm Jay — a passionate front-end developer
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="see my work"
            />
          </div>
        </header>
        {/* Right side image */}
        <figure className="hero-figure md:w-1/2 w-full flex justify-center items-center">
          <img src="/public/images/HomePage.jpg" alt="Jay" className="hero-image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
