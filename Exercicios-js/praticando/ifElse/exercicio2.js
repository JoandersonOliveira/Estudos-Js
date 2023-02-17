//Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
/**
 * A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
 */


function calculaNotas(nota1, nota2) {
    let soma = nota1 + nota2;
    let media = soma / 2;


    if (media >= 7 && media < 10) {
        console.log(`A soma das suas notas totalizam ${soma} pontos e sua média foi ${media} pontos. Parabéns, você foi APROVADO!`)
    } else if (media === 10) {
        console.log(`Meus parabéns, você foi aprovado com média máxima`)
    } else {
        console.log(`A soma das suas notas totalizam ${soma} pontos e sua média foi ${media}. Infelizmente você foi reprovado :/`)
        
    }
}


calculaNotas(5,5)