// Escreva um programa que receba 3 notas, calcule a media e se madia > 7= aprovado, abaixo reprovado
// Ajuste o sistema para receber o nome do aluno, as 3 notas e  a media no final 

let nome = prompt("Digite o nome do aluno:");

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    alert(
        `Aluno: ${nome}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${media}

Situação: Aprovado`
    );
} else {
    alert(
        `Aluno: ${nome}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${media}

Situação: Reprovado`
    );
}