document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const card = button.closest('.productcard');
            const name = card.querySelector('.productinfo h3').innerText;
            const priceText = card.querySelector('.price span').innerText;
            const price = parseFloat(priceText.replace('NPR', '').trim());
            const imageElement = card.querySelector('.productimage img');
            const image = imageElement.getAttribute('src');

            const product = {
                name: name,
                price: price,
                image: image,
                quantity: 1
            };

            addToCart(product);
            alert('Your Product has been successfully added to the cart!');
        });
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}