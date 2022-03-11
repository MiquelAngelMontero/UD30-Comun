function par_impar(){
    var numero = document.getElementById("num").value;

    if(numero % 2 == 0) {
        document.getElementById("res").innerHTML = "Es par";
      }
      else {
        document.getElementById("res").innerHTML = "Es impar";
      }
}