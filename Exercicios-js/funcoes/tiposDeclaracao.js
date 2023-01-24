//function declaration

console.log(soma(3, 4)) // retorna a função mesmo chamando antes de sua declaração.
console.log(sub(4, 2))  // não pode acessar a função antes de declarar.

function soma(x, y) {  //interpertador Js antes da execução carrega todas as funções declaradas dessa forma antes de executar o código
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}

