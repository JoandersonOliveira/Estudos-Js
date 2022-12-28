//Criando uma função anomima e armazenando dentro de uma variável.
const imprimirSoma = function (a, b) {
    console.log(a + b);    
}

imprimirSoma(2, 3);

//Armazenando uma funcao arrow em uma variavel
    const soma = (a, b) => {
        return a + b;
    }

console.log(soma(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b;
