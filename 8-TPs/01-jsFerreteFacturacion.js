/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno
    let precioDos
    let preciotres
    let resultado

    precioUno = document.getElementById("txtIdPrecioUno").value;

    precioDos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);

    precioDos = parseInt(precioDos);

    preciotres = parseInt(preciotres);

    resultado = precioUno + precioDos + preciotres;

    alert(resultado);


	
}



 function Promedio () 

 {
    
    let precio1
    let precioDos
    let preciotres
    let resultado
    let precios

    precio1 = document.getElementById("txtIdPrecioUno").value;

    precioDos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precioUno);

    precioDos = parseInt(precioDos);

    preciotres = parseInt(preciotres);

    precios = parseInt(precios);

    precios = (precioUno + precioDos) + preciotres;

    resultado = precios  / 3;


    alert(resultado); 


	
}
function PrecioFinal () 
{
    let precioUno
    let precioDos
    let preciotres
    let resultado
    let Precio
    let precioFinal

    precioUno = document.getElementById("txtIdPrecioUno").value;

    precioDos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);

    precioDos = parseInt(precioDos);

    preciotres = parseInt(preciotres);

    resultado = precioUno + precioDos + preciotres;

    Precio = (resultado) * 21 / 100 

    precioFinal = (resultado + Precio)


    alert(precioFinal);
	
}