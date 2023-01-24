//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis exteras à função

//contexto léxico em ação
const x = 'Golbal';

function fora() {
     const x = 'Local';

    function dentro() {
        return x;
    }

    return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao());

//Nota: Em js cada funções carrega o local e o contexto onde a mesma foi criada. 