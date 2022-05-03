//Ejercicio14
let texto = prompt("Ingresa un texto");
conteo = texto.length % 2;
if(conteo == 0){
    resultado = true;
}else{
    resultado = false;
}
console.log("Ingresa una frase: "+texto);
console.log(resultado);