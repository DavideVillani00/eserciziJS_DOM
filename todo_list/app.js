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
    alert("inserisci qualcosa");
    return;
  }
  addTask(inputText);
});

function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.className = "delete";
  btnDelete.style = "margin-left: 10px";

  li.append(btnDelete);
  ul.append(li);

  //   da fare il local storage
  localStorage.setItem("lista", [task, "cia"]);

  btnDelete.addEventListener("click", (el) => {
    li.remove();
  });
}
