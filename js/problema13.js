// CONCATENAR PALABRAS Y CONTARLAS

function contarCaracteres() {
    const palabra1 = document.getElementById("texto1").value;
    const palabra2 = document.getElementById("texto2").value;

    var contarCaracteres = palabra1.length + palabra2.length;

    document.getElementById("resultado").innerHTML = "La cantidad de caracteres de ambos textos es: " + contarCaracteres;
}

// CONTADOR DE LETRA S DE LOS TEXTOS
function contadorDeS(){
    // SE CONTARAN LAS LETRAS S O S DE LAS DOS PALABRAS Y SE MOSTRARA UNA TABLA CON LOS RESULTADOS
    var txt1 = document.getElementById("texto1").value;
    var txt2 = document.getElementById("texto2").value;
    // contar las s del primer numero
    const contador1 = (txt1.match(/s/gi) || []).length;
    // contar las s del segundo numero
    const contador2 = (txt2.match(/s/gi) || []).length;
    // contar todas las letras encontradas
    var contadorGeneral = (txt1.match(/s/gi) || []).length + (txt2.match(/s/gi) || []).length;

    // CREACION DE TABLA DONDE SE MOSTRARAN LOS RESULTADOS
    var tabla = "<table>";
    // primera fila
    tabla += "<tr style='border: 1px solid black;'><th style='border: 1px solid black;'>" + "TEXTO" + "</th><th>" + "CANTIDAD" + "</th></tr>"
    // segunda fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + txt1 + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contador1 + "</td></tr>";
    // tercera fila
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + txt2 + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contador2 + "</td></tr>";
    // cuarta fila total
    tabla += "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>" + "El total es: " + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + contadorGeneral + "</td></tr>";


    // MOSTRAR EN HTML
    document.getElementById("resultado").innerHTML = tabla;
}


// contar caracteres pares de una palabra
/* function contarPares() {
   // Obtener los dos textos
  const texto1 = document.getElementById("texto1").value;
  const texto2 = document.getElementById("texto2").value;

  // Convertir los textos a arrays de letras
  const letras1 = texto1.split("");
  const letras2 = texto2.split("");

  // Filtrar las letras pares de cada array
  const letrasPares1 = letras1.filter((letra, indice) => indice % 2 === 0);
  const letrasPares2 = letras2.filter((letra, indice) => indice % 2 === 0);

  // Combinar las letras pares en un solo array
  const letrasPares = letrasPares1.concat(letrasPares2);

  // Contar el total de letras pares
  const totalLetrasPares = letrasPares.length;

  // Generar la tabla HTML
  let tablaHTML = "<table>";
  tablaHTML += "<tr style='border: 1px solid black;'><th style='border: 1px solid black;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Número</th><th style='border: 1px solid black;'>&nbsp;&nbsp;Letra</th></tr>";
  for (let i = 0; i < letrasPares.length; i++) {
    tablaHTML += `<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${i + 1}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${letrasPares[i]}</td></tr>`;
  }
  tablaHTML += `<tr style='border: 1px solid black;'><td style='border: 1px solid black;' colspan="2">Total de letras pares: ${totalLetrasPares}</td></tr>`;
  tablaHTML += "</table>";

  // Mostrar la tabla en el elemento "resultado"
  document.getElementById("resultado").innerHTML = tablaHTML;
  
}*/

// CONTAR LOS CARACTERES PARES DE UNA PALABRA
function contarPares(){
    const palabra1 = document.getElementById("texto1").value;
    const palabra2 = document.getElementById("texto2").value;

    // se convierten los textos a arrays con sus respectivas letras
    const arrayLetras1 = palabra1.split("");
    const arrayLetras2 = palabra2.split("");

    // se filtran las palabras pares de cada array
    const pares1 = arrayLetras1.filter((letra, indice) => indice % 2 === 0);
    const pares2 = arrayLetras2.filter((letra, indice) => indice % 2 === 0);

    // concatenar todo en un array
    const letrasPares = pares1.concat(pares2);

    // contar todas las letras pares
    const totalLetrasPares = letrasPares.length;

    // HACER LA TABLA MOSTRANDO LOS RESULTADOS
    let tablaPares = "<table>";
    tablaPares += "<tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Número</th><th style='border: 1px solid black;'>Letra</th></tr>";
    // mostrar letras del array y ademas se ira mostrando numeros en la tabla dependiendo de cuantas letras sean se incrementara
      for (let i = 0; i < letrasPares.length; i++) {
        tablaPares += `<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>${i + 1}</td><td>${letrasPares[i]}</td></tr>`;
      
    }
    // mostrar
    
    // MOSTRAR EN EL HTML
    document.getElementById("resultado").innerHTML = tablaPares;
}