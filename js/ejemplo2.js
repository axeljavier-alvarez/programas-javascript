var catetoa;
var catetob;
var hipotenusa; 

function calcularHipotenusa(){

    catetoa = parseFloat(document.getElementById("txtCatetoA").value);
    catetob = parseFloat(document.getElementById("txtCatetoB").value);

// catetoa * catetoa + catetob * catetob
// Math.sqrt = raiz cuadrade de un numero y el Math.pow = elevar un numero a una potencia
    hipotenusa = Math.sqrt(Math.pow(catetoa, 2) + catetob *catetob);
    document.getElementById("resultado").innerHTML = "La hipotenusa es: " + hipotenusa;
}