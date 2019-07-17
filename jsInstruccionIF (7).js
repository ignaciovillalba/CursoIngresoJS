function mostrar()
{
var edad;
var estadocivil;

edad=document.getElementById("edad").value;
estadocivil=document.getElementById("estadoCivil").value;

edad=parseInt(edad);

if(edad<18 && estadocivil!="Soltero")
{
alert("Es muy pequeño para NO ser soltero")
}
	


}