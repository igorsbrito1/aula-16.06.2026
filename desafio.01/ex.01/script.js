// Exercício 1 — Rodízio de placa em São Paulo

 let placa = parseInt(prompt("Digite o último número da placa:"));
let dia = prompt("Digite o dia da semana (segunda, terça, quarta, quinta, sexta ou 1 a 5):");

if ((dia === "segunda" || dia === "1") && (placa ===1  || placa === 2)) {
    console.log("Não pode circular no horário de rodízio.");
} else if ((dia === "terça" || dia === "2") && (placa === 3 || placa === 4)) {
    console.log("Não pode circular no horário de rodízio.");
} else if ((dia === "quarta" || dia === "3") && (placa === 5 || placa === 6)) {
    console.log("Não pode circular no horário de rodízio.");
} else if ((dia === "quinta" || dia === "4") && (placa === 7 || placa === 8)) {
    console.log("Não pode circular no horário de rodízio.");
} else if ((dia === "sexta" || dia === "5") && (placa === 9 || placa === 0)) {
    console.log("Não pode circular no horário de rodízio.");
} else {
    console.log("Pode circular normalmente.");
}
