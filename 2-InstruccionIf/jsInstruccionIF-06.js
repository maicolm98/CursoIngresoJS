function mostrar()
{
	let edad

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if ( edad >=18 ) {
	
	alert("Es mayor de edad");
}
else if (edad >=13 && edad <=17) { 

		alert("Es adolecente");

}
else if (edad <13) {
		
	
     alert("Es menor de edad");	
    
}
}