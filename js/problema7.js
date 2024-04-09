var number1;
var number2;
var menor;
var mayor;
var resultado

function mostrar(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    // se validan valores
    if (isNaN(number1) || isNaN(number2)){
        alert("Valores no válidos, solo se aceptan numeros");
        return;
    }

    // comparacion de numero mayor y menor
    menor = Math.min(number1, number2);
    mayor = Math.max(number1, number2);


    // GENERANDO LISTA DE PARES
    resultado = "";
    for(var i = menor; i <= mayor; i++){
        if (i % 2 == 0){
            resultado += i + " "; 
        }
    }

    // Mostrar numeros pares
    document.getElementById("resultado").innerHTML = resultado;


}

function borrarDatos(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("resultado").innerHTML = "";

}