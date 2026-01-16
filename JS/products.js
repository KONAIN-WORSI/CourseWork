const products = [
    {
        productName: "Wooden Plates",
        productImage: "../Images/vecteezy_wooden-bowl-and-plates_1759115.jpg",
        productDescription: "A wooden base product for eco-friendly customer",
        productPrice:450,
        
    },
    {
        productName: "A Shopping Bag",
        productImage: "../Images/vecteezy_woman-holding-blank-empty-canvas-bag-for-shopping-eco_33333279.jpg",
        productDescription: "Lightweight, durable and eco-friendly shopping bag",
        productPrice:999,
        
    },
    {
        productName: "A Reusable Bamboo Cutlery Combo",
        productImage: "../Images/vecteezy_eco-friendly-food-packaging-on-table-background-natural_7781420.jpg",
        productDescription: "Lightweight, durable, and perfect for on-the-go.",
        productPrice:660,
        
    },
    {
        productName: "A Herbal Cream",
        productImage: "../Images/vecteezy_a-stylish-ad-of-a-white-template-podium-mockup-of-a-natural_44424963.jpeg",
        productDescription: "An eco-friendly cream for enlightment of the skin",
        productPrice:2350,
        
    },
    {
        productName: "Kitchen Utensils Combo",
        productImage: "../Images/vecteezy_kitchen-utensils-in-restaurant-with-a-blank-space-for-a-text_3306199.JPG",
        productDescription: "A set of kitchen utensils for all your cooking needs.",
        productPrice:3520,
        
    },
    {
        productName: "A Glass Bottle",
        productImage: "../Images/vecteezy_blue-glass-water-bottle-with-stainless-steel-lid_48160215.jpg",
        productDescription: "A glass bottle for all your eco-friendly needs.",
        productPrice:180,
        
    },
    {
        productName: "A Dinnerware Set",
        productImage: "../Images/71A8dpVbDQL._AC_SL1500_.jpg",
        productDescription: "A set of dinnerware for all your cooking needs.",
        productPrice:1400,
        
    },
    {
        productName: "A Spatula Set",
        productImage: "../Images/713BZqnwTxL._AC_SL1500_.jpg",
        productDescription: "A set of spatulas for all your cooking needs.",
        productPrice:2500,
        
    },
    {
        productName: "A Set of Disposable Utensils",
        productImage: "../Images/71q1iv1eBDL._AC_SL1500_.jpg",
        productDescription: "A set of disposable utensils for all your cooking needs.",
        productPrice:699,
        
    },
    {
        productName: "A Set of Bathroom Utility",
        productImage: "../Images/vecteezy_blue-and-white-bathroom-products-with-greenery-and-white_46097424.jpeg",
        productDescription: "A set of bathroom utility for all your needs.",
        productPrice:1699,
        
    },
    {
        productName: "A Combo of Jade Roller",
        productImage: "../Images/vecteezy_face-massage-jade-roller-on-pastel-green-background_2248363.jpg",
        productDescription: "A combo of jade roller for all your needs.",
        productPrice:599,
        
    },
    {
        productName: "A Bamboo Mixing Bowl",
        productImage: "../Images/510akIiofJS._AC_SX679_.jpg",
        productDescription: "A bamboo mixing bowl for all your needs.",
        productPrice:200,
        
    },
    {
        productName: "A Fabric T-shirt",
        productImage: "../Images/vecteezy_grey-t-shirt-for-mockup-design_30366120.jpg",
        productDescription: "A fabric t-shirt for all your needs.",
        productPrice:399,
        
    },
    {
        productName: "A Combo of Tooth Brush",
        productImage: "../Images/Toothbrush_1.jpg",
        productDescription: "A combo of tooth brush for all your needs.",
        productPrice:420,
        
    },
    {
        productName: "A Bamboo Bottle",
        productImage: "../Images/360_F_598937200_U2WT8Tp5E2zUIChfQtZ9a4hIGn54pJYA.jpg",
        productDescription: "A bamboo bottle for all your needs.",
        productPrice:300,
        
    }
]
 
const resultContainer = document.getElementById('product-grid');
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
 
function renderProducts(list) {
    resultContainer.innerHTML = list.map(product => `
        <div class="productcard">
            <div class="productimage">
                <img src="${product.productImage}" alt="${product.productName}">
            </div>
            <div class="productinfo">
                <h3>${product.productName}</h3>
                <p>${product.productDescription}</p>
            </div>
            <div class="price"><span>NPR ${product.productPrice}</span> <a href="#">Buy</a></div>
        </div>
    `).join("");
}

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
 
// initial load
renderProducts(products);

