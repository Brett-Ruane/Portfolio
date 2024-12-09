import "./Video.css";
import { React, useRef } from "react";

import spaceVideo from "../assets/space.mp4";

function Video() {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.68;
  };
  return (
    <div className="movie">
      <video
        id="space"
        autoPlay
        loop
        muted
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
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

// import "./Video.css";
// import React from "react";
// import spaceBackground from "../assets/spaceBackground.jpg";

// function Video() {
//   return (
//     <div
//       className="movie"
//       style={{
//         backgroundImage: `url(${spaceBackground})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <div className="content">
//         <h1>Brett Ruane</h1>
//       </div>
//     </div>
//   );
// }

// export default Video;
