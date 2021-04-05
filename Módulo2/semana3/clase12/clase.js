//clase es una plantilla para objetos "NO ES OBJETO"
//en la direcion del archivo aparece una nueva forma
//es como un molde
class galleta
{
    constructor(Medida, Forma, Sabor)
    {
        this.Medida = Medida;
        this.Forma = Forma;
        this.Sabor = Sabor;
    }
};

//usamos ese molde
let galletaChocolate = new galleta("5 cm", "Cuadrado", "Chocolate");
let galletaVainilla = new galleta("3 cm", "Estrella", "Vainilla");

console.log(galletaChocolate);
console.log(galletaVainilla);

console.log("");

console.log(galletaChocolate.Sabor);
console.log(galletaVainilla["Sabor"]);