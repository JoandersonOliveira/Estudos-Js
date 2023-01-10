//Função em js é first class object (Citizens)
//Hight-order function

//criar de forma literal
function fun1() { console.log('Teste função como parametro') }

//Armazenar em uma variável
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](3, 2))       //passando indice zeo (primeira função) e em seguida passando os parâmetros

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}
//Passando fun1 como parâmetro para função run() pegando uma função já existente
run(fun1)

//Também posso criar uma função enquanto passo a mesma como parâmetro para outra função.
run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)   /**A função soma retorna uma terceira função que cerebe C e em seguida soma os tres valores A + b + c*/
