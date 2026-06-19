// Escrever um programa que verifique a idade do usuário .  para acessar o sistema o usuário de ter 18 anos pu mais . caso o usuário tenha 16 anos poderá entrar apenas se tiver acompanhado. 


let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18) {
    alert("Acesso permitido.");
} else if (idade >= 16) {
    let acompanhado = prompt("Está acompanhado? (sim/não)");

    if (acompanhado.toLowerCase() === "sim") {
        alert("Acesso permitido com acompanhante.");
    } else {
        alert("Acesso negado. É necessário estar acompanhado.");
    }
} else {
    alert("Acesso negado. Menores de 16 anos não podem entrar sem estar acompanhado.");
}