// Simulación de lectura de precios en caja (ingreso continuo hasta encontrar 0)
let lecturasEscaner = [15.50, 8.25, 3.00, 12.00, 0];

let total = 0;
let contadorProductos = 0;
let indice = 0;
let precio = 0;

console.log("=== PUNTO DE VENTA (POS) ===");

// Bucle do-while: Se procesa al menos el primer producto obligatoriamente
do {
  // Se obtiene el precio del escáner
  precio = lecturasEscaner[indice];
  indice++;

  if (precio > 0) {
    total += precio;
    contadorProductos++;
    console.log(`Producto #${contadorProductos}: +$${precio.toFixed(2)} | Subtotal: $${total.toFixed(2)}`);
  }

} while (precio !== 0); // Detiene la lectura cuando el precio registrado es 0

console.log("=======================================");
console.log(`TOTAL DE PRODUCTOS : ${contadorProductos}`);
console.log(`TOTAL A PAGAR      : $${total.toFixed(2)}`);
console.log("=======================================");