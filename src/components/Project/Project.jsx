import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <div id="project" className="project">
      <h1>Projects</h1>
      <div className="projects" id="projects">
        <div className="project1">
          <img src="./spotify.png" alt="Spotify Homepage Clone" />
          <h4>Spotify Homepage Clone</h4>
          <p>
            Built a responsive clone of Spotify’s homepage using HTML5 and CSS3,
            replicating its layout and visual style. Implemented semantic HTML,
            Flexbox, Grid, transitions, positioning, and custom fonts for a
            modern, polished design.
          </p>
          <br></br>
          <p>Tech Stack - HTML and CSS </p>
        </div>

        <div className="project1">
          <img src="./weather-dashboard.png" alt="Spotify Homepage Clone" />
          <h4>Weather Dashboard</h4>
          <p>
            Developed a Weather Dashboard using HTML, CSS, and JavaScript that
            displays real-time weather data from an API. Features location-based
            search, temperature, humidity, and condition icons in a responsive
            layout.
          </p>
          <br></br>
          <p>Tech Stack - HTML, CSS and JavaScript </p>
        </div>
      </div>
      <div className="projects" >
        <div className="project1">
          <img src="./portfolio.png" alt="Spotify Homepage Clone" />
          <h4>My Portfolio Website </h4>
          <p>
            Designed and developed a personal portfolio website using HTML, CSS,
            and React to showcase projects, skills, and education. Features a
            responsive layout, smooth navigation, and integrated contact form
            for easy communication.
          </p>
          <br></br>
          <p>Tech Stack - HTML, CSS and React.js </p>
        </div>

        <div className="project1">
          <img src="./jobs-project.png" alt="Spotify Homepage Clone" />
          <h4>Placify - Jobs & Internships Website</h4>
          <p>
            Built a responsive clone of Spotify’s homepage using HTML5 and CSS3,
            replicating its layout and visual style. Implemented semantic HTML,
            Flexbox, Grid, transitions, positioning, and custom fonts for a
            modern, polished design.
          </p>
          <br></br>
          <p>Tech Stack - HTML, CSS and React.js </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
