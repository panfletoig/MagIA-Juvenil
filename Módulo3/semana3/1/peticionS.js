const axios = require('axios');

var info;
axios.get('http://localhost:8080')
.then(respuesta => {
    info = respuesta.data;
    console.log(info);
})
.catch(error => {
    console.log(error);
})