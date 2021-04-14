const http = require('http');

const host = 'localhost';
const port = 8080;

const servicioMs = function(peticion, respuesta)
{
    respuesta.setHeader("Content-Type", "application/JSON");
    respuesta.writeHead(200);
    respuesta.end({mensaje : "Hola Mundo"});
};