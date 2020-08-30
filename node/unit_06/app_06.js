// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.

function t1() {
    const fs = require('fs');
    fs.readFile('./home6/t1.txt', 'utf-8', (err, text) => {
        console.log(text);
        return text;
    })
}
console.log(t1());

// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.


function t2(filePath) {
    const fs = require('fs');
    fs.readFile(filePath, 'utf-8', (err, text) => {
        console.log(text);
        return text;
    })
}

let filePath = './home6/t2.txt';
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

function t3(folderName) {
    const fs = require('fs');
    fs.readdir(folderName, (err, data) => {
        console.log(data);
        return data;
    })
}

console.log(t3('./home6'));

// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)


function t4(filepath) {
    const fs = require('fs');
    fs.stat(filepath, (err, data) => {
        console.log(data.size / 1024);
        return data.size / 1024;
    })
}

console.log(t4('./home6/t2.txt'));



// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

function t5(a) {
    let out = '';
    if (a > 1000000) {
        out = a / 1000000 + 'MB';
    } else if (a > 1000) {
        out = a / 1000 + 'kB';
    } else out = a + 'B';
    return out;
}

console.log(t5(30000));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.

function t6(exFolder) {
    const fs = require('fs');
    fs.readdir(exFolder, (err, data) => {
        data.forEach(file => {
            console.log(file, t5(fs.statSync(exFolder + '/' + file).size));
        })
    })
}

t6('./home6');


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 

function t7(exPath) {
    const path = require('path');
    console.log(path.extname(exPath));
}

console.log(t7('./home6/t2.txt'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

function t8(exPath) {
    const fs = require('fs');
    let out = 0;
    fs.readdir(exPath, (err, data) => {
        data.forEach(file => {
            out += fs.statSync(exPath + '/' + file).size;
        })
        console.log(out);
    })
}

console.log(t8('./home6'));


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.

function t9(folder, file) {
    const fs = require('fs');
    try {
        fs.statSync(folder + '/' + file);
    }
    catch {
        return false;
    }
    return true;
}

console.log(t9('./home6', 't2.txt'));


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.

function t10(a) {
    const fs = require('fs');
    let size;
    try {
        size = fs.statSync(a).size;
    }
    catch {
        return false;
    }
    return size ? size : false;;
}

console.log(t10('app_06.js'));