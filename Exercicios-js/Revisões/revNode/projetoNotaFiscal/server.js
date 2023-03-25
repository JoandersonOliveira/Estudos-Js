const express = require('express')
const app = express()
const porta = 3003
const prodtutos = require('./ProdutoInstancias')
const vendas = require('./vendas')


app.get('/produtos', (req, res) => {
    res.send(prodtutos)
})
app.get('/vendas', (req, res) => {
    res.send(vendas)
})

app.listen(porta, () => { console.log(`rodando na porta ${porta}`) })