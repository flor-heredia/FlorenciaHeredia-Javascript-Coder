const contenedorProductos = document.getElementById("contenedorProductos")
const carritoLogo = document.getElementById("carritoLogo")
const modalContainer = document.getElementById("modalContainer")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// para que los productos aparezcan en la pagina

function productosBasquet () {
  // *RECORRE EL ARRAY EL FOREACH , "PRODUCT" HACE REFERENCIA A CADA OBJETO DEL ARRAY
  producto.forEach ((product)=>{
    let contenido = document.createElement("div")
    contenido.className = "card__contenido"
    contenido.innerHTML = `
    <img src="${product.img}">
    <h3 class= "producto__nombre">${product.nombre}</h3>
    <p class= "producto__precio">$${product.precio}</p>
    `
    // *Append es para enviar lo que necesite (enviar una cosa a la otra)"ES UN METODO"

    contenedorProductos.append(contenido)

    // *Creacion de btn comprar
    let btnComprar = document.createElement("button")
    btnComprar.className = "btn__comprar"
    btnComprar.innerText = "Comprar"

  // * Poner el boton dentro de la card.

    contenido.append(btnComprar)
    btnComprar.addEventListener("click", ()=>{
      const productoRepetido = carrito.some((repetido)=> repetido.id === product.id
      )
      if(productoRepetido){
        carrito.map((producto)=>{
          if(producto.id === product.id){
            producto.cantidad++
          }
        })
      }else{
        carrito.push({
          id: product.id,
          img:product.img,
          nombre:product.nombre,
          precio:product.precio,
          cantidad:product.cantidad,
        })
        guardarLocal()
      }

    })
  })

}

const guardarLocal = ()=>{
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

productosBasquet()
