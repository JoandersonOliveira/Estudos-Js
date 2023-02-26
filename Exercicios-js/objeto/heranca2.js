//cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não recomendado manipular o Object.prototype pois essa manipulação afeta todos os objetos.

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' } //O atritbuto (__proto__) permite definir outro objeto como protótipo, nesse caso foi definido para o obj pai __proto__: avo
const filho = { __proto__: pai, attr3: "C" }// Essa é uma das formas de estabelecer uma relação entre objeto e protótipos

console.log(filho.attr1) // O objeto filho não possui o atributo (attr1) definido na sua declaração, porém na ramificação dos protótipos acima dele existe e foi encontrado no objeto 'avo'.
console.log(filho.attrX) // Vai retornar undefined pois o atibuto não existe
console.log(filho.attr0) // Vai encontrar o atributo definido em (Object.prototype.attr0 = 'Z').

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing. A variável local é priorizada em relação a variável mais abrangente
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super: referencia o protótipo. Nesse caso será chamado o método do protótipo. Super foi usado para o método 
    }                                             //status() do objeto de contexto não sombrear o método status() do objeto protótio pois o Js prioriza o método local, nesse caso do objeto "volvo"
}

Object.setPrototypeOf(ferrari, carro) //Estabelecendo uma relação de protótipo entre ferrari e carro. Nesse caso ferrari tem carro como protótipo.
Object.setPrototypeOf(volvo, carro)//Estabelecendo uma relação de protótipo entre ferrari e carro. Nesse caso ferrari tem carro como protótipo.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())










/*Nota: Caso eu defina um atributo "attr3" no objeto pai, porém com outro valor em relação ao objeto filho, o JS resolverá para o objeto filho pois este
já tem este atributo declarado, acontece um sobreamento.

A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.

*/