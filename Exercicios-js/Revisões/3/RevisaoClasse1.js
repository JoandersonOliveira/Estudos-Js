class Produto {
    constructor(nome = 'nomeProduto', valorCompra = 0, valorVenda = 0) {
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
    }
}
class Venda {
    constructor(codVenda = 1, cliente) {
        this.codVenda = codVenda;
        // this.cliente = cliente;
        this.produtos = [];
    }

    adicionaProdutos(...items) {
        items.forEach(a => this.produtos.push(a)) //Enviando o indice atual de items para o array produtos
    }

    custoVenda() {
        let totalCusto = 0;
        this.produtos.forEach(a => totalCusto += a.valorCompra)
        return `Total custo: R$ ${totalCusto},00`
    }

    mostraTotal() {
        let totalVenda = 0;
        this.produtos.forEach(a => { totalVenda += a.valorVenda })
        return `Total venda: R$ ${totalVenda},00`
    }
}

const panela = new Produto('panela', 10, 15);
const melancia = new Produto('Melancia', 4, 10)

const venda1 = new Venda(1)
// venda1.adicionaProdutos(panela)
// venda1.adicionaProdutos(panela)
// venda1.adicionaProdutos(panela)
// venda1.adicionaProdutos(panela)
// venda1.adicionaProdutos(panela)
venda1.adicionaProdutos(panela, panela, melancia)

console.log(venda1.mostraTotal())
console.log(venda1.custoVenda())

const iogurte = Object.create(Produto, {
    nome: { value: 'iogurte', writable: true, enumerable: true },
    valorCompra: { value: 4, writable: true, enumerable: true },
    valorVenda: { value: 8, writable: true, enumerable: true }
})

console.log('\n\n')

const venda2 = new Venda(2);
venda2.adicionaProdutos(iogurte, panela);
console.log(venda2.mostraTotal())
console.log(venda2.custoVenda())

console.log('\n\n')

console.log(iogurte, '\n', iogurte.__proto__)

console.log('\n\n')

const sandalia = {__proto__: Produto}
sandalia.valorCompra = 15
console.log(sandalia.valorCompra)
console.log(venda1.codVenda)

Venda.prototype.descricao = 'descrição da venda';

console.log(venda1.__proto__)
console.log(venda1.descricao)
console.log(venda2.descricao)


