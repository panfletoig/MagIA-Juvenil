const http = require('http');

const host = 'localhost';
const port = 8080;

//servicio
//mensaje que va a dar
const servicioMs = function(peticion, respuesta)
{
    respuesta.setHeader("Content-Type", "application/json");
    respuesta.writeHead(200);
    respuesta.end(JSON.stringify({
        mensaje : "Hola Mundo",
        Oa: "Oa"
    }));
};


//servidor
//creador servidor
const servidor = http.createServer(servicioMs);

servidor.listen(port, host, 
    () => {
        console.log("Servidor prendido")
});