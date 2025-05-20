import "./Projects.css";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import tiPic from "../assets/tapped-in-pic.png";
import ePic from "../assets/ebook.png";
import sf1 from "../assets/sf.jpg";
import sf2 from "../assets/sf2.jpg";
import portPic from "../assets/new-port-pic.png";
import blackjack1 from "../assets/blackjackjavafx.png";
import blackjack2 from "../assets/blackjackjavafx2.png";
import blackjack3 from "../assets/blackjackjda.png";
import tracking1 from "../assets/tracking.png";
import tracking2 from "../assets/tracking2.png";

function Projects() {
  return (
    <div className="project-wrap">
      <div className="project-body">
        <h1
          className="titles-for-sections"
          style={{ fontSize: 70, color: "#381010" }}
        >
          Work Experience
        </h1>
        <p>
          ROBINS AIR FORCE BASE 402d Software Group - June 2024 to July 2024
          (8-week intern program) <br />
          <br />- Learned all about the MIL-STD 1553 and how it works with the
          Operational Flight Program (OFP)
          <br /> - Worked on a Scaled Agile Framework (SAFe) team to develop the
          OFP <br />- Active Secret Security Clearance (Granted in June 2024)
        </p>
        <h1
          className="titles-for-sections"
          style={{ fontSize: 70, color: "#381010" }}
        >
          Cryptography
        </h1>
        <h1 style={{ textIndent: "2rem" }}>Pohlig Hellman Algorithm</h1>
        <h1 style={{ textIndent: "5rem" }}>
          <a
            href="https://github.com/Brett-Ruane/Pohlig_Hellman_algorithm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
        <h1 style={{ textIndent: "2rem" }}>Padding oracle Attack AES CBC</h1>
        <h1 style={{ textIndent: "5rem" }}>
          <a
            href="https://github.com/Brett-Ruane/padding_oracle_attack_AES_CBC"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
        <h1
          className="titles-for-sections"
          style={{ fontSize: 70, color: "#381010" }}
        >
          Projects
        </h1>
        <h1>Tapped in</h1>
        <h1>
          <a
            href="https://github.com/Brett-Ruane/TappedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
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
        <h1>Cinema E-Booking Term Project</h1>
        <h1>
          <a
            href="https://github.com/Brett-Ruane/Cinema-E-Booking"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
        <p>
          <br />- A team of 5 working on it as our term project for Software
          Engineering (CSCI 4050).
          <br /> - I am responsible for creating all of the backend and
          implementing design patterns.
        </p>
        <p>JavaScript, Node.js, React.js, Git, Java, Java Spring Boot, MySQL</p>
        <div className="project-display">
          <Zoom>
            <img src={ePic} alt="port" width={700} />
          </Zoom>
          <iframe
            width="1903"
            src="https://www.youtube.com/embed/bjo-rn8R_4k"
            title="Ebooking Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h1>SuperFriends Ai</h1>
        <h1>
          <a
            href="https://github.com/Brett-Ruane/UGAHacks9-Chat-Public"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
        <p>
          UGA Hacks 9 <br />
          <br />
          - SuperFriends is an AI-based chat project that allows the user to
          talk to any available heroes. <br />
          - It generates an image based on the selected hero. <br />
          - Collaborated with a team to develop. <br />- Constructed the
          Cloudflare AI gateways and workers to communicate with Open AI.
        </p>
        <p>TypeScript, Cloudflare, Node.js, React, Open AI, Git</p>
        <div className="project-display">
          <Zoom>
            <img src={sf1} alt="port" width={700} />
          </Zoom>
          <Zoom>
            <img src={sf2} alt="port" width={700} />
          </Zoom>
        </div>
        <h1>Never Eat Alone</h1>
        <p>Application to help employees have lunch with clients</p>
        <p>JavaScript, Node.js, React, Google Maps' API, Git</p>
        <div className="project-display">
          <Zoom>
            <img src={tracking1} alt="port" width={700} />
          </Zoom>
          <Zoom>
            <img src={tracking2} alt="port" width={700} />
          </Zoom>
        </div>
        <h1>This Website</h1>
        <h1>
          <a
            href="https://github.com/Brett-Ruane/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h1>
        <p>
          This is one of my first react websites <br></br>Improving day after
          day.
        </p>
        <p>JavaScript, Node.js, React, Git</p>
        <div className="project-display">
          <Zoom>
            <img src={portPic} alt="port" width={700} />
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
