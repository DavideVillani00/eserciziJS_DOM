const meno = document.createElement("button");
meno.textContent = "-";
meno.style =
  "background-color: rgba(255,0,0,0.2); font-size:30px; border: none; border-radius: 10px; width: 100px";
const piu = document.createElement("button");
piu.textContent = "+";
piu.style =
  "background-color: rgba(0,255,0,0.2); font-size:30px; border: none; border-radius: 10px; width: 100px";
const numero = document.createElement("h1");
let numeroTot = 0;
numero.textContent = numeroTot;

document.body.append(meno, numero, piu);

meno.addEventListener("click", () => {
  if (numeroTot > 0) {
    numeroTot--;
    numero.textContent = numeroTot;
    numero.style = "color: red";
  }
});
piu.addEventListener("click", () => {
  numeroTot++;
  numero.textContent = numeroTot;
  numero.style = "color: green";
});
