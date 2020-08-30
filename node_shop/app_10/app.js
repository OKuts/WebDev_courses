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
    res.render('start_page');
})

app.get('/note', (req, res) => {
    conn.query(
        'SELECT * FROM goods WHERE category=1',
        (err, result) => {
            if (err) throw err;
            let goods = {}
            result.forEach((el, i) => {
                goods[el['id']] = el;
            });
            res.render('many_goods', { goods: JSON.parse(JSON.stringify(goods)) });
        });
})

app.get('/phone', (req, res) => {
    conn.query(
        'SELECT * FROM goods WHERE category=2',
        (err, result) => {
            if (err) throw err;
            let goods = {}
            result.forEach((el, i) => {
                goods[el['id']] = el;
            });
            res.render('many_goods', { goods: JSON.parse(JSON.stringify(goods)) });
        });
})

app.get('/goods', (req, res) => {
    let id = req.query.id;
    conn.query(
        'SELECT * FROM goods WHERE id=' + id,
        (err, result) => {
            if (err) throw err;
            res.render('one_goods', { good: JSON.parse(JSON.stringify(result)) });
        });
});

