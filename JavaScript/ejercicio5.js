//5 - Pedir por prompt una temperatura en grados Fahrenheit y 
//luego crear una función que convierta la dicha temperatura a grados Celsius. 
//Finalmente mostrar por consola el resultado de la conversión.

const prompt= require("prompt-sync")()
let Gfar= parseFloat(prompt("Ingrese la temperatura:"))
function conversion(Gfar){
    Gcel= (Gfar - 32) * 0.555
    console.log(Gfar,"°F son", Gcel,"°C")
}
conversion(Gfar)