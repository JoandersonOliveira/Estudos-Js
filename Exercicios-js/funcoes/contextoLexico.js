// contexto lexico

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // retorna global já que a função 'minhaFuncao' imprime a variável global.

/**
 * nota: toda função carrega a informação (contexto) de onde a mesma foi declarada.
 */