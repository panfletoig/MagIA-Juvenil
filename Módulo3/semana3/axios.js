const axios = require('axios');

var informacion;

axios.get('https://www.omdbapi.com/?apikey=8cfa1544&t=gotham')
.then(respuesta => {
    informacion = respuesta;

    //.data para acceder al JSON
    console.log(informacion.data);
})

//Para Mostrar el error
.catch(error => {
    console.log(error);
})