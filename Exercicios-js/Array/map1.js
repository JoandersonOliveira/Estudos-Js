const nums = [1, 2, 3, 4]

// For com propósito

let resultado = nums.map(function (e) {
    return e * 2;
})

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro); //nesse caso cada map gera uma modificação no anterior. Foram três transformações do array.

console.log(resultado);





//Nota: O map não altera o array original, mas gera um novo array modificado.
