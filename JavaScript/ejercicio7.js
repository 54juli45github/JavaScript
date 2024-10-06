//7 - Crear un programa que le pida al usuario dos números en un Prompt 
//y luego muestre en por consola cuál es el número mayor.

const prompt= require("prompt-sync")()
let num1= parseFloat(prompt("Ingrese un numero:"))
let num2= parseFloat(prompt("Ingrese otro numero:"))
if(num1 > num2){
    console.log(num1, "es mayor que", num2)
}
if(num1 < num2){
    console.log(num2, "es mayor que", num1)
}
if(num1 == num2){
    console.log(num1, "es igual que", num2)
}