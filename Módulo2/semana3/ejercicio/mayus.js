function mayus(texto)
{
    if(texto == texto.toUpperCase())
    {
        console.log("El texto esta en mayusculas");
    }
    else if(texto == texto.toLowerCase())
    {
        console.log("El texto esta en minusculas");
    }
    else
    {
        console.log("El texto es variado");
    }
}
mayus("HOLA");