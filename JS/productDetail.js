const detailImage = document.getElementById('detail-image');
const detailName = document.getElementById('detail-name');
const detailDescription = document.getElementById('detail-description');
const detailPrice = document.getElementById('detail-price');
const detailStock = document.getElementById('detail-stock');

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
            alert('Your Product has been successfully added to the cart!');
        } else {
            alert('Your Product is out of stock!');
        }
    });
}

