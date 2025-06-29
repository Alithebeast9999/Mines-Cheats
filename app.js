
const totalSignals = 15;
const totalSteps = 3;
let currentStep = 0;

function getRandomImage() {
  const n = Math.floor(Math.random() * totalSignals) + 1;
  return `images/signal${n}.png`;
}

function showSignal() {
  if (currentStep < totalSteps) {
    const img = document.getElementById("signal-img");
    const stepLabel = document.getElementById("step-label");
    img.src = getRandomImage();
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
window.onload = showSignal;
