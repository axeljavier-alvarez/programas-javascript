
var catetoAdyacente;
var catetoOpuesto;
var hipotenusa;
var resultado;

function obtenerValores(){
     catetoAdyacente = parseFloat(document.getElementById("cateto_adyacente").value);
     catetoOpuesto = parseFloat(document.getElementById("cateto_opuesto").value);
}

function obtenerResultados(){
    hipotenusa = Math.sqrt(Math.pow(catetoAdyacente, 2) + Math.pow(catetoOpuesto, 2));
    resultado = document.getElementById("resultado");
}

// FUNCION QUE CALCULA TODO JAJAJAJA

function calcularHipotenusa() {
    
    obtenerValores();
  
    if (isNaN(catetoAdyacente) || isNaN(catetoOpuesto)) {
        
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }
  
    obtenerResultados();


    resultado.textContent = `La hipotenusa del triángulo es de ${hipotenusa.toFixed(2)} unidades.`;
  }