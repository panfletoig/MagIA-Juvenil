///nota yo comberti los decimales a numeros
///y viseversa por un ploblema con los floats

const prompt = require('prompt-sync')();

//declaramos variables opcion para saber que busca
var opcion;

//esto nos va servir como condicion en el while
//cuando sea true te sacara del bucle
var compra = false;

//comprobar si es suficiente, dar vuelto etc...
var dinero = prompt("Ingrese su dinero: ");

//para saber cuanto le falta o el vuelto
var resultado = 0;

//Matriz con las variables de la maquina
var inventario = 
[
    ["Chocolate", "Paleta", "Chicle", "Galleta"],
    ["xc23", "c4f2", "gt74", "l3k8"],
    ["$12.50", "$5.75", "$4.25", "$9.10"],
]

//Texto inicial
function texto()
{
    console.log("")
    console.log("Bienvenido");
    console.log("")
    console.log("Selecione una opcion");
    console.log("")
    console.log("- Coloca el numero  ");
    console.log("1 Ver opciones");
    console.log("- Seleciona una de las opciones");
    console.log("");
}

//mostrar las opciones
function opciones()
{
    console.log("Dulce   -   Codigo   -   Presio")
    console.log("");
    console.log(inventario[0][0]+"  -  "+inventario[1][0]+"  -  "+inventario[2][0]);
    console.log(inventario[0][1]+"  -  "+inventario[1][1]+"  -  "+inventario[2][1]);
    console.log(inventario[0][2]+"  -  "+inventario[1][2]+"  -  "+inventario[2][2]);
    console.log(inventario[0][3]+"  -  "+inventario[1][3]+"  -  "+inventario[2][3]);
    console.log("");
    console.log("Si desea salir marque 0");
    console.log("");
}

//dar resultado final
function comprado(presios, articulo)
{
    console.log("Gracias por comprar un: " + articulo);
    compra = true;
    resultado = (dinero-presios)/100;
    if(resultado == 0)
    {
        console.log("Douuu, justisimo");
    }
    else
    {
        console.log("Tu vuelto es: $"+resultado);
    }
}

//si no tienes dinero mensaje
function noStonks()
{
    console.log("");
    console.log("Lo siento");
    console.log("")
    console.log("No stonks si no hay dinero")
    console.log("Esperamos que vuelvas pronto")
    console.log("")
}

//da resultado si es posible comprar o no
//si es posible te manda a la funcion comprando()
function posible(presios, articulo){
    if(dinero >= presios)
    {
        comprado(presios, articulo);

    }
    else
    {
        console.log("Lo siento para comprar: " + articulo);
        console.log("")
        //ve los precios y dice cuanto te falta
        switch(articulo)
        {
            case inventario[0][0]:
                resultado = 1250 - dinero
                calcu(resultado);
            break;
            case inventario[0][1]:
                resultado = 575 - dinero
                calcu(resultado);
            break;
            case inventario[0][2]:
                resultado = 425 - dinero
                calcu(resultado);
            break;
            case inventario[0][3]:
                resultado = 910 - dinero
                calcu(resultado);
            break;
        }
    }
}

//calcula el vuelto
function calcu(resultado)
{
    resultado = resultado/100;
    console.log("Te falta: $" + resultado);
    if(dinero<575)
    {
        console.log("mmm... creo que podrias comprar un chicle")
        console.log("")
    }
    else
    {
        console.log("aun puedes ver más articulos")
        console.log("")
    }
}

//menu de seleccion
function stonks()
{
    texto();

    while(compra==false)
    {
    
        opcion = prompt("Aqui tu opción: ");
        console.log("");
        
        switch(opcion)
        {
            case "1":
                opciones();
            break;
        
            case inventario[1][0]:
                posible(1250, inventario[0][0]);
            break;

            case inventario[1][1]:
                posible(575, inventario[0][1]);
            break;
            
            case inventario[1][2]:
                posible(425, inventario[0][2]);
            break;

            case inventario[1][3]:
                posible(910, inventario[0][3]);
            break;

            case "0":
                "Esperamos tu regreso"
                compra = true;
            break;

            default:
                console.log("Marca una opcion, marca 0")
                console.log("o tu codigo es incorrecto");
                console.log("");
            break;
        }
    }
}

//combierte los numeros y manda a llamar a las otras funciones
dinero = parseInt(dinero * 100)

if(dinero>=425)
{
    stonks();
}
else
{
    noStonks();
}