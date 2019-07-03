function mostrar()
{
    var precio;
    var descuento;
    var totaluno;
    var totaldos;

    precio=prompt("Ingrese el precio");
    descuento=prompt("Ingrese el descuento");

    precio=parseInt(precio);
    descuento=parseInt(descuento);

    totaluno=((precio*descuento)/100);
    totaldos=(precio-totaluno);

    document.getElementById("elPrecioFinal").value=totaldos;
}
