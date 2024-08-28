// Función para calcular el total a pagar
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Stock de peluches
let stockOso = 10;
let stockConejo = 5;
let stockGato = 7;

// Precio por unidad
let precioOso = 20;
let precioConejo = 15;
let precioGato = 10;

// Función principal del simulador
function simuladorVenta() {
    let peluche = "";
    let cantidad;
    let stockActual;
    let precioActual;

    // Bucle para pedir al usuario un peluche válido
    while (peluche !== "Salir") {
        peluche = prompt(
            "¿Qué peluche deseas comprar? (oso, conejo, gato) o escribe 'Salir' para terminar:"
        );

        // Permitir al usuario salir del bucle
        if (peluche === "Salir") {
            alert("Gracias por visitar nuestra tienda.");
            console.log("Gracias por visitar nuestra tienda.");
            break; // Sale del bucle
        }

        // Asignación de valores de stock y precio según el peluche, y según si se escribe con minúscula o mayúscula
        if (peluche === "oso" || peluche === "Oso" || peluche === "OSO") {
            peluche = "oso";
            stockActual = stockOso;
            precioActual = precioOso;
        } else if (
            peluche === "conejo" ||
            peluche === "Conejo" ||
            peluche === "CONEJO"
        ) {
            peluche = "conejo";
            stockActual = stockConejo;
            precioActual = precioConejo;
        } else if (
            peluche === "gato" ||
            peluche === "Gato" ||
            peluche === "GATO"
        ) {
            peluche = "gato";
            stockActual = stockGato;
            precioActual = precioGato;
        } else {
            alert("Peluche no disponible. Por favor, intenta de nuevo.");
            console.log("Peluche no disponible. Por favor, intenta de nuevo.");
            continue;
        }

        // Pedir la cantidad una vez que se tiene un peluche válido
        cantidad = parseInt(prompt("¿Cuántos deseas comprar?"));

        // Verificar si hay suficiente stock
        if (cantidad <= stockActual) {
            let total = calcularTotal(precioActual, cantidad);
            alert(
                "Total a pagar por " +
                    cantidad +
                    " " +
                    peluche +
                    "(s): $" +
                    total +
                    "."
            );
            console.log(
                "Total a pagar por " +
                    cantidad +
                    " " +
                    peluche +
                    "(s): $" +
                    total +
                    "."
            );
            alert("¡Gracias por su compra!.");
            console.log("¡Gracias por su compra!.");
            console.log("Fin del simulador.");
            return;
        } else {
            alert(
                "Lo sentimos, no tenemos suficiente stock de " +
                    peluche +
                    "(s)."
            );
            console.log(
                "Lo sentimos, no tenemos suficiente stock de " +
                    peluche +
                    "(s)."
            );
        }
    }

    console.log("Fin del simulador.");
}
