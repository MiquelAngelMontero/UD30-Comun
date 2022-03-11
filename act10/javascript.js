document.getElementById("boton").addEventListener("click", function() {
    var texto = document.getElementById("comment").value;
    var resultado = "";
    var respuesta = "";

    resultado = texto.split("").reverse().join("");

    if (resultado == texto) {
        respuesta = "És un palindromo";
    } else {
        respuesta = "No es un palindromo"
    }

    alert(respuesta);
});