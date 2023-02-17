/**Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  */

const idadeEmdias = function (anos, meses, dias) {
    const ano = anos * 365
    const mes = meses * 30
    const dia = dias
    const IdadeDias = ano + mes + dia

    return IdadeDias
}

console.log(idadeEmdias(2, 6, 4))