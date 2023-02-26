//Teste 

// const prompt = require('prompt-sync')({ sigint: true });

const pessoa = {
    nome: 'nomePessoa',
    idade: 20,
    endereco: {
        rua: 'Peroba',
        numero: 124,
        bairro: 'Arvoredo'
    }
}

// const name = prompt('Qual o seu nome? ');
// console.log(`Olá ${name}`)

pessoa.nome = prompt('olá, qual o seu nome? ')
pessoa.idade = prompt('Quantos anos você tem? ')
pessoa.endereco.rua = prompt("Vamos precisar do seu endereço. Qual o nome da sua rua? ")
pessoa.endereco.numero = prompt("Qual o número da residencia?")
pessoa.endereco.bairro = prompt('Em qual bairo você mora? ')

console.log(pessoa)