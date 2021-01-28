// item add function

function updateItem(currentItemId, totalItemPriceId, singleItemPrice, action) {
    const currentItemQuantity = parseFloat(document.getElementById(currentItemId).value);
    let tax = 0.0;
    if (action == "add") {
        document.getElementById(currentItemId).value = currentItemQuantity + 1;
        document.getElementById(totalItemPriceId).innerText = parseFloat(document.getElementById(totalItemPriceId).innerText) + singleItemPrice;
        document.getElementById('subtotal').innerText = parseFloat(document.getElementById('subtotal').innerText) + singleItemPrice;
        tax = (parseFloat(document.getElementById('subtotal').innerText) * 0.1).toFixed(2);
        document.getElementById('tax').innerText = tax;
        document.getElementById('total').innerText = parseFloat(document.getElementById('subtotal').innerText) + parseFloat(tax);
    }
    else if (action == 'remove') {
        document.getElementById(currentItemId).value = currentItemQuantity - 1;
        document.getElementById(totalItemPriceId).innerText = parseFloat(document.getElementById(totalItemPriceId).innerText) - singleItemPrice;
        document.getElementById('subtotal').innerText = parseFloat(document.getElementById('subtotal').innerText) - singleItemPrice;
        tax = (parseFloat(document.getElementById('subtotal').innerText) * 0.1).toFixed(2);
        document.getElementById('tax').innerText = tax;
        document.getElementById('total').innerText = parseFloat(document.getElementById('subtotal').innerText) + parseFloat(tax);

    }
}

const phoneAddButton = document.getElementById('phone-add-button');
phoneAddButton.addEventListener('click', function () {
    updateItem('phone-current-quantity', 'phone-total-price', 1219, 'add');
})

const phoneRemoveButton = document.getElementById('phone-remove-button');
phoneRemoveButton.addEventListener('click', function () {
    updateItem('phone-current-quantity', 'phone-total-price', 1219, 'remove');
})