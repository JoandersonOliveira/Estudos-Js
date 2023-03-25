// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'  //notação ponto

produto['marca do produto'] = 'Generica'  //identificador entre colchetes
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto.marca
delete produto['marca do produto']

console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',         //criando um array de objetos
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValrSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000  //acessando através da notação ponto

carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'  //acessando através de strings

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValrSeguro
// console.log(carro)
// console.log(carro.condutores)
// console.log(carro.condutores.length)




