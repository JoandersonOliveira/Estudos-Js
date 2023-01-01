//VAR => é visivel mesmo para codigos que está fora do escopo de bloco
{
    {
        {
            {
                var sera = 'Será??'
                console.log(sera)
            }
        }
    }
}

function teste(){
    //se var for declarada dentro de escopo de função ela só poderá ser vista dentro do escopo de função
    var local = 123 
    console.log(local)
}

teste()
console.log(local) // vai retornar variável nao definida pois está dentro do escopo da função
/* 
Evitar esvrever variáveis com escopo global pois pde ser reescrita e ocasionar problemas
*/