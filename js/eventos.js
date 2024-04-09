function hacerClic(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento clic";
}

function hacerDobleClic(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento Doble Clic";


}

function moverMouse(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento Mover Mouse";
}


function presionarBotonMouse(){
    alert("Presiono el clic izquierdo sobre el h2");

}

function soltarBotonMouse(){
    alert("Solto el boton del mouse en el h2")
}

function escribirAqui(valor){
    // 
    valor.innerHTML = "Esto se escribio al selecionar este elemento";
}

function sumar(a, b, elemento){

    alert("La suma es: " + (a + b));

    // return "La suma es: " + (a + b);
    elemento.innerHTML = "La suma es: " +(a + b);
}

// MOSTRAR TEXTO CON ENTER
function mostrarTexto(event) {
    

    if (event.key === 'Enter') {
        var texto = document.getElementById("texto").value;
        alert("El texto ingresado es " + texto);
        document.getElementById("resultado").innerHTML = "Texto ingresado: " + texto;

    }


}

// OTRA FORMA DE HACERLO
function presionarEnter(event, elemento){
    if(event.keyCode === 13){
        alert("palabra: " + elemento.value);
    } 

    /* if(event.keyCode == "Enter"){
        alert("palabra: " + elemento.value);
    } */
}
