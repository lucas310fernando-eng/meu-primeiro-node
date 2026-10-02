// Importando o módulo local "matematica.js"
const matematica = require("./matematica");

// Valores a serem utilizados nas operações matemáticas
const valor1 = 20;
const valor2 = 5;

// Chamando cada função do módulo e guardando em variáveis
const soma = matematica.somar(valor1, valor2);
const subtracao = matematica.subtrair(valor1, valor2);
const multiplicacao = matematica.multiplicar(valor1, valor2);
const divisao = matematica.dividir(valor1, valor2);

// Resultados no terminal
console.log("=== CALCULADORA NODE.JS ===");
console.log(`A soma de ${valor1} e ${valor2} é: ${soma}`);
console.log(`A subtração de ${valor1} e ${valor2} é: ${subtracao}`);
console.log(`A multiplicação de ${valor1} e ${valor2} é: ${multiplicacao}`);
console.log(`A divisão de ${valor1} e ${valor2} é: ${divisao}`);