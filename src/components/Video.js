import "./Video.css";
import React from "react";
// import { link } from "react-router-dom";

import spaceVideo from "../assets/space.mp4";

function Video() {
  // const videoRef = useRef();
  // const setPlayBack = () => {
  //   videoRef.current.playbackRate = 0.75;
  // };
  return (
    <div className="movie">
      <video
        id="space"
        // autoPlay
        // loop
        muted
        // ref={videoRef}
        // onCanPlay={() => setPlayBack()}
      >
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Brett Ruane</h1>
      </div>
    </div>
  );
}

export default Video;
