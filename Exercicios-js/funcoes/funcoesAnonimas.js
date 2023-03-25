//Funções anônimas são funções sem nome

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // por padrão o parâmetro operação recebe a função soma caso não passe nada neste parâmetro.
    console.log(operacao(a, b))     //como o parametro 'operação' recebe outra função (nesse caso: soma()) é necessário passar os parâmetros no console.log.
}


imprimirResultado(5, 5)
imprimirResultado(5, 5, soma)

//passando outra função dentro da chamada da função. A função recém declarada na chamada ocupa o 3º parâmetro.
imprimirResultado(5, 5, function (x, y) { return x - y }) //O terceiro parâmetro é composto por uma função anônima.

//Passando uma arrow function como parâmetro
imprimirResultado(5, 5, (x, y) => x * y)

//Função anônima em objetos

const pessoa = {
    falar: function () {  //Atribuindo uma função anônima ao atributo do objeto
        console.log('Falando! kkk')
    }
    /*falar2(){ console.log('Falando!')}   <= Também pode ser feito dessa forma*/
}


pessoa.falar()