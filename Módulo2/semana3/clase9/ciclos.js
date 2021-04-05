var ciclo = 5;
var condi2 = 10;
var npalabra = 0;
var palabra = "Hola";

console.log("");

//While
//sirve para que se cumpla una condicion
while(ciclo < 10 && condi2 > 5)
{
    console.log("Asendente: " + ciclo + " Desendente: " + condi2);
    ciclo++;
    condi2--;
};

//tambien se puede hacer que se ejecute y luego comprueve
//si se cumplio la condicion con un do while
do
{
    console.log("Desendente: " + ciclo + " Aesendente: " + condi2);
    ciclo--;
    condi2++;
}while(ciclo >= 5 && condi2 > 5);

do
{
    npalabra++;

    if(npalabra <= 2)
    {
        palabra = "Adios";
    }
}while(npalabra == 3);
console.log(palabra);
