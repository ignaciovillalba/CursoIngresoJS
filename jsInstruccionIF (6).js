function mostrar()
{
    var edad

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if (edad<17)
    {
        if(edad>=13 && edad<=17)
        {
            alert("Usted es adolescente");
        }

       alert("Usted es un niño.");
    }
    else

        {
            alert("Usted es mayor.");
        }


}