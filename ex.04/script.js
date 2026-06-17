// EX.04 - Conversão de moeda (BRL para USD)- Pergunte a o usuario um valor em reais (R$). Use uma const COTAÇÃO = 5.10 (1 USD = 5.10 BRL). Calcule o valor em dolares e mostre. Lembre: o resultado dos prompt cem como STRING - voce precisa converter.


const dolar = 5.10;

let Reais = parseFloat(prompt("Digite um valor em reais (R$):"));
let Resultado = Reais / dolar;

alert(`Valor em dolar ${Resultado} US$`);

console.log(`Valor em dólares é: ${Resultado} US$`);