//criando objetos

// const pessoa5 = Object.create({
//     nome:{value: 'nomePessoa'}
// })

// console.log(pessoa5)


const pessoa5 = new Object({
    nome: 'Diego',
    idade: 26,
    cpf: 1112223334445,
    falaNome() { console.log(`meu nome é:  ${this.nome}`) },
    endereco: {
        rua: 'Rua Peroba',
        numero: 111,
        bairro: 'Todos os santos',
        complemento: 'casa'
    },
    filhos: [
        {
            nome: 'nome',
            idade: 00
        },
        {
            nome: 'nome',
            idade: 00
        },
        {
            nome: 'nome',
            idade: 00
        }
    ]
}
)

// pessoa5.nome = 'Diego',
// pessoa5.idade = 26,
// pessoa5.falaNome = function(){console.log(`meu nome é:  ${this.nome}`)}

console.log(pessoa5.nome)
console.log(pessoa5.falaNome())

// const pessoa6 = new pessoa5() // console.log(pessoa6) error. pessoa5 is not a constructor
// pessoa6.nome = 'pessoa6'

console.log('\n\n');

delete pessoa5.nome;
console.log(pessoa5.nome)
pessoa5.nome = 'Lucas'
console.log(pessoa5.nome)
console.log(pessoa5.filhos)
console.log(JSON.stringify(pessoa5.filhos))

console.log('\n\n');

pessoa5.filhos[1].nome = 'Mikael'

console.log(pessoa5.filhos)

pessoa5['numHabilitacao'] = '56234879' //definindo através de string

console.log(pessoa5)

console.log(pessoa5['numHabilitacao']) //acessao através de string

pessoa5['endereco']['rua'] = 'Av Ovidio Abreu' //atribuindo novo valor para av ovidio abreu

console.log(pessoa5['endereco'])