const schedule = require('node-schedule')

//Timer
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 5', function () {
    console.log('Executando Tarefa 1', new Date().getSeconds())
    //Dentro dessa função posso passar qqr outra função: como fazer uma consulta no banco de dados por exemplo.
})


setTimeout(function () {
    tarefa1.cancel() //cancelando a tarefa1
    console.log('cancelando Tarefa 1!')
}, 20000)  //tempo para executar a tarefa: 20 segundos.


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //Range dias da semana executando de 1 a 5 (de segunda a sexta)
regra.hour = 12
regra.second = 30 // vai contar 30 segundos e executar enquanto for 12 horas

//a função 'regra' foi defida para executar de 2° a 5° e começa as 12 horas e é executada a cada 30 min

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2! ', new Date().getSeconds())
})

/**
 * Temporizadores do javascript:
 * setImmediate
 * setTimeOut
 * setInterval
 */