//2 - Pedir por prompt un número y guardarlo en una variable, 
//luego pedir un segundo número y guardarlo en otra variable. 
//Crear una tercera variable que sume los valores pedidos y retornarlos por consola.

const prompt= require("prompt-sync")()
let num1= parseFloat(prompt("Ingrese un numero:"))
let num2= parseFloat(prompt("Ingrese otro numero:"))
suma= num1 + num2
console.log("El resultado es:", suma)
