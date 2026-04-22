// ========================================
// CRANNIX - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSearch();
    initQuantityButtons();
    initCartFunctions();
    initWishlistFunctions();
    initTabs();
    initFAQ();
    initFormValidation();
    initScrollEffects();
});

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    if (!hamburger || !mobileMenu) return;
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// Search
// ========================================
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    
    if (!searchToggle || !searchBar) return;
    
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchBar.classList.toggle('active');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (searchBar.classList.contains('active') && 
            !searchBar.contains(e.target) && 
            !searchToggle.contains(e.target)) {
            searchBar.classList.remove('active');
        }
    });
}

// ========================================
// Quantity Buttons
// ========================================
function initQuantityButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('qty-btn')) {
            const container = e.target.closest('.quantity-selector') || e.target.closest('.cart-item-quantity');
            if (!container) return;
            
            const input = container.querySelector('.qty-value') || container.querySelector('span:not(.qty-btn)');
            if (!input) return;
            
            let value = parseInt(input.textContent) || 1;
            
            if (e.target.classList.contains('plus')) {
                value++;
            } else if (e.target.classList.contains('minus') && value > 1) {
                value--;
            }
            
            input.textContent = value;
            
            // Trigger custom event for cart updates
            window.dispatchEvent(new CustomEvent('quantityChanged', { detail: { value } }));
        }
    });
}

// ========================================
// Cart Functions
// ========================================
function initCartFunctions() {
    // Remove from cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cart-item-remove')) {
            e.preventDefault();
            removeFromCart(e.target);
        }
    });
    
    // Update cart count on page load
    updateCartCount();
}

function removeFromCart(button) {
    const cartItem = button.closest('.cart-item');
    if (cartItem) {
        cartItem.remove();
        showNotification('Product removed from cart', 'info');
        updateCartTotal();
    }
}

function updateCartCount() {
    // Cart feature removed
}

function updateCartTotal() {
    // Calculate and update total
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace(/[^0-9.]/g, '')) || 0;
        const qty = parseInt(item.querySelector('.cart-item-quantity span').textContent) || 1;
        subtotal += price * qty;
    });
    
    const subtotalEl = document.querySelector('.summary-subtotal span:last-child');
    const totalEl = document.querySelector('.summary-total span:last-child');
    
    if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toFixed(2);
    if (totalEl) totalEl.textContent = '₹' + subtotal.toFixed(2);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'info' ? '#17a2b8' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ========================================
// Wishlist Functions
// ========================================
function initWishlistFunctions() {
    // Wishlist toggle
    document.addEventListener('click', function(e) {
        const wishlistBtn = e.target.closest('.product-action-btn') || e.target.closest('.wishlist-btn');
        if (wishlistBtn && (wishlistBtn.querySelector('.fa-heart') || wishlistBtn.querySelector('.far fa-heart'))) {
            e.preventDefault();
            toggleWishlist(wishlistBtn);
        }
    });
}

function toggleWishlist(button) {
    let wishlist = JSON.parse(localStorage.getItem('crannix_wishlist')) || [];
    const isActive = button.classList.contains('active');
    
    if (isActive) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item.id !== button.dataset.id);
        button.classList.remove('active');
        button.innerHTML = '<i class="far fa-heart"></i>';
        showNotification('Removed from wishlist', 'info');
    } else {
        // Add to wishlist
        const productCard = button.closest('.product-card');
        if (productCard) {
            wishlist.push({
                id: productCard.dataset.id,
                title: productCard.querySelector('.product-title').textContent,
                price: productCard.querySelector('.current-price').textContent,
                image: productCard.querySelector('.product-image img').src
            });
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
            showNotification('Added to wishlist!', 'success');
        }
    }
    
    localStorage.setItem('crannix_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('crannix_wishlist')) || [];
    const countElements = document.querySelectorAll('.wishlist-count');
    
    countElements.forEach(el => {
        el.textContent = wishlist.length;
    });
}

// ========================================
// Tabs
// ========================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.tab;
            
            // Remove active class from all
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                // Close others
                faqItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
                
                // Toggle current
                item.classList.toggle('active');
            });
        }
    });
}

// ========================================
// Form Validation
// ========================================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Check required fields
            const required = form.querySelectorAll('[required]');
            required.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            // Email validation
            const email = form.querySelector('input[type="email"]');
            if (email && email.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    isValid = false;
                    email.style.borderColor = '#dc3545';
                    showNotification('Please enter a valid email address', 'error');
                    e.preventDefault();
                }
            }
            
            if (!isValid && !form.classList.contains('newsletter-form')) {
                e.preventDefault();
                showNotification('Please fill in all required fields', 'error');
            }
        });
        
        // Clear validation on input
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    });
}

// ========================================
// Scroll Effects
// ========================================
function initScrollEffects() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '';
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// Utility Functions
// ========================================

// Format price
function formatPrice(price) {
    return '₹' + parseFloat(price).toFixed(2);
}

// Get URL parameter
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Smooth scroll to element
function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Export for use in other files
window.Crannix = {
    removeFromCart,
    toggleWishlist,
    showNotification,
    formatPrice,
    getUrlParameter,
    debounce
};