// NOTAS //
let PrimeraNota = 18;
let SegundaNota = 17;
let TerceraNota = 16;
let CuartaNota = 11;
// NOTA MENOR //
let Desaprobado = 11;
// LAS TRES MEJORES NOTAS //
let PrimerAprobado = 17;
let SegundoAprobado = 16;
let TercerAprobado = 18;
// CALCULANDO PROMEDIO //
let Promedio = SegundaNota + TerceraNota + CuartaNota / PrimeraNota; 

if (PrimeraNota > SegundaNota && SegundaNota > TerceraNota && TerceraNota > CuartaNota ) {
    console.log("✅El Promedio Fue De =" , Promedio);
    console.log("✅Las Notas Aprobadas =" , PrimeraNota,SegundaNota,TerceraNota);
} else { 
    console.log("❌La Menor Nota Fue = " , CuartaNota) }
