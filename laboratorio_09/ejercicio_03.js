const tablaMultiplicar = 9;
const limite = 60;

console.log(`:::::::::::::::::::: TABLA DE MULTIPLICAR DEL ${tablaMultiplicar} ::::::::::::::::::::`)

for (let i = 1; i <= limite; i++){
    let resultado = tablaMultiplicar * i;

    console.log(`${tablaMultiplicar} X ${i} = ${resultado}`);
}