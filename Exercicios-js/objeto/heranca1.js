
/*O conceito de herança no JS é orientado a prototipo. Da mesma forma que uma função interna precisa procurar uma variável na função acima
o objeto também precisa procurar um determinado atributo no seu protótipo de referência ("protótipo filho, protótipo pai, protótipo avô").
Essa busca pela propriedade na hierarquia de objetos é feita até o alcance do último protótipo. Caso o atributo buscado na hierarquia de objetos não 
for encontrado o JS retorna undefined, caso encontre é possivel reaproveitar atributos e comportamentos dos objetos protótipo.

Um objeto em JS tem uma referência para o seu protótipo e essa é a forma como JS define herança, objetos tem atributos e comportamentos que podem ser acessados pelo objeto filho.
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // a partir do atributo (__proto__) é possível acessar o protótipo do objeto (o atributo pai).
console.log(ferrari.__proto__ === Object.prototype)  // O object.prototype representa o ultimo protótipo da cadeia de protótipos.
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)  //Verificando se existe um prototype acima da função Object pois é o ultimo protótipo da cadeia.



/*Protótipos são o mecanismo pelo qual os objetos JavaScript herdam recursos uns dos outros.
*/

function pessoa(nome, idade, filhos) {
    this.nome = nome
    this.idade = idade
    this.filhos = filhos
}

