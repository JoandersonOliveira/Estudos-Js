const express = require('express')

const server = express()

server.get('/dados', (req, res) => {
    res.send(console.log('executando...'))
})