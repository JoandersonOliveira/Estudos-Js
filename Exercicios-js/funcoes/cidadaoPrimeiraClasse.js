//Função em js é first class object (Citizens)
//Hight-order function

//criar de forma literal
function fun1() { }

//Armazenar em uma variável
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](3, 2))       //passando indice zeo (primeira função) e em seguida passando os parâmetros

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())