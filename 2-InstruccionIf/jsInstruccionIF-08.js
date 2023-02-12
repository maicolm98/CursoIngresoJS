function mostrar()
{
	let estado
	let edad

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	estado = document.getElementById("estadoCivil").value;

	if(estado == "Soltero" && edad >=18){

		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN