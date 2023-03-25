const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const produtosCaros = (itens) => itens.preco >= 500;
const somenteFrageis = itens => itens.fragil;

// console.log(produtos.filter(function (p) {      //método filter retorna true ou false. Se for verdadeiro o valor será imcrementado no array resultante.
//     return p.preco < 4199 && p.preco > 15
// }))


console.log(produtos.filter(produtosCaros).filter(somenteFrageis));

