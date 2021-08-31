console.log("Exercicio 1");
console.log("");

for (let index = 5; index <= 25; index++) {
  console.log("index: ", index);
}

console.log("");
console.log("Exercicio 2");
console.log("");

for (let index = 10; index >= 1; index--) {
  console.log("index: ", index);
}
console.log("");
console.log("Exercicio 3");
console.log("");

for (let index = 1; index <= 10; index++) {
  console.log(index + "x6=", index * 6);
}

console.log("");
console.log("Exercicio 4");
console.log("");

let mesesDoAno = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez",];
console.log(mesesDoAno[0]);
console.log(mesesDoAno[mesesDoAno.length - 1]);

console.log("");
console.log("Exercicio 5");
console.log("");

for (let index = mesesDoAno.length - 1; index >= 0; index--) {
  console.log(mesesDoAno[index]);
}

console.log("");
console.log("Exercicio 6");
console.log("");

let listaDeNotas = [82, 70, 90, 62, 80, 74, 95, 50, 80, 13];

for (let index = 0; index < listaDeNotas.length; index++) {
  console.log(listaDeNotas[index]);
}

console.log("");
console.log("Exercicio 7");
console.log("");

var somaDasNotas = 0;

for (let index = 0; index < listaDeNotas.length; index++) {
  somaDasNotas = somaDasNotas + listaDeNotas[index];
}

console.log(somaDasNotas / listaDeNotas.length);

console.log("");
console.log("Exercicio 8");
console.log("");

var index = 0;
var soma = 0;
while (index < 10) {
  soma = soma + index + 1;
  index++;
}
