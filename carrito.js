

/* CARRITO */


 function guardarProductosCarrito (guitarras) {

    localStorage.setItem ("carrito" , JSON.stringify(guitarras)); 
}



function cargarProductosCarrito () {

    return JSON.parse (localStorage.getItem("carrito")) || [];
}



function vaciarCarrito () {

    localStorage.removeItem ("carrito");
    renderProductosCarrito();
    renderCarrito();
}

function eliminarProductoCarrito (id) {
         
    const carrito = cargarProductosCarrito ();
    const guitarras = carrito.filter ((item) => item.id !== id);
    guardarProductosCarrito (guitarras);
    renderProductosCarrito();
    renderCarrito();
    
}

function estaEnElCarrito (id) {
    
    const carrito = cargarProductosCarrito ();

    return carrito.some (item => item.id === id);

}

function agregarAlCarrito(id) {

    const carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {

        let position = carrito.findIndex (item => item.id === id);
        carrito[position].cantidad += 1;
    }

    else {
        const producto = buscarProducto(id)
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarProductosCarrito(carrito); 
    renderCarrito()  
    
    
}



function buscarProducto(id) {

    const guitarras = cargarGuitarrasLS();

    return guitarras.find(item => item.id === id);

   
}



function totalProductosCarrito () {

    const guitarras = cargarProductosCarrito();

    return guitarras.reduce ((total , item) => total += item.cantidad, 0); 


}



function renderCarrito() {

    document.getElementById ("contador").innerText = totalProductosCarrito ();

}

function totalDineroCarrito() {

    const guitarras = cargarProductosCarrito();

    return guitarras.reduce ((total , item) => total += item.cantidad * item.precio, 0); 

}


function renderProductosCarrito () {

    const guitarras = cargarProductosCarrito();

    let  send = "";

    if (totalProductosCarrito() > 0 ) {

    for (producto of guitarras) {

        send +=  `<div class= "divContainer">
                         <div class= "picture">

                         <div class="imgBox">
                             <img src="${"." + producto.img}">    </img>
                 
                         </div>    

                         <div class="info">
                          ${producto.info} X ${producto.cantidad} 

                         </div>

                         <div class="deleteContainer" >

                            <button class="btnDelete" onclick="eliminarProductoCarrito(${producto.id})"> <i class="fa-solid fa-trash-can"></i> </button>

                         </div>   
        
                         
                  </div>
                </div>` 
    }

    send += `<div class="divContainer">
                
                <button class="btnVaciarCarrito sale" onclick="vaciarCarrito()"> Vaciar Carrito </button>

            </div>`

    send +=     `<div class="totalCarrito divContainer">

                     <p> <span> TOTAL: </span> Tu total a pagar es de $ ${totalDineroCarrito()} </p>

                     <button class="btnComprarShop sale"> COMPRAR </button>

                </div>`

}

if (totalProductosCarrito() === 0 ) {
        carritoVacio();
}

    document.querySelector(".mainBox").innerHTML = send;
    
}

function carritoVacio () {

    Swal.fire({
        position: 'center',
        icon: 'warning' ,
        title: 'Carrito vacio',
        text: `Volvé y seleccioná un producto`,
        showConfirmButton: true,
        confirmButtonText: `<div class="btnVolverContainer"> <a href="../index.html" class="btnVolver"> OK </a> </div>`,

        /* timer: 2000 */
      })
}






renderProductosCarrito()
renderCarrito()