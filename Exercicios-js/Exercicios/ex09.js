/**Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function diaSemana(diaEmNum) {
    switch (diaEmNum) {
        case 1: return 'Domingo'
            break
        case 2: return 'Segunda'
            break
        case 3: return 'Terca'
            break
        case 4: return 'Quarta'
            break
        case 5: return 'Quinta'
            break
        case 6: return 'Sexta'
            break
        case 7: return 'Sábado'
            break
        default: return 'Valor informado não corresponde a um dia da semana'
            break
    }
}

console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(3))
console.log(diaSemana(4))
console.log(diaSemana(5))
console.log(diaSemana(6))
console.log(diaSemana(7))
console.log(diaSemana(10))