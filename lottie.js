const animationContainer = document.getElementById("hide");
const animation = lottie.loadAnimation({
  container: animationContainer,
  renderer:'svg',
  loop: false,
  autoplay: false,
  path: 'https://lottie.host/47188d88-352b-45df-bd79-199f404d832e/WFnpQkLRxa.json'
});

document.getElementById("buttonOne").addEventListener('click', function(){
  animation.play()
});