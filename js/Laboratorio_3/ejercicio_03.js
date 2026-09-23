//VALIDACION DE LOGIN (USUARIO Y CONTRASEÑA)
let usuario = prompt("Usuario: ");
let password = prompt("Contraseña: ");

if (usuario == "admin" && password == "123"){
    console.log("Acceso concedido. ¡BIENVENIDO!");
}else{
    console.log("Usuario y/o Password incorrecto.");
}
