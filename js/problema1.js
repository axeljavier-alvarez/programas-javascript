// const formulario = document.getElementById("formulario");
// const resultado = document.getElementById("resultado");

// formulario.addEventListener("submit", (event) => {
    /* event.preventDefault();

    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;

    // Mostrar en un cuadro de alerta
    alert(`Carnet: ${carnet}\nNombre: ${nombre}`);

    // Mostrar en la consola
    console.log(`Carnet: ${carnet}`);
    console.log(`Nombre: ${nombre}`);

    // Mostrar en el cuerpo de la página web
    resultado.innerHTML = `<h2>Datos ingresados</h2><p>Carnet: ${carnet}</p><p>Nombre: ${nombre}</p>`; */

    

// });


const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    const carnet = event.target.elements['carnet'].value;
    const nombre = event.target.elements['nombre'].value;

    document.getElementById("datos").innerHTML = "Su carnet es: " + carnet + " y su nombre es: " + nombre;

    console.log(`carnet: ${carnet}, nombre: ${nombre}`);

    alert("Su carnet es: " + carnet + " y su nombre es: " + nombre);


})
