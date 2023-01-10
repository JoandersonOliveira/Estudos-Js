/**o operador arguments permite passar vários parametros como argumento */
function soma() {
    let soma = 0
    for (i in arguments) {    //arguments é um array.
        soma += arguments[i]
    }
    return soma
}

//Passando diferentes tipos de parâmetros
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.3, 2, 3.5))
console.log(soma(1.1, 2.3, 2, 3.5, 'Teste'))
console.log(soma('a', 'b', 'c'))