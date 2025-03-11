const time = document.createElement("h2");
time.textContent = "00:00:00:00";
const btnStart = document.createElement("button");
btnStart.textContent = "start";
const btnStandBy = document.createElement("button");
btnStandBy.textContent = "pause";
const btnReset = document.createElement("button");
btnReset.textContent = "reset";
document.body.append(time, btnStart, btnStandBy, btnReset);
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let start = false;

function handleTimer() {
  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    time.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "0")}`;
  }, 10);
}

btnStart.addEventListener("click", () => {
  if (!timer && !start) {
    start = true;
    handleTimer();
  }
});

btnStandBy.addEventListener("click", () => {
  if (timer && start) {
    btnStandBy.textContent = "resume";
    clearInterval(timer);
    timer = null;
  } else if (!timer && start) {
    btnStandBy.textContent = "pause";
    handleTimer();
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  start = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  btnStandBy.textContent = "pause";
  time.textContent = "00:00:00:00";
});
