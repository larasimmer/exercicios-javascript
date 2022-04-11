/////VARIÁVEIS

let inputPrimeiroNumero = document.getElementById("primeiro-numero");
let inputSegundoNumero = document.getElementById("segundo-numero");
let inputTerceiroNumero = document.getElementById("terceiro-numero");
let inputQuartoNumero = document.getElementById("quarto-numero");
let inputQuintoNumero = document.getElementById("quinto-numero");
let botaoCalcular = document.getElementById("calcular");
let quadrados = [];
let spamResultado = document.getElementById("quadrado");

/////CHAMANDO FUNÇÕES

botaoCalcular.addEventListener("click", mostrarResultado);

/////DECLARANDO FUNÇÕES

function validarInputsVazios() {
    let primeiroNumero = inputPrimeiroNumero.value;
    let segundoNumero = inputSegundoNumero.value;
    let terceiroNumero = inputTerceiroNumero.value;
    let quartoNumero = inputQuartoNumero.value;
    let quintoNumero = inputQuintoNumero.value;

    if (primeiroNumero == "" || segundoNumero == "" || terceiroNumero == "" || quartoNumero == "" || quintoNumero == "") {
        alert("Todos os campos devem estar preenchidos!");
    };

}

function converterStringParaFloat(string) {
    return parseFloat(string);
}

function calcularQuadrados() {
    validarInputsVazios();
    let quadradoPrimeiroNumero = Math.pow(converterStringParaFloat(inputPrimeiroNumero.value), 2);
    let quadradoSegundoNumero = Math.pow(converterStringParaFloat(inputSegundoNumero.value), 2);
    let quadradoTerceiroNumero = Math.pow(converterStringParaFloat(inputTerceiroNumero.value), 2);
    let quadradoQuartoNumero = Math.pow(converterStringParaFloat(inputQuartoNumero.value), 2);
    let quadradoQuintoNumero = Math.pow(converterStringParaFloat(inputQuintoNumero.value), 2);

    quadrados.push(quadradoPrimeiroNumero, quadradoSegundoNumero, quadradoTerceiroNumero, quadradoQuartoNumero, quadradoQuintoNumero);
}

function mostrarResultado() {
    calcularQuadrados();
    spamResultado.textContent = " " + quadrados;
}