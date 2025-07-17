
function showCategory(id) {
  document.querySelectorAll('.category').forEach(cat => {
    cat.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById('cart-count').textContent = cartCount;
  document.getElementById('cart-total').textContent = total.toFixed(2);

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - ₱${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Checkout complete! Thank you for your purchase.");
  cart = [];
  updateCartDisplay();
  document.getElementById('cart-panel').style.display = 'none';
}
