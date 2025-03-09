const input = document.createElement("input");
input.style = "width: 250px";
input.placeholder = "inserisci la lunghezza (default 10)";
const btn = document.createElement("button");
btn.textContent = "Genera";
const output = document.createElement("h1");
output.style = "width: fit-content; padding: 5px; border-radius: 10px";
document.body.append(input, btn, output);

// handle output
output.onmouseover = () => {
  output.style.backgroundColor = "lightgrey";
};
output.onmouseleave = () => {
  output.style.backgroundColor = "transparent";
};

// copied password
output.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    alertCopied();
  } catch (err) {
    alert("impossibile copiare negli appunti");
    console.error(err);
  }
});

function alertCopied() {
  const copiedDiv = document.createElement("div");
  copiedDiv.innerText = "Copiata";
  copiedDiv.style =
    "background-color: lightgrey; padding: 10px; border-radius: 10px; font-size:20px; font-weight: bold; width: fit-content; margin-bottom: 5px";
  output.after(copiedDiv);
  setTimeout(() => {
    copiedDiv.remove();
  }, 1000);
}

// password generator
const charset =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789|!£$%&/()=?^ìé*ç°§[]@#{}";
btn.addEventListener("click", () => {
  let length = 10;
  if (Number(input.value) && Number(input.value > 10 && input.value < 51)) {
    length = input.value;
  }
  input.value = "";
  let password = "";
  for (i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  output.textContent = password;
});
