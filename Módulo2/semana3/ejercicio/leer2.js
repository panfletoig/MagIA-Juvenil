const prompt = require("prompt-sync")();
var recibeNumero = 0;
var suma = 0;
do
{
    recibeNumero = parseInt(prompt("Pon un numero: "));
    suma = suma + parseInt(recibeNumero);
}while(recibeNumero != 0);

console.log("La suma total es: " + suma);