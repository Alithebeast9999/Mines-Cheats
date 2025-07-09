
const totalSignals = 15;
const totalSteps = 3;
let currentStep = 0;

const signalImg = document.getElementById("signal-img");
const stepLabel = document.getElementById("step-label");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const overheat = document.getElementById("overheat");
const loader = document.getElementById("loader");
const container = document.querySelector(".container");

function preloadAssets() {
  for (let i = 1; i <= totalSignals; i++) {
    const img = new Image();
    img.src = `images/signal${i}.png`;
  }
  new Audio('sounds/bling.mp3').load();
  new Audio('sounds/click.mp3').load();
  new Audio('sounds/overheat.mp3').load();
}

function playSound(file) {
  const audio = new Audio(file);
  audio.play();
}

function getRandomImage() {
  const n = Math.floor(Math.random() * totalSignals) + 1;
  return `images/signal${n}.png`;
}

function showSignal() {
  if (currentStep < totalSteps) {
    signalImg.classList.remove("visible");
    setTimeout(() => {
      signalImg.src = getRandomImage();
      signalImg.classList.add("visible");
      playSound("sounds/bling.mp3");
    }, 50);

    currentStep++;
    stepLabel.textContent = `Сигнал ${currentStep} из 3`;
    playSound("sounds/click.mp3");
  } else {
    signalImg.classList.add("hidden");
    nextBtn.classList.add("hidden");
    stepLabel.classList.add("hidden");
    overheat.classList.remove("hidden");
    playSound("sounds/overheat.mp3");
  }
}

function restart() {
  currentStep = 0;
  signalImg.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  stepLabel.classList.remove("hidden");
  overheat.classList.add("hidden");
  showSignal();
  playSound("sounds/click.mp3");
}

nextBtn.addEventListener("click", showSignal);
restartBtn.addEventListener("click", restart);

window.onload = () => {
  preloadAssets();
  setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "flex";
    showSignal();
  }, 1000);
};
