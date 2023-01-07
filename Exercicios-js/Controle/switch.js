const imprimirResultado = function (nota) {

    switch (Math.floor(nota)) {         //floor arredonda valor para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado') //Como o resultado de case 8 seria igual o de case 7 não é necessário especificar
            break
        case 6: case 5: case 6:
            console.log('Recuperação') //Como o resultado de case 8 seria igual o de case 7 não é necessário especificar
            break;
        case 3: case 2: case 1:
            console.log('Reprovado')
            break;
        /*case 3, 2, 1, 0:                  também pode ser escrito desta forma
            console.log('Reprovado')
        */
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(2)