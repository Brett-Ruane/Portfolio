import "./Projects.css";
import React from "react";

import spacePic from "../assets/spaceBackground.jpg";
import spaceVideo from "../assets/space.mp4";

function Projects() {
  return (
    <div className="project-body">
      <h1>Project one </h1>
      <p>Project one des</p>
      <p>Tech Stack</p>
      <div className="project-display">
        <picture id="project-pic">
          <source src={spacePic} type="picture/jpg" />
        </picture>
        <video id="project-video" autoPlay loop muted>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Projects;
