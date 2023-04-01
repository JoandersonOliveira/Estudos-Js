const tecnologias = new Map();
tecnologias.set("react", { framework: true });
tecnologias.set("angula", { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get("react"));

console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); //verifica se existe o elemento 123 dentro do array
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); //verificando qtd de itens dentro do array

// a mesma chave nao aceita dois valores
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b"); // nesse caso vai assumir o valor 'b'

console.log(chavesVariadas);
