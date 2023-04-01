//revisao promise

function promise(objeto) {
  return new Promise((resolve, reject) => {
    resolve(objeto);
  });
}

const produto = {
  nome: "NoteBoook",
  preco: 3200.7,
};

const produto2 = {
  estoque: 10,
  Nfe: true,
};
// console.log(promise(produto));
// promise(produto)

promise(produto)
  .then((produto) => produto.preco = produto.preco + 10)
  .then((novoProduto) => console.log(novoProduto))
  .catch((e)=> console.log('Erro'))
