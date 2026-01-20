const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart(cart);
}

function renderCart(cart) {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="5" style="text-align:center;">Your cart is empty.</td></tr>';
        cartTotalElement.innerText = 'NPR 0';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </div>
            </td>
            <td>NPR ${item.price}</td>
            <td>
                <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>NPR ${itemTotal}</td>
            <td>
                <button class="remove-btn" onclick="removeItem(${index})"><i class='bx bx-trash'></i></button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalElement.innerText = `NPR ${total}`;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(cart);
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(cart);
}

// Initial load
loadCart();