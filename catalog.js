let prices = document.querySelectorAll('.item-price')
let priceIphone14 = Number(prices[0].getAttribute('data-price'))
let priceIphone16 = Number(prices[1].getAttribute('data-price'))
let names = document.querySelectorAll('.item-name')
let nameIphone14 = names[0].textContent
let nameIphone16 = names[1].textContent
let filterIphone14 = document.querySelector('.filter-iphone14');
let filterIphone16 = document.querySelector('.filter-iphone16');
let cards = document.querySelectorAll('.card');
let resetFilterButton = document.querySelector('.reset-filter')

const filterProduct = (category) => {
    cards.forEach(card => {
        let cartCategory = card.getAttribute('data-category')
        if (cartCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}
let products = [
    {
        id: 1,
        name: nameIphone14,
        price: priceIphone14
    },
    {
        id: 2,
        name: nameIphone16,
        price: priceIphone16
    }
]

const addToCart = (id) => {
    const product = products.find(element => element.id === id);
    if (product) {
        window.cart.push(product)
        
        alert('Товар добавлен в корзину')
    }

}
let buttons = document.querySelectorAll(".card button")
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = Number(button.getAttribute('data-id'))
        addToCart(id)
        renderCart()
    })
})

filterIphone14.addEventListener('click', () => {
    filterProduct('Iphone 14')
})
filterIphone16.addEventListener('click', () => {
    filterProduct('Iphone 16')
})

resetFilterButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.style.display = 'block';
    })
})


