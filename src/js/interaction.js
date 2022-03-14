document.getElementById("rotation-id").style.display = "none";

const rotation = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(360deg)" },
];

const rotationTiming = {
  duration: 1000,
};

const rotatingPicture = document
  .getElementById("rotation-label")
  .animate(rotation, rotationTiming);

rotatingPicture.pause();

const startRotatingPicture = () => {
  rotatingPicture.play();
};

document
  .getElementById("person-info")
  .addEventListener("click", startRotatingPicture);
