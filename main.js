
class guitarra {
    constructor (modelo, color, precio) {
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.info =`Guitarra eléctrica ${this.modelo}  \n\nColor: ${this.color} \n\nSu precio promocional es de: $ ${this.precio}`;
        }

        verInfo() {

          console.log (this.info);

    }  
}

   


const guitarGibson = new guitarra ("Gibson Les Paul SG358", "Camel", "82485") ; 

const guitarIbanez = new guitarra ("Ibanez RG350QA Gio Series", "Black", "108272");

const guitarJackson = new guitarra ("Jackson Rhoads RR GBK", "Black & White", "160000");

const guitarLesPaul = new guitarra ("Les Paul P253 Texas", "Sunburst", "75578");

const guitarFender = new guitarra ("Fender Stratocaster T635 Classic", "White", "130521");

const guitarCort = new guitarra ("Cort G100 HH Walnut Series", "Brown", "102512");



const guitarrasArray = [guitarGibson, guitarIbanez, guitarJackson, guitarLesPaul, guitarFender, guitarCort];


guitarrasArray[0].verInfo();
guitarrasArray[1].verInfo();
guitarrasArray[2].verInfo();
guitarrasArray[3].verInfo();
guitarrasArray[4].verInfo();
guitarrasArray[5].verInfo();


const ordenadas = guitarrasArray.sort ((a,b) => a.precio - b.precio);

console.log(ordenadas);



alert ("Bienvenido al simulador de compra Online!!. \n\nAceptá para continuar! ");

let nombre = prompt ("Ingresá tu nombre: ");

let valor = parseInt ( prompt (`${nombre} Podés filtrar las guitarras por su precio. Adelante: \n (Precios entre $75.000 y $160.000)`));



const arrayFiltro= guitarrasArray.filter(guitarra => (guitarra.precio >= 75578) && (guitarra.precio <= 82484 )) ;

const arrayFiltro2 = guitarrasArray.filter(guitarra => (guitarra.precio >= 75578 ) && (guitarra.precio <= 102511 )) ;

const arrayFiltro3 = guitarrasArray.filter(guitarra => (guitarra.precio >= 75578 ) && (guitarra.precio <= 108271 )) ;

const arrayFiltro4 = guitarrasArray.filter(guitarra => (guitarra.precio >= 75578 ) && (guitarra.precio <= 130520 )) ;

const arrayFiltro5 = guitarrasArray.filter(guitarra => (guitarra.precio >= 75578 ) && (guitarra.precio <= 160000 )) ;


while ((valor < 75578) || (valor > 160000)) { 

    alert ("No hay ninguna guitarra de ese valor. Lo sentimos.");

    valor = parseInt ( prompt ("Podes filtrar las guitarras por su precio. Adelante: \n (Precios entre $75.000 y $160.000)"));

}

if ((valor >= 75578) && (valor <= 82485)) {

console.log(arrayFiltro);

}

else if ((valor >= 75578) && (valor <= 102512)) {

 console.log(arrayFiltro2);
}

else if ((valor >= 75578) && (valor <= 108272 )) {

    console.log(arrayFiltro3);
}

else if ((valor >= 75578) && (valor <= 130521  )) {

    console.log(arrayFiltro4);
}

else if ((valor >= 75578) && (valor <= 160000  )) {

    console.log(arrayFiltro5);
}


