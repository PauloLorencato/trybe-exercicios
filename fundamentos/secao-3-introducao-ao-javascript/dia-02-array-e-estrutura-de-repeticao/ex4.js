// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// n = 5


// *****

// *****

// *****

// *****

// *****

let lado = 5;
let frase = [];

for(let i=lado;i>0;i-=1){
    frase = '';
    for(let j=lado;j>0;j-=1){
        frase = frase + '*';
    }
    console.log(frase);
}