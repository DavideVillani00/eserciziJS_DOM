const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const output = document.createElement("h1");
output.textContent = 0;
const btnContainer = document.createElement("div");
btnContainer.className = "btnContainer";
container.append(output, btnContainer);
let num1 = "";
let num2 = "";
let operando = "";

const btnArray = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, "C", "=", "+"];
btnArray.forEach((el) => {
  const btn = document.createElement("button");
  btn.innerText = el;
  btnContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    operazioni(btn.textContent);
  });
});

function operazioni(tasto) {
  if (Number(tasto) || tasto == 0) {
    if (!operando) {
      num1 += tasto;
      num1 = Number(num1);
      output.textContent = num1;
    } else {
      num2 += tasto;
      num2 = Number(num2);
      output.textContent = num2;
    }
  } else {
    if (tasto === "C") {
      num1 = "";
      num2 = "";
      operando = "";
      output.textContent = 0;
    }
    if (num2) {
      if (operando === "/") {
        num1 = num1 / num2;
        num2 = "";
        operando = "";
        output.textContent = num1;
      } else if (operando === "*") {
        num1 = num1 * num2;
        num2 = "";
        operando = "";
        output.textContent = num1;
      } else if (operando === "-") {
        num1 = num1 - num2;
        num2 = "";
        operando = "";
        output.textContent = num1;
      } else if (operando === "+") {
        num1 = num1 + num2;
        num2 = "";
        operando = "";
        output.textContent = num1;
      }
    }
    if (num1) {
      operando = tasto;
    }
  }
}
