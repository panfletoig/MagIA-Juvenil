var n1 = 5;
var n2 = 25;
var n3 = 30;

//uso de 2 condiciones se cumplen las 2 verdadero 
//y = &&
var r1 = (n1 < n2 ) && (n2 < n3 );
console.log("Resultado del operador Y: " + r1);

//uso de 2 condiciones se cumple 1 verdadero
//o = ||
//la priemra es fake
var r2 = (n1 > n2 ) || (n2 < n3 );
console.log("Resultado del operador 0: " + r2);

//uso de 2 condiciones que niega
//negacion = !
 var r3 = !r2;
 console.log("Resultado del operador !: " + r3);