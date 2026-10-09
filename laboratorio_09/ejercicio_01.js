let deuda = 4500.00;
let pagoMensual = 500.00;
let mesesTranscurridos = 0;

console.log("::::::::CRONOGRAMA DE PAGOS::::::::");


while (deuda > 0){
     if(deuda >= pagoMensual){
        deuda -= pagoMensual;
        console.log(`Mes ${mesesTranscurridos}:Pago de ${pagoMensual.toFixed(2)}. Saldo restante : s/ ${deuda.toFixed(2)}`);
        mesesTranscurridos++;
    }else{
        console.log(`Mes $(mesesTranscurridos}:Pago final de S/ ${deuda.toFixed(2)}. Saldo restante: S/ 0.00`);
        deuda=0;
    }

}
console.log("Deuda liquidada en su totalidad.");