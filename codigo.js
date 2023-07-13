
// Se realiza un simulador app, donde el cliente debe elegir que camiseta quiere adquirír, y en base a eso se le va a hacer un descuento correspondiente

function dtoCamisetas() {
    alert(
        `Llevando cualquiera de nuestras camisetas podes obtener estos descuentos:
      \nA-Si adquirís Camisetas Oficiales 20% de Descuento
      \nB-Si adquirís Camisetas Suplentes 30% de Descuento
      \nC-Si adquirís Camisetas de Entrenamientos 40% de Descuento`
    );

    // Declaro Variables que serán utilizadas.

    let total;
    let usuarioRespuesta;
    let camisetasOficiales = 20000;
    let camisetasSuplentes = 18000;
    let camisetasEntrenamieto = 15000;

    // Descuentos que se van a aplicar dependiendo la opción que elijan

    const PRIMER_DESC = camisetasOficiales * 0.2;
    const SEGUNDO_DESC = camisetasSuplentes * 0.3;
    const TERCER_DESC = camisetasEntrenamieto * 0.4;


    while (usuarioRespuesta !== "ESC") {
        usuarioRespuesta = prompt("Elija la opción que desee:");

        // Se utiliza el Condicional

        if (usuarioRespuesta === null) {
            alert("Gracias por visitarnos");
            break;
        }
        usuarioRespuesta = usuarioRespuesta.toUpperCase();


            // Se declara el Bucle

        switch (usuarioRespuesta) {
            case "A":
                total = camisetasOficiales - PRIMER_DESC;
                alert(`El precio de la Camiseta Oficial es de $${total}`);
                break;
            case "B":
                total = camisetasSuplentes - SEGUNDO_DESC;
                alert(`El precio de la Camiseta Suplente es de $${total}`);
                break;
            case "C":
                total = camisetasEntrenamieto - TERCER_DESC;
                alert(
                    `El precio de la Camiseta de Entrenamieto es de $${total}`
                );
                break;
            case "ESC":
                alert("Gracias por visitarnos.");
                break;
            default:
                alert("El dato ingresado es Incorrecto, vuelva a ingresar la opcion correspondiente.");
        }
    }
}

dtoCamisetas();
