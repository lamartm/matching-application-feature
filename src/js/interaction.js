document.getElementById("rotation-id").style.display = "none";

const rotationAnimation = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(360deg)" },
];

const rotationAnimationTiming = {
  duration: 1000,
};

const rotatingPicture = document
  .getElementById("rotation-label")
  .animate(rotationAnimation, rotationAnimationTiming);

rotatingPicture.pause();

const startRotatingPicture = () => {
  rotatingPicture.play();
};

document
  .getElementById("person-info")
  .addEventListener("click", startRotatingPicture);
