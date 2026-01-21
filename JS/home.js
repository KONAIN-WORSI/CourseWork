const addToCartBtn = document.querySelectorAll('.add-to-cart')

const card = document.querySelectorAll('.productcard')
const productInfo = document.querySelectorAll('.productinfo')
const productPrice = document.querySelectorAll('.price')
const productImage = document.querySelectorAll('.productimage')


addToCartBtn.forEach((btn, index) => {
    btn.addEventListener('click' , (e) => {
        e.preventDefault();
        const name = productInfo[index].querySelector('h3').textContent.trim();
        const priceString = productPrice[index].querySelector('span').textContent.trim();
        const price = parseFloat(priceString.replace('NPR', '').trim());   
        const image = productImage[index].querySelector('img').getAttribute('src');

        const product = {
            name: name,
            price: price,
            image: image,
            quantity: 1
        }

        addToCart(product)
        alert('Product added to cart')

    })

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.name === product.name);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
})