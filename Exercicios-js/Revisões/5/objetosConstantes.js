// const cliente = Object.freeze({
//     _nome:'Ana',
//     idade:'46',
//     get nome(){ console.log(`${this._nome}`)}
// })

// cliente.nome
// cliente._nome = 'Samanta'
// cliente.nome

// const cliente = {
//     nome:'Jéssica',
//     idade: 28,
//     endereco: 'Rua peroba'
// }

// cliente.endereco2 = 'rua Beija Flor'
// console.log(cliente)


const cliente = Object.preventExtensions({
    nome: 'Jéssica',
    idade: 28,
    endereco: 'Rua peroba'
})

console.log(cliente)

cliente.endereco2 = 'rua Beija Flor'

console.log(cliente)


const alunos = {
    nome: 'nomeAluno',
    idade: 14,
    endereco: 'endereco',
    paisOuResponsáveis: {
        nome: 'nome',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}

Object.seal(alunos)

alunos.professores = ['Ana', 'Paulo', 'Ricardo']

console.log(alunos)
alunos. nome = 'Stefanni'
console.log(alunos)