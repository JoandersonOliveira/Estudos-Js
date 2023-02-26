const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //massa quebrou o carro!!
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); //remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton'); // insere novo elemento no inicio do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa');
// a partir do índice 2, apagando 0 elementos, adicionando 'Bottas' e 'Massa'

console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //gera um novo array retornando elementos a partir do índice passado como parametro. Retorna um pedaço do array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array a partir do índice um até o índice 4. Porém o  índice 4 não é incluído, pois só irá pegar até o 3.

console.log(algunsPilotos2);

