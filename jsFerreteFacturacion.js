/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno
    var preciodos
    var preciotres
    var total

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    total=(preciouno+preciodos+preciotres);

    alert("La suma es " +total);
}
function Promedio () 
{
	var preciouno
    var preciodos
    var preciotres
    var total

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    total=((preciouno+preciodos+preciotres)/3);

    alert("El promedio es " +total);
}
function PrecioFinal () 
{
	var preciouno
    var preciodos
    var preciotres
    var aumento
    var total

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;

    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);

    aumento=((preciouno+preciodos+preciotres)*21/100);

    total=(preciouno+preciodos+preciotres+aumento);

    alert("El precio final es " +total);
}