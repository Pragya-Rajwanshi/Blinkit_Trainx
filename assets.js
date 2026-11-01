console.log("Blinkit JavaScript Connected Successfully!");

// =====================================
// BLINKIT CLONE - PRODUCTS AND ASSETS
// =====================================

const categories = [
    {
        name: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300"
    },
    {
        name: "Dairy & Breakfast",
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300"
    },
    {
        name: "Snacks & Munchies",
        image: "https://images.unsplash.com/photo-1621939514649-280e2aa2f2b1?w=300"
    },
    {
        name: "Cold Drinks & Juices",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300"
    },
    {
        name: "Bakery & Biscuits",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300"
    },
    {
        name: "Atta, Rice & Dal",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300"
    },
    {
        name: "Personal Care",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300"
    },
    {
        name: "Home & Cleaning",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300"
    },
    {
        name: "Tea & Coffee",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300"
    },
    {
        name: "Instant Food",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300"
    },
    {
        name: "Baby Care",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300"
    },
    {
        name: "Pet Care",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=300"
    }
];

// =====================================
// PRODUCT DATABASE
// =====================================

const products = [
    {
        id: 1,
        name: "Fresh Red Apples",
        category: "Fruits & Vegetables",
        quantity: "4 pcs",
        price: 120,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400"
    },
    {
        id: 2,
        name: "Fresh Bananas",
        category: "Fruits & Vegetables",
        quantity: "6 pcs",
        price: 40,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400"
    },
    {
        id: 3,
        name: "Fresh Tomatoes",
        category: "Fruits & Vegetables",
        quantity: "500 g",
        price: 30,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"
    },
    {
        id: 4,
        name: "Fresh Strawberries",
        category: "Fruits & Vegetables",
        quantity: "200 g",
        price: 89,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400"
    },
    {
        id: 5,
        name: "Amul Fresh Milk",
        category: "Dairy & Breakfast",
        quantity: "500 ml",
        price: 34,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"
    },
    {
        id: 6,
        name: "Fresh Brown Bread",
        category: "Bakery & Biscuits",
        quantity: "400 g",
        price: 45,
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400"
    },
    {
        id: 7,
        name: "Potato Chips",
        category: "Snacks & Munchies",
        quantity: "1 pack",
        price: 20,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400"
    },
    {
        id: 8,
        name: "Orange Juice",
        category: "Cold Drinks & Juices",
        quantity: "1 litre",
        price: 99,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400"
    },
    {
        id: 9,
        name: "Instant Noodles",
        category: "Instant Food",
        quantity: "Pack of 4",
        price: 56,
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400"
    },
    {
        id: 10,
        name: "Coffee Powder",
        category: "Tea & Coffee",
        quantity: "100 g",
        price: 145,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400"
    },
    {
        id: 11,
        name: "Basmati Rice",
        category: "Atta, Rice & Dal",
        quantity: "1 kg",
        price: 110,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"
    },
    {
        id: 12,
        name: "Chocolate Cookies",
        category: "Bakery & Biscuits",
        quantity: "200 g",
        price: 65,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
    },
    {
        id: 13,
        name: "Potato",
        category: "Fruits & Vegetables",
        quantity: "1 kg",
        price: 35,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"
    },
    {
        id: 14,
        name: "Cold Drink",
        category: "Cold Drinks & Juices",
        quantity: "750 ml",
        price: 45,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400"
    },
    {
        id: 15,
        name: "Potato Wafers",
        category: "Snacks & Munchies",
        quantity: "100 g",
        price: 30,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400"
    }
];

// =====================================
// DOM ELEMENTS
// =====================================

const categoryGrid = document.getElementById("categoryGrid");
const productGrid = document.getElementById("productGrid");
const productHeading = document.getElementById("productHeading");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

let activeCategory = "All";
let searchTerm = "";
let cart = [];

// =====================================
// IMAGE FALLBACK
// =====================================

function imageFallback(image, type = "product") {
    image.onerror = null;

    image.src = type === "category"
        ? "https://placehold.co/300x200/f3f7ed/0c831f?text=Grocery"
        : "https://placehold.co/400x300/f3f7ed/0c831f?text=Product";
}

// =====================================
// DISPLAY CATEGORIES
// =====================================

