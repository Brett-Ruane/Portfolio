import "./Projects.css";
import React from "react";

import spaceVideo from "../assets/space.mp4";
import portPic from "../assets/portfolio-pic.jpg";

function Projects() {
  return (
    <div className="project-body">
      <p>Project 1</p>
      <p>Project 1 desc -----------</p>
      <div className="project-display">
        <picture className="project-1-picture">
          <source src={spacePic} type="picture/png" />
        </picture>
        <video id="space" autoPlay loop muted>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Projects;
