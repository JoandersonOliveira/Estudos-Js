/**o modulo fileSytem é responsável por ler, escrever, verificar conteúdos de uma pasta e etc. */

const fs = require('fs') //fs =referencia do  "filesystem" módulo interno do node

const caminho = __dirname + '/arquivo.json'   //__dirname = diretório atual


//Sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8') //método 'readFileSync 'ler o arquivo de forma sincrona. dependendo do tramanho do arquivo ele demora ler o conteúdo e fica travado.
//1° parametro o caminho do arquivo e o 3° o encoding, nesse caso foi o utf-8
console.log(conteudo)

//o arquivo será lido forma syncrona. Dessa forma o enentLoop ficará travado e só é liberado após o final da da leitura do arquivo. 
//Tomar cuidado em situações onde o arquivo for muito grande, pois o node pode gastar muito tempo no event loop e demorar pra despachar o arquivo.


//Assincrona... (leitura mais interessante) Quando o arquivo for carregado será mandado uma callback e o arquivo será enfim retornado

//o método readFile recebe 3 parametros: ( filename, encoding, callback_function ) a função callback tem um parametro que pega erro caso aconteça e outro parametro para armazenar o conteúdo.
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //2 parametros: erro e o conteúdo que foi lido do arquivo. A variavel 'err' precisa estar vazia para o conteúdo ser lido
    const config = JSON.parse(conteudo)             //só vai funcionar se o conteúdo da variável 'conteúdo' for um objeto
    console.log(`${config.db.host}:${config.db.port}`)
})  //assim que o arquivo for lido o readfile chama uma callback que irá fazer os tratamentos no conteúdo do arquivo.

console.log('\n\n')

//outra forma mais simples de importar o arquivo json para objeto



//sincrono

const config = require('./arquivo.json')  //apenas usando o require é possível ter acesso ao objeto 'config'. Já traz o arquivo convertido para objeto
console.log(config)
console.log(config.db.host)


// console.log(__dirname) // retorna o caminho absoluto do diretorio

//lendo um diretório

fs.readdir(__dirname, (err, arquivos) => {  //readdir vai ler os arquivos da pasta, após finalizar a leitura vai retornar a callback retornando os arquivos do diretório
    // if (err) { console.log(err) }
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})


