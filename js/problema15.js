function hacerLaTabla() {
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;


    let tabla = "<table border='1'>";
    
    for (let i = 0; i < filas; i++) {
        tabla += "<tr style='border: 1px solid white; height: 30px; width: 50px;'>";
        for (let j = 0; j < columnas; j++) {
            tabla += "<td style='border: 1px solid white; height: 30px; width: 50px;'> </td>";
        }

        tabla += "</tr>";
    }

    tabla += "</table>";

    document.getElementById("mostrarTabla").innerHTML = tabla;
}

function borrarTabla(){
    document.getElementById("filas").value = "";
    document.getElementById("columnas").value = "";
    document.getElementById("mostrarTabla").innerHTML = "";

}