const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario }; //pegando todos os atributos de funcionario e colocando dentro de do objeto clone
console.log(clone)

//usar spread com array

const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'rafaela']

console.log(grupoFinal)