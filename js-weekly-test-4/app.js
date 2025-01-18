const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];

let cart = {};

const productsBox = document.getElementById("productsBox");
const productsList = document.getElementById("productsList");
const cartList = document.getElementById("cartList");
const totalPriceElement = document.getElementById("totalPrice");

// Function to render products
function renderProducts() {
  productsList.innerHTML = "";
  Products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <div class="product-buttons">
        <button class="button" onclick="addToCart(${product.id})">+</button>
        <span class="quantity">${cart[product.id]?.quantity || 0}</span>
        <button class="button" onclick="removeFromCart(${
          product.id
        })">-</button>
      </div>
    `;
    productsList.appendChild(productDiv);
  });
}

// Function to render cart
function renderCart() {
  cartList.innerHTML = "";
  const cartItems = Object.values(cart);
  if (cartItems.length === 0) {
    cartList.innerHTML = `<div class="empty-cart">No Product added to the cart</div>`;
    totalPriceElement.textContent = "";
    return;
  }

  let totalPrice = 0;
  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>$${item.quantity * item.price}</span>
    `;
    cartList.appendChild(cartItemDiv);
    totalPrice += item.quantity * item.price;
  });

  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

// Add product to cart
function addToCart(productId) {
  const product = Products.find((p) => p.id === productId);
  if (!cart[productId]) {
    cart[productId] = { ...product, quantity: 1 };
  } else {
    cart[productId].quantity += 1;
  }
  renderProducts();
  renderCart();
}

// Remove product from cart
function removeFromCart(productId) {
  if (cart[productId]) {
    cart[productId].quantity -= 1;
    if (cart[productId].quantity === 0) {
      delete cart[productId];
    }
  }
  renderProducts();
  renderCart();
}

// Initial rendering
renderProducts();
renderCart();
