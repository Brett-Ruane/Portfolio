import "./Projects.css";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import tiPic from "../assets/tapped-in-pic.png";
import portPic from "../assets/portfolio-pic.png";

function Projects() {
  return (
    <div className="project-wrap">
      <div className="project-body">
        <h1>Tapped in</h1>
        <p>
          **** WINNER - UGA Hacks 8 - Best Use of MongoDB Atlas. <br />
          <br />
          TappedIn is a mobile app that allows you to coordinate events with the
          people around you by making posts that other users in your area can
          see. In the home feed, you can see events that other people have
          posted as well. Events can be categorised by tags, such as gaming,
          business, food, fitness, etc, so that users can quickly filter out
          what they are most interested in.
        </p>
        <p>
          Javascript, MongoDB Atlas, Node.js, React-Native, Expogo, Express.js
          and github
        </p>
        <div className="project-display">
          <Zoom>
            <img src={tiPic} alt="port" width={700} />
          </Zoom>
          <iframe
            width="1903"
            src="https://www.youtube.com/embed/Ljz048jijoA"
            title="TappedIn Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h1>Project two </h1>
        <p>Project two desc</p>
        <p>Tech Stack</p>
        <div className="project-display">
          <Zoom>
            <img src={portPic} alt="port" width={700} />
          </Zoom>
          <iframe
            width="1903"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h1>Project three</h1>
        <p>Project three desc</p>
        <p>Tech Stack</p>
        <div className="project-display">
          <Zoom>
            <img src={portPic} alt="port" width={700} />
          </Zoom>
          <iframe
            width="1903"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
