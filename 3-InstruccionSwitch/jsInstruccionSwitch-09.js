function mostrar()
{
/*
Una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso
de una estacion del año y localidad para vacacionar para poder
calcular el precio final.

En Invierno: bariloche tiene un aumento del 20% cataratas y
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento
del 20%.

En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%.

En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/

const PRECIO = 15000;
let estacion;
let destino;
let descuento = 0;
let aumento = 0;
let PrecioFinal

estacion = document.getElementById("txtIdEstacion").value;

destino = document.getElementById("txtIdDestino").value;

switch(estacion){
	
	case "Invierno":
		if(destino == "Bariloche"){
			aumento = 20;
		}
		else if(destino == "Mar del plata"){
			descuento = 20;
		}
		else{
			descuento = 10;
		}
	    break;

	case "Verano":
		if(destino == "Bariloche"){
			descuento = 20;
		}
		else if(destino == "Cataratas" || "Cordoba"){
		aumento = 10;

		}
		else {
			aumento = 20;
		}
	    break;

	case ("Otoño"):
	case ("Primavera"):

		if(destino == "Cordoba"){
			PrecioFinal = PRECIO
		}
		else{
			aumento = 10;
			
		}
	break;
	}

	if(aumento !=0){
		PrecioFinal = PRECIO + PRECIO / 100 * aumento;
	}
	else if (descuento !=0){
		PrecioFinal = PRECIO - PRECIO / 100 * descuento;
	}
	else{
		PrecioFinal = PRECIO
	}
	

	alert("La tarifa de tu viaje es $" +PrecioFinal)



}


