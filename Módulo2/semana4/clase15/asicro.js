//no espera a la anterior para ejecutarse y les puede
//pasar el trabajo a otra
function primer()
{
    console.log("Inicio");

    function dos()
    {
        console.log("Dos");
    }
    
    function uno()
    {
        console.log("Uno");
        dos()
        console.log("tres");
    }
    uno();
    console.log("Fin");
}

function segundo()
{
    function dos()
    {
        //set time out es para esperar tanto
        //setTimeout(funcion nombre(){parametros}tiempo)
        setTimeout(function()
        {
            console.log("dos");
        }, 0);
    }
    function pU()
    {
        setTimeout(function()
        {
            console.log("uno");
        }, 3000);
        dos()
        console.log("tres");
    }
    pU();
}

segundo();