// const aula = {
//     _disciplina: 'Matemática',
//     _professor: 'nomeProfessor',
//     _hora: '10:32',
//     get disciplina() { return this._disciplina },
//     set disciplina(disciplina) { this._disciplina = disciplina }
// }

// aula.disciplina = 'Biologia'
// console.log(aula.disciplina)

const pessoa = {
    _nome: 'Abibari',
    _idade: 27,
    falarNomeGritando() { console.log(`${this.nome.toUpperCase()}`) },
    get nome() { return this._nome },
    set nome(nome) { this._nome = nome }
}

pessoa.falarNomeGritando()
pessoa.nome = 'Tandara'
console.log(pessoa.nome)
pessoa.falarNomeGritando()