import "./Bio.css";
import "../functions/ScrollText.js";

// import spaceBackground from "../assets/spaceBackground.jpg";

function Bio() {
  return (
    <div className="starWarsBody">
      <div className="border">
        {/* <picture className="spaceBackground">
          <source src={spaceBackground} type="picture/jpg" />
        </picture> */}
        <div className="desc">
          <h1>Brett Ruane</h1>
          <h2>UGA Class of 2025</h2>
          <p>
            I am a computer science student at the University of Georgia. I
            simply just love to code. I enjoy learning about new technologies
            and different ways to interact with computers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
