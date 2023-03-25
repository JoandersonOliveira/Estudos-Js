//criar classe da nota fiscal
//criar classe nfce q herda de nota fiscal
//criar classe de produtos
//criar classe de venda.

class NotaFiscal {
    constructor(cliente, cfop, ano) {
        this.nomeCliente = cliente
        this._itens = []
        this._totalNFE = 0
        this._totalProdutos = 0
        this._totalImpostos = 0
        this._cfop = cfop
        this._ano = ano
    }

    get itens() {
        console.log(this._itens.map(a => a))
    }
    addProdutos(...produtos) {
        produtos.forEach(a => { this._itens.push(a) })
    }
    calc_TotalNfe() {
        let soma = 0
        this._itens.forEach(a => { soma += (a._pVenda + a._imposto) })
        this._totalNFE = soma
        console.log(this._totalNFE)
    }
    calcTotalImpostos() {
        this._totalImpostos = this._itens.map(a => a._imposto).reduce((ac, atu) => { return ac + atu })

    }
    calcTotalProdutos() {
        this._totalProdutos = this._itens.map(a => a._pVenda).reduce((acu, atu) => acu + atu)
    }
}

module.exports = NotaFiscal