const axios = require('axios');

var info;
axios.get('http://localhost:8080/saludo')
.then(respuesta => {
    info = respuesta.data;
    console.log(info);
})
.catch(error => {
    console.log(error);
})