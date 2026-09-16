let nombreProducto = "Mouse Óptico";
let precioProducto = 100;

const porcentajedescuento = 0.08;
const porcentajeigv = 0.18;

let descuento = precioProducto * porcentajedescuento;
let subtotal = precioProducto - descuento;
let montoigv = subtotal * porcentajeigv;
let totalPagar = subtotal + montoigv;

console.log("🏪Producto: ", nombreProducto);
console.log("💵Precio Base: ", precioProducto);
console.log("💵descuento (8%) S/: descuento");
console.log("💵subtotal S/ : ", subtotal);
console.log("💵igv (18%) S/ : ",montoigv);
console.log("💵total a pagar S/ : ", totalPagar);