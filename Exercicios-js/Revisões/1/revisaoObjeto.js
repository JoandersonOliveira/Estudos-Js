const fornecedor = {
    razaoSocial: 'Desc da empresa',
    cnpj: 1110002552 - 0001,
    sociedades: [{
        nome: 'nome',
        cpf: 1506955788
    }, {
        nome: 'nome',
        cpf: 1506955788
    },
    {
        nome: 'nome',
        cpf: 1506955788
    }],

    endereco: {
        rua: 'nome da Rua',
        num: 000,
        bairro: 'nome do bairro'
    }
}

//DERSTRUCTURING

const {razaoSocial, cnpj} = fornecedor


console.log(razaoSocial)
console.log(cnpj)

const {razaoSocial: nomeEmpresa, cnpj: identificacaoEmpresa} = fornecedor

console.log(nomeEmpresa, identificacaoEmpresa)