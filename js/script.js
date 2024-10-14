//Variáveis e Operações Matemáticas

//Ex 1
function convertGraus(){
const grausCelsius = document.getElementById("graus").value;
const grausF = grausCelsius*1.8 + 32;
document.getElementById("fahrenHeit").innerHTML = (`<b>${grausCelsius}°C</b>  é igual a <b>${grausF}°F</b>.`)
} 

//Ex 2
function calcularArea() {
    const base = document.getElementById("baseretangulo").value;
    const altura = document.getElementById("alturaretangulo").value;
    const area = base*altura
    document.getElementById("resultadoArea").innerHTML =(`Um retângulo com base <b>${base}cm</b> e altura <b>${altura}cm</b>, possui uma área igual a <b>${area} cm\u00B2</b>.`);
    }

//Ex 3
function calcQC() {
    const numQC = document.getElementById("quadradoCubo").value;
    const quadrado = numQC**2;
    const cubo = numQC**3;
    document.getElementById("resQuadCubo").innerHTML =(`O número <b>${numQC}</b> elevado ao quadrado é igual a: <b>${quadrado}</b> e elevado ao cubo é igual a: <b>${cubo}</b>.`);
}


//Ex 4
function calcPE() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultadoPotenciaElev = (num1**2)**num2;
    document.getElementById("resultadoPotenciaElev").innerHTML = (`A potência de <b>${num1}</b> elevado a <b>${num2}</b> é igual a <b>${resultadoPotenciaElev}</b>.`);
}

//Condicionais

//Ex1
function verificarNum(){
    const num1a100 = document.getElementById("num1a100").value;
    const max = 100;
    const min = 1;

    if(num1a100 >= min && num1a100 <= max){
        document.getElementById("resNum1a100").innerHTML = (`O número <b>${num1a100}</b> está entre <b>1</b> e <b>100</b>.`)
    }else{
        document.getElementById("resNum1a100").innerHTML = (`O número <b>${num1a100}</b> não está entre <b>1</b> e <b>100</b>.`)
    }
    }

//Ex2
function verificarIdade(){
    const idade = document.getElementById("idade").value;
    const crianca = 12;
    const adolescente = 17;
    const adulto = 18;
    
    if(idade<=crianca){
        document.getElementById("resIdade").innerHTML = ("Você é <b>criança</b>.")
    }else if (idade<=adolescente && idade>crianca){
        document.getElementById("resIdade").innerHTML = ("Você é <b>adolescente</b>.")
    }else{
        document.getElementById("resIdade").innerHTML = ("Você é <b>adulto</b>.")
    }
}

//Ex 3
function verificarDias() {
    const mes = document.getElementById("mes").value;
    let dias;

    switch (parseInt(mes)) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            dias = 31;
            break;
        case 4: case 6: case 9: case 11:
            dias = 30;
            break;
        case 2:
            dias = 28; 
            break;
    }

    document.getElementById("resultadoDias").innerHTML = (`O mês ${mes} tem ${dias} dias.`);
}

//Ex 4

function verificarNumero() {
    const numero = parseFloat(document.getElementById("numero").value);

    let resultado;

    if (numero > 0) {
        resultado = "O número é positivo.";
    } else if (numero < 0) {
        resultado = "O número é negativo.";
    } else {
        resultado = "O número é zero.";
    }

    document.getElementById("resultadoNumeros").innerHTML= resultado;
}

//FUNÇÕES

//EX1

    function dividirNumeros(numero1, numero2) {
    if (numero2 === 0) {
      return "Divisão por zero não é permitida!";
    } else {
      return numero1 / numero2;
    }
  }

  function calcularDivisao() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = dividirNumeros(numero1, numero2);
    document.getElementById('resultadoDivisao').innerHTML = 'Resultado: ' + resultado;
  }

//EX 02
function ordenarLista() {
    const lista = document.getElementById('listaStrings').value.split(',');
    const listaOrdenada = lista.sort();
    document.getElementById('resultado').innerHTML = 'Lista ordenada: ' + listaOrdenada.join(', ');
  }

  //EX 03


  //EX04

  function inverterString(texto) {
    return texto.split("").reverse().join("");
  }

  function inverterTexto() {
    const texto = document.getElementById('texto').value;
    const textoInvertido = inverterString(texto);
    document.getElementById('resultadoStringInverter').innerHTML = 'String invertida: ' + textoInvertido;
  }


//LAÇOS

//EX1

function imprimirImpares() {
    let resultado = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
    }
    document.getElementById("resnum1a100").innerHTML = (resultado)
}

//EX2

function imprimirMultiplosDeCinco() {
    let resultado = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            resultado += i + " é múltiplo de 5\n";
        } else {
            resultado += i + "\n";
        }
    }
    document.getElementById("resultadoMultiplosDeCinco").innerHTML = (resultado)
}

//EX 03

function calcularSoma() {
    let numero = parseInt(document.getElementById("numeroSoma").value);
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
      soma += i;
    }

    document.getElementById("resultadoSoma").innerHTML = `A soma dos números de 1 até ${numero} é: ${soma}`;
  }

  //Manipulaçao de Objetos

  //EX01
  const produtos = [
    { nome: "Camiseta", quantidade: 10 },
    { nome: "Calça", quantidade: 5},
    { nome: "Sapato", quantidade: 8}
  ];
  function calcularQuantidadeTotalEmEstoque(produtos) {
    let quantidadeTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
      quantidadeTotal += produtos[i].quantidade;
    }
    return quantidadeTotal;
  }
  const quantidadeTotal = calcularQuantidadeTotalEmEstoque(produtos);
  document.getElementById("quantidade-total").textContent = quantidadeTotal + " produtos";