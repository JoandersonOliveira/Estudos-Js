let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  //O this dentro de uma função aponta para um objeto global

const obj = {} //criando um objeto de forma direta

//associando a função  a obj usndo o bind 
comparaComThis = comparaComThis.bind(obj) //sempre que chamar o 'comparaComThis' ele vai apontar para "obj" e não para o escopo global



comparaComThis(global) //retorna false pois não aponta mais para o escopo global

comparaComThis(obj) //retorna verdadeiro pois o this aponta para 'obj'

//nota: o this aponta para o objeto global tanto no browser quanto no node

//TESTANDO COMPORTAMENTO COM ARROW FUNCTION


//Em uma arrow function o this aponta para o objeto no qual a função foi escrita
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind(obj) //retorna false.
comparaComThisArrow(obj)

/*nota: o this de uma função arrow é o this associado no contexto da função escrita
mesmo usando o bind para forçar uma mudança de contexto ele permanece no contexto da função
*/

