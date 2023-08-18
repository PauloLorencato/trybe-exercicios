// Desafio dos asteriscos, parte 2

// Agora, inverta o lado do triângulo. Por exemplo:

// n = 5


//     *

//    **

//   ***

//  ****

// *****

let lado = 5;
let frase = '';
let vazio = '';

for(let i=lado;i>0;i--){
    frase = frase + '*';
    vazio = '';
    for(let j=0;j<i;j+=1){
        vazio = vazio + ' ';
    }
    console.log(vazio + frase);
}