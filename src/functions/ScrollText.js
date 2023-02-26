document.addEventListener("scroll", function () {
  // const viewportWidth = document.getElementById("viewport-width");
  // const viewportHeight = document.getElementById("viewport-height");
  // viewportWidth.innerHTML = document.documentElement.clientWidth;
  // viewportHeight.innerHTML = document.documentElement.clientHeight;

  // const topEdge = document.getElementById("top");
  // const bottomEdge = document.getElementById("bottom");
  const bioDesc = document.querySelector(".desc");
  if (bioDesc !== null) {
    const clientHeight = document.documentElement.clientHeight;
    const bioDescY = bioDesc.getBoundingClientRect().y;
    // const bioDescHeight = bioDesc.getBoundingClientRect().height;

    var moving = false;
    if (clientHeight > bioDescY + 500 && moving === false) {
      bioDesc.style.animation = "scroll 60s linear forwards";
      moving = true;
    } else {
      bioDesc.style.animation = "";
      moving = false;
    }
    if (clientHeight > bioDescY + 2500) {
      bioDesc.style.animation = "";
      moving = false;
    }
  }
});
