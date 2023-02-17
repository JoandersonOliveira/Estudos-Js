const personagem = {
    saudacoes: 'Hi, my name is SpiderMan!',
    nome: 'SpiderMan',
    poderes: 'aranha',
    editora: 'Marvel',
    
    falarNome(){
        console.log(this.saudacoes);
    }
    

}



//personagem.falarNome()

const meApresentar = personagem.falarNome.bind(personagem)

meApresentar()

