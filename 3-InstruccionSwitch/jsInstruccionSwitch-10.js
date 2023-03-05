/*Una agencia de viajes nos piden informar si hacemos viajes
 a lugares según la estación del año estemos, informar si 
 "Se viaja" o "No se viaja" a ese lugar.

 En Invierno: Solo Bariloche informa "se viaja" los demas destinos
  "No se viaja".

  En Verano: Se viaja a Mar del plata y Cataratas solamente

  En Otoño: Se viaja a todos los destinos.

  Primavera: solo no se viaja a Bariloche*/

function mostrar()

{

let estacion
let destino

estacion = document.getElementById("txtIdEstacion").value;

destino = document.getElementById("txtIdDestino").value;

switch(estacion){
	case ("Verano"):

		if (destino == "Mar del plata"){
			alert ("Se viaja");
		}	
		
		else if(destino == "Cataratas"){
			alert ("Se viaja");
		}
		else{
			alert ("No se viaja")

		}
		break;
	
	case ("Invierno"):
		
	     if(destino == "Bariloche"){

			alert("Se viaja");
		}	
		
		else{
			alert("No se viaja");
		}
		break;
		
	case ("Otoño"):
		alert("Se viaja");
		
	break;


	case ("Primavera"):
		if(destino == "Bariloche"){
			alert("Se viaja");
	    }

		else {
			alert("No se viaja");

		}
		break;	
		}


 }
