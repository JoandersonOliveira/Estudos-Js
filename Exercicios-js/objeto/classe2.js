class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') { // O atributo 'profissao' pertence somente a classe Pai
        super(sobrenome); //chamada para o construtor de Avo (super classe). Com isso o Js vai chamar o (this.sobrenome = sobrenome;) da classe Avo.
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva'); // Método super referenciando o construtor da classe Pai
    }
}

const filho = new Filho
console.log(filho) //Filho { sobrenome: 'Silva', profissao: 'Professor' }

//No ambito de sintaxe de classe essa é a forma de definir que uma classe tem outra classe, ou outra função como protótipo