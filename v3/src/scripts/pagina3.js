const movies = {
    1: { title: "Super Mario Bros", price: 99.99 },
    2: { title: "The Legend of Zelda", price: 109.99 },
    3: { title: "Detetive Pikachu", price: 89.99 }
  };
  
  let cart = [];
  let discount = 0;
  
  function addToCart(id) {
    cart.push(movies[id]);
    updateCart();
  }
  
  function updateCart() {
    const list = document.getElementById("cart-list");
    const total = document.getElementById("total");
    const discountedTotal = document.getElementById("discounted-total");
  
    list.innerHTML = "";
    let totalValue = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.title} - R$ ${item.price.toFixed(2)}`;
      list.appendChild(li);
      totalValue += item.price;
    });
  
    total.textContent = totalValue.toFixed(2);
    discountedTotal.textContent = (totalValue * (1 - discount)).toFixed(2);
  }
  
  function applyCoupon() {
    const couponInput = document.getElementById("coupon").value.trim().toUpperCase();
  
    const validCoupons = {
      "NINTENDO10": 0.10,
      "MARIO10": 0.10,
      "CTRLPLAY10": 0.10
    };
  
    if (validCoupons[couponInput]) {
      discount = validCoupons[couponInput];
      alert(`Cupom aplicado: ${discount * 100}% de desconto!`);
    } else {
      discount = 0;
      alert("Cupom inválido.");
    }
  
    updateCart();
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }
  
    const finalPrice = cart.reduce((sum, item) => sum + item.price, 0) * (1 - discount);
    alert(`Compra finalizada! Total: R$ ${finalPrice.toFixed(2)}`);
    cart = [];
    discount = 0;
    document.getElementById("coupon").value = "";
    updateCart()}

    // Captura o botão pelo ID
const botaoVoltar = document.getElementById('botaoVoltar');

// Adiciona o evento de clique no botão
botaoVoltar.addEventListener('click', function() {
  // Volta à página anterior do histórico
  window.history.back();
});