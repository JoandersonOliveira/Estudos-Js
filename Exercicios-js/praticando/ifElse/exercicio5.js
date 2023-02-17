/**
 * Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
 */

function calcPercentAumento(valor, percAumento) {
    let valorComAumento = valor + ((percAumento / 100) * valor);
    return valorComAumento;
}

function calculaAumento(valor) {
    let salario = valor, percAumentado, salarioComAumento, valorDoAumento;

    if (valor <= 280.00) {
        salarioComAumento = calcPercentAumento(valor, 20);
        percAumentado = 20;
        
    } else if (valor >= 280.00 && valor <= 700.00) {
        salarioComAumento = calcPercentAumento(valor, 15);
        percAumentado = 15;

    } else if (valor >= 700.00 && valor <= 1500.00) {
        salarioComAumento = calcPercentAumento(valor, 10);
        percAumentado = 10;

    } else if (valor > 1500.00) {
        salarioComAumento = calcPercentAumento(valor, 5);
        percAumentado = 5;
    }

    valorDoAumento = salarioComAumento - salario;

    return `salário antes do reajuste: ${salario}\npercentual de aumento aplicado: ${percAumentado}%\nvalor do aumento: ${valorDoAumento.toFixed(2)}\nnovo salário, após o aumento: ${salarioComAumento} `
    

}

console.log(calculaAumento(701))
