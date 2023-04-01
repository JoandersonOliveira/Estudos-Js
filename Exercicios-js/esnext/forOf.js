for (let letra of "Cod3r") {
  console.log(letra);
}
//pega valores na posicão de valor e não do indice

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promises", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let assunto of assuntosMap.keys()) {
  console.log(assunto);
}

for (let assunto of assuntosMap.values()) {
  console.log(assunto);
}