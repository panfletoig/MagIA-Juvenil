const axios = require('axios');

exports.gatos = () =>
{
    var cat;

    axios.get('http://aws.random.cat/meow')
    .then(respuesta => {
        cat = respuesta.data['file'];
        console.log(cat)
    })
    .catch(error => {
        console.log(error);
    })
}