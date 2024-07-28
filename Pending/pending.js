document.addEventListener('DOMContentLoaded', () => {
    let productId = 1;
    let totalPrice = 0;

    const productNameInput = document.getElementById('productName');
    const priceInput = document.getElementById('price');
    const saveButton = document.getElementById('save');
    const productTable = document.getElementById('productTable');
    const totalPriceElement = document.getElementById('totalPrice');
    const generateInvoiceButton = document.getElementById('generateInvoice');

    saveButton.addEventListener('click', () => {
        const productName = productNameInput.value.trim();
        const price = parseFloat(priceInput.value.trim());

        if (productName === '' || isNaN(price) || price <= 0) {
            alert('Please enter valid product details.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${productId}</td>
            <td>${productName}</td>
            <td>${price.toFixed(2)}</td>
            <td><button class="delete">Delete</button></td>
        `;

        productTable.appendChild(newRow);
        totalPrice += price;
        totalPriceElement.textContent = totalPrice.toFixed(2);

        productNameInput.value = '';
        priceInput.value = '';
        productId++;

        newRow.querySelector('.delete').addEventListener('click', () => {
            const rowPrice = parseFloat(newRow.children[2].textContent);
            totalPrice -= rowPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            productTable.removeChild(newRow);
        });
    });

    generateInvoiceButton.addEventListener('click', () => {
        alert('Invoice generation not implemented yet.');
    });
});
