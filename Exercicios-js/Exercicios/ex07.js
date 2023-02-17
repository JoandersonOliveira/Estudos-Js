/**) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(c, i, t){
    let capital = c, taxaJuros = i / 100, tempo = t, juros, montante
    juros = (capital * taxaJuros * tempo)
    montante = capital + juros
    return montante.toFixed(2)
}

function MontanteJurosCompostos(c, i, t) {
    let capital = c, taxaJuros = i / 100, tempo = t, montante
    montante = capital * ((1 + taxaJuros) ** tempo)
    return montante.toFixed(2)
}


console.log(jurosSimples(1200, 2, 14))

console.log(MontanteJurosCompostos(1260, 9, 2))

