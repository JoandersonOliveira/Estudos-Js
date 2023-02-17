const petCliente = {
    nome: 'Lily',
    idade: 3,
    endereco: {
        rua: 'Rua x',
        numero: 122,
        bairro: 'Novo cruzeiro'
    }
}


console.log(petCliente.nome)
console.log(petCliente.idade)
console.log(petCliente.endereco.rua)

let { nome, idade } = petCliente
let { nome: n = 'Lua', idade: i = 4 } = petCliente


nome = 'Mel'
idade = 2

console.log(nome)
console.log(idade)

console.log('\n============================\n')

console.log(petCliente.nome)
console.log(petCliente.idade)

console.log('\n============================33\n')
console.log(n)


const {endereco:{rua, numero, bairro}} = petCliente


