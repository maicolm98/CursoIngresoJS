/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temptF
    let temptC

    temptF = document.getElementById("txtIdTemperatura").value;

    parseFloat = (temptF);

    temptC = (temptF - 32) / 1.8;

    alert(temptF+ " grados Fahrenheit  equivalen a " + temptC.toFixed(1) + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    
	let temptF
    let temptC

    temptC = document.getElementById("txtIdTemperatura").value;

    parseFloat = (temptC);

    temptF = (temptC *1.8) + 32;

    alert ( temptC+ " grados centigrados equivalen a " + temptF.toFixed(1) + " grados Fahrenheit" );
	
}
