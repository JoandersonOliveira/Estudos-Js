const cliente = {
    nome: 'nome',
    dtUltimaCompra: '10/11/2022',
    dtCadastro: '05/02/2022',
    bloqueado: false,
    cpf: 14029645876,
    endereco: {
        rua: 'Rua',
        bairro: 'bairro',
        cep: 213456 - 56,
        numero: 235
    },

}

let {nome, dtUltimaCompra, dtCadastro, bloqueado, cpf, } = cliente

console.log(cliente.nome)
console.log(cliente.dtUltimaCompra)
console.log(cliente.dtCadastro)
console.log(cliente.bloqueado)
console.log(cliente.endereco)

nome = 'name'
dtUltimaCompra = '07/07/2022'
dtCadastro = '08/12/2023'
bloqueado = true
cpf = 14038919187

console.log('\n\n\n')

console.log(cliente.endereco)

console.log(nome)
console.log(dtUltimaCompra)
console.log(dtCadastro)
console.log(bloqueado)
console.log(cpf)

console.log('\n\n\n')

console.log(typeof cliente.nome)
console.log(typeof nome)