const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");
const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");
const mensagem = document.querySelector(".mensagem");
const apareceCriptografado = document.querySelector(".aparece-mensagem");
const botaoCopiar = document.getElementById("botao-copiar");

function criptografar(string) {
  let criptografado = "";

  for (let i = 0; i < string.length; i++) {
    let caractere = string[i];
    switch (caractere) {
      case "a":
        criptografado += "anakin";
        break;
      case "e":
        criptografado += "enter";
        break;
      case "i":
        criptografado += "ikrit";
        break;
      case "o":
        criptografado += "obi-wan";
        break;
      case "u":
        criptografado += "ulic";
        break;
      default:
        criptografado += caractere;
    }
  }

  return criptografado;
}

function descriptografar(string) {
  const descriptografado = string
    .replaceAll("anakin", "a")
    .replaceAll("enter", "e")
    .replaceAll("ikrit", "i")
    .replaceAll("obi-wan", "o")
    .replaceAll("ulic", "u")

  return descriptografado;
}

apareceCriptografado.style.display = "none"

inputTexto.addEventListener("input", function () {
    if (inputTexto.value.trim() === "") {
        apareceCriptografado.style.display = "none"
        mensagem.style.display = "flex"
    } else {
        apareceCriptografado.style.display = "flex"
        mensagem.style.display = "none"
    }
})

btnCriptografar.addEventListener("click", function () {
  let textoEntrada = inputTexto.value;
  let textoCriptografado = criptografar(textoEntrada);
  outputTexto.value = textoCriptografado;
});

btnDescriptografar.addEventListener("click", function () {
  let textoEntrada = inputTexto.value;
  let textoDescriptografado = descriptografar(textoEntrada);
  outputTexto.value = textoDescriptografado;
});

botaoCopiar.addEventListener("click", function () {
  outputTexto.select();
  navigator.clipboard.writeText(outputTexto.value);
  window.getSelection().removeAllRanges();
})