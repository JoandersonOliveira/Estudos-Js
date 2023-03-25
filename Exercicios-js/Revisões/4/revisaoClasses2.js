class Lancamento {
    constructor(nome = 'nomeLanc', valor) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lanc) {
        lanc.forEach(a => this.lancamentos.push(a))

        // // for (let i = 0; i < lanc.length; i++) {
        // //     this.lancamentos.push(lanc[i]);

        // }

    }
    sumario() {
        let totalConsolidado = 0;
        this.lancamentos.forEach(a => {
            totalConsolidado += a.valor;
        })
        return totalConsolidado;
    }
}

const contaEnergiaJaneiro = new Lancamento('energia', 70);
const contaEnergiaFevereiro = new Lancamento('energia', 60);
const contaEnergiaMarco = new Lancamento('energia', 55);
const contaAgua = { __proto__: Lancamento }
contaAgua.nome = 'água';
contaAgua.valor = 40;


const contas = new CicloFinanceiro(1, 2023);
// contas(1, 2023);
contas.addLancamentos(contaEnergiaJaneiro);
contas.addLancamentos(contaAgua);
console.log(contas.sumario());
console.log(contaAgua);


class LancamentoCartao extends Lancamento {
    constructor(nome, valor, operacao = 'debito') {
        this.nome = nome;
        this.valor = valor;
        this.operacao = operacao;
    }
}