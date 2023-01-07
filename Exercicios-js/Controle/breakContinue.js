const nums = [1, 2, 3, 4, 5, 6, 7]

for (x in nums) {
    if (x == 5) {
        break   // o break vai desviar o fluxo p/ fora do laço for
    }
    console.log(`x = ${nums[x]}`)
}

console.log("\n EXEMPLO CONTINUE\n")

for (y in nums) {
    if (y == 5) {
        continue    //vai saltar o indice 5. interrompe a repeticao e vai pro próximo indice
    }
    console.log(`${y} = ${nums[y]}`)
}

