function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)         //o bind vai amarrar o this do objeto instanciado ao this dessa função
                                //se retirar o .bind o objeto instanciado desta função não vai acessar a propriedade usando o this.
}

new Pessoa // instanciando novo objeto pessoa

//Poderia ser feito da seguinte forma

/*
function Pessoa() {
    this.idade = 0

    const self = this  //atribuindo a referencia de this para a variável self

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this), 1000)        
                                
}

new Pessoa 
*/