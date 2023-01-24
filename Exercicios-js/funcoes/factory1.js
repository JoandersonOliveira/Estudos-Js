//Uma função factory retorna um objeto

// Factory simples
function criarPessoa() {            
    return {
        nome: 'Ana',               //utilizando a notação literal de objetos
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())