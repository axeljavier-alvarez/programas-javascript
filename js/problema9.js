
var texto;
function mostrar(){

    texto = document.getElementById("texto").value;
    let letras = "";
    // para i = 0, longitud de la palabra
    // i se inicializa en cero, i tiene que ser menor al tamaño del texto y se incrementa 2 unidades
    for(let i = 0; i < texto.length; i+=2){
        // slice inicio hasta fin
        letras += texto.slice(i, i + 2) + ' ';
    }

    
    document.getElementById("resultado").innerHTML = "Pares: " + letras;
}

function borrar(){
    document.getElementById("texto").value = "";
    document.getElementById("resultado").innerHTML = "";
}