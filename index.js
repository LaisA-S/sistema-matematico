const calculadora = require('./calculadora');
const bhaskara = require('./bhaskara');

console.log ("===================================");
console.log ("[INÍCIO] SISTEMA MATEMÁTICO INICIADO [INÍCIO]");
console.log ("===================================\ n");

console.log("--- TESTANDO A CALCULADORA ---");
console.log(`Soma de 10 + 5 = ${ calculadora .somar (10, 5)}`);
console.log(` Subtracao de 20 - 8 = ${ calculadora .subtrair (20, 8)}`);
console.log(` Multiplicacao de 4 * 6 = ${ calculadora . multiplicar (4, 6)}`);
console.log(`Divisao de 15 / 3 = ${ calculadora .dividir (15, 3)}`);
console.log(`Teste erro divisao = ${ calculadora .dividir (10, 0)}`);

console.log("\n--- TESTANDO O BHASKARA---");
const resultado = bhaskara(1, -5, 6);
console.table(resultado);

console.log("\n[SUCESSO] Sistema executado com sucesso!\n");