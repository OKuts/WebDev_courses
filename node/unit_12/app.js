const config = require('./config');
const rand = require('./rand');
const config2 = require('./config2');
const indexArr = require('./indexArray');
const a = require('./arr');
const word = require('./hash');

console.log(config);
console.log(rand(2, 5));
console.log(config2);
console.log(indexArr(a, 'id'));
console.log(indexArr(a, 'name'));
console.log(word(8));