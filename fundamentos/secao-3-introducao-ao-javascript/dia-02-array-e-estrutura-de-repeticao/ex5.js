// Desafio da pirâmide de asteriscos

// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5


// *

// **

// ***

// ****

// *****

let lado = 5;
let frase = [];

for(let i=lado;i>0;i--){
    frase = frase + '*';
    console.log(frase);
}