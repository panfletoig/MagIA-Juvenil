//Ellos usaron deportes
//y usan switch
//usamos tipo libreria npm install prompt-sync
const prompt = require("prompt-sync")();

//guardamos las clases
var clases = [ "Mate", "Fisica", "Compu", "Conta"];

//y ahora la usamos
console.log("Escribe una HORA o CLASE");
console.log("Clases:");
console.log("");
console.log(clases[0]);
console.log(clases[1]);
console.log(clases[2]);
console.log(clases[3]);
console.log("");

//usamos prompt como el de arriba
var horaDia = prompt();

//empezamos las condiciones
//recordar usar || con parentesis
if((horaDia==1) || (horaDia==5))
{
    console.log("Te toca: " + clases[0])
    console.log("");
}
else if((horaDia==2) || (horaDia==6))
{
    console.log("Te toca: " + clases[1])
    console.log("");
}
else if((horaDia==3) || (horaDia==7))
{
    console.log("Te toca: " + clases[2]);
    console.log("");
}
else if((horaDia==4) || (horaDia==8))
{
    console.log("Te toca: " + clases[3]);
    console.log("");
}
else if (horaDia>8 && horaDia<=24)
{
    console.log("No hay clases");
    console.log("");
}
else if(horaDia<0 && horaDia>24)
{
    console.log("Ingresa hora valida");
    console.log("");
};

//esto es para dar las horas preguntando la clase
//uso variable="" para vacio con prompt
if ((horaDia == clases[0]) || (horaDia == clases[1]) || (horaDia == clases[2]) || (horaDia == clases[3]) || (horaDia==""))
{
    switch(horaDia)
    {
        case clases[0]:
        console.log("Mate te toca a la 1 y a las 5 am")
        console.log("");
        break;
        
        case clases[1]:
        console.log("Fisica te toca a la 2 y a las 6 am")
        console.log("");
        break;
    
        case clases[2]:
        console.log("Compu te toca a la 3 y a las 7 am")
        console.log("");
        break;
        
        case clases[3]:
        console.log("Conta te toca a la 4 y a las 8 am")
        console.log("");
        break;
        
        default:
        console.log("no reconosco esa clase :)");
        console.log("");
        break;
    }
};
