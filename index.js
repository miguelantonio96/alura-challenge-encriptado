// let e = "enter";
// let i = "imes";
// let a = "ai";
// let o = "ober";
// let u = "ufat";

const cajaTexto = document.querySelector(".caja-textarea");
const notMessageFound = document.querySelector(".contenedor-parrafo");
const EnterMessage = document.querySelector("contenedor-resultado");

const parrafoResultado = document.querySelector("#result");
notMessageFound.style.display = "none";

const btnCopy = document.querySelector(".button-copiar");
const btnEncrypt = document.querySelector(".button-encriptar");

//Copy function
btnCopy.addEventListener("click", () => copyText(cajaTexto.value));

btnEncrypt.addEventListener("click", () => encrypt(cajaTexto.value));

//Encriptar función
function encrypt(textEnter) {
  let textEncrypted = "";

  if (!textEnter) {
    notMessageFound.style.display = "unset";
  } else {
    notMessageFound.style.display = "none";
  }

  for (let i = 0; i < textEnter.length; i++) {
    if (textEnter[i] === "a") {
      textEncrypted += "ai";
    } else if (textEnter[i] === "e") {
      textEncrypted += "enter";
    } else if (textEnter[i] === "i") {
      textEncrypted += "imes";
    } else if (textEnter[i] === "o") {
      textEncrypted += "ober";
    } else if (textEnter[i] === "u") {
      textEncrypted += "ufat";
    } else {
      textEncrypted += textEnter[i];
    }
  }

  parrafoResultado.textContent = textEncrypted;
}

const btnDecrypt = document.querySelector(".button-desencriptar");
btnDecrypt.addEventListener("click", () => decrypt());

// Decrypt function
function decrypt(textEnter) {
  let textEncrypted =
    textEnter || document.querySelector(".caja-textarea").value;
  let textDecrypted = textEncrypted
    .replaceAll("enter", "e")
    .replaceAll("ai", "a")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.querySelector("#result").textContent = textDecrypted;
}

// copy button;
function copyText() {
  let copyText = document.querySelector("#result");
  navigator.clipboard.writeText(copyText.textContent);

  btnCopy.innerText = "Copied";
  setTimeout(() => {
    btnCopy.innerText = "Copy";
  }, 1000);
}
