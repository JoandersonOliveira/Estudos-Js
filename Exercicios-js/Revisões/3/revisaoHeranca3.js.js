const veiculo = {
    modeloMotor: 'V8',
    automatico: false,
    cor: 'azul',
    conversivel: false,
    velocidadeMax: 260
}


const carro1 = { __proto__: veiculo };
carro1.modeloMotor = 'V6';
carro1.cor = 'preto'

console.log(carro1)

const fusca = Object.create(veiculo)
fusca.modeloMotor = 'V8 2.0'
fusca.cor = 'roxo',
    fusca.velocidadeMax = 180

console.log(fusca)

const camaro = Object.create(veiculo, {
    modeloMotor: { value: 'V8 6.2L', writable: true, enumerable: true },
    conversivel: { value: false, enumerable: true, writable: false }

})

camaro.cor = 'amarelo'
console.log(camaro.cor)


console.log(fusca.__proto__ === camaro.__proto__)