import "./Projects.css";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import tiPic from "../assets/tapped-in-pic.png";
import portPic from "../assets/portfolio-pic.png";
import blackjack1 from "../assets/blackjackjavafx.png";
import blackjack2 from "../assets/blackjackjavafx2.png";
import blackjack3 from "../assets/blackjackjda.png";
import tracking1 from "../assets/tracking.png";
import tracking2 from "../assets/tracking2.png";

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
        <h1>This Website</h1>
        <p>This is one of my first react websites</p>
        <p>JavaScript, Node.js, React, Git</p>
        <div className="project-display">
          <Zoom>
            <img src={portPic} alt="port" width={700} />
          </Zoom>
        </div>
        <h1>Name in Progress</h1>
        <p>Application to help employees have lunch with clients</p>
        <p>JavaScript, Node.js, React/react-native, APIs(secret), Git</p>
        <div className="project-display">
          <Zoom>
            <img src={tracking1} alt="port" width={700} />
          </Zoom>
          <Zoom>
            <img src={tracking2} alt="port" width={700} />
          </Zoom>
        </div>
        <h1>Black Jack Versions</h1>
        <p>
          Difference ways i have made blackjack early in my coding career.
          Javafx version and a discord bot. Discord changed how images worked
          after i made my discord bot, so the pictures are messed up.
        </p>
        <p>Java, JavaFx, JDA, Maven, Git</p>
        <div className="project-display">
          <Zoom>
            <img src={blackjack1} alt="port" width={700} />
          </Zoom>
          <Zoom>
            <img src={blackjack2} alt="port" width={700} />
          </Zoom>
          <Zoom>
            <img src={blackjack3} alt="port" width={700} />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Projects;
