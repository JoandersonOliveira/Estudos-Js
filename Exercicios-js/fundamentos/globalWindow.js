let a = 3

console.log(global.a)

global.b = 123        
console.log(global.b)

this.c = 456        //neste caso o this se refere ao objeto global do node, equivalente ao Window do browser
this.d = 'teste'
this.e = false
console.log(this.c)

console.log('01 ', module.exports.c)
console.log('02 ', module.exports === this)  //this é igual ao metdo module.exports
console.log('03 ', module.exports) 

abc = 3  //criando uma variável diretamento no escopo global. Não recomendado
console.log(abc)





