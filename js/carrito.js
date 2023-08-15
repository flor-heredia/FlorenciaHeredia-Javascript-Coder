function verCarrito (){
  modalContainer.innerHTML = ""
  modalContainer.classList = "modal__container"
  modalContainer.style.display="flex"
  const tituloModal = document.createElement("div")
  tituloModal.className = "modal__contenedor__titulo"
  tituloModal.innerHTML = `
  <h2 class = "modal__contenedor__titulo-card">Carrito Compra</h2>
  `
  modalContainer.append(tituloModal)

  const btnModalCerrar = document.createElement("button")
  btnModalCerrar.className = "modal__contenedor__btnCerrar"
  btnModalCerrar.innerText = "X"

  btnModalCerrar.addEventListener("click", ()=>{
    modalContainer.style.display="none"

  })

  tituloModal.append(btnModalCerrar)

  carrito.forEach((product)=>{
    let contenido = document.createElement("div")
    contenido.className = "modal__contenedor__contenido__carrito"
    contenido.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>   
    <span class= "btn__restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class= "btn__sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    <span class= "btn__eliminar__producto"> ❌ </span>
    `
    modalContainer.append(contenido)
    
    let restar = contenido.querySelector(".btn__restar")
    restar.addEventListener("click", ()=>{
      if(product.cantidad !== 1){
        product.cantidad--
      }
      verCarrito()
      guardarLocal()
    })

    let sumar = contenido.querySelector(".btn__sumar")
    sumar.addEventListener("click", ()=>{
        product.cantidad++
      verCarrito()
      guardarLocal()
    })

    let eliminar = contenido.querySelector(".btn__eliminar__producto")
    eliminar.addEventListener("click", ()=>{
      eliminarProducto (product.id)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const importeTotalCompra = document.createElement("div");
    importeTotalCompra.className = "importe__total__compra";
    importeTotalCompra.innerHTML = `Total a pagar: $${total}`;
  
    modalContainer.append(importeTotalCompra);

    
  })

}

carritoLogo.addEventListener("click", verCarrito)

const eliminarProducto = (id)=>{
  const idEncontrar = carrito.find((elemento)=> elemento.id === id)
    carrito = carrito.filter((carritoId)=>{
    return carritoId !== idEncontrar
  })
  guardarLocal()
  verCarrito()
}



