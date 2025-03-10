const time = document.createElement("h2");
time.textContent = "0 seconds";
const btnStart = document.createElement("button");
btnStart.textContent = "start";
const btnPause = document.createElement("button");
btnPause.textContent = "pause";
const btnStop = document.createElement("button");
btnStop.textContent = "stop";
document.body.append(time, btnStart, btnPause, btnStop);

let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  time.textContent = `${seconds} seconds`;
}, 1000);

btnStart.addEventListener(() => {});
