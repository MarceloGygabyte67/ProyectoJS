const pinCorrecto = "1234"

const intentos = ["2345" , "4566" , "6789"]
let intentosRealizados = 0;
const maxIntentos = 3;
let accesoConcedido = false;

do{
    let pinIngresado = intentos[intentosRealizados];
    intentosRealizados++;

    console.log(`Intento ${intentosRealizados}: Ingresando Pin...`)
    if(pinIngresado === pinCorrecto){
        console.log("PINN ACEPTADO. BIENVENIDO AL SISTEMA");
        accesoConcedido = true;
    }else{
        console.log("PIN INCORRECTO.");
  }


}while(!accesoConcedido && intentosRealizados < maxIntentos);

if(!accesoConcedido){
    console.log("¡¡¡TARJETA BLOQUEADA!!!");
}