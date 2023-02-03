/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let Nombre;

	Nombre = document.getElementById("txtIdNombre").value;

	/* Nombre = txIdNombre.value; es otra forma de hacerlo,
	 pero no es la standard de js, solo funciona para la mayoria
	  de navegadores web.*/

	document.getElementById("txtIdNombre").value = "";

	/* la anterior función es para que, en la caja de escritura
	 embebida en el artivo html, se borre el contenido escrito
	  una vez que cumple su función.*/
	  
	alert(Nombre);

}


