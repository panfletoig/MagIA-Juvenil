//usamos tipo libreria npm install prompt-sync
const prompt = require("prompt-sync")();

//arreglo o matriz se cuenta desde 0
var cali = [];

//para meter push
cali.push(0,1,"",3);

console.log("");
console.log("Meti 4 datos que son:");
console.log(cali);
console.log("");

//para eliminar dato pero no pocision = delete
delete cali[2];
console.log("olvide el dos asi que lo elimino");
console.log(cali);
console.log("");

//vemos la cantidad con .length
console.log("Cuantos datos tengo");
console.log(cali.length);
console.log("");

//metemos el 2 en esa posicion
cali[2] = 2;
console.log("meti el 2");
console.log(cali);
console.log("");

//elimino la del final con .pop
cali.pop();
console.log("Las estaba probando ahora elimino la del final");
console.log(cali);
console.log("");

//la voy a remplazar 
//.splice (posicion, numero de eliminados, nuevo elemento)
cali.splice(2,1,3);
console.log("remplazare el 2 por un 3");
console.log(cali);
console.log("");

//eliminare todo con .splice (posicion, numero de eliminados)
cali.splice(0,3);
console.log("Mejor las elimino");
console.log(cali);
console.log("");