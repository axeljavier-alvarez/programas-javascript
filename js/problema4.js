function calcular(){
    const numero = parseInt(document.getElementById("numero").value);

    let resultado;

    if( numero > 0){
        resultado = "El numero es positivo ";
    } else if (numero < 0){
        resultado = "El numero es negativo ";

    } else {
        resultado = "El numero es neutro ";
    }

    document.getElementById("resultado").innerHTML = resultado;
}