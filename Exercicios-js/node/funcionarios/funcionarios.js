const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios'); //axios é um client http. Faz requisições remotas

axios.get(url).then(response => { //fazendo a requisição usando o axios.get
    const funcionarios = response.data //dentro do atributo data desse response tem a lista de funcionarios
    console.log(funcionarios)
})
