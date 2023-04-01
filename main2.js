
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


    /* GUARDAR Y CARGAR GUITARRAS EN LS */


    function guardarGuitarrasLS (guitarras) {

        localStorage.setItem ("guitarras" , JSON.stringify(guitarras));

        
    }



    function cargarGuitarrasLS () {

        return JSON.parse(localStorage.getItem("guitarras")) || [];
    }


    guardarGuitarrasLS(guitarras); /* ENVIO */


    /* RENDER DE MAIN */


    function renderGuitarras () {

        const guitarras = cargarGuitarrasLS();

        let  send = "";
    
        for (producto of guitarras) {
    
            send +=  `<div class= "divContainer">
                             <div class= "picture">
    
                             <div class="imgBox">
                                 <img src="${producto.img}">    </img>
                     
                             </div>    
    
                             <div class="info">
                                 ${producto.info}
    
                             </div>
            
                             <div class= "buttons">
    
                                 <button class="sale" id="btnSale ${producto.id}">COMPRAR</button>
                                 <button class="shop" id="btnShop onclick= "agregarAlCarrito(${producto.id});">Agregar <i class="fa-sharp fa-solid fa-cart-shopping" ></i></button>
    
                            </div>
                      </div>
                    </div>` 
        }

        document.querySelector(".mainBox").innerHTML = send;
    }
    
    renderGuitarras();  /* ENVIO */


    /* CARRITO */

 function guardarProductosCarrito (guitarras) {

    localStorage.setItem ("carrito" , JSON.stringify(guitarras)); 
}



function cargarProductosCarrito () {

    return JSON.parse (localStorage.getItem("carrito")) || [];
}



function vaciarCarrito () {

    localStorage.removeItem ("carrito");
}

function estaEnElCarrito (id) {
    alert("hola");

}

function agregarAlCarrito(id) {

    const carrito = cargarProductosCarrito();

    const producto = buscarProducto(id); 
    
    console.log(producto);

    carrito.push(producto);

    guardarProductosCarrito(carrito);
    

    /* console.log("Se agregó" + id); */

   

    
}


function buscarProducto(id) {

    const guitarras = cargarGuitarrasLS();

    return guitarras.find(item => item.id === id);

   
}




/* guardarProductosCarrito (guitarras); */




/* function btnsFuncionalesShop () {

    guitarras.forEach ((productos) => {
        
            document.getElementById (`btnShop ${productos.id}`).addEventListener ("click" , ()=>{
            agregarAlCarrito(productos)
            }) 
             
        
            
    })
    } */


