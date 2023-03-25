Array.prototype.forEach2 = function(callback){ //adicionando fun
    for(let i = 0; i < this.length; i++){
        callback(this[i], [i], this);
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function (nome, indice) { //percorre o array. A cada elemento vai chamar a funcao passando o elemento e o indice nos parâmetros
    console.log(`${indice +1}) ${nome}`);
})

