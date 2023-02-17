const veiculo = Object.freeze({ //object.freeze usado na declaração do objeto para torar o objeto inalterável 
    numeracao: 123,
    modelo: 'modelo',
    marca: 'marca',
    rotasBairros: [
        {
            Ruas: [
                { rua1: 'nomeRua' },
                { rua2: 'nomeRua' },
                { rua3: 'nomeRua' },
                { rua4: 'nomeRua' },
                { rua5: 'nomeRua' }
            ],
        }
    ],
    motoristas: [
        { nome: 'Joaquim', idade: 43, RG: 'mg-60.447.365' },
        { nome: 'Marcos', idade: 35, RG: 'mg-65.492.645' },
        { nome: 'Wilson', idade: 28, Rg: 'mg-43.526.471' }
    ]
})

const veiculo2 = { __proto__: veiculo }


veiculo2.motoristas = [
    { nome: 'Lucas', idade: 43, RG: 'mg-60.447.365' },
    { nome: 'Fernando', idade: 35, RG: 'mg-65.492.645' },
    { nome: 'Antônio', idade: 28, Rg: 'mg-43.526.471' }]

console.log(veiculo2)


const avo = { atributo1: 'A' }
const pai = { atributo2: 'B', __proto__:avo }
const filho = { atributo3: 'C', __proto__: pai }

console.log(filho.atributo1, filho.atributo2)


console.log(filho.__proto__)
console.log(pai.__proto__)
