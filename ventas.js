const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
    }
    return comision;
}

function calcular() {
    //Recupera propiedades de las caja de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    //Recuperamos el valor de las caja de texto
    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let precioProductoStr = componentePrecio.value;

    //Se convierte el texto a numero
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}