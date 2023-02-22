import "./Video.css";
import React from "react";
// import { link } from "react-router-dom";

import spaceVideo from "../assets/space.mp4";

function Video() {
  return (
    <div className="movie">
      <video src={spaceVideo} controls="controls" autoplay="true" />
    </div>
  );
}

export default Video;
