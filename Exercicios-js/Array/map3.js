//Implementação de map

Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)); // passando o elemento atual, o índice e o array para o array "newArray"
    }                                              //Nesse caso o this faz referência ao array de contexto.
    return newArray;
}


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

const paraJson = carrinho.map2(converteParaJson).map2(somentePrecos)

console.log(paraJson);
