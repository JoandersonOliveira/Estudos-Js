const recibo = {
    totVenda: 0,
    cliente: 'nomeCliente',
    codVenda: 00,
    desc: 00,
    nomeEmpresa: 'nomeEmp',
    produtos: [
        { prod1: preco = 0 },
        { prod1: preco = 0 },
        { prod1: preco = 0 },
        { prod1: preco = 0 }
    ],
    imprimeCliente: () => console.log(this.cliente)
}

console.log(Object.keys(recibo))
console.log(Object.values(recibo))
console.log(Object.entries(recibo))

//ASSIGN

const objeto1 = { idade: 2 }
const objeto2 = { idade1: 2 }
const objeto3 = { idade2: 2 }


const objetoConcatendado = Object.assign(objeto1, objeto2, objeto3)

console.log(objetoConcatendado)
