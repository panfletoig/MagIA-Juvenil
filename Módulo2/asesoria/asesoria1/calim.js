const cali1 =  8;
const cali2 =  9;
const cali3 = 10;
const cali4 =  7;

var promedio;
var caliMenor = cali1;

//comparamos
if (cali2 < cali1)
{
    caliMenor = cali2;
}
else if (cali3 < cali1)
{
    caliMenor = cali3;
}
else if (cali4 < cali1)
{
    caliMenor = cali4;
}

//volvemos negativa la calificacion 
//para que no se tome en cuenta

promedio = (-caliMenor + cali1 + cali2 + cali3 + cali4)/3;
console.log("")
console.log("Tu promedio de calificacion es: ")
console.log(promedio);
console.log("")