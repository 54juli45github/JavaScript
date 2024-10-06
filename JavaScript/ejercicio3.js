//3 - Pedir por prompt un string y guardarlo en una variable, 
//a continuación pedir un segundo string y guardarlo en otra variable. 
//Luego crear una variable que compare ambos strings y retorna “true” 
//en caso de que sean iguales o “false” en caso de que no lo sean. 
//Agregar una variable más que compare la longitud de ambos strings y 
//retorne “true” en caso de que ambos tengan la misma longitud, o “false” en caso contrario.

const prompt= require("prompt-sync")()
let string1= prompt("Ingrese el primer string:")
let string2= prompt("Ingrese el segundo string:")
let iguales= string1 == string2
let longitud= string1.lenght == string2.lenght
console.log("¿Los strings son iguales?", {iguales})
console.log("¿Tienen la misma longitud?", {longitud})