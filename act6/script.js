var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDni = 49874838;
var letraDada = 'M'
var letraCalc = '';

if ((numDni > 99999999) || (numDni < 0)){
    console.log("El numero proporcionado no es valido");
}else {
    var div = numDni % 23;
    letraCalc = letras[div];
}

if (letraCalc == letraDada){
    console.log("La letra dada es correcta, tu letra del dni és: " + letraDada);
}else {
    console.log("La letra dada y la letra obtenida són diferentes")
}