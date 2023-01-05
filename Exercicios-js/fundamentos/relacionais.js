console.log('01', '1' == 1) //== considera valor e ignora o tipo
console.log('02', '1' === 1) // === considera tanto valor quanto o tipo 
console.log('03', '1' != 1)
console.log('04', '1' !== 1)

const d1 = new Date()
const d2 = new Date()

console.log('09', d1 === d2)
console.log('10', d1 == d2)
console.log('11', d1.getTime() === d2.getTime())

console.log('12', undefined == null)
console.log('13', undefined === null)