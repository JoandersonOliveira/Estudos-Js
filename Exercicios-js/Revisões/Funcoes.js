//Armazenando e retornando funções em um Array

const funcoes = [
    function ola(a, b) { return a + b  },
    function ola(a, b) { return a + b  },
    function ola(a, b) { return a + b  },
    function ola(a, b) { return a + b  }

]

let valor = 500
console.log(funcoes[0](1, 1), funcoes[1](2, 2), funcoes[2](3, 5), funcoes[3](6, 5))


for (let i = 0; i < funcoes.length; i++) {
    console.log(funcoes[i](i, i))

}

console.log('\n\n FUNÇÃO EM OBJETOS\n\n')

