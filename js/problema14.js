// CONTADOR DE LETRA S DE LOS TEXTOS
function contadorDeS(){
    // SE CONTARAN LAS LETRAS S O S DE LAS DOS PALABRAS Y SE MOSTRARA UNA TABLA CON LOS RESULTADOS
    var texto = document.getElementById("texto").value;
    // contar las a del texto
    const contadorLetraA = (texto.match(/a/gi) || []).length;
    // contar las e del texto

    const contadorLetraE = (texto.match(/e/gi) || []).length;

    // contar las i del texto
    const contadorLetraI = (texto.match(/i/gi) || []).length;
    // contar la o del texto
    const contadorLetraO = (texto.match(/o/gi) || []).length;
    // contar la u del texto
    const contadorLetraU = (texto.match(/u/gi) || []).length;

    // CONTAR TODO
    var contadorGeneral = (texto.match(/a/gi) || []).length + (texto.match(/e/gi) || []).length + (texto.match(/i/gi) || []).length + (texto.match(/o/gi) || []).length + (texto.match(/u/gi) || []).length;


    // CREACION DE TABLA DONDE SE MOSTRARAN LOS RESULTADOS
    var tabla = "<table>";
    // primera fila
    tabla += "<tr style='border: 1px solid black;'><th style='border: 1px solid black;'>" + "TEXTO" + "</th><th>" + "CANTIDAD" + "</th></tr>"
    // segunda fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "Aa" + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorLetraA + "</td></tr>";
    // tercera fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "Ee" + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorLetraE + "</td></tr>";
    // cuarta fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "Ii" + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorLetraI + "</td></tr>";
    // quinta fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "Oo" + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorLetraO + "</td></tr>";

    // sexta fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "Oo" + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorLetraU + "</td></tr>";

    // septima fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "TOTAL: " + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorGeneral + "</td></tr>";


 

    // MOSTRAR EN HTML
    document.getElementById("datos").innerHTML = tabla;
}
