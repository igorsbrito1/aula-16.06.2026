// Posto na Av. Santo Amaro: álcool ou gasolina?

let precoAlcool = prompt("Qual o preço do álcool?");
let precoGasolina = prompt("Qual o preço da gasolina?");

if (precoAlcool / precoGasolina <= 0.7) {

    alert("Abasteça com álcool");
} 
if (precoAlcool * precoGasolina > 0.7) {
    alert("Abasteça com gasolina");
}

else {
    alert("Valor inválido");
}   