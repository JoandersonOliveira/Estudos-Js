const cliente = Object.create(null)

const clientes = {
    nomeCliente: 'nomeCliente',
    limiteCredito: 200,
    endereco: {
        rua: 'nomeRua',
        bairro: 'nomeBairro',
        numero: 122
    }

}

const cliente1 = Object.create(clientes)

cliente1.nomeCliente = 'José Antônio'
cliente1.endereco.rua = 'Peroba'    // quando for imporesso os dados do objeto cliente1 será priorizado os atributos locais definidos no objeto atual e não o conteúdo do seu protótipo.

console.log(`O cliente ${cliente1.nomeCliente} reside no endereço: ${cliente1.endereco.rua}, Nº ${cliente1.endereco.numero}, bairro: ${cliente1.endereco.bairro}`)


const cliente2 = Object.create(clientes, {
    nomeCliente: { value: 'Adriana', enumerable: true, writable: true },
    limiteCredito: { value: 126, enumerable: true, writable: true }
})

console.log(cliente2.nomeCliente)   //Retorna o nome definido no objeto atual
console.log(cliente2.limiteCredito) // Retorna o nome definido no objeto protótipo




