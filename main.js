

    let guitarras = []

    fetch("./guitarras.json")
        .then((response) => response.json())
        .then((info) => {
            guitarras = info;

            guardarGuitarrasLS (guitarras); 
             
        })

        .catch((error)=> {
            console.error("error al cargar el archivo JSON:" , error)
        });



    /* GUARDAR Y CARGAR GUITARRAS EN LS */


   
    function guardarGuitarrasLS (guitarras) {

        localStorage.setItem ("guitarras" , JSON.stringify(guitarras));

        
    }  


    function cargarGuitarrasLS () {

        return JSON.parse(localStorage.getItem("guitarras")) || [];
    }


    


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
    
                                 <button class="sale" id="btnSale"><a href="${producto.page}">COMPRAR</a></button>
                                 <button class="shop" id="btnShop" onclick= "agregarAlCarrito(${producto.id});">Agregar <i class="fa-sharp fa-solid fa-cart-shopping" ></i></button>
    
                            </div>
                      </div>
                    </div>` 
        }

        document.querySelector(".mainBox").innerHTML = send;

        
    }
    


    

    cargarGuitarrasLS ();
    renderGuitarras(); 


    
   



       





