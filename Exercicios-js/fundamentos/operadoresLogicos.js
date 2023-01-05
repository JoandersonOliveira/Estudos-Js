function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2 // operador "OU" exclusivo 
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true, true))