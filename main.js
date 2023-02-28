
/* comoc se escribe */

nombreAlumno = "Sergio" ;
console.log(nombreAlumno) ;

/* inicializando una variable */

let nombre = "kiwisina" ;
console.log (nombre);

/* booleano */

let soyUnDrogon = "true";
console.log (soyUnDrogon);

/* constante */

const anioDeNacimiento = 1989;

/* operaciones basicas con variables */

let numeroUno = 8;

let numeroDos = 10;

let promedio = (numeroUno + numeroDos) /2;

console.log(promedio);

/* concatenar datos = puedo unir la informacion almacenada en las variables y mostrar un unico mensaje */

let nombreCliente = "Ricardo Fort"

let valorCompra = "1.000.000"

let mensaje = (nombreCliente + " Gastó $" + (valorCompra));

console.log(mensaje);

/* sentencia prompt y alert */

let nombreAlumnoNuevo = prompt("¿Cual es tu nombre alumno nuevo?");
console.log (nombreAlumnoNuevo);

/* Ejercicio: */

/* Prompt nos toma como dato un String, para hacer una operacion cuando toma numero tengo que hacer una conversion de string a number (parsear). Con esta accion (parse) cambio el tipo de dato */
/* para esto utilizo la palabra reservada Int (numeros enteros) o float (numeros decimales) */

let notaPrimerParcial = parseInt (prompt ("Ingrese su nota del primer parcial: "));

let notaSegundoParcial = parseInt (prompt ("Ingrese su nota del segundo parcial: "));

console.log ("El alumno " + nombreAlumnoNuevo + " ha sacado en su primer parcial " + notaPrimerParcial + " y ha sacado en su segundo parcial " + notaSegundoParcial);

let promedioFinal = (notaPrimerParcial + notaSegundoParcial) /2;
console.log ("Su promedio final es: " + (promedioFinal));

/* alert */

let mensajeFinal = "Usted ha aprobado la materia! Felicitaciones!";
alert (mensajeFinal);


