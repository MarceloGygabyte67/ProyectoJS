// Declaración de variables y tipos de datos
const nombreProducto = "Laptop Gamer";
let precioOriginal = "4500.99";
const descuento = 15;
let stockDisponible = "5";
let enOferta = "true";

// Calcular el precio con descuento usando operadores
let precioFinal = precioOriginal - precioOriginal * descuento / 100;

// Mostrar información del producto
console.log("🔷 Producto:", nombreProducto);
console.log("🔷Precio Original: S/", precioOriginal);
console.log("🔷 Descuento:", descuento, "%");
console.log("🔷 Precio Final: S/", precioFinal.toFixed(2));
console.log("🔷 Stock Disponible:", stockDisponible);
console.log("🔷 En oferta:", enOferta ? "Sí" : "No");

// Simular compra y actualizar stock
let cantidadComprada = 2;

// Validar si hay stock suficiente
if (cantidadComprada < stockDisponible) {
    stockDisponible -= cantidadComprada;
    console.log("✅ Compra realizada con éxito.");
    console.log("📦 Stock actualizado:", stockDisponible);
} else {
    console.log("❌ No hay suficiente stock disponible.");
}
