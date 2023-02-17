const externa = () => {
    const book = 'vinte mil léguas submarinas'

    const interna = () => {
        //console.log(book.toUpperCase())

            const extraInterna = () => {
                console.log(book.toUpperCase())
            }
        extraInterna()
    }
    interna()
}

// externa()
// interna()

externa()
//Quando uma variável não é encontrada dentro de uma função essa variável é buscada no escopo acima.