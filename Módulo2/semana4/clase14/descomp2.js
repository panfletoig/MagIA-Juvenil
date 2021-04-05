//si no existe una variable se puede crear en la descompocicion
let persona =
{
    nombre: "Omar",
    edad: 20
};
var {nombre, apellido: apellido = "Lopez"} = persona;

console.log(nombre + " " + apellido);

//descomponer fuciones
//tenemos un objeto
let envio =
{
    envioN: "337",
    producto: "Imaginacion enlatada",
}

//tenemos que ponelos en llaves 
function datos({envioN, producto})
{
    console.log("Numero de envio: "+envioN)
    console.log("Producto: "+producto)
}
datos(envio);