function displayCategories() {
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card"
             data-category="${category.name}">

            <img
                src="${category.image}"
                alt="${category.name}"
                onerror="imageFallback(this, 'category')">

            <h3>${category.name}</h3>

        </div>
    `).join("");
}

// =====================================
// DISPLAY PRODUCTS
// =====================================

function displayProducts() {

    let filteredProducts = products.filter(product => {

        const matchesCategory =
            activeCategory === "All" ||
            product.category === activeCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    if (activeCategory === "All") {
        productHeading.textContent = searchTerm
            ? "Search Results"
            : "Best Sellers";
    } else {
        productHeading.textContent = activeCategory;
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-products">
                <h3>No products found 😕</h3>
                <p>Try searching for another product.</p>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => {

        const cartProduct = cart.find(item => item.id === product.id);
        const quantity = cartProduct ? cartProduct.quantity : 0;

        return `
            <article class="product-card">

                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="imageFallback(this)">
                </div>

                <span class="product-time">⚡ 10 MINS</span>

                <h3>${product.name}</h3>

                <p class="product-quantity">
                    ${product.quantity}
                </p>

                <div class="product-bottom">

                    <span class="product-price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-btn"
                        data-add="${product.id}">

                        ${quantity > 0 ? quantity + " IN CART" : "ADD"}

                    </button>

                </div>

            </article>
        `;
    }).join("");
}

// =====================================
// CATEGORY FILTER
// =====================================

categoryGrid.addEventListener("click", function(event) {

    const card = event.target.closest(".category-card");

    if (!card) return;

    activeCategory = card.dataset.category;
    searchTerm = "";
    searchInput.value = "";

    updateActiveFilter();
    displayProducts();

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

// =====================================
// FILTER BUTTONS
// =====================================

document.getElementById("filterRow").addEventListener("click", function(event) {

    const button = event.target.closest(".filter-btn");

    if (!button) return;

    activeCategory = button.dataset.filter;

    updateActiveFilter();
    displayProducts();
});

function updateActiveFilter() {

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === activeCategory
        );
    });

    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.toggle(
            "selected",
            card.dataset.category === activeCategory
        );
    });
}

// =====================================
// VIEW ALL CATEGORIES
// =====================================

document.getElementById("showAllCategories").addEventListener("click", () => {

    activeCategory = "All";
    searchTerm = "";
    searchInput.value = "";

    updateActiveFilter();
    displayProducts();

    document.getElementById("categories").scrollIntoView({
        behavior: "smooth"
    });
});

// =====================================
// SEARCH PRODUCTS
// =====================================

searchInput.addEventListener("input", function() {

    searchTerm = this.value.trim().toLowerCase();

    activeCategory = "All";

    clearSearch.style.display = searchTerm ? "block" : "none";

    updateActiveFilter();
    displayProducts();
});

clearSearch.addEventListener("click", function() {

    searchInput.value = "";
    searchTerm = "";

    clearSearch.style.display = "none";

    displayProducts();
});

// =====================================
// ADD TO CART
// =====================================

productGrid.addEventListener("click", function(event) {

    const button = event.target.closest("[data-add]");

    if (!button) return;

    const productId = Number(button.dataset.add);

    addToCart(productId);
});

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    displayProducts();

    showToast(product.name + " added to cart!");
}

// =====================================
// UPDATE CART
// =====================================

function updateCart() {

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    document.getElementById("cartCount").textContent = totalQuantity;

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    document.getElementById("cartTotal").textContent =
        "₹" + totalAmount;

    displayCartItems();
}

// =====================================
// DISPLAY CART ITEMS
// =====================================

function displayCartItems() {

    const cartItems = document.getElementById("cartItems");
    const cartFooter = document.getElementById("cartFooter");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <span>🛒</span>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started.</p>
            </div>
        `;

        cartFooter.style.display = "none";
        return;
    }

    cartFooter.style.display = "block";

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">

            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="imageFallback(this)">

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>${item.quantity}</p>

                <div class="cart-item-price">
                    ₹${item.price * item.quantity}
                </div>

            </div>

            <div class="quantity-controls">

                <button data-action="decrease" data-id="${item.id}">
                    −
                </button>

                <span>${item.quantity}</span>

                <button data-action="increase" data-id="${item.id}">
                    +
                </button>

            </div>

        </div>
    `).join("");
}

// =====================================
// INCREASE / DECREASE CART QUANTITY
// =====================================

document.getElementById("cartItems").addEventListener("click", function(event) {

    const button = event.target.closest("[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    const item = cart.find(product => product.id === id);

    if (!item) return;

    if (action === "increase") {
        item.quantity++;
    }

    if (action === "decrease") {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);
        }
    }

    updateCart();
    displayProducts();
});

// =====================================
// OPEN / CLOSE CART
// =====================================

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

document.getElementById("openCart").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);

// =====================================
// CHECKOUT DEMO
// =====================================

document.getElementById("checkoutBtn").addEventListener("click", function() {

    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    showToast("Demo checkout! Payment is not connected.");
});

// =====================================
// LOGIN DEMO
// =====================================

document.getElementById("loginBtn").addEventListener("click", function() {
    showToast("Login feature can be added with a backend.");
});

// =====================================
// TOAST MESSAGE
// =====================================

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

// =====================================
// INITIALIZE WEBSITE
// =====================================

displayCategories();
displayProducts();
updateCart();
