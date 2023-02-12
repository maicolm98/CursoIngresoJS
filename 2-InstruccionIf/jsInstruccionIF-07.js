function mostrar()
{
	let estado
	let edad

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	estado = document.getElementById("estadoCivil").value;

	if(edad <= 17 != estado){

		alert("Es muy chico para no ser soltero");
	}
	



}