/////VARIÁVEIS

let divValoresMedia = document.getElementById("valoresMedia");
let botaoAdicionar = document.getElementById("adicionar");
let notas = [];
let botaoCalcular = document.getElementById("calcular");
let inputNota = document.querySelector("[data-input='nota']");
let somaDasNotas = 0;
let media;
let spanMedia = document.getElementById("media");


/////CHAMANDO FUNÇÕES

botaoAdicionar.addEventListener("click", colocarNotaNoArray);
botaoCalcular.addEventListener("click", mostrarMedia);

/////DECLARANDO FUNÇÕES

function colocarNotaNoArray() {
    let valorNota = inputNota.value;
    validarValorPositivo();
    if (valorNota != "" && converterValorParaNumero(valorNota) >= 0) {
        valorNota = converterValorParaNumero(valorNota);
        notas.push(valorNota);
    }
    console.log(notas);
    inputNota.value = "";
}

function validarValorPositivo() {
    if (inputNota.value < 0) {
        alert("Só podem ser inseridos valores positivos!");
    }
}

function converterValorParaNumero(string) {
    return parseFloat(string);
}

function calcularMedia() {
    somarNotas();
    media = somaDasNotas/notas.length;
    console.log(media);
    return media;
}

function somarNotas() {
    for (let i=0; i < notas.length; i++) {
        somaDasNotas = somaDasNotas + notas[i];
    }
    return somaDasNotas;
}

function mostrarMedia() {
    calcularMedia();
    spanMedia.textContent = media;
}
