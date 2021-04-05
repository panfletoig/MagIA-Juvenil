const prompt = require("prompt-sync")();

function parimpar(numero)
{
    if (numero % 2 == 0)
    {
        console.log(numero + " <= efectivamente es par");
    }
    else
    {
        console.log(numero +  " <= es impar");
    }
}
console.log("Escribe un numero")
var n = prompt();

n = parseInt(n);
parimpar(n)