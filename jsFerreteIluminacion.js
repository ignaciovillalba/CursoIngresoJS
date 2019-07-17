function CalcularPrecio() {
    var lamparitas;
    var marca;
    var precio;
    var descuento;
    var total;
    var aumento;

    lamparitas = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    
    lamparitas = parseInt(lamparitas);
    precio = (lamparitas * 35);
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    total=parseInt(total); 

    if (lamparitas >= 6) {
        descuento = (precio *50 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 5 && marca == "ArgentinaLuz") {
        descuento = (precio * 40 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 5 && marca != "ArgentinaLuz") {
        descuento = (precio * 30 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
    {
        descuento = (precio * 25 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas") 
    {
        descuento = (precio * 20 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 3 && marca == "ArgentinaLuz") 
    {
        descuento = (precio * 15 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 4 && marca == "FelipeLamparas") 
    {
        descuento = (precio * 10 / 100);
        total = (precio - descuento);
    }
    else if (lamparitas == 3) 
    {
        descuento = (precio * 5 / 100);
        total = (precio - descuento);
    }

    if (total>120)
    {
        aumento=(total*10/100);
        total=(aumento+total);

        alert ("IIBB usted pago " +total);
    }
document.getElementById("precioDescuento").value=("$ " +total);
}
