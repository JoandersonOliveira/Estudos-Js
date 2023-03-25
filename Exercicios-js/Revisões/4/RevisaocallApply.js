function calculaDesconto(imposto){
    const vlrComDesconto = (this.valor - this.valorDesconto) + imposto;
    return vlrComDesconto;
}

const produto = {
    descricao: 'nomeProduto',
    valor: 30,
    valorDesconto: 15
}

const produtoCenoura = {
    descricao: 'Cenoura',
    valor: 10,
    valorDesconto: 3
}

console.log(calculaDesconto.call(produto, 5)); // o segundo parametro é referente ao parametro da função calculaDesconto()
console.log(calculaDesconto.call(produtoCenoura, 3));

console.log(calculaDesconto.apply(produtoCenoura, [3])); // No apply  funciona da mesma forma, porém o parâmetro deve ser passado dentro de um array.


