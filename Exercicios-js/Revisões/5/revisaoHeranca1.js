Object.prototype.tituloVencido = 50

const fornecedor1 = {
    desc: 'NomeFornecedor',
    cnpj: '1542365897523',
    contatos: ['telefone1', 'telefone2', 'telefone3'],
    enderecoFaturamento: {
        rua: 'nomeDaRua',
        bairro: 'nomeDoBairro',
        numero: 123
    },
    isAtivo: true,
    mostraCnpj() { return `${this.cnpj}` }
}
//estabelenco relacao de protótipo
const fornecedorServicos = {
    __proto__: fornecedor1,
    totalValorComprado: 80000,
    codigoCnae: 000222333,
    mostraCnpj() {return `${this.totalValorComprado}  ${super.mostraCnpj()}` }
}

// console.log(fornecedorServicos.__proto__)
// console.log('\n\n')
// console.log(fornecedorServicos)

const fornecedorSerProd = {}

Object.setPrototypeOf(fornecedorSerProd, fornecedorServicos)

// console.log(fornecedorSerProd.__proto__)
// console.log(fornecedorSerProd.tituloVencido)
// console.log(fornecedorSerProd.codigoCnae)
// console.log(fornecedor1.codigoCnae)
// console.log(fornecedor1['cnpj'])
// console.log(fornecedor1)
console.log('\n\n')

console.log(fornecedor1.mostraCnpj())
console.log(fornecedorServicos.mostraCnpj())