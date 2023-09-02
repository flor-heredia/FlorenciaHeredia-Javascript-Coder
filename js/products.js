
// * SE CREAN LOS OBJETOS PARA REPRESENTAR LOS PRODCUTOS EN LA PAGINA WEB, DANDOLE LA PROPIEDAD A CADA OBJETO, PARA MOSTRAR LA INFORMACION
class Productos {
  constructor(id, nombre, precio, type, cantidad, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.type = type;
    this.defaultType = "all";
    this.cantidad = cantidad;
    this.img = img;
  }
}

// * SE DECLARAN TODOS LOS PRODCUTOS, ATRAVEZ DE UN ARRAY 
const producto = [
  new Productos (1,"Camiseta Argentina Blanca",15000,"Camiseta","IMG/argentina/5989c9f3f19d4-446247-500x500.jpg",1),
  new Productos (2,"Camiseta Argentina Celeste",13500,"Camiseta","IMG/argentina/camiseta argentina.jpg",1),
  new Productos (3,"Camiseta Argentina Blanca",14500,"Camiseta","IMG/argentina/camiseta-blanca-21-67495972042d35b07216702766464851-640-0.jpg",1),
  new Productos (4,"Camiseta Estados Unidos Azul",15700,"camiseta","IMG/estadosunidos/25a575f0ac6f0d7d8edd8b989ab70fa8.jpg",1),
  new Productos (5,"Camiseta Estados Unidos Blanco",16300,"camiseta","IMG/estadosunidos/carmelo_anthony_jersey_usa_blanco.jpg",1),
  new Productos (6,"Camiseta Estados Unidos Azul",15900,"camiseta","IMG/estadosunidos/WC-USAB-REPLICA-J-651696_452_A.jpg",1),
  new Productos (7,"Pelota Spawlding",12500, "pelota","IMG/pelotas/D_NQ_NP_852042-MLA44381121309_122020-O.webp",1),
  new Productos (8,"Pelota Wilson",11500, "pelota","IMG/pelotas/D_NQ_NP_866628-MLA48592050356_122021-O.webp",1),
  new Productos (9,"Pelota Molten",13400, "pelota","IMG/pelotas/pelota molten.webp",1),
  new Productos (10,"Short Argentina Blanco",12750,"short", "IMG/shortarg/1-1.png",1),
  new Productos (11,"Short Argentina Azul",12800,"short", "IMG/shortarg/1-1.png",1),
  new Productos (12,"Short Argentina Celeste",16800,"short", "IMG/shortarg/1-1.png",1),
  new Productos (13,"Short Estados Unidos",12800,"short","IMG/shorteeuu/img-20220617-wa00371-2572bb9898d6a0060716559519325099-640-0.png",1),
  new Productos (14,"Short Estados Unidos",19800,"short","IMG/shorteeuu/short-basket-nike-wc-team-usa-exterieur-bleu-651710-453.jpg",1),
  new Productos (15,"Short Estados Unidos",17350,"short","IMG/shorteeuu/short-basket-nike-wc-team-usa-domicile-blanc-651710-100.jpg",1),
  new Productos (16,"Zapatilla Jordan",27500,"zapatilla","IMG/zapatillasjordan/air-jordan-xxxii-ceo-016-22.jpg",1),
  new Productos (17,"Zapatilla Jordan",29500,"zapatilla","IMG/zapatillasjordan/images.jpeg",1),
  new Productos (18,"Zapatilla Jordan",31000,"zapatilla","IMG/zapatillasjordan/zapatillas-botitas-air-jordan-xxxiii-se-cd9560-106-51-aac0c3f6edfe1dff0f16321749286354-480-0.jpg",1),
  new Productos (19,"Zapatilla Koby",32100,"zapatilla","IMG/zapatillaskoby/2_nike-kobe-6-protro-mambacita.webp",1),
  new Productos (20,"Zapatilla Koby",29700,"zapatilla","IMG/zapatillaskoby/images (1).jpeg",1),
  new Productos (21,"Zapatilla Koby",25000,"zapatilla","IMG/zapatillaskoby/zapas_zapatillas_nike_kobe_6_proto_green_apple_2020.png",1),
]