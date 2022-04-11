/////VARIÁVEIS

let inputPrimeiroNumero = document.getElementById("primeiro-numero");
let inputSegundoNumero = document.getElementById("segundo-numero");
let inputTerceiroNumero = document.getElementById("terceiro-numero");
let inputQuartoNumero = document.getElementById("quarto-numero");
let inputQuintoNumero = document.getElementById("quinto-numero");
let botaoVerificar = document.getElementById("verificar-maior");
let numeros = [];
let maiorNumero;
let spamResultado = document.getElementById("maior-numero");


/////CHAMANDO FUNÇÕES

botaoVerificar.addEventListener("click", mostrarResultado);

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

    inserirNumerosEmArray(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero);
}

function converterStringParaFloat(string) {
    return parseFloat(string);
}

function inserirNumerosEmArray(numero1, numero2, numero3, numero4, numero5) {
    numeros.push(numero1, numero2, numero3, numero4, numero5);
}

function verificarMaiorNumero() {
    validarInputsVazios();
    maiorNumero = numeros[0];

    for (let i=1; i < numeros.length; i++) {
        maiorNumero = Math.max(maiorNumero,numeros[i]);
    }

    return maiorNumero;
}

function mostrarResultado() {
    verificarMaiorNumero();
    spamResultado.textContent = " " + maiorNumero;
}