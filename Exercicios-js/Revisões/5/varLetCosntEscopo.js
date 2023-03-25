//Escopo de bloco
{
    var testandoVar = 15;
    let testandoLet = 20;
    const TESTANDO_CONST = 30;
}

console.log(testandoVar);     //15
console.log(testandoLet);     //testandoLet is not defined
console.log(TESTANDO_CONST);  //TESTANDO_CONST is not defined

Var não possui escopo de bloco

Escopo de função

function testeDeEscopo() {
    var testeVarEscopoFuncao = 15;
    let testeLetEscopoFuncao = 20;
    const TESTE_CONST_ESCOPO_FUNCAO = 30;
}
console.log(testeVarEscopoFuncao); //testeVarEscopoFuncao is not defined
console.log(testeLetEscopoFuncao); //testeLetEscopoFuncao is not defined
console.log(TESTE_CONST_ESCOPO_FUNCAO); //TESTE_CONST_ESCOPO_FUNCAO is not defined