const cajaTextarea = document.querySelector(".caja-textarea");
const notMessageFound = document.querySelector(".contenedor-parrafo");
const parrafoResultado = document.querySelector("#result");



//                 Decrypt button function            \\

const btnEncrypt = document.querySelector(".button-encriptar");
btnEncrypt.addEventListener("click", () => encrypt(cajaTextarea.value));
notMessageFound.style.display = "none";

function encrypt(textEnter) {
  let textEncrypted = "";

  textEnter = textEnter.toLowerCase();

  if (!textEnter) {
    notMessageFound.style.display = "unset";
  }

  setTimeout(() => {
    notMessageFound.style.display = "none";
  }, 2000);

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

  if (textEnter) btnEncrypt.innerText = "Encrypted";
  setTimeout(() => {
    btnEncrypt.innerText = "Encrypt";
  }, 2000);

  cajaTextarea.value = "";
}

//                 Decrypt button function            \\

const btnDecrypt = document.querySelector(".button-desencriptar");
btnDecrypt.addEventListener("click", () => decrypt(cajaTextarea.value));

function decrypt(textEnter) {
  let textEncrypted = textEnter;

  if (!textEncrypted) {
    notMessageFound.style.display = "unset";
  }

  setTimeout(() => {
    notMessageFound.style.display = "none";
  }, 2000);

  let textDecrypted = textEncrypted
    .replaceAll("enter", "e")
    .replaceAll("ai", "a")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.querySelector("#result").textContent = textDecrypted;

  if (textEnter) btnDecrypt.innerText = "Decrypted";
  setTimeout(() => {
    btnDecrypt.innerText = "Decrypt";
  }, 2000);

  cajaTextarea.value = "";
}

//                 Copy button function            \\

const btnCopy = document.querySelector(".button-copiar");
btnCopy.addEventListener("click", () => copyText(cajaTextarea.value));
const notTextFound = document.querySelector(".contenedor-parrafo-2");
notTextFound.style.display = "none";

function copyText() {
  let copyText = document.querySelector("#result");

  setTimeout(() => {
    notTextFound.style.display = "none";
  }, 2000);

  if (!copyText.textContent) {
    return (notTextFound.style.display = "unset");
  }

  navigator.clipboard.writeText(copyText.textContent);

  btnCopy.innerText = "Copied";
  setTimeout(() => {
    btnCopy.innerText = "Copy";
  }, 2000);
}
