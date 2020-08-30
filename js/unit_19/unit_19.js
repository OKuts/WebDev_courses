
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let out = document.querySelector('.div-1');
    document.querySelector('.out-1').textContent = out.textContent;
    return out.textContent;
}

document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(alt) {
    document.querySelector('.out-2').textContent = alt;
    return alt;
}

document.querySelector('.div-2').onclick = event => {
    t2(event.altKey);
}

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    w3 += 5;
    let out = document.querySelector('.div-3');
    out.style.width = w3 + 'px';
    document.querySelector('.out-3').textContent = w3 + 'px';
}

document.querySelector('.div-3').onclick = t3;


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    let out = document.querySelector('.div-4');
    document.querySelector('.out-4').textContent = out.textContent;
    return out.textContent;
}

document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5(arrClass) {
    let el = document.querySelector('.div-5');
    if (el.classList.contains('active')) {
        el.classList.remove('active');
    } else {
        el.classList.add('active');
    }
}

document.querySelector('.div-5').ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    let el = document.querySelector('.ul-6');
    if (el.classList.contains('hide')) {
        el.classList.remove('hide');
    } else {
        el.classList.add('hide');
    }
}

document.querySelector('.div-6').ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    let el = document.querySelector('.div-7');
    if (el.classList.contains('active')) {
        el.classList.remove('active');
    } else {
        el.classList.add('active');
    }
}

document.querySelector('.div-7').oncontextmenu = () => {
    t7()
    return false;
}

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8(check) {
    document.oncontextmenu = function () {
        if (check) {
            return false;
        } else {
            return true;
        }
    }
}
document.querySelector('.ch-8').onchange = (event) => {
    t8(event.target.checked);
}


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    document.querySelector('.div-9>img').src = "img/2.png";
}

document.querySelector('.div-9').oncontextmenu = () => {
    t9();
    return false;
}


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector('.div-10>img').src = "img/2.png";
}

document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(type) {
    if (type == 'mouseenter') {
        document.querySelector('.div-11>img').src = "img/2.png";
    } else {
        document.querySelector('.div-11>img').src = "img/1.png";
    }
}

document.querySelector('.div-11').onmouseenter = event => {
    t11(event.type);
}
document.querySelector('.div-11').onmouseleave = event => {
    t11(event.type);
}
// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

f12 = () => {
    document.querySelector('.div-12').classList.add('active');
}

document.querySelector('.div-12').onmousedown = f12;


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

f13down = () => {
    document.querySelector('.div-13').classList.add('active');
}

f13up = () => {
    document.querySelector('.div-13').classList.remove('active');
}
document.querySelector('.div-13').onmousedown = f13down;
document.querySelector('.div-13').onmouseup = f13up;

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
    let data = document.querySelector('.div-15').textContent;
    document.querySelector('.div-15').textContent = ++data;
}
document.querySelector('.div-15').onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {
    let out = document.querySelector('.div-16');
    out.style.width = out.offsetWidth + 1 + 'px';
}
document.querySelector('.div-16').addEventListener('mousemove', t16);

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector('.div-16').addEventListener('mousemove', t16);
}

function t17Off() {
    document.querySelector('.div-16').removeEventListener('mousemove', t16);
}

document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
    let div = document.querySelector('.div-18');
    div.textContent = div.offsetWidth + 'px';
}
document.querySelector('.div-18').onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
    let div = document.querySelector('.div-19');
    let str = '';
    for (let item of div.classList) {
        str += `${item}<br>`;
    }
    div.innerHTML = str;
}
document.querySelector('.div-19').onmouseout = t19;


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {
    let progress = document.querySelector('progress');
    progress.value = ++progress.value;
}
document.querySelector('progress').onmousemove = t20;