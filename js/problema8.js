

function calcular(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let mcd = 0;

    // usar iteracion jajajaja
    // operador matematico a
    // operacion logico && que devuelve true
    // a/1; mientras a sea menor o igual al numero 1 y menor o igual al numero 2 y va en aumento
    for( let a = 1; a <=numero1 && a<=numero2; a++){
        /* & modulo para ir dividiendo y dividiendo y cuando llegue a cero
        ese sera el resultado de a */
        if(numero1 % a == 0 && numero2 % a ==0){
            mcd = a;
        }
    }

    // mostrar en el pie de pagina
     const resultado = document.getElementById("resultado");
     resultado.innerHTML = `El Maximo común divisor de ${numero1} y ${numero2} es: ${mcd}`;

     // mostrar alerta
     alert(`El Maximo común divisor de ${numero1} y ${numero2} es: ${mcd}`);
     // mostrar en consola
     console.log(`El Maximo común divisor de ${numero1} y ${numero2} es: ${mcd}`);
    
}

function borrarDatos(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerHTML = "";

}