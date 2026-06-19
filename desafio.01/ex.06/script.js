// A galera fechou a conta num bar do Largo Treze. Peça o **valor total**, o **número de pessoas** e pergunte se vão incluir os **10% do garçom** (`prompt` respondendo "sim" ou "nao").


let valorTotal = parseFloat(prompt("Digite o valor total da conta:"));
let pessoas = parseInt(prompt("Digite o número de pessoas:"));
let garcom = prompt("Vai incluir os 10% do garçom? (sim ou nao)");

if (garcom === "sim") {
    valorTotal = valorTotal + (valorTotal * 0.10);
}

let valorPorPessoa = valorTotal / pessoas;

console.log("Valor total da conta: R$ " + valorTotal.toFixed(2));
console.log("Cada pessoa vai pagar: R$ " + valorPorPessoa.toFixed(2));