/////VARIÁVEIS

let inputNome = document.getElementById("nome");
let inputIdade = document.getElementById("idade");
let botaoAdicionar = document.getElementById("adicionar");
let listaDeNomes = [];
let listaDeIdades = [];
let listaDeNomesEIdades = [listaDeNomes, listaDeIdades];
let pessoasMaioresDeIdade = [];
let pessoasMenoresDeIdade = [];
let idadeConvertida;
let divNomesEIdades = document.getElementById("lista-nomes-idades");
let spamMaiores = document.getElementById("resultado-maiores");
let spamMenores = document.getElementById("resultado-menores");
let spamQuantidadeMaiores = document.getElementById("quantidade-maiores");
let spamQuantidadeMenores = document.getElementById("quantidade-menores");
let botaoVerificar = document.getElementById("verificar");

/////CHAMANDO FUNÇÕES

botaoAdicionar.addEventListener("click", verificarMaioridade);
botaoVerificar.addEventListener("click", mostrarResultado);

/////DECLARANDO FUNÇÕES

function validarInputsVazios() {
    let nome = inputNome.value;
    let idade = inputIdade.value;

    if (idade < 0) {
        alert ("A idade deve ser um número positivo!");
    } if (nome == "" || idade == "") {
        alert ("Insira o nome e a idade da pessoa!");
    };
}

function converterIdadeParaNumeroInteiro(string) {
    return parseInt(string);
}

function adicionarDadosNasListas() {
    validarInputsVazios();
    if (inputIdade.value >= 0) {
        listaDeNomes.push(inputNome.value);
        idadeConvertida = converterIdadeParaNumeroInteiro(inputIdade.value);
        listaDeIdades.push(idadeConvertida);
    } 
}

function mostrarNomesEIdadesInseridas() {
    adicionarDadosNasListas();
    if (inputIdade.value >= 0) {
        divNomesEIdades.insertAdjacentHTML("beforeend", `Nome: ${inputNome.value} Idade: ${inputIdade.value}<br>`);
        inputNome.value = "";
        inputIdade.value = "";
    }
}

function verificarMaioridade() {
    mostrarNomesEIdadesInseridas();
    for (let i = 0; i < listaDeNomesEIdades[1].length; i++) {
        if (listaDeNomesEIdades[1][i] >= 18) {
            if (!pessoasMaioresDeIdade.includes(listaDeNomesEIdades[0][i])) {
                pessoasMaioresDeIdade.push(listaDeNomesEIdades[0][i]);
            }
        } else {
            if (!pessoasMenoresDeIdade.includes(listaDeNomesEIdades[0][i])) {
                pessoasMenoresDeIdade.push(listaDeNomesEIdades[0][i]);
            }
        }
    }
}

function mostrarResultado() {
    spamMaiores.textContent = " " + pessoasMaioresDeIdade;
    spamMenores.textContent = " " + pessoasMenoresDeIdade;
    spamQuantidadeMaiores.textContent = " " + pessoasMaioresDeIdade.length;
    spamQuantidadeMenores.textContent = " " + pessoasMenoresDeIdade.length;
}