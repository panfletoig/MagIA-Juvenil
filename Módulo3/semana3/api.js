const https = require('https');

https.get('https://www.omdbapi.com/?apikey=8cfa1544&t=gotham', 
(respuesta) => {
    let informacion = '';

    respuesta.on("data", 
    (chunk)=>{
        informacion += chunk;
    });

    respuesta.on('end', 
    () => {
        console.log(JSON.parse(informacion));
    })
}).on('error', 
    (error) => {
        console.log("Error: " + error);
});