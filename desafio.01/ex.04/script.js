// A dupla está voltando do Largo Treze de madrugada. Peça o **valor da corrida**, o **número de pessoas** que vão dividir e o **multiplicador de tarifa dinâmica** (ex.: 1 = normal, 1.5 = mais caro).

let valorCorrida = parseFloat(prompt("Digite o valor da corrida:"));
let pessoas = parseInt(prompt("Digite o número de pessoas que vão dividir:"));
let multiplicador = parseFloat(prompt("Digite o multiplicador da tarifa dinâmica:"));

let valorFinal = valorCorrida * multiplicador;
let valorPorPessoa = valorFinal / pessoas;

if (multiplicador > 1) {
    console.log(" A tarifa está em alta!");
} else {
    console.log("Tarifa normal.");
}

console.log(`Valor final da corrida: R$ ${valorFinal.toFixed(2)}`);
console.log(`Cada pessoa vai pagar: R$ ${valorPorPessoa.toFixed(2)}`);