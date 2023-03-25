const moduloA = require('./moduloA') // ./ refere se ao caminho relativo que está dentro do sistema na mesma pasta
                                    // tudo que foi exportado do modulo 'A' está armazenado na constante do moduloA

const moduloB = require('./moduloB')

console.log(moduloA)
console.log(moduloA.ola)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia) 
console.log(moduloB.boaNoite()) 
console.log(moduloB) 

