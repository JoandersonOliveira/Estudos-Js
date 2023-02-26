const nomeCompleto = 'Joanderson Ferreira Oliveira';

const formataNome = nome => {
    const nomes = nome.split(" ");
    return nomes[0] + " " + nomes[nomes.length - 1];
}

console.log(formataNome(nomeCompleto));


const nomeCompleto2 = () => {
    const nome = 'Joanderson Ferreira Oliveira';

    const formataNome = () => {
        const nomes = nome.split(" ");
        return nomes[0] + " " + nomes[nomes.length - 1]
    }
    return formataNome()

}

console.log(nomeCompleto2())