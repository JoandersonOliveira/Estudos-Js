//Faça um script que leia três números inteiros e mostre o maior deles.

function maiorNumero(num1, num2, num3) {
    let maior = num1

    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior) {
        maior = num3
    }
    console.log(maior)
}

maiorNumero(9, 13, 6)


