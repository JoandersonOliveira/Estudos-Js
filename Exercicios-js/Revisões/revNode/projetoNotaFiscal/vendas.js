const produto = require('./produto')
const notaFiscal = require('./notaFiscal')
const { nfe1 } = require('./notaFiscalInstancias')
const { prod1, prod2, prod3 } = require('./ProdutoInstancias')

nfe1.addProdutos(prod1, prod2)
nfe1.calc_TotalNfe()
nfe1.calcTotalImpostos()
nfe1.calcTotalProdutos()

console.log(nfe1)
console.log('\n\n')

nfe1.itens

module.exports = {
    nfe1
}
