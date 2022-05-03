//Ejercicio16
let palabra1=prompt("Ingresa tu nombre");
let palabra2=prompt("Ingresa otro nombre");
if(palabra1.charAt(0) == palabra2.charAt(0) | palabra1.charAt(palabra1.length-1) == palabra2.charAt(palabra2.length-1)){
    resultado = true;
}else{
    resultado = false;
}
console.log("Tu Nombre: "+palabra1);
console.log("Otro Nombre: "+palabra2);
console.log(resultado);