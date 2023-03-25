const moduloA = require('../../moduloA'); //voltando duas pastas
//const moduloA = require('C:\Users\ander\OneDrive\Documentos\Dev\javaScript\CURSO_COD3R\Exercicios-js\node\moduloA.js');       //buscando pela URL absoluta.

console.log(moduloA.ola)
const saudacao = require('saudacao'); //não foi necessario colocar caminho relativo pois o moduto está dentro da pasta nodemodules

console.log(saudacao.ola);

//importando modulo interno do node (modulos core)

// const http = require('http'); //importando modulo http interno do node
// http.createServer((req, res) => { //callback recebe uma requisicao e uma resposta
//     res.write('Bom dia!');      //requisição
//     res.end()  //finalizando requisição
// }).listen(8080)  //escutando na porta 8080

const C = require('./pastaC');
console.log(C.ola2)

const exportar = require('../../exportar');
console.log(exportar);