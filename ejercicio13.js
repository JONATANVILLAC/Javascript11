//Ejercicio13
let edad = prompt("Ingresa tu edad");
let articulo = prompt("Ingresa la cantidad de articulos comprados");
if(edad>18 && articulo>1){
    resultado = true;
}else{
    resultado = false;
}
console.log("Tu Edad: "+edad);
console.log("Articulos comprados: "+articulo);
console.log(resultado);