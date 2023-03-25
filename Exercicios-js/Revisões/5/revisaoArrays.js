class NotaFiscal {
    constructor(mes, ano, cliente, cfop) {
        this.mes = mes; this.ano = ano; this.cliente = cliente; this.cfop = cfop;

        this.total = 0;
        this.totalImpostos = 0;
        this.totalCusto = 0;
        this.totalProdutos = 0;
        this.produtos = []

    }
    addProdutos(...produto) {
        produto.forEach(a => {
            this.produtos.push(a)
        })
    }
    calculaTotalImposto() {
        let totalImposto = 0;
        totalImposto = this.produtos.map(a => a._imposto).reduce((acum, atual) => acum + atual);
        // totalImposto = totalImposto.reduce((acum, atual) => acum + atual)
        return totalImposto;
    }
    calculaTotalProdutos() {
        let totalProdutos = 0;
        totalProdutos = this.produtos.map(a => a._pVenda).reduce((acumulador, atual) => acumulador + atual);

        //    totalProdutos = totalProdutos.reduce((acumulador, atual)=>acumulador + atual);
        return totalProdutos;
    }
    calculaTotalNfe() {
        let totalNfe = 0;
        this.produtos.forEach(a => {
            totalNfe += (a._pVenda + a._imposto);
        })
        this.total = this.calculaTotalNfe;
        return totalNfe;
    }
    calculaTotalCusto() {
        let totalCustoNFe = 0
        this.produtos.forEach(a => {
            totalCustoNFe += a._Pcusto;
        })
        this.totalCusto = this.calculaTotalCusto;
        return totalCustoNFe;
    }


}

class Produto {
    constructor(nomeProduto, pVenda, Pcusto, imposto) {
        this._nomeProduto = nomeProduto;
        this._pVenda = pVenda;
        this._Pcusto = Pcusto;
        this._imposto = imposto;

    }
}

const melancia = new Produto('melancia', 10, 4, 2);
const Iorgute = new Produto('Iorgute', 7, 3, 1.4);
const panela = new Produto('panela', 35, 15, 4);

const nfe01 = new NotaFiscal(3, 2023, 'Lucas', 5102);
nfe01.addProdutos(panela, melancia, melancia, Iorgute);


console.log(nfe01.calculaTotalProdutos());
console.log(nfe01.calculaTotalNfe());
console.log(nfe01.calculaTotalImposto());
console.log(nfe01.calculaTotalCusto());

// console.log(nfe01.totalImpostos());
console.log('\n\n')
// console.log(nfe01);

// console.log(JSON.stringify(nfe01));


console.log(nfe01.calculaTotalProdutos());
console.log(nfe01.calculaTotalImposto());