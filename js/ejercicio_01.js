
//FASE DE ENTRADA:DECLARACION DE VARIABLES:
const varones = 255;
const mujeres = 184;

//FASE DE PROCESO: LA LÓGICA U OPERACIÓN
const totalPersonas = varones + mujeres;
let Porcentajevarones = (varones / totalPersonas) *100;
let Porcentajemujeres = (mujeres / totalPersonas) *100;

//FASE DE SALIDA: SE HACE LAS IMPRESIONES EN CONSOLA
console.log("total de Colaboradores: ", totalPersonas);
console.log("Porcentaje de Varones ", Porcentajevarones.toFixed(2), "%");
console.log("Porcentaje de Mujeres ", Porcentajemujeres.toFixed(2), "%");
