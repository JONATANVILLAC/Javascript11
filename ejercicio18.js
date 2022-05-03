let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

if(numero1 > numero2){
    resultado = numero1;
}else{
    resultado = numero2
}
console.log("Un Número :"+numero1);
console.log("Otro número distinto :"+numero2);
console.log(resultado+" es mayor");