const axios = require('axios');

var informacion;

axios.get('https://www.omdbapi.com/?apikey=8cfa1544&t=gotham')
.then(respuesta => {
    informacion = respuesta;
    console.log(informacion);
})
.catch(error => {
    console.log(error);
})