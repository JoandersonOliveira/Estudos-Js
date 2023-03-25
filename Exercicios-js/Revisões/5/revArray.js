const alunos = [{
    nome: 'MArina',
    idade: 13,
    sexo: 'f',
    endereco: 'Rua Peroba, 156',
    paisOuResponsáveis: {
        nome: 'Joaquin',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}, {
    nome: 'Bruna',
    idade: 14,
    sexo: 'f',
    endereco: 'Rua tamboril',
    paisOuResponsáveis: {
        nome: 'Antonio',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}, {
    nome: 'Jessica',
    idade: 16,
    sexo: 'f',
    endereco: 'endereco',
    paisOuResponsáveis: {
        nome: 'nome',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}, {
    nome: 'joao',
    idade: 14,
    sexo: 'm',
    endereco: 'Rua beija flor',
    paisOuResponsáveis: {
        nome: 'Angela',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}, {
    nome: 'Lucas',
    idade: 15,
    sexo: 'm',
    endereco: 'Rua Brauna',
    paisOuResponsáveis: {
        nome: 'Raquel',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}, {
    nome: 'Pedro',
    idade: 18,
    sexo: 'm',
    endereco: 'Rua Seriema',
    paisOuResponsáveis: {
        nome: 'Maria',
        telefone: 3899999999999,
        cpf: 15115136458
    }
},{
    nome: 'Bruna',
    idade: 19,
    sexo: 'f',
    endereco: 'Rua Peroba, 122',
    paisOuResponsáveis: {
        nome: 'Alisson',
        telefone: 3899999999999,
        cpf: 15115136458
    }
}
]

//filtre somente alunos do sexo masculino
// const alunosMasculinos = alunos.filter(e => {e.sexo == 'm'})

// console.log(alunos.filter(e => {e.sexo == 'm'}))

const alunosDeMaiores = (aluno) => aluno.idade >= 18
// const alunas = alunas => alunos.sexo = 'f'
const alunas = alunos.filter(alunas => alunos.sexo = 'f')


// console.log(alunos.filter(alunosDeMaiores))
// console.log(alunos.filter(alunas).filter(e => e.idade >= 18))
console.log(alunas)