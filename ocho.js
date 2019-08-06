function mostrar()
{
var respuesta=true;
var letra;
var num;
var flag=0;
var min;
var max;
var contpar=0;
var contimpar=0;
var contceros=0;
var contpos=0;
var contneg=0;
var flag=0;
var letramax;
var letramin;

do
{
letra=prompt("Ingrese letra.");

num=parseInt(prompt("Ingrese número"));

//valido que sa un número
while(isNan(num)|| num<-100||num>100)
{
  num=prompt("El número no es válido. Reingre número.");  
}

//Cuento pares, impares y ceros
if(num%2==0)
{
contpar++;
}

else if(num==0)
{
contceros++;
}
else
{
 contimpar++;   
}

//cuento pos y neg
if(num>0)
{
contpos++
}
else if(num<0)
{
contneg++
}


//Marco los max  min
if (flag=0)
{
  min=num;
  max=num;
  flag=1;
  letramax=letra;
  letramin=letra;
}
else if(num>max)
{
  max=num;
  letramax=letra;  
}


respuesta=confirm("¿Desea continuar?");
}while(respuesta==true)
}
