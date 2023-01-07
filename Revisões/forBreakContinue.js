//função que identifica numeros pares e impares em um array

let numeros = [1, 16, 78, 4, 8, 49, 26, 8, 4, 8, 3, 5, 167, 598]

function IdentificaParImpar(valores) {
    for (let i in valores) {
        if (valores[i] % 2 == 0) {
            console.log(`${[i]} = ${valores[i]} é par`)
        } else {
            console.log(`${[i]} = ${valores[i]} é ímpar`)
        }
    }
}
//
//IdentificaParImpar(numeros)

//Função que pega valores impares e pares de um array e coloca cada um em um array
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function separaImparesPares(valores) {
    let impares = []
    let pares = []

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 == 0) {
            pares.push(valores[i])
        } else {
            impares.push(valores[i])
        }

    }
    console.log(pares)
    console.log(impares)
}
//separaImparesPares(numeros)




//Função para ordenar valores do array
let valores = [5, 6, 8, 7, 11, 14, 56, 23, 5, 9, 7, 2]

function ordenaValores(array) {
    let arrayOrdenado = []
    let maior, menor, aux
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maior){
            maior = array[i]   // maior recebe o indice
            aux = array[i]     //aux recebe a 
            arrayOrdenado.push(maior)
        }
        
        }

    
}