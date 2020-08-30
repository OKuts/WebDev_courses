const arrChar = require('./config');
const rand = require('../rand');

out = '';
module.exports = n => {
    for (let i = 0; i < n; i++) out += arrChar[rand(0, arrChar.length - 1)];
    return out;
}
