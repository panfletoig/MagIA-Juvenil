const prompt = require('prompt-sync')();

var obstaculos = ['"Aro Alto"', '"Aro Bajo"', '"Tobogán que gira a la Derecha"', '"Tobogán que gira a la Izquierda"'];
var comandos = ["subir", "bajar", "derecha", "izquierda"];
var prendido = "";
var instru = "";
var pista = [];
var lista = [];
var contador = 0; 
var sioNo = false; 

//encargado de iniciar y dar mensaje inical
function mensajeP()
{
    console.log("");
    console.log("Dron");
    console.log("");
    console.log("1 Para iniciar");
    console.log("0 Para apagar");
    console.log("");
    console.log("Poner solo numero");
    prendido = prompt("Seleccione una opcion: ");
    console.log("");

    if (prendido == 0)
    {
        apagar();
    }
    else if (prendido != 0)
    {
        console.log("Prendido con exito");
        console.log("");
        pistaC();
        comparador();
    }
};

//esto lo vuelve minuscula
function minuscula()
{
    instru = instru.toLowerCase();
};

//determina la pista
function pistaC()
{
    creador(0, 1);
    creador(1, 1);
    creador(2, 2);
    creador(3, 0);
    creador(4, 3);
    creador(5, 0);
}

//mete en la variable pista los datos de la pista
function creador(nP, nO)
{
    pista[nP] = obstaculos[nO];
    lista[nP] = comandos[nO];
};

function comparador()
{
    for(var i = 0; i<pista.length; i++)
    {
        console.log(pista[i]);
        console.log("");
        console.log("Ver instruciones");
        console.log("1");
        console.log("");
        instru = prompt("Pon tu instruccion: ");
        console.log("");
        minuscula();
        sioNo = false;

        while(sioNo == false)
        {
            switch(lista[i])
            {
                case instru:
                    console.log("-------");
                    console.log("Exitoso");
                    console.log("-------");
                    console.log("");
                    sioNo = true;
                    contador++;
                    console.log("-------------------");
                    console.log("Puntos: " + contador);
                    console.log("-------------------");
                    console.log("");
                break;

                default:
                    console.log("-----");
                    console.log("Noup");
                    console.log("-----");
                    console.log("");
                    sioNo = true;
                    console.log("-------------------");
                    console.log("Puntos: " + contador);
                    console.log("-------------------");
                    console.log("");

                break;
            };
        };
    };
};

//lo apaga
function apagar()
{
    console.log("Apagando...")
    console.log("");
};

//conectar pista con comando creando una nueva variable
mensajeP();
if(contador <= 2)
{
    console.log("Sorry, Perdiste");
    console.log("");
}
else
{
    console.log("Ganaste");
    console.log("");
}
apagar();