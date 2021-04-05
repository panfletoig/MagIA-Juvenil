function ayer()
{
    console.log("Hola");

setTimeout(function timeout()
{
    console.log("Mundo")
},4 * 1000)

console.log("Hola a todos")
};

//callback-return = hace prioridad cuando manda la funcion
//que se ejecute hasta que la devuelva
function primero( callback )
{
    setTimeout(function(){
        return callback("Primero");
    }, 1 * 1000);
};

function segundo( callback )
{
    return callback("Segundo")
}

//callback imprime primero todas las funciones de la primera
//funcion
//y luego imprime las siguientes
//estructura
//LLamada(function(resultado){console.log(resultado)})

primero(function(resultado1){
    console.log(resultado1);
    segundo(function(resultado2){
        console.log(resultado2);
    })
});
