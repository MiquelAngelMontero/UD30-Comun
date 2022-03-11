document.getElementById("boton").addEventListener("click", function() {
    var texto = document.getElementById("comment").value;
    var resultado = "";

    if (texto === texto.toUpperCase()) {
        resultado = "Todo esta escrito en Mayusculas";
    } else if (texto === texto.toLowerCase()) {
        resultado = "Todo esta escrito en Minusculas";
    } else {
        resultado = "Todo esta escrito en Minusuculas y Mayusculas";
    }

    alert(resultado);
});