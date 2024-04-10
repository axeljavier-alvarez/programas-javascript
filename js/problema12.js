// funcion para mostrar el primer digito de una palabra
function mostrarPrimerDigito(){
    const letra = document.getElementById("informacion").value;

    document.getElementById("mostrar").innerHTML = "El primer dígito es: " + letra.charAt(0) ;
}

// funcion para motrar el ultimo digito de una palabra
function showLastLetter(){
    var palabra = document.getElementById("informacion").value;
    document.getElementById("mostrar").innerHTML = "El ultimo dígito es: " + palabra.charAt(palabra.length-1) ;
}

//  funcion para mostrar los caracteres de una palabra
function showcharacters(){
    var caracter = document.getElementById("informacion").value;
    document.getElementById("mostrar").innerHTML = " ";
    for(var i=0; i<caracter.length; i++){  
        document.getElementById("mostrar").innerHTML +=  "<tr><td>" + caracter.charAt(i) + "</td></tr>";
    }
}