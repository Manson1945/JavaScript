
class guitarra {
    constructor (modelo, color, precio) {
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.info =`Guitarra eléctrica ${this.modelo} color ${this.color}. Su precio promocional es de: ${this.precio}`;
        }



        verInfo() {

            document.write (this.info)

    }  
}




const guitarGibson = new guitarra ("Gibson Les Paul SG358", "Camel", "$82.485") ; 

const guitarIbanez = new guitarra ("Ibanez RG350QA Gio Series", "Black", "$108.272");

const guitarJackson = new guitarra ("Jackson Rhoads RR GBK", "Black & White", "$709.658");

const guitarLesPaul = new guitarra ("Les Paul P253 Texas", "Sunburst", "$76.578");

const guitarFender = new guitarra ("Fender Stratocaster T635 Classic", "White", "$630.521");

const guitarCort = new guitarra ("Cort G100 HH Walnut Series", "Brown", "$102.512");


const guitarrasArray = [guitarGibson, guitarIbanez, guitarJackson, guitarLesPaul, guitarFender, guitarCort];


/* for (let i = 0; i<guitarrasArray.length; i++);

alert (guitarrasArray [i]); */


/* console.log (guitarrasArray) */

/* document.write (guitarrasArray); */

/* guitarrasArray.forEach(guitarra => { 
    
    
}); */


/* guitar2.verInfo() */

