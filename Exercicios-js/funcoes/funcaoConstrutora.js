function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0


    //metodo publico
    this.acelerar = function () {    // o 'this' nesse caso torna o método publico para fora da função.
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico

    // retornando a variável privada 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()          // Não vai retornar nenhum valor pois o atributo 'velocidadeAtual' no metodo acelerar é privado.
console.log(uno.getVelocidadeAtual()) //o método 'getVelocidadeAtual' retorna a variável velocidade atual.


const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

/**
 * A função funciona como uma classe (molde) e posso instanciar objetos dessa função. Todos os atributos desta função
 * pertence a cada objeto instanciado mesmo que sejam privados ou públicos.=
 */