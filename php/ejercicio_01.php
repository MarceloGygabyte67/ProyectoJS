<?php
//FASE DE ENTRADA: DECLARACION DE VARIABLES Y PREGUNTAS
//let producto = "Zapatillas Adiddas";

$producto = "Zapatillas Adiddas";
//const curso = "Lógica y Programación//
$precio = 350;
$descuento = 0.08;
$igv = 0.18;


//FASE DE PROCESO: ES LA LOGICA DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: IMPRESION DE RESULTADOS
//Modo JavaScript console.log("El precio del producto es: " ,precio);
echo "El precio del producto es: " . $precio . "<br>";
echo "El IGV es: S/ " . $precioIGV . "<br>";
echo "El descuento es: S/ " . $precioDescuento . "<br>";
echo "El precio final es: S/ " . $precioFinal . "<br>";

?>