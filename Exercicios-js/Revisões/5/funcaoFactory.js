function notaFiscal(nomeCliente, totNota, TotImpostos, endereco) {
    return {
        nomeCliente,
        totNota,
        TotImpostos,
        endereco,
        totSemImpostos: function () {
            let totalSemImp = this.totNota - this.TotImpostos
        },
        get _totNota(){ return totNota} 
        }
    }


const nf1 = new notaFiscal('Fernanda', 550, 100, { rua: 'Peroba', n: 122, bairro: 'Arvoredo' })

console.log(nf1)
console.log(nf1.totSemImpostos())
console.log(nf1._totNota)