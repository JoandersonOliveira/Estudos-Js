function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}


// Simulando o new para instanciar novos objetos
function novo(f, ...params) {   //params representa um conjunto de parametros para o obj
    const obj = {}              //criando um objeto vazio
    obj.__proto__ = f.__proto__ //fazendo o obj recém criado apontar para f.prototype
    f.apply(obj, params)        //apply recebe o parametro para o objeto, o 2° parametro é um array com a lista de parametros de (params)
    return obj
}

const aula1 = novo(Aula, 'Bem Vindo', 123)
console.log(aula1)

