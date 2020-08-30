const express = require('express');
let app = express();
app.use(express.static('public'));

app.set('view engine', 'pug')

const mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'market'
})

app.listen(3333, () => {
    console.log('server ON');
});

app.get('/', (req, res) => {
    conn.query(
        'SELECT * FROM goods',
        (err, result) => {
            if (err) throw err;
            let goods = {}
            result.forEach((el, i) => {
                goods[el['id']] = el;
            });
            res.render('main', { goods: JSON.parse(JSON.stringify(goods)) });
        });

})