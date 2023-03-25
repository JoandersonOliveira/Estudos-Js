/** Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

const vetor = [14, 9, 18, 2, 56, 7, 15, 39, 1, 30, 20, 5, 4];
let maior = 0;
let menor = 1000;


for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
    if (vetor[i] > maior) {
        maior = vetor[i]
    }
}

console.log('maior: ' + maior + '\n' + 'menor: ' + menor)

let ordenado = vetor.sort((a, b) => {
    if (a > b) { return -1 }
})


console.log(ordenado)