import "./Video.css";
import React from "react";
// import { link } from "react-router-dom";

import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="movie">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
