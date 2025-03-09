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

// password generator
const charset = [
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789|!£$%&/()=?^ìé*ç°§[]@#{}",
];

btn.addEventListener("click", () => {
  let length = 10;
  if (Number(input.value) && Number(input.value > 10)) {
    length = input.value;
  }
  input.value = "";
  let password = "";
  console.log(charset[0][84]);
  for (i = 0; i < length; i++) {
    let char = 85;
    while (char < 0 || char > 84) {
      char = Math.round(Math.random() * 100);
    }
    password += charset[0][char];
  }
  output.textContent = password;
});
