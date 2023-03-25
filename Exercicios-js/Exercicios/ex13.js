/**Crie uma função que receba um objeto no primeiro parâmetro e uma propriedade no segundo, em seguida retorne uma cópia 
 * do objeto passado no primeiro parâmetro sem a propriedade passada no segundo.
 */

const pessoa = {
    nome: 'Lucas',
    idade: 26,
}

function deletaAtributo(objeto, propriedade) {
    copia = Object.assign({}, objeto); //concatenando o objeto vazio com o objeto do primeiro parâmetro
    delete copia[propriedade]
    console.log(copia);
}

// console.log(deletaAtributo(pessoa, idade));

deletaAtributo(pessoa, 'idade')