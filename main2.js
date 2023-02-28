
let nombre = prompt ("Ingresá tu nombre: ");

let edad = parseFloat ( prompt ("Hola " + nombre + "!. Ingresá tu edad: "));



while (edad < 18) {

    
    alert ("Sos menor de edad. No podés acceder al préstamo. Lo sentimos.");
    
    
    nombre = prompt ("Ingresá tu nombre: ");
    edad = parseFloat ( prompt ("Hola " + nombre + "!. Ingresá tu edad: "));
    
}


while (edad >= 18) {
    alert  ("Sos mayor de edad. Podés acceder al préstamo. Gracias por elegirnos!. Aceptá para continuar");
    break;
}


let opcion1 = 1

let opcion2 = 2

let monto

let monto2

let tipoPrestamo =  prompt  ("A continuación elegí un tipo de Préstamo:  \n \n1- Préstamo personal \n (De 3 a 60 Cuotas - T.N.A 83%) \n \n2- Préstamo personal UVA (De 3 a 24 Cuotas - T.N.A 36%) \n \n");

while ((tipoPrestamo != opcion1) || (tipoPrestamo != opcion2)) {
   
    alert ("La opción no es correcta. Vuelve a intentarlo");
    
    tipoPrestamo = prompt  ("A continuación elegí un tipo de Préstamo:  \n \n1- Préstamo personal \n (De 3 a 60 Cuotas - T.N.A 83%) \n \n2- Préstamo personal UVA (De 3 a 24 Cuotas - T.N.A 36%) \n \n")
    

    if ((tipoPrestamo == opcion1) || (tipoPrestamo == opcion2)) {
        break;
    }


   
}

if (tipoPrestamo == opcion1)  {
    

    monto = parseFloat( prompt  ("Elegiste Préstamo personal. \n Tu disponibilidad para simular el plan de pagos es de $2.500.000. \n  Elige un monto: "));

  
     
   }
   
   
   
/*  else  (tipoPrestamo == opcion2); {
   
      monto2 = parseFloat( prompt ("Elegiste Préstamo personal UVA. \n Tu disponibilidad para simular el plan de pagos es de $800.000 \n Elige un monto: "));

      
}
 */

let cuotas1 = prompt ("Ingresa la cantidad de Cuotas (De 3 a 60 Cuotas): " );

/* let cuotas2 = prompt ("ingresa la cantidad de Cuotas (De 3 a 24 Cuotas): "); */

let resultado 

if ((cuotas1 >=3) && (cuotas1 <= 60)) {

 resultado =  (((monto * 83) /100) / cuotas1);



}  






/* let monto

let monto2 */





/* let planDePagosOpcion1 = (monto * 83) /100

let planDePagosOpcion2 = (monto2 * 36) /100

alert ("Tu plan de pagos seria de: " + planDePagosOpcion1);

alert ("Tu plan de pagos seria de: " + planDePagosOpcion2); */











































/* if ((tipoPrestamo == 0 ) && (tipoPrestamo >2)) {

alert ("El dato ingresado es Incorrecto. Intentelo nuevamente");

}  */

/* else if (tipoPrestamo == opcion1) {
    prompt ("opcion2")
}
 */

