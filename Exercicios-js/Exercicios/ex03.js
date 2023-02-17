/** Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

function Divisao(dividendo, divisor){
    let resultado = dividendo / divisor
    let resto = (dividendo % divisor)

    console.log(`Resultado = ${resultado.toFixed(0)}\nResto = ${resto}`)
}

Divisao(9, 4)