const escola = "Coder"

console.log(escola.charAt(4));
console.log(escola.charCodeAt(4));//retorna o código da letra na tabela asc
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola'.concat(escola).concat("!"));

console.log(escola.replace(3, 'e'));
console.log('Ana,Maria,Pedro'.split(','));