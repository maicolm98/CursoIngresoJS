/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);


	/* 
	El porcentaje de un valor lo consigo, multiplicando el 
	valor por el porcentaje y lo divido por cien*/

	aumento = sueldo * 10 / 100;

	nuevoSueldo = aumento + sueldo;

	document.getElementById("txtIdResultado").value = nuevoSueldo;

	




	
}
