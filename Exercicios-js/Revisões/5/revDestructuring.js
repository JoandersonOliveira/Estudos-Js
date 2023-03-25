const animalPaciente = {
    nome: 'NomeCachorro',
    idadeAnos: 1,
    raca: 'nomeRaça',
    tutor: {
        nome: 'nomeTutor',
        cpf: '11111111111',
        endereco: { rua: 'nomeRua', bairro: 'nomeBairro', numero: 111 },
    }
}

let { nome, idadeAnos } = animalPaciente;

nome = 'Bethowen', idadeAnos = 2;

console.log(animalPaciente.nome)

console.log(nome, idadeAnos)

let { nome: name, idadeAnos: idadeDog } = animalPaciente;

name2 = 'Scooby'
idadeDog = 5

console.log(name2, idadeDog)

console.log(nome, idadeAnos)


let { tutor: { nome: nomeTutor, cpf: cpfTutor, endereco: { rua: ruaTutor, bairro: bairroTutor, numero: numeroTutor }
 }} = animalPaciente

nomeTutor = 'Geraldo';
cpfTutor = '254979358' ;

console.log(nomeTutor, cpfTutor)