nomes = ['anderson', 'Bruno', 'Duda', 'Gaby']

//O 1º parâmetro é referente ao conteúdo do índice, o 2º se refere a posição do índice, o 3º retorna o próprio array
function imprimirNome(item, indice, teste, teste2) {
    console.log(item)
    console.log(indice + 1)
    console.log(teste)
    console.log(teste2)
}


nomes.forEach(imprimirNome);

