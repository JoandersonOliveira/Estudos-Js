// Funções interessantes dentro da função Object.

const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 64
}

console.log(Object.keys(pessoa)) //pega todas as chaves do objeto pessoa. [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // retorna os valores das chaves: [ 'Rebeca', 19, 64 ]
console.log(Object.entries(pessoa)) //retorna um arrray que contém  elementos de duas posições com chave e valor: [ [ 'nome', 'Rebeca' ], [ 'idade', 19 ], [ 'peso', 64 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {   // Pegando cada elemento que vem dentro do forEach e retirando de dentro da estrutura os elementos chave e valor usando o operador destructuring.
    console.log(`${chave}, ${valor}`)
})

//defineProperty: permitre definir propriedades apra os atributos do objeto.
Object.defineProperty(pessoa, 'dataNascimento', {  //nome da propriedade entre aspas. Também estou criando a propriedade "dataNascimento".
    enumerable: true,    //define se está passiva a ser listada. Se definido como 'false' não será mais listado como um atributo.
    writable: false,     //Propriedade passiva a ser modificada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // não vai retornar 01/01/2017 pois o atributo foi congelado.

console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

//Object.assign pega todos os dados dos objetos e concatena com objeto de destino. O objeto de destino é referenciado no 1º parâmetro. 

const obj = Object.assign(dest, o1, o2)  //como a variável 'a' já existia o jS substitui pe a: 4 do objeto 'o2'.

console.log(obj)

console.log('\n\n\n')

const cliente1 = { numero: 1 }
const cliente2 = { valor: 2 }
const cliente3 = { num: 3 }

const objeto = Object.assign(cliente1, cliente2, cliente3)

console.log(objeto)