function criarProduto(nome, preco) { //Como ja foi passado o "nome" e o "preco" como parametos das funções não é necessário usar os ":" no atributo
    return {
        nome,
        preco,
        desconto: 0.1     //desconto foi definido como padrão.
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 119.49))

/**
 * 
 */