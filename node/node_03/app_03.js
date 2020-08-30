//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    let max = Math.max(a, b);
    console.log(max);
    return max;
}

f2(-55, 8);

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
    let r = Math.round(Math.random() * 10);
    console.log(r);
    return r;
}
f3();
// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
    let r = a + Math.round(Math.random() * (b - a));
    console.log(r);
    return r;
}
f4(8, -8);
// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
    let date = new Date();
    let strDate = `${date.getFullYear()}-`;
    strDate += (date.getMonth() + 1) > 9 ? `${date.getMonth() + 1}-` : `0${date.getMonth() + 1}-`;
    strDate += (date.getDate()) > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
    console.log(strDate);
    return strDate;
}
f5();
//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {
    return year % 4 ? false : true;
}

console.log(f6(2020));