/**
 * Hoisting = içamento. O próprio interpretador da linguagem muda a ordem de execução do programa jopgando a variavel p/ cima
 * 
 */

console.log('a =', a)
var a = 2               //neste exemplo acontece o hoisting: o JS joga a linha que declara a variavel p primeira linha
console.log('a =', a)


console.log('b =', b)
let b = 2               
console.log('b =', b)

