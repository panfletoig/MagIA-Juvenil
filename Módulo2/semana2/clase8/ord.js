var frutas = ["Mandarina", "Piña", "Pera", "Durazno"];
var numeros = [3, 4, 2, 0, 1, 5];
var numerosF = [10, 50, 20, 40, 00, 30];

//sort es para ordenar
frutas.sort();
numeros.sort();
console.log(frutas);
console.log("");
console.log(numeros);
console.log("");

for(var i = 0; i<numerosF.length; i++)
{
    numerosF.sort();
    console.log("El valor del arreglo en la posicion: "+i);
    console.log(numerosF[i]);
    console.log("");
}