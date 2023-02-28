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
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
