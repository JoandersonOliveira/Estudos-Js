//CLOSURE:
function Pet(nome) {
    const Nome = nome

    const getNome = function () {  //Uma closure é iniciada quando uma função interna retorna dados para uma função externa.
        return Nome
    }
    return getNome
}


const meuPet = Pet("koda")

console.log(meuPet())
