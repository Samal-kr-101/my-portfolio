import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src="./samal.jpg" alt="Samal" />
      <h1>
        <span>I'm Samal Kumar Choudhary,</span> Software Developer based in
        India.
      </h1>
      <p>
        I'm a passionate Frontend Developer specializing in building responsive
        and user-friendly web applications using React, JavaScript, and modern
        UI frameworks.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact" className="btn">
            Connect With Me
          </a>
        </div>
        <div className="hero-resume">
          <a href="/samal-resume.pdf" download="Samal_Resume.pdf">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
