//Use prompt() para perguntar peso e altura ao usuário. Calcule IMC = peso / (altura × altura). Classifique em baixo (<18.5), normal (18.5 a 25), sobrepeso (>25). Use console.log para mostrar.


let peso = parseFloat(prompt("peso(kg):"));
let altura = parseFloat(prompt("altura (m):"));
let imc = peso / (altura * altura);


if (imc < 18.5) {
    alert(`O imc é: ${imc}: baixo`);
} else if (imc <= 25) {
     alert(`O imc é: ${imc}: sobrepeso`);
} else {
     alert(`O imc é: ${imc}: normal`);
}