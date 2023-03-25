require('./global') //importando para o escopo global. Não atribuí para nenhuma variável. Dessa forma o modulo já está no escopo global.
console.log(MinhaApp)
console.log(MinhaApp)

/*Como o objeto está no escopo global ele pode ser alterado de qualquer módulo.
uma alternativa seria congelar o objeto usando o Object.freeze.


globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return `estou em todos os lugares`
    },
    nome: 'Sistema Legal'
})
*/