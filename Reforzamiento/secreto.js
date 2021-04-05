const prompt = require('prompt-sync')();

//creamos arreglos con los abecedarios
var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];          
var nop = ["n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];

var palabra = "";
var corte = "";
var npala = [];
var enviar = [];
var cifrada = "";
var opcion = "";

//idea, ir pasando con push letra a letra para 
//formar una matriz con push

//esto lo vuelve minusculas y busca el texto
function minuscula(){
    palabra = prompt("Texto aqui: ")
    palabra = palabra.toLowerCase();
};

//esto separa las letras para hacerlas individuales
function descompone()
{
    for(var i=0; i<palabra.length; i++)
    {
        corte = palabra.slice(i,i+1);
        npala.push(corte);
    }
};

//esto los compara y cambia el texto
function comparador()
{
    if(opcion == 1)
    {
        for(var i = 0; i<palabra.length; i++)
        {
            for(var n = 0; n<abc.length; n++)
            {
                if(npala[i]==abc[n])
                {
                    enviar.push(nop[n]);
                    cifrada = cifrada.concat(enviar[i]);
                }
            }
        }   
    }

    else if(opcion == 2)
    {
        for(var i = 0; i<palabra.length;i++)
        {
            for(var n = 0; n<abc.length; n++)
            {
                if(npala[i]==nop[n])
                {
                    enviar.push(abc[n]);
                    cifrada = cifrada.concat(enviar[i]);
                }
            }
        }   
    }
    else
    {
        console.log("El programa peto :)")
        console.log("")
    }
};

function mensajeFinal()
{
    if(opcion==1)
    {
        console.log("")
        console.log("Tu mensaje cifrado es: ");
        console.log(cifrada);
        console.log("");
    }
    else if(opcion == 2)
    {
        console.log("")
        console.log("Tu mensaje descifrado es: ");
        console.log(cifrada);
        console.log("");
    }
};

//esto activa las otras funciones
function activarC(){
    minuscula();
    descompone();
    comparador();
    mensajeFinal();
};

//da el mensaje inicial
function inicial()
{
    console.log("")
    console.log("Opciones")
    console.log("")
    console.log("1 Cifrar")
    console.log("2 Descifrar")
    console.log("")
    console.log("Solo pon numero de opción")
    opcion = prompt("Pon una opcion: ")
    console.log("")
};

inicial();

if((opcion == 1) || (opcion == 2))
{
    activarC();
}
else
{
    console.log("Lo siento opcion no valida")
    console.log("")
}