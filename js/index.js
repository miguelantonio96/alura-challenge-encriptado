const cajaTextarea = document.querySelector(".caja-textarea");
const notMessageFound = document.querySelector(".contenedor-parrafo");
const EnterMessage = document.querySelector("contenedor-resultado");

const parrafoResultado = document.querySelector("#result");
notMessageFound.style.display = "none";

const btnCopy = document.querySelector(".button-copiar");
btnCopy.addEventListener("click", () => copyText(cajaTextarea.value));

//Encriptar función
const btnEncrypt = document.querySelector(".button-encriptar");
btnEncrypt.addEventListener("click", () => encrypt(cajaTextarea.value));

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

  btnEncrypt.innerText = "Encrypted";
  setTimeout(() => {
    btnEncrypt.innerText = "Encrypt";
  }, 1000);
}

// Decrypt function
const btnDecrypt = document.querySelector(".button-desencriptar");
btnDecrypt.addEventListener("click", () => decrypt(cajaTextarea.value));

function decrypt(textEnter) {
  let textEncrypted =
    textEnter || document.querySelector(".caja-textarea").value;
  if (!textEncrypted) {
    notMessageFound.style.display = "unset";
  } else {
    notMessageFound.style.display = "none";
  }
  let textDecrypted = textEncrypted
    .replaceAll("enter", "e")
    .replaceAll("ai", "a")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.querySelector("#result").textContent = textDecrypted;

  btnDecrypt.innerText = "Decrypted";
  setTimeout(() => {
    btnDecrypt.innerText = "Decrypt";
  }, 1000);
}

// copy function;
function copyText() {
  let copyText = document.querySelector("#result");
  if (!copyText.textContent) {
    return notMessageFound.style.display = "unset";
  } else {
    notMessageFound.style.display = "none";
  }

  navigator.clipboard.writeText(copyText.textContent);

  btnCopy.innerText = "Copied";
  setTimeout(() => {
    btnCopy.innerText = "Copy";
  }, 1000);
}
