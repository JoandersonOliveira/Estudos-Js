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

Object.defineProperty(cliente, 'nome', {
    writable: false,
    enumerable: false,
    value: 'Lucas'
})

console.log(cliente)

cliente.nome = 'Ricardo'
console.log(cliente)