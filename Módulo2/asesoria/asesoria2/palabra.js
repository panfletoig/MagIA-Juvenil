const prompt = require("prompt-sync")();

var palabraO = [];
var palabraM = [ "_", "_", "_", "_"];

var fallas = 4;
var buenas = 0;

//pedimos las letras
console.log("");
console.log("Ingresa Letra Nº 1: ");
palabraO[0] = prompt();

console.log("Ingresa Letra Nº 2: ");
palabraO[1] = prompt();

console.log("Ingresa Letra Nº 3: ");
palabraO[2] = prompt();

console.log("Ingresa Letra Nº 4: ");
palabraO[3] = prompt();
console.log("");

for(var i=0; i<(palabraO.length * 2); i++)
{
    console.log("-----------------");
    console.log("Ingresa una letra");
    console.log("-----------------");
    var intento = prompt();
    console.log("");
    switch(intento)
    {
        case palabraO[0]:
            palabraM[0]=palabraO[0];
            buenas++;
            console.log(palabraM);
            console.log("");
        break;

        case palabraO[1]:
            palabraM[1]=palabraO[1];
            buenas++;
            console.log(palabraM);
            console.log("");
        break;
        
        case palabraO[2]:
            palabraM[2]=palabraO[2];
            buenas++;
            console.log(palabraM);
            console.log("");
        break;

        case palabraO[3]:
            palabraM[3]=palabraO[3];
            buenas++;
            console.log(palabraM);
            console.log("");
        break;

        default:
            console.log("Letra incorecta")
            fallas--;
            console.log("");
        break;
    }
    if(buenas == 4 )
    {
        break;
    }
    else if((fallas <= 0 && buenas < 4))
    {
        break;
    }

}

if(buenas == 4)
{
    console.log("");
    console.log("----------");
    console.log("YOU WIN :)");
    console.log("");
    console.log("TNKS FOR PLAYING");
    console.log("");
}
else if((fallas <= 0 && buenas < 4)||(fallas < 4))
{
    console.log("");
    console.log("-------------------");
    console.log("YOU PERDITEICHON :(");
    console.log("");
    console.log("TNKS FOR PLAYING");
    console.log("");
}