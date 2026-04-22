// ========================================
// CRANNIX - Product Data
// ========================================

const USD_TO_INR = 83;

function formatINR(price) {
    return '₹' + (price * USD_TO_INR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const products = [
    // Printer Covers
    {
        id: 'printer-001',
        title: 'Premium Universal Printer Cover',
        category: 'Printer Covers',
        categorySlug: 'printer',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.8,
        reviews: 124,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Protect your printer from dust, spills, and daily wear with our premium universal cover. Made from high-quality water-resistant material that keeps your equipment clean and extends its lifespan.',
        features: ['Water-resistant material', 'Universal fit for most printers', 'Easy to clean', 'Durable construction'],
        inStock: true,
        stockCount: 45,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'printer-002',
        title: 'Laser Printer Dust Cover',
        category: 'Printer Covers',
        categorySlug: 'printer',
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        reviews: 89,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Specifically designed for laser printers with ventilation holes for proper air circulation. Keeps your printer protected while preventing overheating.',
        features: ['Ventilation-friendly design', 'Anti-static material', 'Secure fit', 'Machine washable'],
        inStock: true,
        stockCount: 32,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'printer-003',
        title: 'Office Printer Protective Cover',
        category: 'Printer Covers',
        categorySlug: 'printer',
        price: 24.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 56,
        image: 'https://m.media-amazon.com/images/I/51HYnEnKj9L._SX342_SY445_QL70_FMwebp_.jpg',
        description: 'Lightweight yet durable protection for your office printer. Perfect for busy workspaces where dust and debris are common.',
        features: ['Lightweight design', 'Breathable fabric', 'Elastic edges', 'Multiple size options'],
        inStock: true,
        stockCount: 67,
        isNew: true,
        isBestSeller: false
    },

    // Monitor Covers
    {
        id: 'monitor-001',
        title: 'Premium Monitor Screen Protector',
        category: 'Monitor Covers',
        categorySlug: 'monitor',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.9,
        reviews: 203,
        image: 'https://m.media-amazon.com/images/I/41xT4z2+v+L._SY300_SX300_QL70_FMwebp_.jpg',
        description: 'Keep your monitor pristine with our premium screen protector. Anti-glare coating reduces eye strain while protecting from scratches and dust.',
        features: ['Anti-glare coating', 'Scratch-resistant', 'Easy installation', 'Crystal clear clarity'],
        inStock: true,
        stockCount: 150,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'monitor-002',
        title: 'Full Monitor Cover Hood',
        category: 'Monitor Covers',
        categorySlug: 'monitor',
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.7,
        reviews: 78,
        image: 'https://m.media-amazon.com/images/I/81QKWXUgJ3L._SX679_.jpg',
        description: 'Complete protection for your monitor including screen and body. Perfect for offices and home setups when not in use.',
        features: ['Full coverage design', 'Premium fabric', 'Secure closure', 'Portable storage pouch'],
        inStock: true,
        stockCount: 28,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'monitor-003',
        title: 'Gaming Monitor Armor Cover',
        category: 'Monitor Covers',
        categorySlug: 'monitor',
        price: 44.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 45,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Heavy-duty protection for gaming monitors. Reinforced corners and padded interior keep your expensive equipment safe.',
        features: ['Reinforced corners', 'Padded interior', 'Gaming-themed design', 'Carry handle'],
        inStock: true,
        stockCount: 19,
        isNew: true,
        isBestSeller: false
    },

    // PS5 Covers
    {
        id: 'ps5-001',
        title: 'PS5 Console Skin - Carbon Edition',
        category: 'PS5 Covers',
        categorySlug: 'gaming',
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 312,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Transform your PS5 with our premium carbon fiber skin. Adds style while protecting from scratches and fingerprints.',
        features: ['Carbon fiber texture', 'Precise fit', 'Bubble-free application', 'Leave no residue'],
        inStock: true,
        stockCount: 89,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'ps5-002',
        title: 'PS5 Dust Cover - Gaming Zone',
        category: 'PS5 Covers',
        categorySlug: 'gaming',
        price: 29.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 156,
        image: 'https://m.media-amazon.com/images/I/51HYnEnKj9L._SX342_SY445_QL70_FMwebp_.jpg',
        description: 'Keep your PS5 dust-free when not in use. Premium fabric with gaming-inspired design complements any setup.',
        features: ['Gaming aesthetic', 'Breathable material', 'Easy on/off', 'Storage bag included'],
        inStock: true,
        stockCount: 73,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'ps5-003',
        title: 'PS5 Controller Charging Station Cover',
        category: 'PS5 Covers',
        categorySlug: 'gaming',
        price: 24.99,
        originalPrice: 32.99,
        rating: 4.7,
        reviews: 98,
        image: 'https://m.media-amazon.com/images/I/41xT4z2+v+L._SY300_SX300_QL70_FMwebp_.jpg',
        description: 'Protect your PS5 charging station from dust and damage. Custom fit design ensures perfect coverage.',
        features: ['Custom fit', 'Compact storage', 'Durable material', 'LED compatible'],
        inStock: true,
        stockCount: 54,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'ps5-004',
        title: 'PS5 Slim Console Sleeve',
        category: 'PS5 Covers',
        categorySlug: 'gaming',
        price: 54.99,
        originalPrice: 69.99,
        rating: 4.8,
        reviews: 67,
        image: 'https://m.media-amazon.com/images/I/81QKWXUgJ3L._SX679_.jpg',
        description: 'Premium protective sleeve for PS5 Slim. Transport your console safely to friends places or gaming events.',
        features: ['Travel-friendly', 'Padded protection', 'Shoulder strap', 'Extra pocket for controllers'],
        inStock: true,
        stockCount: 23,
        isNew: false,
        isBestSeller: false
    },

    // Gym Bags
    {
        id: 'gym-001',
        title: 'Premium Gym Duffel Bag',
        category: 'Gym Bags',
        categorySlug: 'gym',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 245,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'The ultimate gym companion. Spacious main compartment, separate shoe compartment, and multiple pockets for all your fitness needs.',
        features: ['Water-resistant', 'Shoe compartment', 'Multiple pockets', 'Comfortable straps'],
        inStock: true,
        stockCount: 67,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'gym-002',
        title: 'Athletic Training Bag',
        category: 'Gym Bags',
        categorySlug: 'gym',
        price: 59.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 134,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Lightweight athletic bag perfect for daily gym sessions. Breathable design keeps your gear fresh.',
        features: ['Lightweight build', 'Ventilated pockets', 'Reflective details', 'USB charging port'],
        inStock: true,
        stockCount: 45,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'gym-003',
        title: 'Premium Yoga Mat Bag',
        category: 'Gym Bags',
        categorySlug: 'gym',
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.6,
        reviews: 89,
        image: 'https://m.media-amazon.com/images/I/51HYnEnKj9L._SX342_SY445_QL70_FMwebp_.jpg',
        description: 'Designed specifically for yoga enthusiasts. Fits mats up to 24" wide with room for accessories.',
        features: ['Mat straps', 'Side pockets', 'Adjustable shoulder strap', 'Eco-friendly material'],
        inStock: true,
        stockCount: 38,
        isNew: false,
        isBestSeller: false
    },
    {
        id: 'gym-004',
        title: 'Heavy-Duty Gym Backpack',
        category: 'Gym Bags',
        categorySlug: 'gym',
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 178,
        image: 'https://m.media-amazon.com/images/I/41xT4z2+v+L._SY300_SX300_QL70_FMwebp_.jpg',
        description: 'Backpack style gym bag with superior organization. Perfect for those who prefer carrying on their back.',
        features: ['Laptop compartment', 'Wet pocket', 'Compression straps', 'Durable build'],
        inStock: true,
        stockCount: 29,
        isNew: false,
        isBestSeller: true
    },

    // Duffle Bags
    {
        id: 'duffle-001',
        title: 'Weekend Travel Duffle',
        category: 'Duffle Bags',
        categorySlug: 'duffle',
        price: 89.99,
        originalPrice: 109.99,
        rating: 4.8,
        reviews: 198,
        image: 'https://m.media-amazon.com/images/I/81QKWXUgJ3L._SX679_.jpg',
        description: 'Perfect size for weekend getaways. Spacious interior with compression system to maximize packing space.',
        features: ['Weekend capacity', 'Compression system', 'Carry options', 'Water-resistant'],
        inStock: true,
        stockCount: 56,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'duffle-002',
        title: 'Leather Business Duffle',
        category: 'Duffle Bags',
        categorySlug: 'duffle',
        price: 149.99,
        originalPrice: 189.99,
        rating: 4.9,
        reviews: 87,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Premium leather duffle for the professional traveler. Elegant design meets functional organization.',
        features: ['Genuine leather', 'Laptop sleeve', 'Business organizer', 'Travel sleeve'],
        inStock: true,
        stockCount: 18,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'duffle-003',
        title: 'Canvas Adventure Duffle',
        category: 'Duffle Bags',
        categorySlug: 'duffle',
        price: 69.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 123,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Rugged canvas duffle built for adventure. Perfect for outdoor trips, camping, and extended travel.',
        features: ['Heavy-duty canvas', 'Multiple carry modes', 'External pockets', 'Adventure-ready'],
        inStock: true,
        stockCount: 34,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'duffle-004',
        title: 'Rolling Duffle Bag',
        category: 'Duffle Bags',
        categorySlug: 'duffle',
        price: 119.99,
        originalPrice: 149.99,
        rating: 4.6,
        reviews: 76,
        image: 'https://m.media-amazon.com/images/I/51HYnEnKj9L._SX342_SY445_QL70_FMwebp_.jpg',
        description: 'Rolling duffle for effortless travel. Large wheels and retractable handle make any journey easy.',
        features: ['Smooth wheels', 'Retractable handle', 'Large capacity', 'Multiple pockets'],
        inStock: true,
        stockCount: 22,
        isNew: false,
        isBestSeller: false
    },

    // Travel Organizers
    {
        id: 'travel-001',
        title: 'Tech Organizer Pouch',
        category: 'Travel Organizers',
        categorySlug: 'travel',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.9,
        reviews: 267,
        image: 'https://m.media-amazon.com/images/I/41xT4z2+v+L._SY300_SX300_QL70_FMwebp_.jpg',
        description: 'Keep all your tech accessories organized in one place. Multiple compartments for cables, chargers, and gadgets.',
        features: ['Cable management', 'Compact design', 'Water-resistant', 'TSA-friendly'],
        inStock: true,
        stockCount: 89,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'travel-002',
        title: 'Toiletry Bag - Hanging Design',
        category: 'Travel Organizers',
        categorySlug: 'travel',
        price: 34.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 145,
        image: 'https://m.media-amazon.com/images/I/81QKWXUgJ3L._SX679_.jpg',
        description: 'Hanging toiletry bag with multiple compartments. Hook design saves counter space in any bathroom.',
        features: ['Hanging hook', 'TSA compliant', 'Leak-proof pockets', 'Quick-dry material'],
        inStock: true,
        stockCount: 67,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'travel-003',
        title: 'Passport & Document Holder',
        category: 'Travel Organizers',
        categorySlug: 'travel',
        price: 24.99,
        originalPrice: 32.99,
        rating: 4.8,
        reviews: 189,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Keep your important documents safe and organized. RFID blocking material protects your information.',
        features: ['RFID protection', 'Multiple pockets', 'Passport size', 'Secure closure'],
        inStock: true,
        stockCount: 112,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'travel-004',
        title: 'Compression Packing Cubes Set',
        category: 'Travel Organizers',
        categorySlug: 'travel',
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 234,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Set of 6 compression packing cubes in various sizes. Maximize suitcase space and keep clothes organized.',
        features: ['Compression zipper', '6-piece set', 'Various sizes', 'Breathable mesh'],
        inStock: true,
        stockCount: 78,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'travel-005',
        title: 'Luggage Scale & Organizer',
        category: 'Travel Organizers',
        categorySlug: 'travel',
        price: 19.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 98,
        image: 'https://m.media-amazon.com/images/I/51HYnEnKj9L._SX342_SY445_QL70_FMwebp_.jpg',
        description: 'Digital luggage scale with built-in organizer pouch. Never overpack or pay overweight fees again.',
        features: ['Digital scale', 'Weight limit display', 'Organizer pocket', 'Battery included'],
        inStock: true,
        stockCount: 45,
        isNew: true,
        isBestSeller: false
    },

    // Office Accessories
    {
        id: 'office-001',
        title: 'Laptop Sleeve - 15.6"',
        category: 'Office Accessories',
        categorySlug: 'office',
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 312,
        image: 'https://m.media-amazon.com/images/I/41xT4z2+v+L._SY300_SX300_QL70_FMwebp_.jpg',
        description: 'Premium laptop sleeve with padded protection. Fits most 15.6" laptops perfectly.',
        features: ['Padded protection', 'Slim profile', 'Water-resistant', 'Zipper pull'],
        inStock: true,
        stockCount: 134,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'office-002',
        title: 'Keyboard Dust Cover',
        category: 'Office Accessories',
        categorySlug: 'office',
        price: 14.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 87,
        image: 'https://m.media-amazon.com/images/I/81QKWXUgJ3L._SX679_.jpg',
        description: 'Transparent keyboard cover protects from dust and spills without affecting typing feel.',
        features: ['Transparent design', 'Spill protection', 'Easy to clean', 'Universal fit'],
        inStock: true,
        stockCount: 89,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'office-003',
        title: 'Desk Mat - Premium PU Leather',
        category: 'Office Accessories',
        categorySlug: 'office',
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 178,
        image: 'https://m.media-amazon.com/images/I/813XcXPGIDL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Large desk mat in premium PU leather. Protects your desk while adding a professional look.',
        features: ['Premium PU leather', 'Non-slip base', 'Large surface', 'Easy to clean'],
        inStock: true,
        stockCount: 56,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 'office-004',
        title: 'Document Folder Set',
        category: 'Office Accessories',
        categorySlug: 'office',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.5,
        reviews: 67,
        image: 'https://m.media-amazon.com/images/I/81Jffw2MayL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg',
        description: 'Set of 5 document folders in assorted colors. Keep your papers organized and professional.',
        features: ['5-piece set', 'Assorted colors', 'Business design', 'Durable material'],
        inStock: true,
        stockCount: 78,
        isNew: false,
        isBestSeller: false
    }
];

// ========================================
// Product Functions
// ========================================

// Get products by category
function getProductsByCategory(category) {
    if (!category || category === 'all') {
        return products;
    }
    return products.filter(p => p.categorySlug === category);
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Get best sellers
function getBestSellers(limit = 8) {
    return products.filter(p => p.isBestSeller).slice(0, limit);
}

// Get new arrivals
function getNewArrivals(limit = 8) {
    return products.filter(p => p.isNew).slice(0, limit);
}

// Get related products
function getRelatedProducts(productId, limit = 4) {
    const product = getProductById(productId);
    if (!product) return [];
    
    return products
        .filter(p => p.categorySlug === product.categorySlug && p.id !== productId)
        .slice(0, limit);
}

// Render product card
function renderProductCard(product) {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" onerror="this.src='images/products/placeholder.jpg'">
                </a>
                ${discount > 0 ? `<span class="product-badge">-${discount}%</span>` : ''}
                ${product.isNew ? `<span class="product-badge" style="background: var(--color-black);">New</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn wishlist-toggle" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="product-action-btn quick-view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">
                    <a href="product.html?id=${product.id}">${product.title}</a>
                </h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
                    <span class="count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatINR(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatINR(product.originalPrice)}</span>` : ''}
                </div>
                <span class="product-stock ${product.stockCount > 10 ? 'in-stock' : product.stockCount > 0 ? 'low-stock' : 'out-of-stock'}">
                    ${product.stockCount > 10 ? 'In Stock' : product.stockCount > 0 ? `Only ${product.stockCount} left` : 'Out of Stock'}
                </span>
                <a href="https://www.amazon.com/s?k=crannix+products" target="_blank" class="add-to-cart-btn">Buy from Amazon</a>
            </div>
        </div>
    `;
}

// Render products grid
function renderProductsGrid(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productList.map(p => renderProductCard(p)).join('');
}

// Initialize products on page
function initProducts() {
    // Best sellers
    const bestSellersContainer = document.getElementById('bestSellers');
    if (bestSellersContainer) {
        renderProductsGrid('bestSellers', getBestSellers(8));
    }
    
    // New arrivals
    const newArrivalsContainer = document.getElementById('newArrivals');
    if (newArrivalsContainer) {
        renderProductsGrid('newArrivals', getNewArrivals(8));
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initProducts);

// Export for use
window.Products = {
    products,
    getProductsByCategory,
    getProductById,
    getBestSellers,
    getNewArrivals,
    getRelatedProducts,
    renderProductCard,
    renderProductsGrid
};

