const avo = { attr1: 'A' }
const pai = {__proto__:avo, attr2: 'B', attr3:'Z' }
const filho = {__proto__:pai, attr3: 'C' }

console.log(filho.attr1, filho.attr2, filho.attr3)

console.log(filho.__proto__)
console.log(pai.__proto__)
