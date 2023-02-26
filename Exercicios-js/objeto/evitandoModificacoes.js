// Object.preventExtensions

const produto = Object.preventExtensions({  //bloqueia adição de novos atributos em um object
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // verificando se o objeto é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)// retorna somente nome e preco. Nesse caso o objeto pode ser modificado mas não extendido.

const pessoa = { nome: 'Juliana', idade: 35 }
//Object.seal(pessoa) //.seal não permite adicionar novos elementos e nem excluir porém permite modificar os objetos.

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

//object.freeze = object.seal + objetos constantes

