const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//forEach => (para cada). Executa uma função de callback para cada elemento de um array. A função que será executada é passada como parâmetro no método forEach(.)
fabricantes.forEach(imprimir)

fabricantes.forEach(function fabricante(a) {  // O parâmetro 'a' representa cada elemento do array
    console.log(a)
})

/**
 * function imprimir(conteúdoDoAray, posiçãoDoArray, arrayInteiro) {
    console.log(`${indice + 1}. ${nome}`)
}
 */