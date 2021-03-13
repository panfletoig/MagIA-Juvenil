var numero = 738;
var centena = 0;
var decena = 0;
var unidad = 0;

var subnumero = 0;

if (numero <= 999 && numero >= 100)
{
    //parseInt la combierte a entero
    centena = parseInt (numero / 100);

    /*otra forma de sacar la decena es 
        parseInt((numero % 100)/10)  */
    decena = parseInt ((numero-(centena*100))/10);
    
    /*otra forma de sacar la decena es 
        parseInt((numero % 100)-decenas)  */
    unidad = parseInt (numero-(decena*10+(centena*100)))

    //lo unificamos
    /* al tener tipado debil puedo hacer esto
    subnumero = unidad+""+decena+""+centena;
    y daria lo mismo pero tendria problemas 
    a futuro asi que*/
    
    subnumero=(unidad*100)+(decena*10)+centena

    console.log("");
    console.log("La centena es: ");
    console.log(centena);
    console.log("");
    console.log("Decena es: ");
    console.log(decena);
    console.log("");

    if(unidad>1)
    {
        console.log("La unidad: ");
        console.log(unidad);
        console.log("");
    }
    else
    {
        console.log("Las unidades son");
        console.log(unidad);
        console.log("");
    };

    console.log("Si cambiamos las unidades")
    console.log("El numero nuevo es: ")
    console.log(subnumero);

}

else
{
    console.log("Ingresa un numero de 3 cifras")
};
