//8 - Crear un programa que determine si un año dado es bisiesto. 
//En caso de que lo sea retornar por consola “El año ingresado es bisiesto”, 
//y en caso de no serlo retornar “El año ingresado no es bisiesto”.

const prompt= require("prompt-sync")()
let año= prompt("Ingrese el año:")
if(año%4 == 0){
    console.log("El año", año, "es bisiesto")
}
else{
    console.log("El año", año, "NO es bisiesto")
}