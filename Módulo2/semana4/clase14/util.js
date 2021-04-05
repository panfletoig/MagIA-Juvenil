//numero aleatotorio

function ale()
{
    console.log(Math.round(Math.random()*10));

}

//es nesesario poner export si queremos usarla fuera del codigo
exports.aleatorio = () => 
{
    return resultado = Math.round(Math.random()*10);
}

exports.cadena = () =>
{
    cadenaN()
};

function cadenaN()
{
    var cadena = "hola lucia";
    //cadena .legth es para ver el tamaño
    console.log(cadena.length);
    
    //cadena .indexof es para ver donde inicia su pocicion
    console.log(cadena.indexOf("lucia"));
    
    //cadena .replace es para remplazar 
    //poner remplazado y remplazo
    cadena = cadena.replace("lucia", "luca");
    console.log(cadena);
    
    //cadena .slide para cortar esa fraccion de cadena
    //pocicion de inicio y final
    var nombre = cadena.slice(5,9);
    console.log(nombre);

    //este sirve para hacerlas mayusculas
    var cadenaT = "CoLor dE CuaDErnO/libreTA: "
    var color = "azul";
    cadenaT = cadenaT.toUpperCase();
    console.log(cadenaT);

    //concatenar sirve para unirlas frases
    //.concat
    console.log(cadenaT.concat(color));
}