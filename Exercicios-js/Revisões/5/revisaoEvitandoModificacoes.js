//preventExtensions
const fornecedor = {
    desc: 'NomeFornecedor',
    cnpj: '1542365897523',
    contatos: ['telefone1', 'telefone2', 'telefone3'],
    enderecoFaturamento: {
        rua: 'nomeDaRua',
        bairro: 'nomeDoBairro',
        numero: 123
    },
    isAtivo: true,
    totalValorComprado: 80000,
    tipoFornecedor: 'produtos'
}

Object.preventExtensions(fornecedor);

fornecedor.desc = 'Só embalagens'

console.log(fornecedor)

fornecedor.totalTitulosEmAberto = 6

console.log(fornecedor)


const fornecedor2 = Object.preventExtensions({
    desc: 'NomeFornecedor2',
    cnpj: '46541121235',
    contatos: ['telefone1', 'telefone2', 'telefone3'],
    enderecoFaturamento: {
        rua: 'nomeDaRua',
        bairro: 'nomeDoBairro',
        numero: 123
    },
    isAtivo: true,
    totalValorComprado: 80000,
    tipoFornecedor: 'produtos'
})

let cnpj = '46541121235'

let cnpjInt = parseInt(cnpj)

console.log(typeof cnpj)
console.log(typeof cnpjInt)
console.log(cnpjInt)


console.log(Object.isExtensible(fornecedor2))

delete fornecedor.desc

console.log(fornecedor)
console.log('\n\n\n')

const pessoa = { nome: 'Juliana', idade: 35 }

Object.seal(pessoa) //n permite adicionar e nem retirar novos elementos.


