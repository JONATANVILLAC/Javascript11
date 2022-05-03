//Ejercicio19
let caracter = prompt("Ingresar una letra: ");
if(caracter.lenght > 1){
    alert("Ingrese solo una letra: ");
}
if(caracter == "a" || caracter == "e" || caracter =="i" || caracter == "o" || caracter == "u"){
    console.log(caracter+" Es una vocal");
} else{
    console.log(caracter+" Es una consonante");
}