/* const precioOriginal = 100;
const descuento = 15;
const porcentajeprecioConDescuento = 100 - descuento;
const precionConDescuento = (precioOriginal * porcentajeprecioConDescuento)/100;
 */
function calculaPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento
}


function priceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const precioConDescuento = calculaPrecioConDescuento(price, discount);

    //console.log(precioConDescuento);

    const resultP = document.getElementById("priceResult");
    resultP.innerText = precioConDescuento;
}




/* console.log({
    precioOriginal,
    descuento,
    porcentajeprecioConDescuento,
    precionConDescuento
});
 */