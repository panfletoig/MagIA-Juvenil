const axios = require('axios');

var datos = {faceId1:"586f4a71-9299-4d85-a00c-7f402b4604d4", faceId2: "0b8b0ded-ca12-463c-bd47-8585a81d30c0"}
var direccion = 'https://servicioface.cognitiveservices.azure.com//face/v1.0/verify?';
var head = {headers:{'Ocp-Apim-Subscription-Key':"326d364a0fbe4a39998455172d1a3b46", 'Content-Type': "application/json"}};

var respuestaInfo;

axios.post(direccion, datos, head)
.then(respuesta=>{
    respuestaInfo = respuesta.data;
    console.log(respuestaInfo);
})
.catch(error=>{
    console.log(error);
})