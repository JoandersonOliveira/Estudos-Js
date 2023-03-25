const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
];

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) { //pensamos mais no passo a passo como dever ser feito.
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo

let soma = (total, valor) => total + valor;// pensamos mais no que deve ser feito.
let notaAlunos = alunos.map(a => a.nota);
let total2 = notaAlunos.reduce(soma)

console.log(total2 / alunos.length)


/**o modo declarativo me permite reusar códigos em outros contextos, eqt o imperativo me permite menos reuso
 * 
 * na abordagem imperativa é necessário descrever passo a passo do que deve ser feito, pensando no arranjo do algorítmo. O 'como' é mais importante do que 'o que tem que ser feito'
 * na abordagem declarativa pensamos mais no "o que deve ser feito"
 */