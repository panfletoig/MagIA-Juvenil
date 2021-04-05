const prompt = require("prompt-sync")();

console.log("Escribe el producto");
var producto = prompt();
console.log("Escribe el presio");
var costo = prompt();

function presio(presio, nombreP)
{
    var resultado = 0;
    if(presio <= 399)
    {
        resultado = presio + 100;
        console.log("El presio de "+ nombreP + " es: " + resultado);
    }
    else if(presio >= 400)
    {
        resultado = presio;
        console.log("El presio de "+ nombreP + " es: " + resultado);
    }
}

presio(costo, producto)