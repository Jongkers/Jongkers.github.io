
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


const itemDescriptions = {
  "250 PokéCoins": "Use 250 PokéCoins to buy premium items like Poké Balls, Incense, and more.",
  "600 PokéCoins": "A medium amount of PokéCoins to give you an advantage in your journey.",
  "1300 PokéCoins": "Enough PokéCoins for multiple upgrades or item purchases.",
  "2,700 PokéCoins": "A large amount of PokéCoins to fully equip your Pokémon GO experience.",
  "5,600 PokéCoins": "A substantial amount of PokéCoins to ensure you have everything you need.",
  "15,500 PokéCoins": "A extreme large amount of PokéCoins to get you started on your Pokémon journey.",
  "Starter Bundle": "Includes: 10 Poké Balls, 2 Lucky Eggs, 2 Incense, and 1 Remote Raid Pass.",
  "Quaxly Community Day Ultra Ticket": "Includes: 5 Ultra Balls and 1 Ticket.",
  "Water Festival Ultra Ticket": "Includes: 1 Star Piece and 1 Ticket.",
  "G-MAX Lapras Max Battle Day Ultra Ticket": "Includes: 1 Max Particle Pack and 1 Ticket.",
  "Lucky Egg Pack": "Includes 8 Lucky Eggs to double your XP gain for 30 minutes.",
  "Star Piece": "Includes 8 Star Pieces to boost your XP gain for 30 minutes.",
  "Remote Raid Pass": "Allows you to join raids remotely, no need to be at the location. Includes 2 Remote Raid Pass.",
  "Pokemon Storage": "Increases your Pokémon storage by 100 slots, allowing you to catch and store more Pokémon.",
  "Item Bag": "Increases your item bag capacity by 50 slots, so you can carry more items.",
  "Egg Incubator": "A reusable incubator that allows you to hatch eggs without consuming a charge. Includes 3 Egg Incubator.",
  "Super Egg Incubator": "A special incubator that hatches eggs faster than a regular incubator. Includes 2 Super Egg Incubator.",
  "Max Revive": "Restores the HP of a Pokémon to full, including status conditions. Includes 6 Max Revive.",
  "Premium Battle Pass": "A special pass that allows you to join premium raids with exclusive rewards. Includes 3 Premium Battle Pass.",
  "Max Particle Pack": "A pack that includes 5 Max Particles to enhance your Pokémon's abilities in battles. Includes 6 Max Particle.",
  "Max Mushroom": "A pack that includes 5 Max Mushrooms to enhance your Pokémon's abilities in battles. Includes 3 Max Mushroom.",
};

function showDetails(card) {
  const title = card.querySelector('h3').innerText;
  const image = card.querySelector('img').src;
  const price = card.querySelector('p').innerText;
  const description = itemDescriptions[title] || 'This item includes exclusive bonuses to enhance your Pokémon GO experience.';

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-price').innerText = price;
  document.getElementById('modal-description').innerText = description;

  document.getElementById('item-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('item-modal').style.display = 'none';
}


function closeModal() {
  document.getElementById('item-modal').style.display = 'none';
}
