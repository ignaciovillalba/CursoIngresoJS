
function mostrar()
{
    var ancho;
    var largo;
    var total;

    ancho=prompt("Ingrese el ancho ");
    largo=prompt("Ingrese el largo ");

    ancho=parseInt(ancho);
    largo=parseInt(largo);
 
    total=((ancho*2)+(largo*2));

    alert("El perímetro es " +total+ "mts");
}
