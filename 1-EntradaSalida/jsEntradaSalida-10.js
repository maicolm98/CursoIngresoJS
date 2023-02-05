/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeIngresado
	let Descuento
	let resultado

	importeIngresado = document.getElementById("txtIdImporte").value;

	importeIngresado = parseInt(importeIngresado);


	Descuento = importeIngresado * 25 / 100;

	resultado = importeIngresado - Descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
