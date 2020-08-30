let cart = {};
document.querySelectorAll('.add-to-cart').forEach(el => el.onclick = addToCart);
readLocalStorage();

function readLocalStorage() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        getGoodsInfo();
    }
}
function writeLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart() {
    let id = this.dataset.goods_id;
    cart[id] = cart[id] ? cart[id] + 1 : 1;
    writeLocalStorage();
    getGoodsInfo();
}

function getGoodsInfo() {
    fetch('/get-goods-info', {
        method: 'POST',
        body: JSON.stringify({ key: Object.keys(cart) }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (res) {
            return res.text();
        })
        .then(function (body) {
            showCart(JSON.parse(body));
        })
}

function showCart(arrGoods) {
    let summ = 0;
    let out = '';
    if (Object.keys(cart).length) {
        for (const key in cart) {
            summ += arrGoods[key].cost * cart[key];
            out += `<div class="name">${arrGoods[key].name}</div>`;
            out += `<div class="cart-edit">`;
            out += `<div class="minus square-do" data-elem=${key}>-</div>`;
            out += `<div class="amount">${cart[key]}</div>`;
            out += `<div class="plus square-do" data-elem=${key}>+</div>`;
            out += `<div class="amount">${arrGoods[key].cost * cart[key]} UAN</div></div><hr>`;
            document.querySelector('.cart').innerHTML = `<h3>KART</h3><hr>Total: ${summ} UAN<hr>` + out;
        }
        if (!document.querySelector('.cart').classList.contains('left-order')) {
            document.querySelector('.cart').innerHTML += '<a href="/order"><button class="order btn btn-success">Order</button></a>';
        }
        document.querySelectorAll('.square-do').forEach(el => el.onclick = changeCount);
    }
}
function changeCount() {
    let id = this.dataset.elem;
    if (this.classList.contains('plus')) {
        cart[id] = cart[id] ? cart[id] + 1 : 1;
    } else if (cart[id] > 1) {
        cart[id] = cart[id] - 1;
    } else {
        delete (cart[id]);
    }
    if (Object.keys(cart).length) {
        writeLocalStorage();
        getGoodsInfo();
    } else {
        localStorage.removeItem('cart');
        document.querySelector('.cart').innerHTML = '';
        // document.querySelector('.order').classList.add('no-show');
    }
}