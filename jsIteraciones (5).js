function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!= "m" && sexo!="f" && sexo!= "M" && sexo!="F")
{
    sexo = prompt("Error.Reingrese sexo F o M.");
}

document.getElementById('Sexo').value=sexo; 

}//FIN DE LA FUNCIÓN