
let nombre = prompt ("¡Hola, Bienvenido al Simulador!. \n \n Vamos a simular tu préstamo. Empecemos!! \n \n Ingresá tu nombre: ");


let edad = parseInt ( prompt ("Hola " + nombre + "!. Ingresá tu edad: "));



while (edad < 18) {

    
    alert ("Sos menor de edad, no podés acceder al préstamo. Lo sentimos.");
    
    edad = parseInt ( prompt ("Debes ser mayor de edad. Ingresá tu edad: "));
    
}


while (edad >= 18) {
    alert  ("Sos mayor de edad, podés acceder al préstamo. \n \n Gracias por elegirnos!. \n \n Aceptá para continuar.");
    break;
}


let opcion1 = 1

let opcion2 = 2


let tipoPrestamo = parseInt (  prompt  ("A continuación elegí un tipo de Préstamo:  \n \n1- Préstamo personal  (De 3 a 60 Cuotas - T.N.A 83%) \n \n2- Préstamo personal UVA (De 3 a 24 Cuotas - T.N.A 36%) \n \n"));

while ((tipoPrestamo < 1) || (tipoPrestamo > 2)) {
   
    alert ("La opción no es correcta. Vuelve a intentarlo");
    
    tipoPrestamo = parseInt ( prompt  ("A continuación elegí un tipo de Préstamo:  \n \n1- Préstamo personal  (De 3 a 60 Cuotas - T.N.A 83%) \n \n2- Préstamo personal UVA (De 3 a 24 Cuotas - T.N.A 36%) \n \n"))
    
 if ((tipoPrestamo == opcion1) || (tipoPrestamo == opcion2)) {
        break;
 }
    

   
}




let monto

let cuotas

function calculos (num1) {  
    
    let resultado =  ((( monto * num1 )/100) / cuotas)

    alert ("Usted debería abonar " + cuotas + (" cuotas de $ ") + resultado) + ("!");
    
    
}




 if (tipoPrestamo == opcion1) {

  monto = parseFloat( prompt  ("                      ===== Elegiste Préstamo personal ===== \n \n Tu disponibilidad para simular el plan de pagos es de $2.500.000. \n \n  Elige un monto: "))
    
  cuotas = parseFloat( prompt (("Tu monto es de $" ) + monto + (". Ingresá la cantidad de Cuotas: \n \n (De 3 a 60 Cuotas) " )));

  calculos (83);

}





else if  (tipoPrestamo == opcion2)  {

    monto = parseFloat( prompt ("                    ===== Elegiste Préstamo personal UVA ===== \n Tu disponibilidad para simular el plan de pagos es de $800.000 \n Elige un monto: "));

    cuotas = parseFloat( prompt (("Tu monto es de $") + monto + ("Ingresá la cantidad de Cuotas: \n \n (De 3 a 24 Cuotas) " )))

    calculos (36)
  
} 



else ((tipoPrestamo == opcion1) || (tipoPrestamo == opcion2)); {

alert ("Gracias por haber utilizado los servicios de este simulador de préstamos!. \n \n Vuelva prontoss!.")
   
}
   
   













































