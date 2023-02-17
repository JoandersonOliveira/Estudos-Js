function duplicaValor() {
    let valor = arguments
    for (let i = 0; i < valor.length; i++) {
        console.log(valor[i] * 2)

    }
}

duplicaValor(6, 3, 4, 5, 6, 8)