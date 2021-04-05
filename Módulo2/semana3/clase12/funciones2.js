multiplicar (12);

//las funciones pueden estar arriba o abajo
function multiplicar(operando)
{
    var resultado = 3 * operando;
    console.log ("El resultado es: "+ resultado)
};

//Declaracion como expresion
var resultadoE = function multiplica(operando)
{
    return 3 * operando;
};

console.log(resultadoE(12));