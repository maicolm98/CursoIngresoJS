function mostrar()
{
	let notas;
	let maximo = 10;
	let minimo = 1;

	notas = Math.round(Math.random() *(maximo - minimo) + minimo);

	if (notas >=9){

		alert("La nota es " +  notas + ", ¡¡Exelente!!");
	}
		else if(notas <4) {

			alert(notas + " La proxima sera");

	}
		else { 

			alert (notas + " Aprobo")
		
		}
}