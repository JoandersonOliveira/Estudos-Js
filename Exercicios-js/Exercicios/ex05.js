function ajustaCasasDecimais(numero) {
    let valorAjustado = numero.toFixed(2)
    return ` R$${valorAjustado.toString()}` 
}


console.log(ajustaCasasDecimais(0.30000000000000004))

