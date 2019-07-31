function mostrar()
{

	var contador;
	var acumulador=0;
	var num;
	var promedio;

	do
	{
		num=prompt("Ingrese valor.");
		num=parseInt(num);

		acumulador=(acumulador+num);

		contador=(contador+1);
	} while (contador<5);


	promedio=(acumulador/5);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}