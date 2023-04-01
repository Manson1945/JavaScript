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


function agregarAlCarrito (id) {

    const carrito = cargarProductosCarrito();

    const producto = buscarProducto(id);   

    carrito.push (producto);

    guardarProductosCarrito(carrito);

    console.log("Se agregó" + id);

    btnsFuncionalesShop ();

    
}

/* agregarAlCarrito(); */



function buscarProducto (id) {

    const guitarras = cargarGuitarrasLS();

    return guitarras.find (item => item.id === id);
}

guardarProductosCarrito (guitarras);




function btnsFuncionalesShop () {

    guitarras.forEach ((productos) => {
        
            document.getElementById (`btnShop ${productos.id}`).addEventListener ("click" , ()=>{
            agregarAlCarrito(productos)
            }) 
             
        
            
    })
    }