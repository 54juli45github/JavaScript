//6 - Crear un programa donde se introduzcan los tres ángulos internos 
//de un triángulo y se determine si el triángulo es válido o no.

const prompt= require("prompt-sync")()
let ang1= parseFloat(prompt("Ingresa el primer angulo:"))
let ang2= parseFloat(prompt("Ingresa el segundo angulo:"))
let ang3= parseFloat(prompt("Ingresa el tercer angulo:"))
if(ang1 + ang2 + ang3 == 180){
    console.log("El triangulo es valido")
}
else{
    console.log("El triangulo NO es valido")
}


