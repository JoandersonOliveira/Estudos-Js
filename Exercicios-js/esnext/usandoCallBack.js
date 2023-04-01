//Sem promise...

const http = require("http");

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";
    res.on("data", () => {
      // on data => evento de resposta. os dados importados estao no parametro dados
      resultado += dados;
    });
    res.on("end", () => {
      //evento de resposta on 'end'. Onde terminou de chegar os dados
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});

/**Nota: Callbacks aninhadas não é uma boa prática*/
