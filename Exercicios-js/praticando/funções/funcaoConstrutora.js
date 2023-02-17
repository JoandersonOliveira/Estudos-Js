function Cliente(vlrMaximoCompra = 500, novoProduto = 100) {
    let valorAtual = 0;

    this.compra = function () {
        if (valorAtual + novoProduto <= vlrMaximoCompra) {
            valorAtual += novoProduto;
        } else {
            valorAtual = vlrMaximoCompra;
            console.log(`O valor máximo de ${valorAtual} reais já foi atingido.`)
        }
    }

    this.getValorAtual = function () {
        return valorAtual;
    }
}

const clienteNovo = new Cliente()
// clienteNovo.compra();
// clienteNovo.compra();
// clienteNovo.compra();
// clienteNovo.compra();
// clienteNovo.compra();
// clienteNovo.compra();

// console.log(clienteNovo.getValorAtual());


const clienteAntigo = new Cliente(800, 200);
clienteAntigo.compra();
clienteAntigo.compra();

console.log(clienteAntigo.getValorAtual());

