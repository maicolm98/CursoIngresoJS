/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
    let descuento;
    let PRECIO = 35;
    let marca;
    let ImporteFinal;
    let PrecioConDescuento;
    let IIBB;


    cantidad = document.getElementById("txtIdCantidad").value;

    cantidad = parseInt (cantidad);

    marca = document.getElementById("Marca").value;

    PrecioConDescuento = document.getElementById("txtIdprecioDescuento").value;

    PrecioConDescuento = parseInt(PrecioConDescuento);

    descuento = PRECIO / 100 * descuento;

    ImporteFinal = PRECIO * cantidad;
    
     PrecioConDescuento = ImporteFinal - descuento;
    
     IIBB = PrecioConDescuento / 100 * 10 + PrecioConDescuento;


    switch(cantidad){
        case 1: if(cantidad <= 6){
            descuento = 50;
        }
        break;
        case 2: if(marca == "ArgentinaLuz" && cantidad == 5){
            descuento = 40;
        }
        else{
            descuento = 30;
        } 
        break;

        case 3: if(marca == "ArgentinaLuz" || marca == "FelipeLamparas" && cantidad == 4){
            descuento = 25;
        }
            else{
                descuento = 20;
            }
        break;

        case 4:
            if(marca == "ArgentinaLuz" && cantidad == 3){
                descuento = 15;
            }
            else if(marca == "FelipeLamparas" && cantidad == 3){
                descuento = 10;
            }
            else{
                descuento = 5;
            }
         break;
    
    if (ImporteFinal < 120 ){

        PrecioConDescuento == IIBB ;

        alert (" ”Usted pago  $" + PrecioConDescuento + "  de IIBB.")

    }
        else{
        
        alert ("Total: $" + ImporteFinal);


        }


    }
         


    }

