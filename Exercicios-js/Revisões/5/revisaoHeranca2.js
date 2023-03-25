const mae = {
    nome: 'Joaquina',
    corDeCabelo: 'Castanho'
}

const filha = Object.create(mae) //estabelecendo relacao objeto e protótipo

console.log(filha.__proto__)
filha.nome = 'Mariana'


const filha2 = Object.create(mae, {
    nome: { value: 'Marielly', writable: true, enumerable: true },
    corDeCabelo: { value: 'Castanho claro', enumerable: true, writable: true }
})