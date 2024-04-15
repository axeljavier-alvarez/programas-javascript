function hacerLaTabla() {
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;


    let tabla = "<table border='1'>";
    
    for (let i = 0; i < filas; i++) {
        tabla += "<tr style='border: 1px solid black;'>";
        for (let j = 0; j < columnas; j++) {
            tabla += "<td style='border: 1px solid black;'>" + (i + 1) + (j + 1) + "</td>";
        }

        tabla += "</tr>";
    }

    tabla += "</table>";

    document.getElementById("mostrarTabla").innerHTML = tabla;
}