import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="./samal.jpg" alt="Samal" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I’m Samal from Bihar, India, an enthusiastic Frontend
              Developer with a strong interest in building clean, interactive,
              and visually appealing websites. Skilled in HTML, CSS, JavaScript,
              and React, I am always eager to learn and apply new tools to solve
              real-world problems. I aim to join a dynamic team where I can
              contribute and expand my skills.{" "}
            </p>
            {/* <p>i am samal from bihar.</p> */}
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>01+</h1>
          <p>YEARS OF LEARNING EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>05+</h1>
          <p>PROJECTS BUILT</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>03+</h1>
          <p>CERTIFICATIONS ACHIEVED</p>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default About;
