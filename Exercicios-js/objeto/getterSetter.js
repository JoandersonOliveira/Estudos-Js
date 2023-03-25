const sequencia = {
    _valor: 1, // convenção (simbolo underline antes da variável indica que a mesma é privada
    get valor() { return this._valor++ },
    set valor(valor) { 
         if(valor > this._valor){       //Nesse caso a vantagem de usar o set() é que podemos aplicar uma validação e só atribuir o valor quando achar necessário
            this._valor = valor
         }
        }

}

console.log(sequencia.valor, sequencia.valor) //automaticamente o Js aciona o método get para trazer as informações do objeto.
sequencia.valor = 1000 //metodo set adiciona o valor 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor) // não retorna 900 pois no metodo set não aceita valor menor




/**Nota: getters e setters são funções onde os valores são acessados
 * vantagem: podemos fazer algum procesasmento ou validação antes de devolver o valor da variável.
 */