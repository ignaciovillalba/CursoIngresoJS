function mostrar()
{
	var numero;
	
	numero=(Math.floor(Math.random()*10)+1);
	
	numero=parseInt(numero);
	
	if (numero==9 || numero==10)
	{
	 alert(numero+" EXCELENTE");
	}else if (numero>4)
		{
		 alert(numero+" APROBÓ");
		}else if (numero<4)
			 {
			  alert(numero+" Vamos, la próxima se puede");
			 }

}