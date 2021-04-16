const http = require('http');

const host = 'localhost';
const port = 8080;

//servicio
//mensaje que va a dar
const servicioMs = function(peticion, respuesta)
{
    //que tipo de archivo va a ser
    respuesta.setHeader("Content-Type", "application/json");
    
        //Respuesta Buena/codigo de respuesta
        respuesta.writeHead(200);

        //Que va a dar la peticion
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
        console.log("en la direccion http://"+host+":"+port)
});