function mostrar()
{
//tomo la edad  
var edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if (edad <= 17 && edad>=13)
    {
        alert("Usted es adolescente.");
    }


}//FIN DE LA FUNCIÓN