const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //o 'this referencia o atributo 'saudacao' do objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar()

/**neste exemplo onde armazenei a função falar do objeto pessoa na variável falar acontece um conflito. 
 * o 'this.saudacao' na variavel para de apontar para o atributo "saudacao" do objeto 'pessoa'. Este conflito é solucionado o a função bind.
 */
falar() //conflito entre paradigmas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) //bind permite passar um objeto como referencia para o 'this' nesse caso o objeto 'pessoa'. 
falarDePessoa()

//nota: armazenar em uma variável em uma função é como criar uma nova instancia dessa função.