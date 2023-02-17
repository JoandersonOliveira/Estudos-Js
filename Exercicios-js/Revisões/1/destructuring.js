const pessoa = {
    nome: 'Lucas',
    idade: 25,
    endereco: {
        rua: 'Rua B',
        numero: 126
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)

const {endereco:{rua, numero}} = pessoa

console.log(rua, numero)