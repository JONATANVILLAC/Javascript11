//Ejercicio 9
let texto1 = prompt("Ingrese un texto:");
console.log("El texto es: "+texto1);
console.log("El caracter en primer lugar es: "+texto1.charAt(0));
let indice = parseInt(prompt("Ingrese un número positivo menor a "+texto1.length+" caracteres"));
console.log("La posición es: "+indice);
console.log("El caracter en esa posición es: "+texto1.charAt(indice));