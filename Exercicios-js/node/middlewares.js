//middleware pattern (chain of responsability)

const passo1 = (ctx, next) => { //ctx representa um objeto que será passado
    ctx.valor1 = 'mid1'
    next() //função responsável por chamar próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//função que vai executar os passos 
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&    //verificando se o indice não está fora do array. Ele precisa ser menor que o array de funções middlewares
            middlewares[indice](ctx, () => execPasso(indice + 1))            // >>"middlewares[indice](ctx)"<< executando a função na posição do indice atual
    }
    execPasso(0) //dispara a execução do passo 0 caso a função execPasso(indice + 1) não for chamada e para a execução
}

/**Explicando função exec: recebe 2 parametros, o ctx e um array de fuções ...middlewares. a func execPasso 
 * verifica se middlewares está setado, se o indice ainda está dentdo do array e executa a função na posicao da 
 * iteração atual do indice. No final é passado o objeto ctx e no 2° parametro uma função para repetir a função execPasso.
  */

const ctx = {}
exec(ctx, passo1, passo2, passo3)
// exec(ctx, passo2, passo1, passo3) //mesmo trocando os contextos de lugar as funções serão executadas
// exec(ctx, passo3, passo1, passo2) // Casso passo3 for executado no primeiro índice as demais funções n serão eecutadas pois o passo3 n tem a fnução next()
console.log(ctx)