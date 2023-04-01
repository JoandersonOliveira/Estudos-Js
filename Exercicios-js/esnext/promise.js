function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    //retorna uma promisse. resolve é uma função q será chamada qdo a promessa for atendida
    //reject qdo preciso rejeitar alguma promessas por algum motivo
    setTimeout(() => {
      resolve(frase); //resolve = situalção de sucesso.
    }, segundos * 1000); // transformando m milisegunds
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?")) //use o 'then' para acessar a resposta de uma promessa
  .then((outraFrase) => console.log(outraFrase)) //o resltado de um 'then' é passado para o outro
  .catch((e) => console.log(e)); //foma de tratar erro caso no lugar de resolve esteja reject

/**o parametro do 'resolve' é passado para o 'then
 * as promises aceita apenas um único parametro. A fun~]ao resolve aceita apenas um parametro ' */
