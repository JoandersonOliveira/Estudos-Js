// usando notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object) //function, object
const obj2 = new Object
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome        //Tornando a variável pública/visível através do 'this'. O 'this'. A variável não está encapsulada e nesse caso é possível alterar externamento essa informação
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998, 0.25)

//os parâmetros de preco e desconto não estão públicos e portanto não podem ser acessados  ou alterado externamente.
//Aqui só é possível ver o preço devido a função 'getPrecoComDesconto' que retorna o preço já calculado.

console.log('\n' + p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * 30 - faltas
        }
    }
}

const f1 = new criarFuncionario('João', 7980, 4)
const f2 = new criarFuncionario('Maria', 11400, 1)

console.log('\n' + f1.getSalario(), f2.getSalario())



/** Nota: Existe o escopo global, escopo de bloco e escopo de função */

