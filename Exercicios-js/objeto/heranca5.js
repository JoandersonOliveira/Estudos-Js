console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverter = function () {     //Adicionando uma função do prototype de string
    return this.split('').reverse().join('')  //quebrando a string com uma array dividido em cada índice com o split(), revetendo a posição dos índices
}                                             // usando o reverse() e juntando o array dividido novamente em uma string

//O (this.split) acima pertence a string de contexto atual. O this permite acessar o array ou a string dentro do protótipo.

console.log('Escola Cod3r'.reverter())


Array.prototype.primeiro = function () {
    return this[0]  //acessando o array a partir do this
}

console.log([1,2,3,4,5,6,7].primeiro())
console.log(['z','a', 'b', 'c'].primeiro())

/**
 * nota: Toda função tem um atributo prototype
 */