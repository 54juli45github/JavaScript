//9 - Crear un programa que solicite una edad y dependiendo del valor  retorne por consola lo siguiente:
//- “Es un niño” si la edad es menor a 13.
//- “Es un adolescente” si la edad ingresada está entre 13 y 17.
//- “Es un adulto” si la edad está entre 18 y 110.
//- “No es una edad válida” en el caso de que no se cumpla ninguna de las condiciones anteriores.


const prompt= require("prompt-sync")()
let edad= parseFloat(prompt("Ingrese su edad:"))
if(edad < 13 & edad > 0){
    console.log("Es un niño")
}
if(edad >= 13 & edad <=17){
    console.log("Es un adolescente")
}
if(edad >= 18 & edad <= 110){
    console.log("Es un adulto")
}
if(edad < 0 || edad > 110){
    console.log("No es una edad válida")
}