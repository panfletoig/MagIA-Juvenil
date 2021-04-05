var elegir = "gt74";
var dinero = 10;
var vuelto = 0;

if(elegir == "xc23" && dinero >= 12.50)
{
    vuelto = dinero - 12.50;
    console.log("");
    console.log("Has elegido Chocolate");
    console.log("");
    console.log("Tu vuelto es: ");
    console.log(vuelto);
    console.log("");
}
else if(elegir == "c4f2" && dinero >= 5.75)
{
    vuelto = dinero - 5.75;
    console.log("");
    console.log("Has elegido Paleta");
    console.log("");
    console.log("Tu vuelto es: ");
    console.log(vuelto);
    console.log("");
}
else if(elegir == "gt74" && dinero >= 4.25)
{
    vuelto = dinero - 4.25;
    console.log("");
    console.log("Has elegido Chicle");
    console.log("");
    console.log("Tu vuelto es: ");
    console.log(vuelto);
    console.log("");
}
else if(elegir == "l3k8" && dinero >= 9.10)
{
    vuelto = dinero - 9.10;
    console.log("");
    console.log("Has elegido Galleta");
    console.log("");
    console.log("Tu vuelto es: ");
    console.log(vuelto);
    console.log("");
}
else
{
    console.log("");
    console.log("No es un codigo valido");
    console.log("O dinero es insuficiente");
    console.log("");
    console.log("Codigos:");
    console.log("");
    console.log("Chocolate = xc23");
    console.log("Precio    = Q12.50");
    console.log("");
    console.log("Paleta    = c4f2");
    console.log("Precio    = Q5.75");
    console.log("");
    console.log("Chicle    = gt74");
    console.log("Precio    = Q4.25");
    console.log("");
    console.log("Galleta   = l3k8");
    console.log("Precio    = Q9.10");
    console.log("");
}
