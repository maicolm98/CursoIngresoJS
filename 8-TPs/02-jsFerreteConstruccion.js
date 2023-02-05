/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    let largo
    let ancho
    let alambre
    let perimetro
 
    largo = document.getElementById("txtIdLargo").value;
 
    largo = parseInt(largo); 
 
    ancho = document.getElementById("txtIdAncho").value;
 
    ancho = parseInt(ancho);

 
    perimetro = (ancho + largo) * 2;
 
    alambre = perimetro * 3;
 
    alert ("Se nececitan compar " + alambre + " metros de alambre");
   

}

function Circulo () 

{
    
    let radio
    let perimetro;
    let alambre;
    let PI
    //el perimetro se calcula 2*PI * el radio.
    radio = document.getElementById("txtIdRadio").value;
    PI = 3.14

    radio = parseInt (radio)

    perimetro = (2 * PI)* radio;


    alambre = perimetro * 3;
 
    alert ("Se nececitan compar " + alambre + " metros de alambre");
	
}
function Materiales () 
{
    let largo
    let ancho
    let cemento
    let cal

    largo = document.getElementById("txtIdLargo").value;

    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);

    ancho = parseInt(ancho);

    cemento = (largo + ancho) * 2;

    cal = (largo + ancho) * 3;

    alert ( "Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
	
}