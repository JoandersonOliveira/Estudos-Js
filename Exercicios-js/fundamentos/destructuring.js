// novo recurso 2015
//desestruturaçao de dados

/**A sintaxe de atribuição de desestruturação é uma expressão JavaScript que torna possível descompactar
 * valores de arrays ou propriedades de objetos em variáveis distintas. */

const pessoa = {

    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}


const { nome, idade } = pessoa;  //Retira os atributos dentro do bloco do objeto permitindo usar fora do bloco

console.log(nome, idade);

const { nome: n, idade: i } = pessoa; //criando variavel extraindo dos atributos do objeto
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; //atributos não existe dentro do objeto
console.log(sobrenome, bemHumorada); 

const { endereco: {logradouro, numero, cep}} = pessoa;

console.log(logradouro, numero, cep);



