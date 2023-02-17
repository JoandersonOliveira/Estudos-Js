/**
 * Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
 */

function maiorMenor(num1, num2, num3) {
    let maior = num1, menor, number1 = num1, number2 = num2, number3 = num3;

    if (num1 < num2) {
        maior = num2;
    }

    if (maior < num3) {
        maior = num3;
    }

    //Esta função pega os mesmo parametros da função  "maiorMenor" e retorna o menor valor deles.
    function menorValor(number1, number2, number3) {
        
        let menorNum = number1;

        if (menorNum > number2) {
            menorNum = number2;
        }
        
        if (menorNum > number3) {
            menorNum = number3;
        }
        return menorNum;
   }

   menor = menorValor(num1, num2, num3);

   console.log(`Maior: ${maior}\nMenor: ${menor}`)

}


maiorMenor(2, 4, 6);