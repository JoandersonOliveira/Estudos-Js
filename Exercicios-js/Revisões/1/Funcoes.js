function criarCliente(CodCliente, descCliente, limiteCred, limiteDesconto, bloqueado) {
 return {
    CodCliente,
    descCliente,
    limiteCred,
    limiteDesconto,
    bloqueado,
    alertarClienteBlock (){
      if (this.bloqueado == true) {
            console.log("Este cliente está bloqueado")
      }
    }
    
 }   
}

// console.log(criarCliente(1, 'Amadeu', 15, 25))
const cli1 = new criarCliente(1, 'Amadeu', 15, 25)
const cli2 = new criarCliente(2, 'João', 18, 25)

console.log(cli1.descCliente)
cli2.descCliente = 'Lucas'
console.log(cli2.descCliente)

