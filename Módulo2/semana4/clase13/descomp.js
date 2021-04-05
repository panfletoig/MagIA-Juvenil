let persona = 
{ 
    nombre: "Adrian", 
    apellido: "Cifuentes", 
    edad: 20 
};
//no es nesesario separarlas en variables
//solo descomponerlos como variables independientes
let {nombre, apellido} = persona;
console.log("El nombre del participante es: "+ nombre + " " + apellido);
console.log("")

var celular = 
{
    color: "Negro",
    camara: 2,
}
var {camara} = celular;
camara++;
console.log("Tiene " + camara + " camaras")

//aunque sea constante se puede cambiar luego ya que
//lo guardo en una variable
const paquete = 
{
    numEnvio: 423123,
    direccion: "Calle plata en el rio",
    peso: "3kg"
}
var {direccion, peso} = paquete;

//puedo hacerlo asi tambien sin definir variable
({numEnvio} = paquete)
peso = "4kg";
console.log ("El peso es de: " + peso);
console.log ("El numero de envio es: " + numEnvio)