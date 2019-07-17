function mostrar()
{
    var edad;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad>17)
        {
         alert ("usted es mayor de edad.");
        }
        else
            {if (edad>12)
                {
                 alert("Usted es adolescente.");   
                }
                else
                    {
                     alert("Usted es niño.");   
                    } 
            }
}