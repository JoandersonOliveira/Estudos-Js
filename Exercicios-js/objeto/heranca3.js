const pai = {
    nome: 'Pedro',
    corDeCabelo: 'preto'
}

const filha1 = Object.create(pai) //Estabelecendo relação de protótipo com o objeto "pai".  Nesse exemplo o objeto filha herda os atributos do objeto pai.
filha1.nome = 'Ana'
console.log(filha1.corDeCabelo) // 'preto'


const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } //Estabalecendo relação de protótipos e definindo propriedades e atributos do objeto
})

console.log(`${filha2.nome} tem cabelo ${filha2.corDeCabelo}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {
    filha2.hasOwnProperty(key) ?    // o método "hasOwnProperty" verifica se o objeto tem o atributo na sua própria declaração ou se veio por herança
        console.log(key + ': pertence ao objeto') : console.log(`Por herança: ${key}`)

}