import "./Bio.css";

function Bio() {
  // const viewportWidth = document.getElementById("viewport-width");
  // const viewportHeight = document.getElementById("viewport-height");
  // viewportWidth.innerHTML = document.documentElement.clientWidth;
  // viewportHeight.innerHTML = document.documentElement.clientHeight;

  // const topEdge = document.getElementById("top");
  // const bottomEdge = document.getElementById("bottom");

  const bioDesc = document.querySelector(".desc");
  document.addEventListener("scroll", function (e) {
    const clientHeight = document.documentElement.clientHeight;
    const bioDescY = bioDesc.getBoundingClientRect().y;
    // const bioDescHeight = bioDesc.getBoundingClientRect().height;

    var scrollBefore = 0;
    var moving = false;
    const scrolled = window.scrollY;

    if (scrollBefore > scrolled) {
      scrollBefore = scrolled;
    } else {
      scrollBefore = scrolled;
      if (clientHeight > bioDescY + 150 && moving === false) {
        bioDesc.style.animation = "scroll 60s linear forwards";
        moving = true;
      }
      if (clientHeight > bioDescY + 2500) {
        bioDesc.style.animation = "";
        moving = false;
      }
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
