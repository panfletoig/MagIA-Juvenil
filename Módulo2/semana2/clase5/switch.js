const prompt = require("prompt-sync")();
var cosSwi = prompt();
switch(cosSwi)
{
    case 2:
        console.log("el valor ingresado es 2")
        break;

    case 6:
        console.log("el valor ingresado es 6")
        break;

    case "luis":
        console.log("el valor ingresado es luis")
        break;

    default:
        console.log("valor ingresado es diferente")
        break;
}