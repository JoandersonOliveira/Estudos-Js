function criaRecibo(cliente, totVenda, produtos) {
    this.cliente = cliente
    this.totVenda = totVenda
    this.produtos = produtos
}

const recibo1 = new criaRecibo()

// console.log(recibo1)

// console.log(typeof recibo1)

console.log(recibo1.__proto__)
console.log(criaRecibo.__proto__)