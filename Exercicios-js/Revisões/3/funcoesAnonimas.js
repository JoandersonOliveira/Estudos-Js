function multiplicaValores(vlr1, vlr2){
    return vlr1 * vlr2
}

function mostrarResuldado(a, b, operacao = multiplicaValores){
    console.log(operacao(a, b))
}

mostrarResuldado(2, 5)