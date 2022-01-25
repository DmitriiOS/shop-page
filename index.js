function closeMenu() {
    document.querySelector('.menu').style.visibility = 'hidden';
}

function openMenu() {
    document.querySelector('.menu').style.visibility = 'visible';
}

function setProductImage(element) {
    let imageUrl = 'url(' + element.src + ')';
    document.querySelector('.product-image').style.backgroundImage = imageUrl;
    document.by
}

function addProduct() {
    let currentNumber = document.querySelector('.number-of-products').innerHTML;
    let newNumber = +currentNumber + 1;
    document.querySelector('.number-of-products').innerHTML = newNumber;
    alert(`Товар в количестве ${newNumber} единиц добавлен в корзину.`);
}

function removeProduct() {
    let currentNumber = document.querySelector('.number-of-products').innerHTML;
    let newNumber = +currentNumber - 1;
    if (newNumber >= 0) {
        document.querySelector('.number-of-products').innerHTML = newNumber;
        if (newNumber == 0) {
            alert('Ваша корзина пуста');
        } else {
            alert('Товар удален из корзины.');
        }
    } 
}