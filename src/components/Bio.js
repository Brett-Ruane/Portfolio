import "./Bio.css";

function Bio() {
  // const viewportWidth = document.getElementById("viewport-width");
  // const viewportHeight = document.getElementById("viewport-height");
  // viewportWidth.innerHTML = document.documentElement.clientWidth;
  // viewportHeight.innerHTML = document.documentElement.clientHeight;

  // const topEdge = document.getElementById("top");
  // const bottomEdge = document.getElementById("bottom");

  const bioDesc = document.querySelector(".desc");
  document.addEventListener("scroll", function () {
    const clientHeight = document.documentElement.clientHeight;
    const bioDescY = bioDesc.getBoundingClientRect().y;
    const bioDescHeight = bioDesc.getBoundingClientRect().height;

    if (clientHeight > bioDescY + (bioDescHeight * 1) / 3) {
      bioDesc.style.animation = "scroll 80s linear forwards";
    } else {
    }
  });
  return (
    <body className="starWarsBody">
      <div className="border">
        <div className="desc">
          <h1>Bio</h1>
          <h2>Bio Desc</h2>
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
    </body>
  );
}

export default Bio;
