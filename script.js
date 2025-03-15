// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.querySelector('.cart-items');

    let cart = [];

    // Add to Cart Logic
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.parentElement.querySelector('h3').innerText,
                price: button.parentElement.querySelector('p').innerText
            };
            cart.push(product);
            updateCartDisplay();
        });
    });

    // Show/Hide Cart
    document.querySelector('.nav-cart').addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    // Update Cart Display
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(div);
        });
    }
});
