//Em js array é um Objeto. Estrutura indexada a partir do ídice zero
//Estrutura dinâmica heterogenea.

console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);


aprovados[3] = 'Paulo'; //adicionando valor no índice 3
aprovados.push('Abia'); //lançando novo valor na ultima posição do array
console.log(aprovados.length);

aprovados[9] = 'Rafael'; //como o array tinha somente 4 posições, ao adicionar uma 9° posição todos as posições entre o índice 4 e o 9 serão criados e ficarão undefyned.
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // verificando se a posição 8 é estritamente igual a undefyned.
console.log(aprovados); //[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort(); //sort() irá ordenar o array. Nesse caso como os elementos são compostos de string ele irá retorna o array em ordem alfabética.
console.log(aprovados);

delete aprovados[1] //deletando o elemento do indice 1. O índice ainda vai existir porém cundefined.
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana', 'Lucas', 'Gabriel', 'Bruno'];
aprovados.splice(1, 2, 'Elemento1', 'Elemento2'); //Remover e adicionar elementos. 1° parametro = indice, 2° = quantos elementos a partir do 1° parametro serão excluídos
                                                 //A partir do 1 elemento vai excluir dois elementos e em seguida adicionará os elementos 1 e 2.

//aprovados.splice(1, 0, 'Elemento1', 'Elemento2'); // OUTPUT: ['Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana', 'Lucas', 'Gabriel', 'Bruno'

console.log(aprovados)   




//Nota: boa prática trabalhar com dados homogeneos dentro de um array
//Nota: Alguns métodos alteram o array original, como o método sort(). Em outros casos alguns métodos retorna uma cópia do array original alterado.
