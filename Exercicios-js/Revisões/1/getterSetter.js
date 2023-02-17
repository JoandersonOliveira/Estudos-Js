const carro = {
    _modelo: 'Uno',
    _marca: 'Fiat',
    _cor: 'vermelho',
    _kilometragem: 6.3,

    get modelo() {
        return this._modelo
    },
    set modelo(modelo) {
        this._modelo = modelo
    },

    get marca() {
        return this._marca
    },
    set marca(marca) {
        this._marca = marca
    },

    get cor() {
        return this._cor
    },
    set cor(cor) {
        this.cor = cor
    },

    get kilometragem() {
        return this._kilometragem
    },

    set kilometragem(kilometragem) {
        return this.kilometragem
    }

}



// console.log(carro.cor)

const pessoa = {
    _nome: 'Bruna',
    get nome() { return this._nome },
    set nome(nome) { this._nome = nome }
}

console.log(pessoa.nome)
pessoa.nome = 'Carol'
console.log(pessoa.nome)