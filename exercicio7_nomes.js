/////VARIÁVEIS

const inputNome = document.getElementById("nome");
const botaoAdicionar = document.getElementById("adicionar");
const botaoMostrar = document.getElementById("mostrar");
const spamResultado = document.getElementById("invertido");
let nomes = [];

/////CHAMANDO FUNÇÕES

botaoAdicionar.addEventListener("click", reordenarListaDeNomes);
botaoMostrar.addEventListener("click", mostrarListaDeNomesInvertida);

/////DECLARANDO FUNÇÕES

function verificarInputVazio() {
    if (inputNome.value == "") {
        alert("Insira um nome!");
        return false;
    }

    return true;
}

function colocarNomesNaLista() {
    let validado = verificarInputVazio();

    if (validado == true) {
        nomes.push(inputNome.value);
        inputNome.value = "";
    }
    console.log(nomes);
}

function reordenarListaDeNomes() {
    colocarNomesNaLista();
    nomes.reverse();
    return nomes;
}

function mostrarListaDeNomesInvertida() {
    invertido.textContent = " " + nomes;
}