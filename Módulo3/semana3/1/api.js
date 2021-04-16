//para hacer peticiones
const https = require('https');

//para haver peticion get
https.get('https://www.omdbapi.com/?apikey=8cfa1544&t=gotham', 
(respuesta) => {
    let informacion = '';

    respuesta.on("data", 
    (chunk)=>{
        //meter los datos
        informacion += chunk;
    });

    respuesta.on('end', 
    () => {
        //json.parse para verlo en formato json
        var datos = JSON.parse(informacion)['Ratings'];
        //para ver un dato en un arreglo
        console.log(datos[0]['Value']);

        //para acceder a un dato
        var datos2 = JSON.parse(informacion)
        console.log(datos2['Title']);
    });

}).on('error', 
    (error) => {
        console.log("Error: " + error);
});
