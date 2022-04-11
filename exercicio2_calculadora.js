/////VARIÁVEIS

let inputPrimeiroNumero = document.getElementById("primeiro-numero");
let inputSegundoNumero = document.getElementById("segundo-numero");
let botaoSomar = document.getElementById("somar");
let botaoSubtrair = document.getElementById("subtrair");
let botaoMultiplicar = document.getElementById("multiplicar");
let botaoDividir = document.getElementById("dividir");
let botaoPotencia = document.getElementById("potencia");
let resultado;
let spamResultado = document.getElementById("resultado");
let botaoIgual = document.getElementById("igual");

/////CHAMANDO FUNÇÕES

botaoSomar.addEventListener("click", somarNumeros);
botaoSubtrair.addEventListener("click", subtrairNumeros);
botaoMultiplicar.addEventListener("click", multiplicarNumeros);
botaoDividir.addEventListener("click", dividirNumeros);
botaoPotencia.addEventListener("click", elevarNumeros);
botaoIgual.addEventListener("click", mostrarResultado);

/////DECLARANDO FUNÇÕES

function validarInputsVazios() {
    let valorPrimeiroNumero = inputPrimeiroNumero.value;
    let valorSegundoNumero = inputSegundoNumero.value;
    if (valorPrimeiroNumero == "" || valorSegundoNumero == "") {
        alert("Insira dois valores antes de realizar o cálculo");
    };
}

function converterStringParaFloat(string) {
    return parseFloat(string);
}

function somarNumeros() {
    validarInputsVazios();
    resultado = converterStringParaFloat(inputPrimeiroNumero.value) + converterStringParaFloat(inputSegundoNumero.value);
}

function subtrairNumeros() {
    validarInputsVazios();
    resultado = converterStringParaFloat(inputPrimeiroNumero.value) - converterStringParaFloat(inputSegundoNumero.value);
}

function multiplicarNumeros() {
    validarInputsVazios();
    resultado = converterStringParaFloat(inputPrimeiroNumero.value) * converterStringParaFloat(inputSegundoNumero.value);
}

function dividirNumeros() {
    validarInputsVazios();
    if (inputSegundoNumero.value != 0) {
        resultado = converterStringParaFloat(inputPrimeiroNumero.value) / converterStringParaFloat(inputSegundoNumero.value);
    } else {
        alert("Não é possível dividir um número por zero!");
    };
}

function elevarNumeros() {
    validarInputsVazios();
    resultado = Math.pow(converterStringParaFloat(inputPrimeiroNumero.value),converterStringParaFloat(inputSegundoNumero.value));
}

function mostrarResultado() {
    spamResultado.textContent = " " + resultado;
}