let payBtn = document.querySelector('.pay-cart')
let clearBtn = document.querySelector('.clear-cart')

const removeFromCart = (index) => {
  window.cart.splice(index, 1);
  
  renderCart()
}

const renderCart = () => {
  const cartList = document.querySelector('#cart-list')
  const totalElement = document.querySelector('.total')
  let total = 0;
  cartList.innerHTML = '';

  window.cart.forEach((element, index) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = () => {
      removeFromCart(index)
    }
    li.textContent = `${element.name} - ${element.price}`;
    total += Number(element.price)
    li.appendChild(deleteBtn)
    cartList.appendChild(li);
  })
  totalElement.textContent = `Итоговая сумма : ${total}`

}


const clearCart = () => {
  if (window.cart.length != 0) {
    window.cart = []
    
    renderCart();
    alert('Ваша корзина была очищена')
  } else {
    alert('В вашей корзине ничего нет')
  }

}

const pay = () => {
  if (window.cart.length == 0) {
    alert('Ваша корзина пуста')
  } else {
    alert('Успешная оплата');
    clearCart()
  }
}
clearBtn.addEventListener('click', () => {
  clearCart();
})
payBtn.addEventListener('click', () => {
  pay();
})
renderCart()