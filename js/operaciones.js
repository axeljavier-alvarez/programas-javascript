/* Variables de forma general se pueden utilizar en cualquier bloque */
var valor1;
var valor2;
var operacion;

function obtenerValores(){
     valor1 = parseFloat(document.getElementById("txtValor1").value);

     valor2 = parseFloat(document.getElementById("txtValor2").value);

}

function sumar(){
    /* parseFloat convierte un texto a numeros on decimal */
    /* parseInt convierte un texto a enteros (sin decimal) */
    obtenerValores();
     operacion = valor1 + valor2;
    document.getElementById("resultado").innerHTML = 
    "La suma es: " + operacion;
}

function restar(){
     /* parseFloat convierte un texto a numeros on decimal */
    /* parseInt convierte un texto a enteros (sin decimal) */
    obtenerValores();
     operacion
     = valor1 -+ valor2;
    document.getElementById("resultado").innerHTML = 
    "La resta es: " + operacion;
}