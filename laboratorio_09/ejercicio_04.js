const carrito = [45, 120, 80, 250, 95, 150];

let i = 0;
let totalPagar = 0;

console.log("--- PROCESANDO CARRITO CON WHILE ---");

while (i < carrito.length) {
    let precioOriginal = carrito[i];
    let precioFinal = precioOriginal;

    if (precioOriginal > 100) {
        precioFinal = precioOriginal * 0.85; // Aplica el 15% de descuento
        console.log(`Artículo ${i + 1}: S/ ${precioOriginal.toFixed(2)} -> ¡Aplica 15% desc! Nuevo precio: S/ ${precioFinal.toFixed(2)}`);
    } else {
        console.log(`Artículo ${i + 1}: S/ ${precioOriginal.toFixed(2)} -> Sin descuento.`);
    }

    totalPagar += precioFinal;
    i++; 
}

console.log("------------------------------------");
console.log(`TOTAL A PAGAR: S/ ${totalPagar.toFixed(2)}`);