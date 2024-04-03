// primer nota
const primerNota = document.getElementById('nota1');

for (let i = 1; i <= 100; i++) {
  const option1 = document.createElement('option');
  option1.value = i;
  option1.textContent = i;
  primerNota.appendChild(option1);
}

// segunda nota
const segundaNota = document.getElementById('nota2');

for (let i = 1; i<= 100; i++){
    const option2 = document.createElement('option');
    option2.value = i;
    option2.textContent = i;
    segundaNota.appendChild(option2);

}

// tercera nota
const terceraNota = document.getElementById('nota3');

for(let i = 1; i<=100; i++){
    const option3 = document.createElement('option');
    option3.value = i;
    option3.textContent = i;
    terceraNota.appendChild(option3);
}

// cuarta nota
const cuartaNota = document.getElementById('nota4');

for(let i = 1; i<=100; i++){
    const option4 = document.createElement('option');
    option4.value = i;
    option4.textContent = i;
    cuartaNota.appendChild(option4);
}

// quinta nota
const quintaNota = document.getElementById('nota5');
for(let i = 1; i<=100; i++){
    const option5 = document.createElement('option');
    option5.value = i;
    option5.textContent = i;
    quintaNota.appendChild(option5);
}


// MOSTRAR DATOS EN UN ALERT
const formulario = document.querySelector('form');


/* Variables de forma general se pueden utilizar en cualquier bloque */
var nota1;
var nota2;
var nota3;
var nota4;
var nota5;
var operacion;

function obtenerValores(){
    nota1 = parseFloat(document.getElementById("nota1").value);

    nota2 = parseFloat(document.getElementById("nota2").value);

    nota3 = parseFloat(document.getElementById("nota3").value);

    nota4 = parseFloat(document.getElementById("nota4").value);

    nota5 = parseFloat(document.getElementById("nota5").value);
}

// MOSTRAR PROMEDIO ABAJO XD
function promedio(){
    /* parseFloat convierte un texto a numeros on decimal */
    /* parseInt convierte un texto a enteros (sin decimal) */
    obtenerValores();
     operacion = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
     document.getElementById("resultado").innerHTML = " El resultado es: " + operacion;
}

formulario.addEventListener('submit', (event)=>{

    event.preventDefault();
    const nombre = event.target.elements['nombre'].value;
    const materia = event.target.elements['materia'].value;
    obtenerValores();
    operacion = (nota1 + nota2 + nota3 + nota4 + nota5)/5;


    alert("Su nombre es: " + nombre + " y su materia es: " + materia + " y su promedio es: " + operacion);


});

