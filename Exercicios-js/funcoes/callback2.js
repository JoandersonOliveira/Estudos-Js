const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback

let notasBaixas = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

//console.log(notasBaixas)


//Com callback

//função filter(): percorre um array e para cada elemento executa a função passada como parâmetro de callback.
notasBaixas2 = notas.filter(function (nota) {      
    return nota < 7;
})
console.log(notasBaixas2)












/*
let notasBaixas2 = [];

function notasBaixaCallback(nota) {
    if (nota < 7) {
        notasBaixas2.push(nota)
    }

  
}
notas.forEach(notasBaixaCallback);
console.log(notasBaixas2)
*/