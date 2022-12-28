const valores = [7.7, 8.9, 9.5]
console.log(valores[0], valores[2])

console.log(valores[4]) //gera um undefined pois nao tem um indice na posicao 4

valores[3] = 10 //adicionando um valor no indice 4
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //varios tipos em um array. Nota: não é uma boa prática.

console.log(valores.pop()) //tira o ultimo valor do array
delete valores[0] //apaga o elemento do indice 0

console.log(typeof valores)