function factorial() {
    var number = document.getElementById("num").value;
    var num2 = document.getElementById("num").value;
    var resultado = num2+"! = "+ num2;
    for (let n = 1; n < num2; n++) {
        number *= (num2-n);
        resultado += " = " + (num2-n);
    }
    
    document.getElementById("res").innerHTML = "Resultado: " + resultado + " = "+ number;
}
