/////VARIÁVEIS

const inputData = document.getElementById("data");
const botaoMostrar = document.getElementById("mostrar");
const spamDia = document.getElementById("dia");
const spamMes = document.getElementById("mes");
const spamAno = document.getElementById("ano");
let data;
let dia;
let mes;
let ano;

/////CHAMANDO FUNÇÕES

botaoMostrar.addEventListener("click", mostrarData);

/////DECLARANDO FUNÇÕES

function verificarInputVazio() {
    if (inputData.value == "") {
        alert("Insira uma data!");
    }
}

function definirDiaMesEAno() {
    verificarInputVazio();
    if (!inputData.value == "") {
        data = inputData.value;
        dia = data.slice(8);
        mes = data.slice(5,7);
        ano = data.slice(0,4);
    }
}

function mostrarData() {
    definirDiaMesEAno();
    if (!inputData.value == "") {
        spamDia.textContent = " " + dia;
        spamMes.textContent = " " + mes;
        spamAno.textContent = " " + ano;
    }
    inputData.value = "";
}