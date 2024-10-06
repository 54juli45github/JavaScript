//10 - Crear un programa que pida un color al usuario y retorne por consola el string correspondiente:
//En caso que el color recibido sea “azul”, → Devuelve “blue”
//En caso que el color recibido sea “rojo”, → Devuelve “red”
//En caso que el color recibido sea “verde”, → Devuelve “green”
//En caso que el color recibido sea “naranja”, → Devuelve “orange”
//En caso que el color recibido sea “amarillo”, → Devuelve “yellow”
//En caso que el color recibido no sea ninguno de los anteriores → Devuelve “Color not found”
//Se debe usar el statement Switch.

const prompt= require("prompt-sync")()
let color= prompt("Ingrese el color:")

function traducir(color) {
    let traduccion;
    switch (color) {
        case "azul":
            traduccion = "blue";
            break;
        case "rojo":
            traduccion = "red";
            break;
        case "verde":
            traduccion = "green";
            break;
        case "naranja":
            traduccion = "orange";
            break;
        case "amarillo":
            traduccion = "yellow";
            break;
        default:
            traduccion = "Color not found";
            break;
    }
    return traduccion;
}

console.log(traducir(color));