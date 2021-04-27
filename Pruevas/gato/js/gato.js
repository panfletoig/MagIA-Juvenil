const axios = require("axios");

async function cat() {
  try {
    const response = await axios.get("http://aws.random.cat/meow");
    igualar(response);
  } catch (error) {
    console.error(error);
  }
}

cat();

function igualar(gato) {
  var cat = gato.data;
  console.log(cat);
}
