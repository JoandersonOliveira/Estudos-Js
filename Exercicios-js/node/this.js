console.log(this === global)// false
console.log(this === module)// false

console.log(this === module.exports)// true
console.log(this === exports)// true

console.log('\n\ntestando com função\n\n');

function logThis() {
    console.log('Dentro de uma funcção');  //dentro da função o this não aponta para module.exports
    console.log(this === exports);        //false
    console.log(this === module.exports); //false
    console.log(this === global); //true. Dentro de uma função o this aponta para o objeto golobal.
    //this.perigo = '...' Vai ser carregado dentro do escopo global
}

logThis()

/**Isso não é nenhuma novidade, pois já vimos isso na aula passada. Porém, quando falamos de arrow funcions, a coisa muda um pouco.

Isso porque dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.

Isso pode causar um pouco de confusão, mas não é nada de outro mundo. Com um pouco mais de estudo você entende perfeitamente esse funcionamento. Vamos ao exemplo? */