const cajaTextarea = document.querySelector(".caja-textarea");
const notMessageFound = document.querySelector(".contenedor-parrafo");
const result = document.querySelector("#result");
const muneco = document.querySelector(".image-muneco");

//                 Encrypt button function            \\
const btnEncrypt = document.querySelector(".button-encriptar");
btnEncrypt.addEventListener("click", () => encrypt(cajaTextarea.value));
notMessageFound.style.display = "none";

function encrypt(textEnter) {
  let textEncrypted = "";
  textEnter = textEnter.toLowerCase();
  muneco.style.display = "none";

  textEncrypted = [["e", "enter"],["a", "ai"],["i", "imes"],["o", "ober"],["u", "ufat"]];

  for (let i = 0; i < textEncrypted.length; i++) {
    if (textEnter.includes(textEncrypted[i][0])) {
      textEnter = textEnter.replaceAll(textEncrypted[i][0], textEncrypted[i][1]);
    }  
  }
  
  result.textContent = textEnter;
  
  if (!textEnter) {
    notMessageFound.style.display = "unset";
    notTextFound.style.display = "none";
    muneco.style.display = "unset";
    setTimeout(() => {
      notMessageFound.style.display = "none";
      muneco.style.display = "unset";
    }, 2000);
  
  }

  if (textEnter) btnEncrypt.innerText = "Encrypted";
  setTimeout(() => {
    btnEncrypt.innerText = "Encrypt";
  }, 2000);
  
  cajaTextarea.value = "";
}

cajaTextarea.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    encrypt(cajaTextarea.value);
  }
});



//////////////////////////////// Decrypt button function \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const btnDecrypt = document.querySelector(".button-desencriptar");
btnDecrypt.addEventListener("click", () => decrypt(cajaTextarea.value));

function decrypt(textEnter) {
  let textEncrypted = textEnter;
  muneco.style.display = "none";

  if (!textEncrypted) {
    notMessageFound.style.display = "unset";
    notTextFound.style.display = "none";
    muneco.style.display = "unset";
    
    setTimeout(() => {
      notMessageFound.style.display = "none";
      muneco.style.display = "unset";
      
    }, 2000);
    return;
  }

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
  muneco.style.display = "unset";
  if (!copyText.textContent) {
    notTextFound.style.display = "unset";
    notMessageFound.style.display = "none";
    muneco.style.display = "none";
    setTimeout(() => {
      notTextFound.style.display = "none"; 
      muneco.style.display = "unset";
    }, 2000);

    return;
  }

  navigator.clipboard.writeText(copyText.textContent);
  copyText.textContent = "";
  btnCopy.innerText = "Copied";
  setTimeout(() => {
    btnCopy.innerText = "Copy";
  }, 2000);


  


}
