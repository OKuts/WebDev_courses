document.body.onclick = function (event) {
    event = event || window.event;
    if (event.target.classList.contains('goods-min')) {
        var allDivs = document.querySelectorAll('.img-small');

        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

        document.getElementById('good-max').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }

}