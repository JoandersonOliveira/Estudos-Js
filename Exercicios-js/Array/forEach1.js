const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];


//1° índice é o elemento atual do array, o 2° é o índice do array, o 3° elemento retorna o próprio array
//A função callback que passamos para um forEach recebe também 3 parâmetros: O elemento, o índice e o array.

aprovados.forEach(function (nome, indice) { //percorre o array. A cada elemento vai chamar a funcao passando o elemento e o indice nos parâmetros
    console.log(`${indice + 1} ${nome}`);
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);