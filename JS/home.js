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
        showToast('Product added to cart', 'success')

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

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'bx bx-check-circle' : 'bx bx-x-circle';
    icon.style.fontSize = '1.5rem';
    icon.style.color = type === 'success' ? '#2D5016' : '#d32f2f';
    
    const text = document.createElement('span');
    text.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(text);
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300); 
    }, 3000);
}

card.forEach((c, index) => {
    const imgContainer = productImage[index];
    const title = productInfo[index].querySelector('h3');

    const goToDetail = () => {
        const name = productInfo[index].querySelector('h3').textContent.trim();
        const description = productInfo[index].querySelector('p').textContent.trim();
        const priceString = productPrice[index].querySelector('span').textContent.trim();
        const price = parseFloat(priceString.replace('NPR', '').trim());
        const rawImageSrc = productImage[index].querySelector('img').getAttribute('src');
        const image = '../' + rawImageSrc;

        const url = `products/productDetail.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}&stock=true`;

        window.location.href = url;
    };

    imgContainer.style.cursor = 'pointer';
    imgContainer.addEventListener('click', goToDetail);

    title.style.cursor = 'pointer';
    title.addEventListener('click', goToDetail);
});