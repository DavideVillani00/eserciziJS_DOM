// dialog
const dialog = document.createElement("dialog");
const h1 = document.createElement("h1");
h1.innerText = "OPS Qualcosa è andato storto...";
const p = document.createElement("p");
p.innerText =
  "ricorati di inserire una task prima di premere il tasto 'aggiungi'";
const btnOk = document.createElement("button");
btnOk.innerText = "Okey";

dialog.append(h1, p, btnOk);
document.body.appendChild(dialog);

btnOk.addEventListener("click", () => {
  dialog.close();
});

// imput e lista
const input = document.createElement("input");
const button = document.createElement("input");
const ul = document.createElement("ul");
input.type = "text";
input.placeholder = "inserisci una task";
button.type = "button";
button.value = "aggiungi";
document.body.append(input, button, ul);

button.addEventListener("click", () => {
  const inputText = input.value;
  input.value = "";
  if (!inputText.trim()) {
    dialog.showModal();
    return;
  }
  addTaskToArray(inputText);
});

let arrayLista = getArrayFromLocalStorage();
loadUl();

// funzioni
function getArrayFromLocalStorage() {
  const arrayLocalStorage = localStorage.getItem("lista");
  return arrayLocalStorage ? JSON.parse(arrayLocalStorage) : [];
}
function loadUl() {
  ul.innerHTML = "";
  arrayLista.forEach((el, index) => {
    const li = document.createElement("li");
    li.innerText = el;
    const btnDelete = document.createElement("button");
    btnDelete.style = "margin-left:10px";
    btnDelete.innerText = "Delete";

    li.appendChild(btnDelete);
    ul.appendChild(li);

    btnDelete.addEventListener("click", () => {
      deleteTaskToArray(index);
    });
  });
}

function addTaskToArray(task) {
  arrayLista.push(task);
  localStorage.setItem("lista", JSON.stringify(arrayLista));
  loadUl();
}

function deleteTaskToArray(index) {
  const newArray = arrayLista.filter((_, elIndex) => elIndex != index);
  arrayLista = newArray;
  localStorage.setItem("lista", JSON.stringify(arrayLista));
  loadUl();
}
