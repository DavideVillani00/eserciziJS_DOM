const output = document.createElement("h2");
output.textContent = "00:00:00:00";
const input = document.createElement("input");
input.type = "number";

const buttonStart = document.createElement("button");
buttonStart.textContent = "start";
const buttonReset = document.createElement("button");
buttonReset.textContent = "reset";

document.body.append(output, input, buttonStart, buttonReset);
let minutesCount = 0;
let secondsCount = 0;
let houresCount = 0;
let millisecondsCount = 100;
let countdown;

function handleCountdown() {
  countdown = setInterval(() => {
    millisecondsCount--;
    if (minutesCount === 0) {
      minutesCount = 59;
      houresCount--;
    }
    if (secondsCount === 0) {
      secondsCount = 59;
      minutesCount--;
    }
    if (millisecondsCount === 0) {
      millisecondsCount = 100;
      secondsCount--;
    }
    output.textContent = `${houresCount}:${minutesCount}:${secondsCount}:${millisecondsCount}`;
  }, 10);
}
buttonStart.addEventListener("click", () => {
  if (!countdown) {
    minutesCount = Number(input.value);

    houresCount = parseInt(minutesCount / 60);
    minutesCount = minutesCount % 60;
    console.log(houresCount, ":", minutesCount);
    handleCountdown();
  }
});

buttonReset.addEventListener("click", () => {
  if (countdown) {
    minutesCount = 0;
    secondsCount = 0;
    millisecondsCount = 100;
    clearInterval(countdown);
    countdown = null;
    output.textContent = "00:00:00:00";
  }
});
