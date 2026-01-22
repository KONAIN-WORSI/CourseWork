const products = [
    {
        productName: "Wooden Plates",
        productImage: "../Images/vecteezy_wooden-bowl-and-plates_1759115.jpg",
        productDescription: "A wooden base product for eco-friendly customer",
        productPrice:450,
        isStock: true
    },
    {
        productName: "A Shopping Bag",
        productImage: "../Images/vecteezy_woman-holding-blank-empty-canvas-bag-for-shopping-eco_33333279.jpg",
        productDescription: "Lightweight, durable eco-friendly shopping bag",
        productPrice:999,
        isStock: true
    },
    {
        productName: "A Reusable Bamboo Cutlery Combo",
        productImage: "../Images/vecteezy_eco-friendly-food-packaging-on-table-background-natural_7781420.jpg",
        productDescription: "Lightweight, durable, and perfect for on-the-go.",
        productPrice:660,
        isStock: true
    },
    {
        productName: "A Herbal Cream",
        productImage: "../Images/vecteezy_a-stylish-ad-of-a-white-template-podium-mockup-of-a-natural_44424963.jpeg",
        productDescription: "An eco-friendly cream for enlightment of the skin",
        productPrice:2350,
        isStock: true
    },
    {
        productName: "Kitchen Utensils Combo",
        productImage: "../Images/vecteezy_kitchen-utensils-in-restaurant-with-a-blank-space-for-a-text_3306199.JPG",
        productDescription: "A set of kitchen utensils for all cooking needs.",
        productPrice:3520,
        isStock: true
    },
    {
        productName: "A Glass Bottle",
        productImage: "../Images/vecteezy_blue-glass-water-bottle-with-stainless-steel-lid_48160215.jpg",
        productDescription: "A glass bottle for all your eco-friendly needs.",
        productPrice:180,
        isStock: true
    },
    {
        productName: "A Dinnerware Set",
        productImage: "../Images/71A8dpVbDQL._AC_SL1500_.jpg",
        productDescription: "A set of dinnerware for all your cooking needs.",
        productPrice:1400,
        isStock: false
    },
    {
        productName: "A Spatula Set",
        productImage: "../Images/713BZqnwTxL._AC_SL1500_.jpg",
        productDescription: "A set of spatulas for all your cooking needs.",
        productPrice:2500,
        isStock: true
    },
    {
        productName: "A Set of Disposable Utensils",
        productImage: "../Images/71q1iv1eBDL._AC_SL1500_.jpg",
        productDescription: "A set of disposable utensils for all cooking needs.",
        productPrice:699,
        isStock: true
    },
    {
        productName: "A Set of Bathroom Utility",
        productImage: "../Images/vecteezy_blue-and-white-bathroom-products-with-greenery-and-white_46097424.jpeg",
        productDescription: "A set of bathroom utility for all your needs.",
        productPrice:1699,
        isStock: false
    },
    {
        productName: "A Combo of Jade Roller",
        productImage: "../Images/vecteezy_face-massage-jade-roller-on-pastel-green-background_2248363.jpg",
        productDescription: "A combo of jade roller for all your needs.",
        productPrice:599,
        isStock: true
    },
    {
        productName: "A Bamboo Mixing Bowl",
        productImage: "../Images/510akIiofJS._AC_SX679_.jpg",
        productDescription: "A bamboo mixing bowl for all your needs.",
        productPrice:200,
        isStock: true
    },
    {
        productName: "A Fabric T-shirt",
        productImage: "../Images/vecteezy_grey-t-shirt-for-mockup-design_30366120.jpg",
        productDescription: "A fabric t-shirt for all your needs.",
        productPrice:399,
        isStock: true
    },
    {
        productName: "A Combo of Tooth Brush",
        productImage: "../Images/Toothbrush_1.jpg",
        productDescription: "A combo of tooth brush for all your needs.",
        productPrice:420,
        isStock: true
    },
    {
        productName: "A Bamboo Bottle",
        productImage: "../Images/360_F_598937200_U2WT8Tp5E2zUIChfQtZ9a4hIGn54pJYA.jpg",
        productDescription: "A bamboo bottle for all your needs.",
        productPrice:300,
        isStock: true
    }
]

    const resultContainer = document.getElementById('product-grid');
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("search-btn");
    const buyBtn = document.querySelectorAll(".buy-btn");
    const filterBtn = document.querySelectorAll(".bx-filter");
    
     
    function renderProducts(list) {
        resultContainer.innerHTML = list.map(product => {
            const detailImagePath = product.productImage.replace('../Images/', '../../Images/');
            return `
            <div class="productcard">
                <a  href="products/productDetail.html?name=${encodeURIComponent(product.productName)}&image=${encodeURIComponent(detailImagePath)}&description=${encodeURIComponent(product.productDescription)}&price=${encodeURIComponent(product.productPrice)}&stock=${encodeURIComponent(product.isStock)}" 
                    class="product-link">
                    <div class="productimage">
                        <img src="${product.productImage}" alt="${product.productName}">
                    </div>
                    <div class="productinfo">
                        <h3>${product.productName}</h3>
                        <p>${product.productDescription}</p>
                    </div>
                </a>
                <div class="price">
                    <span>NPR ${product.productPrice}</span>
                    <a href="#" class="buy-btn" data-in-stock="${product.isStock}">Buy</a>
                    <a href="#" class="add-to-cart" data-in-stock="${product.isStock}" data-name="${product.productName}" data-price="${product.productPrice}" data-image="${product.productImage}">
                        <i class='bx bx-cart'id="cart-btn"></i>
                    </a>
                </div>
            </div>
        `;
        }).join("");
    }
    
    let isSorted = false;

    filterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!isSorted) {
                const sortedProducts = [...products].sort((a, b) => a.productPrice - b.productPrice);
                renderProducts(sortedProducts);
                showToast('Products filtered: Low to High', 'success');
                isSorted = true;
            } else {
                renderProducts(products);
                showToast('Products reset to default', 'success');
                isSorted = false;
            }
        });
    });



    function getProductBySearchBar(products) {
        const search_val = searchInput.value.trim().toLowerCase();
     
        if(search_val.length === 0) {
            renderProducts(products);
            return;
        }
     
        const matchedProducts = products.filter(product => 
            product.productName.toLowerCase().includes(search_val)
        );
    
        renderProducts(matchedProducts.length ? matchedProducts : []);
        if (!matchedProducts.length) {
            resultContainer.innerHTML = "<p>No products found.</p>";
        }
     
    }
     
     
    searchBtn.addEventListener('click', () => {
        getProductBySearchBar(products)
     
    });
     
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            getProductBySearchBar(products);
        }
    });
     
    searchInput.addEventListener('input', () => {
        const val = searchInput.value.trim().toLowerCase();
        if (val.length === 0) {
            renderProducts(products);
        }
    });

renderProducts(products);
    
    resultContainer.addEventListener('click', (e) => {
        const cartLink = e.target.closest('.add-to-cart');
        const buyLink = e.target.closest('.buy-btn');

        if (cartLink) {
            e.preventDefault();
            const InStock = cartLink.dataset.inStock === 'true';

            if(InStock) {
                const product = {
                    name: cartLink.dataset.name,
                    price: parseFloat(cartLink.dataset.price),
                    image: cartLink.dataset.image,
                    quantity: 1
                };
                addToCart(product);
                showToast('Product added to cart!', 'success');
            } else {
                showToast('Product is out of stock!', 'error');
            }
        } else if (buyLink) {
            e.preventDefault();
            const InStock = buyLink.dataset.inStock === 'true';
            
            if(InStock) {
                showToast('Product has been successfully bought!', 'success');
            } else {
                showToast('Product is out of stock!', 'error');
            }
        }
    })
    
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(item => item.name === product.name);
        
        if(existingProduct) {
            existingProduct.quantity += 1;
        }else {
            cart.push(product)
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

