function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // verificando se os dois objetos apontam para o mesmo protótipo
console.log(MeuObjeto.prototype === obj1.__proto__) //Ao criar objeto a partir de uma func construtora o objeto aponta para o protótipo  da função construtora

MeuObjeto.prototype.nome = 'Anônimo' // adicionando novo atributo. Qualquer objeto criado a partir da funcao construtora terá acesso a esse atributo
MeuObjeto.prototype.falar = function () {   // criando nova função que será herdada pelos objetos q serão instanciados da func MeuObjeto()
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

/**No exemplo acima todos os objetos instanciados da função Meuobjeto() terão acesso  ao atributos e métodos recém adicionados, pois estes apontam para o 
 * atributo protótipo da função MeuObjeto().
 */

obj1.falar()
obj2.nome = 'Rafael' //sobrescrevendo o atributo nome no próprio objeto atual

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

//Resumo breve
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) //Função também tem um protótipo e uma referencia para __proto__. MeuObjeto tem um (__proto__) e por padrão aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // Verificando se o protótipo do protótipo de uma function aponta para object.prototype.
console.log(Object.prototype.__proto__) //Retona nulo pois depois de Object.prototype não existe mais nada na cadeia de protótipos. É null porque o atributo existe porém não aponta p/ nada.
