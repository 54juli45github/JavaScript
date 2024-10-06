//4 - Pedir por prompt un número y luego crear una función que nos diga 
//si dicho número es divisible por 5 o no. Mostrar el resultado en la consola.

const prompt= require("prompt-sync")()
let num= parseFloat(prompt("Ingrese un numero:"))
function resultado(num){
    if(num%5 == 0){
        console.log(num, "si es divisible por 5")
    }
    else{
        console.log(num, "no es divisible por 5")
    }
}
resultado(num)
