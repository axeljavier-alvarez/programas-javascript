var parrafo;
var palabra;

function contar(){
    parrafo = document.getElementById("parrafo").value;
    palabra = document.getElementById("palabra").value;

    const convertirMinusculas = parrafo.toLowerCase();

    // Se coincide el texto con el patron
    const expresion = new RegExp("\\b" + palabra + "\\b", "gi");

    const coincidencias = convertirMinusculas.match(expresion);

    // mostrar el resultado en el html
    const resultado = document.getElementById("resultado");

    // Se crear un mensaje para mostrar las palabras que coinciden con el texto ingresado mostrando un mensaje de palabras repetidas
    resultado.textContent =  `La palabra ingresada "${palabra}" se repite ${coincidencias ? coincidencias.length : 0} veces en el texto ingresado`;



}


function borrarDatos(){
    document.getElementById("parrafo").value = "";
    document.getElementById("palabra").value = "";
    document.getElementById("resultado").innerHTML = "";
}
