const mysql = require('mysql2/promise');
const config = require('./config');

//Task 1.
// Для работы с базой данных используется mysql2.Все действия в задачах производим над таблицей user(таблицу создайте на основе файла node_unit_11.sql).Настройки подключения к базе данных должны быть вынесены в отдельный файл config.js и require в данный файл.

// Напишите функцию f1(все функции в задании async), которая возвращает age пользователя с email = iv@ua 

async function f1() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT age FROM user WHERE email = "iv@ua"')
    conn.end();
    return rows[0].age;
}

// f1() - для проверки расскоментируйте, потом верните комментарий на место.

// Task 2
// Создайте функцию f2, которая возвращает coin (число) пользователя с возрастом 46.

async function f2() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT coin FROM user WHERE age = 46')
    conn.end();
    return rows[0].coin;
}

// f2() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 3
// Создайте функцию f3, которая возвращает true если у пользователя с lastname Petr монет больше 15 или false если меньше или равно.

async function f3() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT coin FROM user WHERE lastname = "Petr"')
    conn.end();
    return rows[0].coin > 15 ? true : false;
}

// f3() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 4
// Создайте функцию f4, которая возвращает массив [ ] где нулевой элемент это количество монет у пользователя с емейл = iv@ua, а первый элемент - емейл пользователя с firstname berg. Задачу решать двумя последовательными запросами.

async function f4() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT coin FROM user WHERE email = "iv@ua"')
    const [rows1] = await conn.execute('SELECT email FROM user WHERE firstname = "berg"')
    conn.end();
    return [rows[0].coin, rows1[0].email];
}

// f4() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 5
// Создайте функцию f5, которая возвращает массив строку состоящую количества монет у кажого пользователя через пробел. Порядок - по id (возрастание). Т.е. я ожидаю от вас строку 4 8 12 56 43. Задача выполняется выборкой и последующей обработкой массива.

async function f5() {
    let out = '';
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT coin FROM user')
    conn.end();
    rows.forEach(el => out += `${el.coin} `);
    return out;
}

// f5() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 6
// Создайте функцию f6, которая первым запросом получает firstname пользователя с email = al@em, а вторым запросом записывает это firstname для пользователя с lastname Bro. Также функция должна возвращать данное firstname.

async function f6() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT firstname FROM user WHERE email = "al@em"')
    await conn.execute('UPDATE user SET firstname ="' + rows[0].firstname + '"WHERE lastname = "Bro"')
    conn.end();
    return rows[0].firstname;

}

// f6() - для проверки расскоментируйте, потом верните комментарий на место.