const funcs = []

for (let i = 0; i < 10; i++) {
    //fazendo um push de função ára os indices do array funcs
    funcs.push(function(){
        console.log(i)
    })
    
}

funcs[2]()
funcs[8]()