const showOne = (e) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3333/goods/' + e.target.parentElement.getAttribute('data'));
    xhr.send();
}
const carts = document.querySelectorAll('.cart');
carts.forEach(el => {
    el.addEventListener('click', showOne)
});