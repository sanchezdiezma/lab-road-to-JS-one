const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     precioConDescuento,
//     porcentajePrecioConDescuento
// });

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('input-price')
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('input-discount')
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resulP = document.getElementById('ResultP');
    resulP.innerText = 'El precio con descuento es: €' + precioConDescuento;
}



