function calculaPrecoComDesconto(preco, desconto) {
   
    return `Valor com desconto: ${this.preco - this.desconto}`
}

const produto = {
    preco: 100,
    desconto:30
}

console.log(calculaPrecoComDesconto.call(produto))
console.log(calculaPrecoComDesconto.apply(produto))