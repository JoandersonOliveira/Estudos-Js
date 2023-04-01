function ProdutosPrecosAcimaDe(...produto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(produto);
    }, 3000);
  });
}

const produto1 = {
  nome: "Notebook",
  _preco: 1400,
};
const produto2 = {
  nome: "Batedeira",
  _preco: 840,
};
const produto3 = {
  nome: "Playstation 5",
  _preco: 5000,
};

ProdutosPrecosAcimaDe(produto1).then((produto) => {
    console.log(produto)
});
