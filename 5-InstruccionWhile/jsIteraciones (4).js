function mostrar()
{
	var numero
	
	numero= prompt("ingrese un número entre 0 y 9.");

	numero=parseInt(numero);

	while(numero<0 || numero>10 || isNaN(numero))
		{
		alert("Error,este valor no se encuentra entre 0 y 9.");
		numero=prompt("Reingrese un número válido.");
		numero=parseInt(numero);
		}
		document.getElementById("Numero").value="Este numero ( "+numero+ " ) es válido."
}