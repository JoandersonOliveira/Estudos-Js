console.log(typeof Object) //retorna function
console.log(typeof new Object) //retorna objeto

const cliente = function () {

}

console.log(cliente) //retorna  function
console.log(typeof new cliente) //retorna object

class Produto { }

console.log(typeof Produto) // Uma classe se comporta como uma função
console.log(typeof new Produto) //retorna um novo objeto



