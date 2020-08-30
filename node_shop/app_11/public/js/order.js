document.querySelector('#shop-order').onsubmit = function (e) {
    e.preventDefault();
    let name = document.querySelector('#name').value.trim();
    let tel = document.querySelector('#tel').value.trim();
    let email = document.querySelector('#email').value.trim();

    if (name == '' || tel == '' || email == '') {
        Swal.fire(
            'Ошибка',
            'Заполните все поля',
            'error'
        )
    } else {
        fetch('/finish-order', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                tel: tel,
                email: email,
                keys: JSON.parse(localStorage.getItem('cart'))
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            })
    }


}

