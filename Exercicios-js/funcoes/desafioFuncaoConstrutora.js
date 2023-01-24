/**
 * transformar essa classe em uma função construtora
  
class Pessoa {
   
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome} `);
    }
}
 */


function pessoa(nome) {
    this.nome = nome            //O this referencia o objeto instanciado a partir da função.
                                //em função nao é necessário um método construtor pois as informações são passadas no parãmetro na chamada da função
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
        
    }
}

const p1 = new pessoa('João')
p1.falar()

const p2 = new pessoa()
p2.nome = 'Lucas'

p2.falar()