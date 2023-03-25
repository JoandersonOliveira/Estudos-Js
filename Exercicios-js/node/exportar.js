console.log(module.exports === this) //true
console.log(module.exports === exports) //true

this.a = 1 //exporta algo para fora
exports.b = 2 //exporta algo para fora
module.exports.c = 3 //também exporta algo

exports = null //forma errada
console.log(module.exports) //{ a: 1, b: 2, c: 3 } 

//mesmo setando nulo o module.exports continua apontando para os valores setados acima pois exports é outra variável que aponta para o mesmo objeto

exports = {
    nome:'Teste'    //forma errada. Não vai retornar o objeto pois o que será exportado será o module.exports
}

module.exports = {publico: true};  //forma correta de exportar