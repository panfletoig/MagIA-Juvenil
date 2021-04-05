//es una variable
let nombre = "Carlos";
nombre = "Pablo";
console.log(nombre);

function ambitoLet()
{
    const i = 1;
    if(i==1)
    {
        //let solo funciona dentro de estas llaves
        let variableL = "Ambito de variable -- Let";
    }
    console.log(variableL);
}
ambitoLet();