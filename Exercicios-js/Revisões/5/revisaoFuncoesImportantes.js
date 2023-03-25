const pessoa = {
    nome: 'Tandara',
    idade: 19,
    peso: 64,
    telefone: 159467238
}
const pessoa2 = {
    nome: 'Rebeca',
    idade: 26,
    peso: 56,
    estadoCivil() { this.idade < 18 ? this.pessoa2.estadoCivil = true : this.pessoa2.estadoCivil = false }
}

const pessoa3 = {
    nome: 'Adriana',
    idade: 13,
    peso: 45,
    altura: 1.55,
    revelaEstadoCivil: function () { console.log(pessoa2.estadoCivil()) }
}

console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {   // Pegando cada elemento que vem dentro do forEach e retirando de dentro da estrutura os elementos chave e valor usando o operador destructuring.
    console.log(`${chave}, ${valor}`)
})

Object.defineProperty(pessoa, 'endereco', {
    value: 'Rua peroba',
    writable: false,  //bloqueando alteraçoes neste atributo
    enumerable: true
})

pessoa.endereco = 'rua beija flor' //{ nome: 'Rebeca', idade: 19, peso: 64, endereco: 'Rua peroba' }
console.log(pessoa)

console.log('\n\n\n')

Object.assign(pessoa, pessoa2, pessoa3)

console.log(pessoa)

