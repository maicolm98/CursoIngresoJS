/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let Nombre;

	// Guardo en la variable nombre, lo escrito en la ventana prompt emergente.

	Nombre = prompt("saludos!!, Ingrese su nombre");

	// Luego le asigno a la caja de texto por Id, que muestre lo escrito en el prompt.

	document.getElementById("txtIdNombre").value = Nombre;


}

