let Empleado1 = "jacinto";
let Empleado2 = "Quispe";
let Empleado3 = "Wasaberto";
let Empleado4 = "Mamani";
// COMISIONES //
let Comision1 = 12;
let Comision2 = 14;
let comision3 = 16;
let comision4 = 18;
// VENTAS DE CADA EMPLEADO//
let Ventas1 = parseFloat(prompt("Ingrese las ventas de " + Empleado1 + ":"));
let Ventas2 = parseFloat(prompt("Ingrese las ventas de " + Empleado2 + ":"));
let Ventas3 = parseFloat(prompt("Ingrese las ventas de " + Empleado3 + ":"));
let Ventas4 = parseFloat(prompt("Ingrese las ventas de " + Empleado4 + ":"));

// CALCULAR LA MEDIA ARITMÉTICA
let Media = (Ventas1 + Ventas2 + Ventas3 + Ventas4) / 4;

// MODIFICAR LAS COMISIONES
if (Ventas1 < Media) {
    Comision1 = Comision1 / 2;
} else {
    Comision1 = Comision1 * 2;
}

if (Ventas2 < Media) {
    Comision2 = Comision2 / 2;
} else {
    Comision2 = Comision2 * 2;
}

if (Ventas3 < Media) {
    comision3 = comision3 / 2;
} else {
    comision3 = comision3 * 2;
}

if (Ventas4 < Media) {
    comision4 = comision4 / 2;
} else {
    comision4 = comision4 * 2;
}

// MOSTRAR RESULTADOS
console.log("========== RESULTADOS ==========");
console.log("Media de ventas: " + Media);

console.log("-------------------------------");
console.log("Empleado: " + Empleado1);
console.log("Ventas: " + Ventas1);
console.log("Comisión final: " + Comision1 + "%");

console.log("-------------------------------");
console.log("Empleado: " + Empleado2);
console.log("Ventas: " + Ventas2);
console.log("Comisión final: " + Comision2 + "%");

console.log("-------------------------------");
console.log("Empleado: " + Empleado3);
console.log("Ventas: " + Ventas3);
console.log("Comisión final: " + comision3 + "%");

console.log("-------------------------------");
console.log("Empleado: " + Empleado4);
console.log("Ventas: " + Ventas4);
console.log("Comisión final: " + comision4 + "%");

console.log("===============================");