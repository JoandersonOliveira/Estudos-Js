/**Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

function operacoes(num1, num2) {
    let soma =  num1 + num2
    let sub =   num1 - num2
    let multiplicação = num1 * num2
    let divisao = num1 / num2

    console.log(`Soma: ${soma}\nSubtração: ${sub}\nMultiplicação: ${multiplicação}\nDivisão: ${divisao} `)
}

operacoes(5, 2)