
const totalSignals = 15;
const totalSteps = 3;
let currentStep = 0;

function preloadAssets() {
  for (let i = 1; i <= totalSignals; i++) {
    const img = new Image();
    img.src = `images/signal${i}.png`;
  }
  const audio = new Audio('sounds/bling.mp3');
  audio.load();
}

function playSound() {
  const audio = new Audio('sounds/bling.mp3');
  audio.play();
}

function getRandomImage() {
  const n = Math.floor(Math.random() * totalSignals) + 1;
  return `images/signal${n}.png`;
}

function showSignal() {
  if (currentStep < totalSteps) {
    const img = document.getElementById("signal-img");
    const stepLabel = document.getElementById("step-label");

    img.classList.remove("visible");
    setTimeout(() => {
      img.src = getRandomImage();
      img.classList.add("visible");
      playSound();
    }, 50);

    currentStep++;
    stepLabel.textContent = `Сигнал ${currentStep} из 3`;
  } else {
    document.getElementById("signal-img").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("step-label").classList.add("hidden");
    document.getElementById("overheat").classList.remove("hidden");
  }
}

function restart() {
  currentStep = 0;
  document.getElementById("signal-img").classList.remove("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
  document.getElementById("step-label").classList.remove("hidden");
  document.getElementById("overheat").classList.add("hidden");
  showSignal();
}

document.getElementById("next-btn").addEventListener("click", showSignal);
document.getElementById("restart-btn").addEventListener("click", restart);

window.onload = () => {
  preloadAssets();
  showSignal();
};
