const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

//Converte para Json
function converteParaJson(json) {
    let arrayTratado = JSON.parse(json);
    return arrayTratado;
}


const somentePrecos = (produto) => produto.preco

const paraJson = carrinho.map(converteParaJson).map(somentePrecos)

console.log(paraJson);
