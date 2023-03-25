//Objetos constantes

const veiculo = {
    modelo: 'uno',
    marca: 'Fiat',
    ano: '2014',

}

// Object.freeze(veiculo);
// veiculo.modelo = 'strada'

console.log(veiculo['marca'])

veiculo['condutores'] = [{ nome: 'Condutor 1', endereco: { rua: 'rua', num: 123 }, },
{ nome: 'Condutor 1', endereco: { rua: 'rua', num: 123 } },
{ nome: 'Condutor 1', endereco: { rua: 'rua', num: 123 } }];

// delete veiculo.modelo

console.log(veiculo)

console.log('\n\n')

const cliente = Object.freeze({
    nome: 'nomeCliente',
    casado_a: false,
    endereco: {
        rua: 'fsdfdfsdf',
        num: 123,
        bairro: 'sdfdsfdfds'
    }
})

cliente.cpf = '123456789'

console.log(cliente)