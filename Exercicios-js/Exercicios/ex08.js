/** Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

const eDivisivelPor3 = (num) => {
    if (num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(eDivisivelPor3(6))
console.log(eDivisivelPor3(7))