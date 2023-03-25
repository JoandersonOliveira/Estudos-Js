const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//    console.log('Middleware 1...')
//    next() // utilizando o next a função vai pular para próxima função.

// })

//passar função middleware como resposta para requisição em cima de '/produtos'
// app.get('/produtos', (req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.45 }) //função 'send' envia resposta. O objeto passado no res.send é convertido automaticamente para JSON.

// })
app.use(bodyParser.urlencoded({ extended: true })) //o retorno da função url é uma função middleware
/**todas as requisicoes vao passar por esse middleware e se tiver com formado encoded 
 * essa função aplica um parser. Transmora o corpo da requisção em objeto
 */

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())

})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //pega os parametros passados na URL
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //body: corpo da requisição. São os dados capturados da requisicao
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})


/**NOTA
 * app.METHOD(PATH, HANDLER)
 * 
 * app é uma instância do express.
   METHOD é um método de solicitação HTTP.
   PATH é um caminho no servidor.
   HANDLER é a função executada quando a rota é correspondida.
 */