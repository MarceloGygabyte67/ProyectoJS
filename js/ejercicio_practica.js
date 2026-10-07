const sueldoColaboradores = [
    1500, 1650, 1800, 1950, 2100,
    2250, 2400, 2550, 2700, 2850,
    3000, 3150, 3300, 3450, 3600,
    3750, 3900, 4050, 4200, 4350,
    4500, 4650, 4800, 4950, 5100,
    5250, 5400, 5550, 5700, 5850,
    6000, 6150, 6300, 6450, 6600,
    6750, 6900, 7050, 7200, 7350,
    7500, 7650, 7800, 7950, 8100,
    8250, 8400, 8550, 8700, 8850
];

const porcentaje = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++) {
    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo = sueldoBase * porcentaje;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("Sueldo Base: ", sueldoBase);
    console.log("Aguinaldo: ", aguinaldo.toFixed(2));
    console.log("Total a Pagar: ", totalPagar.toFixed(2));
}