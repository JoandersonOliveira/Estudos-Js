/**Construa uma função para um sistema de nota de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As nota
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */

function classificacaoDeNotas(nota) {
    let notaFinal = nota
    let diferencaNotaEMultiplo
    let proximoMultDe5

    //ajusta nota p/ nota +1 caso o valor informado já for multiplo de 5
    if (nota % 5 == 0) {
        nota += 1
    }

    for (let i = nota; i < 100; i++) {
        if (i % 5 == 0) {
            proximoMultDe5 = i
            break
        }
    }
    diferencaNotaEMultiplo = proximoMultDe5 - nota
    //arredonda para o próximo multiplo de 5 caso a diferença entre a nota e o proximo mult for menor que 3 e nota for maior 37
    if (diferencaNotaEMultiplo < 3 && nota >= 38) {
        notaFinal = proximoMultDe5
    }


    //Devolvendo resultado final
    if (notaFinal < 40) {
        console.log(`Reprovado devido nota final insuficiente.\nSua nota: ${notaFinal}`)
    } else {
        console.log(`Aprovado.\nSua nota: ${notaFinal}`)
    }

}

// console.log(classificacaoDeNotas(45))


classificacaoDeNotas(43)