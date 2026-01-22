document.addEventListener("DOMContentLoaded", function() {
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailDescription = document.getElementById('detail-description');
    const detailPrice = document.getElementById('detail-price');
    const detailStock = document.getElementById('detail-stock');
    const detailBuyBtn = document.getElementsByClassName('detail-buy-btn')[0];
    
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('name');
    const imageParam = params.get('image');
    const descParam = params.get('description');
    const priceParam = params.get('price');
    const stockParam = params.get('stock');
    
    
    if (detailImage && imageParam) {
        detailImage.src = decodeURIComponent(imageParam);
    }
    
    if (detailName && nameParam) {
        detailName.textContent = decodeURIComponent(nameParam);
    }
    
    if (detailDescription && descParam) {
        detailDescription.textContent = decodeURIComponent(descParam);
    }
    
    if (detailPrice && priceParam) {
        detailPrice.textContent = `NPR ${priceParam}`;
    }
    
    if (detailStock && stockParam) {
        const inStock = stockParam === 'true';
        detailStock.textContent = inStock ? 'In Stock' : 'Out of Stock';
        detailStock.className = inStock ? 'in-stock' : 'out-of-stock';
    }
    
    const detailAddCartBtn = document.getElementById('detail-add-cart-btn');
    if (detailAddCartBtn && stockParam) {
        detailAddCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const inStock = stockParam === 'true';
            if (inStock) {
                const product = {
                    name: decodeURIComponent(nameParam),
                    price: parseFloat(priceParam),
                    image: decodeURIComponent(imageParam).replace('../../Images/', '../Images/'),
                    quantity: 1
                };
                addToCart(product);
                showToast('Your Product has been successfully added to the cart!', 'success');
            } else {
                showToast('Your Product is out of stock!', 'error');
            }
        });
    }
    
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        const existingProductIndex = cart.findIndex(item => item.name === product.name);
        
        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
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

    detailBuyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const inStock = stockParam === 'true';
        if (inStock) {
            showToast('You have successfully bought the product!', 'success');
        } else {
            showToast('Your Product is out of stock!', 'error');
        }
    });
})


