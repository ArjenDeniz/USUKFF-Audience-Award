function addAnimation(buttonNumber, animationNumber, path) {
  const buttonX = document.getElementById(buttonNumber);
  const XAnimation = document.getElementById(animationNumber);

  const animItemX = bodymovin.loadAnimation({
    wrapper: XAnimation,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: path,
  });

  buttonX.addEventListener("click", () => {
    XAnimation.classList.remove("hide");
    animItemX.goToAndPlay(0, true);
  });

  animItemX.addEventListener("complete", () => {
    XAnimation.classList.add("hide");
  });
}

addAnimation(
  "buttonOne",
  "lottieAnimation",
  "https://lottie.host/47188d88-352b-45df-bd79-199f404d832e/WFnpQkLRxa.json"
);

