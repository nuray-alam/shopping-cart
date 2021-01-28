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

// delete section function

function deleteSection(sectionName, deletedAmountSectionId) {
    document.getElementById(sectionName).style.display = 'none';
    document.getElementById('subtotal').innerText = parseFloat(document.getElementById('subtotal').innerText) - parseFloat(document.getElementById(deletedAmountSectionId).innerText);
    const tax = (parseFloat(document.getElementById('subtotal').innerText) * 0.1).toFixed(2);
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = parseFloat(document.getElementById('subtotal').innerText) + parseFloat(tax);

}

// phone add button event handlar

const phoneAddButton = document.getElementById('phone-add-button');
phoneAddButton.addEventListener('click', function () {
    updateItem('phone-current-quantity', 'phone-total-price', 1219, 'add');
})

// phone remove button event handlar

const phoneRemoveButton = document.getElementById('phone-remove-button');
phoneRemoveButton.addEventListener('click', function () {
    updateItem('phone-current-quantity', 'phone-total-price', 1219, 'remove');
})

// phone section delete button event handlar

const phoneSectionDeleteButton = document.getElementById('phone-section-delete');
phoneSectionDeleteButton.addEventListener('click', function () {
    deleteSection('phone-section', 'phone-total-price');
})

// phone case add button event handler
const phoneCaseAddButton = document.getElementById('phone-case-add-button');
phoneCaseAddButton.addEventListener('click', function () {
    updateItem('phone-case-current-quantity', 'phone-case-total-price', 59, 'add');
})

// phone case remove button event handlar

const phoneCaseRemoveButton = document.getElementById('phone-case-remove-button');
phoneCaseRemoveButton.addEventListener('click', function () {
    updateItem('phone-case-current-quantity', 'phone-case-total-price', 59, 'remove');
})

// phone case section delete button event handlar

const phoneCaseSectionDeleteButton = document.getElementById('phone-case-section-delete');
phoneCaseSectionDeleteButton.addEventListener('click', function () {
    deleteSection('phone-case-section','phone-case-total-price');
})