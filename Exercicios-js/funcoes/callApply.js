function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    des: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1

 //console.log(getPreco())
 //console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))  //Passa como parâmetro o objeto do qual o 'this' vai se referir. Objeto de contexto.
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))// 1º parâmetro é o objeto, os demais são os parâmetros da função "getPreco()"

console.log(getPreco.apply(carro, [0.17, '$'])) // Espera que os parâmetros sejam passados dentro de um array