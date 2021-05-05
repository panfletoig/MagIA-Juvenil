const axios = require('axios');
const prompt = require('prompt-sync')();

var enlases = [];
var nEnlase = prompt("Ponga su numero: ");
nEnlase = parseInt(nEnlase);
console.log(nEnlase);

var empleado = {Nombre: "Tobey", id: "486a9b10-1e26-4c22-8478-7b86c76634fd"}
var empleado2 ={Nombre: "Maguire", id:"df5aa129-cae3-4b96-917c-f8a162f7096b"}

enlases[0] = {faceId1: empleado.id, faceId2: empleado2.id};
enlases[1] = {faceId1:"586f4a71-9299-4d85-a00c-7f402b4604d4", faceId2: "0b8b0ded-ca12-463c-bd47-8585a81d30c0"}

var direccion = 'https://servicioface.cognitiveservices.azure.com//face/v1.0/verify?';
var head = {headers:{'Ocp-Apim-Subscription-Key':"326d364a0fbe4a39998455172d1a3b46", 'Content-Type': "application/json"}};

var respuestaInfo;

function peticion(nEnlase,callback)
{
    axios.post(direccion, enlases[nEnlase], head)
    .then(respuesta=>{
        respuestaInfo = respuesta.data;
        console.log(respuestaInfo);
        callback(respuestaInfo);
    })
    .catch(error=>{
        console.log(error);
    })
}

peticion(nEnlase,respuesta => {
    console.log(respuesta);
})