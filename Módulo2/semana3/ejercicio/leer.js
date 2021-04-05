const prompt = require("prompt-sync")();

var numeros = 0;
var suma = 0;
var booleano = true;
var salir = "no";
while(booleano == true)
{
    console.log("Pon tus numeros a sumar");
    numeros=parseInt(prompt());
    suma = numeros + suma;
    console.log("Desea hacer la suma");
    salir = prompt();
    
    switch(salir)
    {
        case "si":
        booleano = false;
        break;

        default:
            
        break;
    }
};

console.log(suma);