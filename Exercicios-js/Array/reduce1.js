/**O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. 
 * 
 * O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada
 *  iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
 * 
 * Em outras palavras o reduce reduz um array em um valor só e também é capaz de converter dados.
*/


const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) { //indice 0 fica como acumulador, e a callback começa pelo indice 2.
    console.log(acumulador, atual) 
     return acumulador + atual 
})




// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArray = array.reduce((acumulador, atual)=> acumulador + atual)
// console.log(newArray)