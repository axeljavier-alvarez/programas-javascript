function calcular(){
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);

    let mayor= numero1;
    let menor = numero1;
    let medio = numero1;

    // Comparando el numero2 con el numero mayor y menor
    if( numero2 > mayor){
        mayor = numero2;
    } else if( numero2 < menor){
        menor = numero2;
    }

    // Se compara el numero 3 con el numero mayor, medio y medio
    if( numero3 > mayor){
        mayor = numero3;
    } else if(numero3 < menor){
        menor = numero3;
    } else if(numero3 > medio){
        medio = numero3;
    }

    // se mostrara el resultado
    const resultado = `El mayor es ${mayor}, el menor es ${menor} y el valor medio es ${medio}`;
    document.getElementById("resultado").innerHTML = resultado;
}