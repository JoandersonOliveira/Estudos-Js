// estrategia 1 para gerar valor padrão

function soma(a, b, c) {
    a = a || 1   //Usando o operador 'OU' é possível trazer um valor padrão (1) para uma função que resolveu para um valor falso. Caso 'a' recebe 0 ou null ele resolve para 1
    b = b || 1
    c = c || 1

    return a + b + c
}


console.log(soma(2))
console.log(soma())
console.log(soma(1, 1, 1))

console.log('\n\nestratégia 2, 3 e 4 para gerar valor padrão\n')

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1 //Se 'a' for diferente de undefined 'a' recebe valor de 'a', caso não for 'a' vai receber valor 1 como padrão.
    b = 1 in arguments ? b : 1 //Se dentro de arguments existir o indice 1 'b' recebe o valor de 'b', caso não, pegue o valor padrão que é '1'
    c = isNaN(c) ? 1 : c       //Se 'C' não for number pegue valor padrão 1, caso não, pegue valor padrão 1

    return a + b + c
}

console.log(soma2(1, 1, 1))
console.log(soma2(0, 1, 1))
console.log(soma2(0, 0, 0))
console.log(soma2(5, 0, 0))


console.log('Estratégia valor padrão es2015')

//Estratégia valor padrão es2015
//Passando valor padrão 1 nas variáveis 
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c

}

console.log(soma3())
console.log(soma3(1))
console.log(soma3(5))
console.log(soma3(5, 5, 5))

console.log(true || true) //verdade
console.log(true || false)//verdade
console.log(false || false)//falso
console.log(false || true)//verdade