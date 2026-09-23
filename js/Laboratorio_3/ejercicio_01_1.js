//SISTEMA DE PRECIOS SEGUN EDAD//
//parceInt:Sirve para cponvertir un datos a valor numeriocpo
//entero.
let edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 10){
    console.log("Entrada gratuita.");
}else if (edad <14){
    console.log("Precio de entrada: s/ 8.00 (adolecente)");
}else if (edad <= 60){        
    console.log("Precio de entrada: s/ 20.00 (adulto)");
}else{
    console.log("Precio de entrada: s/ 7.00 (adulto mayor)");
}    