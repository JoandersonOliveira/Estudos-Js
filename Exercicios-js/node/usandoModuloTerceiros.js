const _ = require('lodash') //vai procurar dentro de nodemodules o arquivo index.js
setInterval(()=> console.log(_.random(1, 100)), 1000) //setInterval executa a função de tempos em tempos
                                                // |_____tempo intervalo de repetição
