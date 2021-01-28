// item add function

function updateItem(currentItemId, totalItemPriceId, singleItemPrice, action) {
    const currentItemQuantity = parseFloat(document.getElementById(currentItemId).value);
    if (action == "add") {
        document.getElementById(currentItemId).value = currentItemQuantity + 1;
        document.getElementById(totalItemPriceId).innerText = parseFloat(document.getElementById(totalItemPriceId).innerText) + singleItemPrice;
        document.getElementById('subtotal').innerText = parseFloat(document.getElementById('subtotal').innerText) + singleItemPrice;
        document.getElementById('total').innerText = parseFloat(document.getElementById('total').innerText) + singleItemPrice;
    }
    else if (action == 'remove') {
        document.getElementById(currentItemId).value = currentItemQuantity - 1;
        document.getElementById(totalItemPriceId).innerText = parseFloat(document.getElementById(totalItemPriceId).innerText) - singleItemPrice;
        document.getElementById('subtotal').innerText = parseFloat(document.getElementById('subtotal').innerText) - singleItemPrice;
        document.getElementById('total').innerText = parseFloat(document.getElementById('total').innerText) - singleItemPrice;

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