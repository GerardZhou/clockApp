function updateClock() {
  const timer = new Date();

  document.getElementById("clock").textContent = timer.toLocaleTimeString();
}

setInterval(updateClock, 1000);
