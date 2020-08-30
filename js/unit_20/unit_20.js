
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    document.querySelector('.out-1').textContent = event.key;
    return event.key;
}

document.querySelector('.i-1').onkeyup = event => t1(event);

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').textContent = event.keyCode;
    return event.keyCode;
}

document.querySelector('.i-2').onkeyup = event => t2(event);


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
    if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) {
        document.querySelector('.out-3').textContent = false;
    } else {
        document.querySelector('.out-3').textContent = true;
    }
}

document.querySelector('.i-3').onkeypress = event => t3(event);


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    if (event.keyCode > 64 && event.keyCode < 97) {
        document.querySelector('.out-4').textContent += String.fromCharCode(event.keyCode + 32);
    } else {
        document.querySelector('.out-4').textContent += event.key;
    }
}

document.querySelector('.i-4').onkeypress = event => t4(event);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    if (event.keyCode > 95 && event.keyCode < 123) {
        document.querySelector('.out-5').textContent += String.fromCharCode(event.keyCode - 32);
    } else {
        document.querySelector('.out-5').textContent += event.key;
    }
}

document.querySelector('.i-5').onkeypress = event => t5(event);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
    if (event.keyCode > 95 && event.keyCode < 123) {
        document.querySelector('.out-6').textContent += event.key;
    }
}

document.querySelector('.i-6').onkeypress = event => t6(event);


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a', 'g', 't', 'r', 'u'];
    document.querySelector('.out-7').textContent += a7[Math.round(Math.random() * (a7.length - 1))];
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(key) {
    const change = { i: 1, o: 0, l: 7 };
    if (key in change) {
        document.querySelector('.out-8').textContent += change[key];
    } else {
        document.querySelector('.out-8').textContent += key;
    }
}


document.querySelector('.i-8').onkeypress = event => t8(event.key);


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9(key) {
    if (key == 'ArrowDown') {
        document.querySelector('.out-9').textContent = ++document.querySelector('.out-9').textContent;
    }
}
document.querySelector('.i-9').onkeydown = event => t9(event.key);


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(key) {
    let block = document.querySelector('.block');
    let img = document.querySelector('.block>img');
    let width = img.offsetWidth;
    let height = img.offsetHeight;
    switch (key) {
        case 'ArrowDown':
        case 'ArrowUp': {
            block.style.height = ++height + 11 + 'px';
            img.style.height = ++height + 'px';
            img.style.width = width + 'px';
        }
            break;
        case 'ArrowLeft':
        case 'ArrowRight': {
            block.style.width = ++width + 11 + 'px';
            img.style.width = ++width + 'px';
            img.style.height = height + 'px';
        }
            break;
    }
}
document.querySelector('.i-10').onkeydown = event => t10(event.key);


// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function keyboardShow() {
    let elem;
    const keyboard = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
        ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control']
    ];
    let addKey = {
        Backspace: 98,
        Tab: 74,
        '\\': 74,
        CapsLock: 102,
        Enter: 102,
        Shift: 130,
        Control: 70,
        Meta: 70,
        Alt: 70,
        ' ': 300,
        ContextMenu: 140
    }
    let parent = document.querySelector('.keyboard');
    for (let i in keyboard) {
        for (let item of keyboard[i]) {
            elem = document.createElement('div');
            elem.classList.add('btn');
            elem.textContent = item;
            if (item in addKey) elem.style.width = addKey[item] + 'px';
            parent.appendChild(elem);
        }
        elem = document.createElement('div');
        elem.classList.add('clearfix');
        parent.appendChild(elem);
    }
    return document.querySelectorAll('.btn');
}

function t11(event) {
    if (event.keyCode == 9 || event.keyCode == 93) {
        event.preventDefault();
    }
    for (let item of keys) {
        if (event.key == item.textContent || event.key == item.textContent.toLowerCase()) {
            if (event.type == 'keydown') {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
                if (event.key == 'CapsLock' && event.getModifierState("CapsLock"))
                    item.classList.toggle('active');
            }
        }
    }
}

let keys = keyboardShow();
document.querySelector('.i-11').onkeydown = event => t11(event);
document.querySelector('.i-11').onkeyup = event => t11(event);

