const prompt = require("prompt-sync")();

console.log("");
console.log("Pon tus Calificación");
console.log("");

//definimos un arreglo/matriz y le preguntamos notas
var cali = [];
var promedio = 0;
cali[0] = parseInt( prompt("Primera Calificación: "));
cali[1] = parseInt( prompt("Segunda Calificación: "));
cali[2] = parseInt( prompt("Tercera Calificación: "));
cali[3] = parseInt( prompt("Cuarta  Calificación: "));
cali[4] = parseInt( prompt("Quinta  Calificación: "));
console.log("");

//Math.round es para redondearlo
promedio = Math.round ((cali[0] + cali[1] + cali[2] + cali[3] + cali[4])/cali.length);

console.log("Tu promedio es:")
console.log(promedio);