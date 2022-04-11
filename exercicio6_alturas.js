/////VARIÁVEIS

const selectGeneroPrimeiraPessoa = document.getElementById("genero-pessoa-1");
const selectGeneroSegundaPessoa = document.getElementById("genero-pessoa-2");
const selectGeneroTerceiraPessoa = document.getElementById("genero-pessoa-3");
const selectGeneroQuartaPessoa = document.getElementById("genero-pessoa-4");
const selectGeneroQuintaPessoa = document.getElementById("genero-pessoa-5");
const inputAlturaPrimeiraPessoa = document.getElementById("altura-pessoa-1");
const inputAlturaSegundaPessoa = document.getElementById("altura-pessoa-2");
const inputAlturaTerceiraPessoa = document.getElementById("altura-pessoa-3");
const inputAlturaQuartaPessoa = document.getElementById("altura-pessoa-4");
const inputAlturaQuintaPessoa = document.getElementById("altura-pessoa-5");
const botaoVerificar = document.getElementById("verificar");
const spamQuantidadeMulheres = document.getElementById("quantidade-mulheres");
const spamQuantidadeHomens = document.getElementById("quantidade-homens");
const spamMaiorAltura = document.getElementById("maior-altura");
const spamGeneroMaiorAltura = document.getElementById("genero-maior-altura");
let generos = [];
let alturas = [];
let generosEAlturas;
let mulheres = 0;
let homens = 0;
let maiorAltura;
let generoDaPessoaMaisAlta = [];

/////CHAMANDO FUNÇÕES

botaoVerificar.addEventListener("click", mostrarResultados);

/////DECLARANDO FUNÇÕES

function validarAltura() {
    if (inputAlturaPrimeiraPessoa.value == "" || inputAlturaSegundaPessoa.value == "" || inputAlturaTerceiraPessoa.value == "" || inputAlturaQuartaPessoa.value == "" || inputAlturaQuintaPessoa.value == "") {
        alert("Preencha todas as alturas!");
        return false;
    } if (inputAlturaPrimeiraPessoa.value <= 0 || inputAlturaSegundaPessoa.value <= 0 || inputAlturaTerceiraPessoa.value <= 0 || inputAlturaQuartaPessoa.value <= 0 || inputAlturaQuintaPessoa.value <= 0) {
        alert("As alturas devem ser números maiores que zero!");
        return false;
    }

    return true;
}

function converterAlturaParaFloat(string) {
    return parseFloat(string);
}

function colocarDadosNasListas() {
    let validado = validarAltura();
    generos = [selectGeneroPrimeiraPessoa.value, selectGeneroSegundaPessoa.value, selectGeneroTerceiraPessoa.value, selectGeneroQuartaPessoa.value, selectGeneroQuintaPessoa.value];
    if (validado == true) {
    alturas = [converterAlturaParaFloat(inputAlturaPrimeiraPessoa.value), converterAlturaParaFloat(inputAlturaSegundaPessoa.value), converterAlturaParaFloat(inputAlturaTerceiraPessoa.value), converterAlturaParaFloat(inputAlturaQuartaPessoa.value), converterAlturaParaFloat(inputAlturaQuintaPessoa.value)];
    };
    generosEAlturas = [generos, alturas];
}

function calcularQuantosHomensEQuantasMulheres() {
    colocarDadosNasListas();
    for (let i = 0; i < generos.length; i++) {
        if (generos[i] == "feminino") {
            mulheres += 1;
        } if (generos[i] == "masculino") {
            homens += 1;
        }
    }
}

function verificarMaiorAltura() {
    calcularQuantosHomensEQuantasMulheres();
    maiorAltura = alturas[0];

    for (let i = 0; i < alturas.length; i++) {
        maiorAltura = Math.max(maiorAltura, alturas[i]);
    }

    return maiorAltura;
}

function verificarOGeneroDaPessoaMaisAlta() {
    verificarMaiorAltura();

    for (let i = 0; i < generosEAlturas[1].length; i++) {
        if (generosEAlturas[1][i] == maiorAltura) {
            generoDaPessoaMaisAlta.push(generosEAlturas[0][i]);
        }
    }
}

function mostrarResultados() {
    verificarOGeneroDaPessoaMaisAlta();

    document.getElementById("resultado").style.display = "block";
    spamQuantidadeMulheres.textContent = mulheres + " ";
    spamQuantidadeHomens.textContent = homens + " ";
    spamMaiorAltura.textContent = " " + maiorAltura;
    spamGeneroMaiorAltura.textContent = " " + generoDaPessoaMaisAlta;

}