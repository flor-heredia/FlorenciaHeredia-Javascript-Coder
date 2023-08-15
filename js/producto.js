class Producto{
  constructor(id,nombre,precio,tipo,img,cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.defaultTipo = "all";
    this.img = img
    this.cantidad = cantidad
  }
}

const producto = [
  new Producto (1,"Camiseta Seleccion Argentina",10000,"camiseta", "img/camiseta argentina.jpg",1),
  new Producto (2,"Camiseta Seleccion EEUU",15000,"camiseta", "img/carmelo_anthony_jersey_usa_blanco.jpg",1),
  new Producto (3,"Short Seleccion Argentina",12000,"short","img/1-1.png",1),
  new Producto (4,"Short Seleccion EEUU",11000,"short","img/img-20220617-wa00371-2572bb9898d6a0060716559519325099-640-0.png",1),
  new Producto (5,"Pelota Spawlding de Basquet",13000, "pelota","img/pelota spalding.webp",1),
  new Producto (6,"Pelota Molten de Basquet",13000, "pelota","img/pelota molten.webp",1),
  new Producto (7,"Zapatilla Nike Jordan",20000,"zapatilla","img/zapatillas jordan.jpeg",1),
  new Producto (8,"Zapatilla Nike Koby",20000,"zapatilla","img/5ad5075037106-436032-500x500.jpg",1),
]

//* OBJETO ES UN CONJUNTO DE CLAVES Y VALORES. Y ESAS CLAVES Y VALORES
//* SE LLAMAN PROPIEDADES.

