// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

/**A variável  'pessoa' aponta para um endereço de memória onde está o objeto com os dados
 * por isso  é possível alterar os seus dados mesmo a variável sendo uma constante.
 */

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } //Nesse exemplo retorna erro pois estou tentando apontar para um outro objeto.

Object.freeze(pessoa)// O método freeze congela um objeto e não permite reatribuições feitas no objetos a partir desse método.

pessoa.nome = 'Maria'
console.log(pessoa.nome) // pessoa.nome não imprimirá 'Maria', será umpresso 'Pedro'.
pessoa.end = 'Rua ABC'
delete pessoa.nome

//O objeto se torna constante.
console.log(pessoa)


//Declarando um objeto constante já passando os dados
const pessoaConstate = Object.freeze({ nome: 'Joao' })

