//Ejercicio20
let numero1 = prompt("Ingrese un valor: ");
let numero2 = prompt("Ingrese segundo valor: ");
let numero3 = prompt("Ingrese tercer valor: ");

console.log("Primer valor: "+numero1);
console.log("Segundo valor: "+numero2);
console.log("Tercer valor: "+numero3);

if(numero1 < numero2 && numero1 < numero3){
    console.log("El numero menor es: "+numero1);
} else if(numero2 < numero1 && numero2 < numero3){
    console.log("El numero menor es: "+numero2);
} else if(numero3 < numero1 && numero3 < numero2){
    console.log("El numero menor es: "+numero3);
};