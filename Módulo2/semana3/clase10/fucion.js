//funcion
function multiplica( operando )
{
    var resultado = operando * 2;
    console.log("El resultado es: " + resultado);
}
multiplica(12);


//usando el return
var resultado = function dos( operando )
{
    return 2 * operando;
    
}
console.log(resultado( 2 ));


function multi1()
{
    var resultado = 2 * 2;
    console.log("El resultado es: " + resultado);
}
multi1();


function multi6(multi2, multi3)
{
    var resultado = multi2 * multi3;
    console.log("El resultado es: " + resultado);
}
multi6(2, 4);


//funcion flecha
const saluda = (nombre) => console.log("hola "+ nombre);
saluda("Gillermo");
