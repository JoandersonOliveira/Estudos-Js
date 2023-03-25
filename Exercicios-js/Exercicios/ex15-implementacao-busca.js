let vetor = [10, 26, 58, 49, 12, 8, 74, 7, 55, 44, 6, 62, 1, 46, 31], aux;

for (let x = 0; x < 15; x++) {
    for (let y = x; y < 15; y++) {
        if (vetor[x] > vetor[y]) {
            aux = vetor[x]
            vetor[x] = vetor[y]
            vetor[y] = aux
        }
    }
}

// let ordenado2 = vetor.sort((a, b) => { if (a < b) return -1})

console.log(vetor)