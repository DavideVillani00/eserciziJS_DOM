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
let operando = false;

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
  console.log(tasto);
  if (Number(tasto)) {
    if (!operando) {
      num1 += tasto;
      num1 = Number(num1);
      output.textContent = num1;
      console.log(operando);
    } else {
      num2 += tasto;
      num2 = Number(num2);
      output.textContent = num2;
      console.log(operando);
    }
  } else {
    operando = true;
    if (num2) {
      switch (tasto) {
        case "/":
          num1 = num1 / num2;
          num2 = "";
          output.textContent = num1;
          break;
        case "*":
          num1 = num1 * num2;
          num2 = "";
          output.textContent = num1;
          break;
        case "-":
          num1 = num1 - num2;
          num2 = "";
          output.textContent = num1;
          break;
        case "+":
          num1 = num1 + num2;
          num2 = "";
          output.textContent = num1;
          break;
        case "C":
          num1 = "";
          num2 = "";
          output.textContent = 0;
          break;

        default:
          break;
      }
    }
  }
}
