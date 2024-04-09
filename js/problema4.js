var numero;
var resp;
function calcular(){
    numero = parseFloat(document.getElementById("numero").value);

    // viendo var y cost
    /* var numero
    function (calcular)
    numero 
    */
   /* const
   function( calcular)
   const numero
   */

    /* let resultado;

    if( numero > 0){
        resultado = "El numero es positivo ";
    } else if (numero < 0){
        resultado = "El numero es negativo ";

    } else {
        resultado = "El numero es neutro ";
    } */

    if( numero > 0){
        resp = "El numero es positivo ";
    } else if (numero < 0){
        resp = "El numero es negativo ";

    } else {
        resp = "El numero es neutro ";
    }

    document.getElementById("resultado").innerHTML = resp;
}

function borrarDatos(){

    // Confirmar la eliminación
   /*  if (!confirm("¿Está seguro de que desea eliminar los datos?")) {
        return;
    } */

    if(!confirm("Esta seguro que desea borrar los datos")){
        return;
    }

    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}