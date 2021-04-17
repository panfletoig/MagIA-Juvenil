const axios = require('axios');

var cat;

axios.get('http://aws.random.cat/meow')
.then(respuesta => {
    cat = respuesta.data;
    console.log(cat);
})
.catch(error => {
    console.log(error);
})