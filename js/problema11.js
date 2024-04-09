function mostrar(){
    const number = document.getElementById("numero").value;
 
    // array de numeros
    const numeros = [];

    // contador
    if(number > 0){
        for(let i= 1; i <= number; i++){
            numeros.push(i);
        }
    
        document.getElementById("mostrar").innerText = numeros.join(" , "); 
    } else {
        alert("Porfavor ingresar numeros mayores a cero");
    }

}