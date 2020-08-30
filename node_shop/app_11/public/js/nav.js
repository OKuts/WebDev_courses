function getCategoryList() {
    fetch('/get-category-list',
        {
            method: 'POST'
        }
    ).then(response => response.text()
    ).then(body => showCategoryList(JSON.parse(body)))

}

function showCategoryList(data) {
    outNav = `<li><a href='/'>Главная</a></li>`;
    for (const i in data) {
        outNav += `<li><a href='/cat?id=${data[i]['id']}'>${data[i]['category']}</a></li>`;
    }
    document.querySelector('.nav-top').innerHTML = outNav;
}

function moveMenu() {
    let menu = document.querySelector('.move-menu');
    if (menu.textContent == '»') {
        menu.innerHTML = '«';
        document.querySelector('.site-nav').style.left = 0;

    } else {
        menu.innerHTML = '»';
        document.querySelector('.site-nav').style.left = '-270px';
    }
}
document.querySelector('.move-menu').onclick = moveMenu;
getCategoryList();