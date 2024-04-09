// haciendo la tabla
 /* function hacerTabla(){
    var numero = document.getElementById("numero").value;

    // validando el numero solo de 1 a 100
    if(isNaN(numero) || numero <=0 || numero > 100 ){
        alert("El numero ingresado no es valido, intentelo otra vez" );
        return;
    }

    // haciendo la tabla de multiplicar
    var tabla = "<ul>";
    // recorrer tabla solo del 1 al 10 mostrar
    for( var i = 1; i <= 10; i++){
        tabla += "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";

    }
    tabla += "</ul>";

    // mostrando la tabla
    document.getElementById("tabla").innerHTML = tabla;


}


// eliminando la tabla xd
function borrarTabla(){

    if(!confirm("Esta seguro que desea borrar los datos")){
        return;
    }
    
    document.getElementById("numero").value = "";
    document.getElementById("tabla").innerHTML = "";
}*/


// OTRA SOLUCION XD
var numero;
var respuesta;

var valorInicial = 1;
var valorFinal = 10;
function generarTabla(){ 

   

    numero = parseFloat(document.getElementById("numero").value);

    respuesta = "";

    for (let i = valorInicial; i <= valorFinal; i++) {
        respuesta = respuesta + "<br>" +numero + "X" + i + "=" + numero*i;


    }

    document.getElementById("tabla").innerHTML = "Tabla del: "+numero +": "+respuesta;


}

function borrarTabla(){

    if(!confirm("Esta seguro que desea borrar los datos")){
        return;
    }
    
    document.getElementById("numero").value = "";
    document.getElementById("tabla").innerHTML = "";
}