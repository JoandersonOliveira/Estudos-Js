/**Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. */

function calculaPercentualEleitores(numEleitores, votosBrancos, votosNulos) {
    const percentualVotosBrancos = (votosBrancos / 100) * numEleitores
    const percentualNulos = (votosNulos / 100) * numEleitores 

    return `Percentual de votos em branco: ${percentualVotosBrancos}\nPercentual de votos nulos: ${percentualNulos}`
}


console.log(calculaPercentualEleitores(100, 30, 40))