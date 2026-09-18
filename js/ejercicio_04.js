let nombreEmpleado = "Jacinto";
let horasTrabajadas = 40;
let tarifaHora= 50;

let salarioBruto = horasTrabajadas * tarifaHora
const Impuesto = 0.10 * salarioBruto;
let salarioNeto = salarioBruto - Impuesto;

console.log(":::::::::BOLETA DE PAGO::::::::");
console.log("Nombre del Empleado: ", nombreEmpleado);
console.log("horasTrabajadas: ", horasTrabajadas);
console.log("Tarifa por Hora: S/ ", tarifaHora);
console.log("Salario Bruto S/", salarioBruto);
console.log("Impuestos S/", Impuesto);
console.log("Salario Neto: S/", salarioNeto);