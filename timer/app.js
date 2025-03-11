const output = document.createElement("h2");
output.textContent = "00:00:00:00";
const btnStart = document.createElement("button");
btnStart.textContent = "start";
const btnStandBy = document.createElement("button");
btnStandBy.textContent = "pause";
const btnReset = document.createElement("button");
btnReset.textContent = "reset";
const input = document.createElement("input");
input.type = "number";
input.style.display = "block";
document.body.append(output, input, btnStart, btnStandBy, btnReset);

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let start = null;

function formatting(value) {
  return value.toString().padStart(2, "0");
}

function handleTimer() {
  timer = setInterval(() => {
    console.log("timer");
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
    output.textContent = `${formatting(hours)}:${formatting(
      minutes
    )}:${formatting(seconds)}:${formatting(milliseconds)}`;
  }, 10);
}

function handleCountdown() {
  timer = setInterval(() => {
    console.log("count");
    milliseconds--;
    if (milliseconds === 0) {
      milliseconds = 99;
      seconds--;
    }
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes === 0) {
      minutes = 59;
      hours--;
    }
    output.textContent = `${formatting(hours)}:${formatting(
      minutes
    )}:${formatting(seconds)}:${formatting(milliseconds)}`;
  }, 10);
}

btnStart.addEventListener("click", () => {
  if (!timer && !start) {
    if (input.value) {
      start = "countdown";
      minutes = Number(input.value);
      hours = parseInt(minutes / 60);
      minutes = minutes % 60;
      seconds = 59;
      milliseconds = 99;
      handleCountdown();
    } else {
      start = "timer";
      milliseconds = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      handleTimer();
    }
  }
});

btnStandBy.addEventListener("click", () => {
  if (timer && start) {
    btnStandBy.textContent = "resume";
    clearInterval(timer);
    timer = null;
  } else if (!timer && start) {
    btnStandBy.textContent = "pause";
    if (start === "timer") {
      handleTimer();
    } else if (start === "countdown") {
      handleCountdown();
    }
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  start = null;
  input.value = "";
  btnStandBy.textContent = "pause";
  output.textContent = "00:00:00:00";
});
