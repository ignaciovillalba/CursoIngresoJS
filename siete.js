function mostrar()
{
var nota;
var sexo;
var promedio;
var acumulador=0;
var contador=0
var min;
var flag=0;
var sexomin;
var contv=0;

do
{
    nota=parseInt(prompt("Ingrese nota."));
    while(nota<0 || nota>10 ||isNaN (nota))
        {
        nota=parseInt(prompt("Eso no es una nota válida. Reingrese nota."))
        }
    if (flag==0)
    {
       min=nota;
       flag=1;
    }
    if(nota<min)
    {
     min=nota;
     sexomin=sexo;
    }
    acumulador=(acumulador+nota);
    promedio=acumulador/5;

do
    {
    sexo=prompt("Ingrese sexo.");  
    }while (sexo !="f" && sexo!="m")   
    contador++;

    if(sexo=="m" && nota>=6)
    {
     contv++   
    }
}while(contador<5)



alert("El promedio de las notas es " +promedio);
alert("La nota más baja es " +min+ " y su sexo es " +sexomin);
alert("La cantida de varones que su nota haya sido mayor o igual a 6 es " +contv);

}
