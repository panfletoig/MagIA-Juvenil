const http = require('http');

const host = 'localhost';
const port = 8080;

const servicioMs = function(peticion, respuesta)
{
    respuesta.setHeader("Content-Type", "application/json");

    //url para decirle que es una url
    switch(peticion.url)
    {
        case "/mensaje":
            respuesta.writeHead(200);
            respuesta.end(JSON.stringify({
                mensaje: "Hola Mundo",
            }));
            break;

        case "/saludo":
            respuesta.writeHead(200);
            respuesta.end(JSON.stringify({
                saludo: "Oa",
            }));
            break;

        default:
            respuesta.writeHead(400);
            respuesta.end(JSON.stringify({
                error: "Te equivocaste"
            }));
            break;

    };

};


const servidor = http.createServer(servicioMs);

servidor.listen(port, host, 
    () => {
        console.log("Servidor prendido")
        console.log("en la direccion http://"+host+":"+port)
});