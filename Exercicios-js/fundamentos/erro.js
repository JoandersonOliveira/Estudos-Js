function tratarErroELancar(erro) {
    throw new Error('Erro ao executar função...')
    //throw 10
    //throw true
    //throw 'mensagem'
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') //aqui a função tenta executar o bloco
    } catch (e) {                         //Dentro do bloco CATCH é feito o tratamento da exceção
        tratarErroELancar(e)
    } finally {
        console.log('Final')  // O bloco finally é o ultimo mesmo o erro tendo sido tratado no bloco catch
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)
