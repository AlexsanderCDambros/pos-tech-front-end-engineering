
// Programação funcional
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

console.log('Programação funcional');
console.log('Soma:', soma(5, 3)); // Soma: 8
console.log('Subtração:', subtracao(5, 3)); // Subtração: 2
console.log('------------------');


// Função de alta ordem

function calcular(a, b, operacao) {
  return operacao(a, b);
}

console.log('Função de alta ordem');
console.log('Resultado da soma:', calcular(5, 3, soma)); // Resultado da soma: 8
console.log('Resultado da subtração:', calcular(5, 3, subtracao)); // Resultado da subtração: 2
console.log('------------------');


// Recursão

function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(subtracao(n,1));
}

console.log('Recursão');
console.log('Fatorial de 5:', fatorial(5)); // Fatorial de 5: 120 
console.log('Fatorial de 0:', fatorial(0)); // Fatorial de 0: 1
console.log('Fatorial de 1:', fatorial(1)); // Fatorial de 1: 1
console.log('------------------');


// Funções para manipulação de arrays
console.log('Funções para manipulação de arrays');

const pessoas = [
  { nome: 'João', idade: 15 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 },
  { nome: 'Ana', idade: 25 },
  { nome: 'Lucas', idade: 17 },
  { nome: 'Fernanda', idade: 19 },
  { nome: 'Carlos', idade: 22 },
  { nome: 'Juliana', idade: 18 },
  { nome: 'Roberto', idade: 16 },
  { nome: 'Patrícia', idade: 21 }
];

// map

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log('map');
console.log('Pessoas:', pessoas);
console.log('Nomes:', nomes); 
console.log('------------------');

// filter
const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log('filter');
console.log('Pessoas:', pessoas);
console.log('Pessoas maiores de idade:', pessoasMaioresDeIdade);
console.log('------------------');

// reduce
const somaDasIdades = pessoas.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);
console.log('reduce');
console.log('Pessoas:', pessoas);
console.log('Soma das idades:', somaDasIdades);

// reduce 2
const frutas = ['maçã', 'laranja', 'banana', 'laranja', 'uva', 'abacaxi', 'abacaxi'];

const frutasContadas = frutas.reduce((acumulador, fruta) => {
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador;
}
, {});

console.log('reduce 2');
console.log('Frutas:', frutas);
console.log('Frutas contadas:', frutasContadas);
console.log('------------------');


// curryng

function multiplicar(a) {
  return function(b) {
    return a * b;
  };
}

const multiplicarPorDois = multiplicar(2);
const multiplicarPorTres = multiplicar(3);

console.log('Curryng');
console.log('Multiplicar 5 por 2:', multiplicarPorDois(5)); // Multiplicar por 2: 10
console.log('Multiplicar 5 por 3:', multiplicarPorTres(5)); // Multiplicar por 3: 15
console.log('------------------');

// compose

function compose(...funcoes) {
  return function(valorInicial) {
    return funcoes.reduceRight((valorAtual, funcao) => funcao(valorAtual), valorInicial);
  };
}

function removerEspacos(str) {
  return str.replace(/\s+/g, '');
}

function toUpperCase(str) {
  return str.toUpperCase();
}

const mensagemTratada = compose(removerEspacos, toUpperCase)('  Olá Mundo!  ');
console.log('Compose');
console.log('Mensagem tratada:', mensagemTratada);
console.log('------------------');

// closures

function criarContador() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}

const contador1 = criarContador();
const contador2 = criarContador();

console.log('Closures');
console.log('Contador 1:', contador1()); // Contador 1: 1
console.log('Contador 1:', contador1()); // Contador 1: 2
console.log('Contador 2:', contador2()); // Contador 2: 1
console.log('Contador 2:', contador2()); // Contador 2: 2
console.log('Contador 1:', contador1()); // Contador 1: 3
console.log('Contador 2:', contador2()); // Contador 2: 3
console.log('------------------');