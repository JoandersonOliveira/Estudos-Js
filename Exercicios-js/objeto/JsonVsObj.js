const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //{"a":1,"b":2,"c":3} Converte um valor para json

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) //Erro pois o nome do atributo deve ser delimitado por aspas duplas

console.log(JSON.parse('{"a": 2, "b": 2, "c": 3}')) //retorna um objeto gerado a partir de um texto JSON

console.log(JSON.parse('{"a": 2, "b": 2, "c": true}'))




