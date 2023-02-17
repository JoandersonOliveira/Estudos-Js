function veiculo(modelo, marca, ano, valor, desconto) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.getValor = function () {
        return valor - desconto;
    }
}

const Uno = new veiculo('Uno', 'Fiat', 2013, 55000, 5000);

console.log(Uno.modelo)
console.log(Uno.marca)
console.log(Uno.getValor())
Uno.modelo = null
console.log(Uno.modelo)

console.log('\n\n FUNCÇÃO FACTORY')

function construirVeiculo(modelo, marca, ano, valor, desconto) {
    return {
        modelo,
        marca,
        ano,
        valor,
        desconto,
        condutores: [{
            nome: 'Condutor1',
            tempoExperiencia: 0
        }, {
            nome: 'Condutor2',
            tempoExperiencia: 0
        }],
        getValorComDesconto() {
            return (valor - desconto)
        }

    }
}


const strada = new construirVeiculo()
strada.modelo = 'strada'
strada.marca = 'Fiat'
strada.ano = 2018
strada.valor = 70000
strada.desconto = 6000

console.log(strada)
console.log(strada.condutores)

console.log(strada.getValorComDesconto())

console.log(typeof construirVeiculo, typeof strada, typeof new construirVeiculo)