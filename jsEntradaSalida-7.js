/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numerouno
    var numerodos
    var total

    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;

    numerouno=parseInt(numerouno)
    numerodos=parseInt(numerodos)

    total=(numerouno+numerodos)

    alert("La suma es " +total)
}

function restar()
{
    var numerouno;
    var numerodos;
    var total;

    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;

    numerouno=parseInt(numerouno);
    numerodos=parseInt(numerodos);

    total=(numerouno-numerodos);

    alert("La resta es " +total);
}

function multiplicar()
{ 
    var numerouno;
    var numerodos;
    var total;

    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;

    numerouno=parseInt(numerouno);
    numerodos=parseInt(numerodos);

    total=(numerouno*numerodos);

    alert("El producto es " +total);
}

function dividir()
{
    var numerouno;
    var numerodos;
    var total;

    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;

    numerouno=parseInt(numerouno);
    numerodos=parseInt(numerodos);

    total=(numerouno/numerodos);

    alert("La división es " +total);
}

