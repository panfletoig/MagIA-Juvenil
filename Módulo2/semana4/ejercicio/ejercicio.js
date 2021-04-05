//Matiz es como un arreglo con cajitas y datos dentro de cajitas
let peces = 
[
["Salmon con difuminado", "Salmon contrastado"], ["Salmon de 8bits", "Salmon Full HD"],
]

//ponemos el nº de la cajita y luego el numero de la pocicion
console.log(peces[1][1])
console.log("")

//descompocicion de objetos
let producto =
{
    productoN: peces[1][1],
    pecio: "$409.00 /kg",
    cantidad: 242135115
};

let {productoN, pecio} = producto;
console.log(productoN);