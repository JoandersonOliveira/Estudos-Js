const array = [55, 67, 23, 49, 54, 72, 36, 14, 11, 8, 7];

function ValoresPelaMetade(item, indice) {
     let arrayTratado = [];
     let valorAtual = item / 2;
     arrayTratado.push(valorAtual);

    console.log(`índice ${indice} valor ${item} sua metade: ${arrayTratado}`)
    
 }

array.forEach(ValoresPelaMetade)

const novoArray = array.forEach(ValoresPelaMetade);

console.log(novoArray)
