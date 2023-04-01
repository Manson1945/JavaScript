
const guitarras = [
{
    nombre: "guitarra1",

    precio: 82485,

    id: 1,

    img: "./ASSETS/Guitarras/Guitarra Eléctrica Gibson Les Paul SG358 Camel $82.485.jpg",

    info: "Gibson Les Paul SG358 Camel <br> <span>$82.485</span>"
},

{

    nombre: "guitarra2",

    precio: 108272,

    id: 2,

    img: "./ASSETS/Guitarras/Guitarra Eléctrica Ibanez RG350.jpg",

    info: "Ibanez RG350QA Gio Series <br> <span>$108.272</span>"
},

{

    nombre: "guitarra3",

    precio: 160000 ,

    id: 3,

    img: "./ASSETS/Guitarras/Guitarra Eléctrica Jackson Rhoads RR GBK.jpg",

    info: "Jackson Rhoads RR GBK <br> <span>$709.658</span>"
},

{

    nombre: "guitarra4",

    precio: 75578,

    id: 4,

    img: "./ASSETS/Guitarras/Guitarra Eléctrica Texas P253 Les Paul Sunburst Oscuo $76.578.jpg",

    info: "Les Paul P253 Texas Sunburst <br> <span>$76.578</span>"
},

{

    nombre: "guitarra5",

    precio: 130521,

    id: 5,

    img: "./ASSETS/Guitarras/52236_Fender_Custom_Shop_Robin_Trower_Strat_R97633_2_9e91fbaa-0214-41e7-abda-719f78d86ba0_grande.webp",

    info: "Fender Stratocaster T635 Classic <br> <span>$630.521</span>"
},

{

    nombre: "guitarra6",

    precio: 102512,

    id: 6,

    img: "./ASSETS/Guitarras/Cort G100 HH.jpg",

    info: "Cort G100 HH Walnut Series <br> <span>$102.512</span>"
},

]

const main = document.querySelector (".mainBox");

const carrito =JSON.parse(localStorage.getItem("carrito")) || [];

const cart = document.querySelector (".carrito");


mostrarCarrito();


function crearMain() {

guitarras.forEach ((guitars) => {
 
    main.innerHTML +=  `    <div class= "divContainer">
                            <div class= "picture">

                            <div class="imgBox">
                                <img src="${guitars.img}">    </img>

                            </div>    

                            <div class="info">
                                ${guitars.info}

                            </div>
                            
                            <div class= "buttons">

                                <button class="sale" id="btnSale ${guitars.id}">COMPRAR</button>
                                <button class="shop" id="btnShop ${guitars.id}">Agregar <i class="fa-sharp fa-solid fa-cart-shopping" ></i></button>

                                </div>

                            

                     </div>
                     </div>` 

    

})
btnsFuncionalesSale()
btnsFuncionalesShop()
}

function btnsFuncionalesSale () {

    guitarras.forEach ((guitars) => {
    
         document.getElementById (`btnSale ${guitars.id}`).addEventListener ("click" , ()=>{
            console.log(guitars);
         }) 
         
    
        
    })
    }

function btnsFuncionalesShop () {

    guitarras.forEach ((guitars) => {
        
            document.getElementById (`btnShop ${guitars.id}`).addEventListener ("click" , ()=>{
            agregarAlCarrito(guitars)
            }) 
             
        
            
    })
    }




function agregarAlCarrito (guitars) {

    let aniadir = carrito.some((element) => element.id == guitars.id);

        if (aniadir === false) {

        guitars.cantidad = 1;

        carrito.push (guitars)
        }

        else {
            let myGuitar = carrito.find((element) => element.id == guitars.id)

            myGuitar.cantidad++;
        }
        localStorage.setItem("carrito" , JSON.stringify(carrito));

        mostrarCarrito ();

    
}



function mostrarCarrito () {
        cart.innerHTML = "";

    carrito.forEach ((guitars) => {
        
        cart.innerHTML +=      
                               ` <div class="infoCarrito">

                                    <p class="cartText"> Agregaste al carrito ${guitars.info}</p>
                                    
                                    <p class="cartText"> Cantidad: ${guitars.cantidad}</p>
                                    
    
                                </div> `
      
                                              
})

}
                           


crearMain()











