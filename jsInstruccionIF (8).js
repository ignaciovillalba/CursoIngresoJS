function mostrar()
{
    var edad;
    var estadocivil;

    edad=document.getElementById("edad").value;
    estadocivil=document.getElementById("estadoCivil").value;

    edad=parseInt(edad);

    if (edad>17 && estadocivil=="Soltero")
        {
            alert("Es soltero y no es menor.");
        }


}