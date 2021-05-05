const axios = require('axios');

var enlase = [];
enlase[0] = "https://kartox.com/media/catalog/product/cache/1/image/940x940/9df78eab33525d08d6e5fb8d27136e95/k/a/kartox_caja_con_solapas_2.jpg";
enlase[1] = "https://familytron.com/wp-content/uploads/2019/09/Drake-Josh.jpg";
enlase[2] = "http://3.bp.blogspot.com/_UUR21EsMUFM/TJXNsdRCwFI/AAAAAAAADj8/ZQKP7DmtfJU/s1600/malcolmmiddle.jpg";
enlase[3] = "https://media.gq.com.mx/photos/5e457648b925380008d0bf8d/master/pass/tobey-maguire-sera-spider-man-otra-vez-en-doctor-strange-2.jpg";
enlase[4] = "https://pbs.twimg.com/profile_images/1361113799223304193/vp1sG8QN_400x400.jpg"
enlase[5] = "https://ssbworld.com/images/avatars/ShinyMark1/ShinyMark1.jpg";
enlase[6] = "https://cdn.discordapp.com/attachments/765998675390103563/837429614308884501/2Q.png";

//direccion de la peticion {endpoint/punto de acceso}
var dirreccion = 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/describe?maxCandidates=1';

//PETICIÓN POST
function peticion(cont, callback)
{
    var respuestaInfo;
    var datos = {url: enlase[cont]};

    axios.post(dirreccion, datos, 
        {
            headers: 
                {'Ocp-Apim-Subscription-Key':'9f8839e9bd4e446c8d1bfad49bd6db72',
                'Content-Type':'application/json'}
        })
        .then(respuesta => {
            respuestaInfo = respuesta.data.description.captions[0].text;
            callback(respuestaInfo);
        })
        .catch(error => {
            console.log(error)
        })
}

peticion(6, respuesta =>{
    console.log("Es acaso: "+respuesta);
})
