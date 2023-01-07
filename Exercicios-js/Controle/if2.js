function teste(num) {
    if (num > 7) {
        console.log(num)
        console.log('Final')


    }
}

//teste(8)//
//teste(6)

function teste2(num){
    if (num > 7); {         //cuidado com o ; não usar entre as estruturas de controle
        console.log(num)
    }
}

//vai imprimir tanto o 6 quanto o 8 pois a sentença de codigo do blocp "IF" acaba no ";"


teste2(6)
teste2(8)
