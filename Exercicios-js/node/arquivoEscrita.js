const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//persistindo arquivo json. Depois do  '__dirname' vem o nome do arquivo que vou gerar. (arquivoGerado.json)
//fs.writeFile( file, data, options, callback )
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo') //se a variavel estiver null vai resolver para falso
})