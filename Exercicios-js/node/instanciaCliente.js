const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //importando a função factory e invocando a mesma função com o "()"


const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()

console.log(contadorB.valor)