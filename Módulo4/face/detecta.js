const axios = require('axios');

var datos = {url:"https://media.gq.com.mx/photos/5e457648b925380008d0bf8d/master/pass/tobey-maguire-sera-spider-man-otra-vez-en-doctor-strange-2.jpg"}
var direccion = 'https://servicioface.cognitiveservices.azure.com//face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender,smile,emotion&faceIdTimeToLive=86400';
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
//586f4a71-9299-4d85-a00c-7f402b4604d4