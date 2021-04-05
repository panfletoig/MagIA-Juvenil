/*
var celular = 
{
    color: "Negro",
    peso: "80g",
    sistema: "Android",
    camaras: 2,
    bateria: 10,
    prender: function(){return "Prendiendo..."},
    reiniciar: function(){return "Reiniciando..."}
};
//se pone funcion() para llamarla ejemplo prender();
console.log(celular.prender());
*/

/*
class galleta
{
    constructor(Medida, Forma, Sabor)
    {
        this.Medida = Medida;
        this.Forma = Forma;
        this.Sabor = Sabor;
        this.Hornea = function(){return "Horneando"};
    }
};
var galletaVainilla = new galleta("3cm", "cuadro", "vainilla");
console.log(galletaVainilla.Hornea());
*/

//comparamos objetos 
var fruta = {nombre: "Manzana"};
var fruta2 = {nombre: "Manzana"};

//asi no se puede
var resultado = (fruta === fruta2);
console.log(resultado);

//asi no se puede
var resultado = (fruta == fruta2);
console.log(resultado);

//asi se puede
var resultado = (fruta.nombre === fruta2.nombre);
console.log(resultado);

//si se le asigna el mismo valor si se puede
var fruta3
fruta3 = fruta
var resultado = (fruta === fruta3);
console.log(resultado);