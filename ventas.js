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
    //  Recupera propiedades de las caja de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    //  Recuperamos el valor de las caja de texto
    //let sueldoBaseStr = componenteSueldoBase.value;
    //let numeroVentasStr = componenteVentas.value;
    //let precioProductoStr = componentePrecio.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio");
    

    //  Se convierte el texto a numero
    
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}

function validarCampo(input) {
    const valor = input.value.trim();
    const errorDiv = document.getElementById("error_" + input.id);
    let mensaje = "";

    if (valor === "") {
        mensaje = "Este campo no puede estar vacío";
    } else if (!/^\d+$/.test(valor)) {
        mensaje = "Solo se permiten números";
    } else if (valor.length > 5) {
        mensaje = "Máximo 5 dígitos permitidos";
    }

    errorDiv.textContent = mensaje;
}