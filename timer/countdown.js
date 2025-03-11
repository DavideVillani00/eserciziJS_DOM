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
let secondsCount = 60;
let millisecondsCount = 100;
let countdown;
function handleCountdown() {
  countdown = setInterval(() => {
    millisecondsCount--;
    if (millisecondsCount === 0) {
      millisecondsCount = 100;
      secondsCount--;
    }
    if (secondsCount === 0) {
      secondsCount = 60;
      minutesCount--;
    }
    output.textContent = `${minutesCount}:${secondsCount}:${millisecondsCount}`;
  }, 10);
}
buttonStart.addEventListener("click", () => {
  if (!countdown) {
    minutesCount = Number(input.value);
    console.log(minutesCount % 60);
    handleCountdown();
  }
});

buttonReset.addEventListener("click", () => {
  if (countdown) {
    minutesCount = 0;
    secondsCount = 60;
    millisecondsCount = 100;
    clearInterval(countdown);
    countdown = null;
    output.textContent = "00:00:00:00";
  }
});
