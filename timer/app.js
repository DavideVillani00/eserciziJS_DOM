const output = document.createElement("h2");
output.textContent = "00:00:00:00";
const btnStart = document.createElement("button");
btnStart.textContent = "start";
const btnStandBy = document.createElement("button");
btnStandBy.textContent = "pause";
const btnReset = document.createElement("button");
btnReset.textContent = "reset";
const text = document.createElement("label");
text.textContent = "Inserisci i minuti per effettuare un countdown";
text.htmlFor = "input";

const input = document.createElement("input");
input.id = "input";
input.type = "number";
input.style = "display: block; margin-top: 10px";
document.body.append(output, text, input, btnStart, btnStandBy, btnReset);

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
    milliseconds--;
    if (milliseconds === 0 && seconds > 0) {
      milliseconds = 99;
      seconds--;
    }
    if (seconds === 0 && minutes > 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes === 0 && hours > 0) {
      minutes = 59;
      hours--;
    }
    output.textContent = `${formatting(hours)}:${formatting(
      minutes
    )}:${formatting(seconds)}:${formatting(milliseconds)}`;
    if (milliseconds < 0) {
      alert("FINE");
      handleReset();
    }
  }, 10);
}

btnStart.addEventListener("click", () => {
  if (!timer && !start) {
    if (input.value) {
      start = "countdown";
      minutes = Number(input.value);
      hours = parseInt(minutes / 60);
      minutes = minutes % 60 != 0 ? (minutes % 60) - 1 : minutes % 60;
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

btnReset.addEventListener("click", handleReset);

function handleReset() {
  clearInterval(timer);
  timer = null;
  start = null;
  input.value = "";
  btnStandBy.textContent = "pause";
  output.textContent = "00:00:00:00";
}
