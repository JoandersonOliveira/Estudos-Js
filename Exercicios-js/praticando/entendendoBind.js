const pessoa = {
    saudacao: 'Jesus love you!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()

/*se retirar o bind(pessoa) retorna undefined pois o this perde seu contexto
pois o this não está mais apontando para o objeto pessoa
*/
const falar = pessoa.falar.bind(pessoa)

falar() 

