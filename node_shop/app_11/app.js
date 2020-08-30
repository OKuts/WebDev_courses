const express = require('express');
let app = express();

const mailer = require('nodemailer');

app.use(express.static('public'));

app.set('view engine', 'pug');

app.use(express.json());

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

app.get('/order', (req, res) => {
    res.render('order');
})

app.get('/cat', (req, res) => {
    let id = req.query.id;
    conn.query(
        'SELECT * FROM goods WHERE category=' + id,
        (err, result) => {
            if (err) throw err;
            let goods = {}
            result.forEach(el => {
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

app.post('/get-category-list', (req, res) => {
    conn.query(
        'SELECT id, category FROM category',
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

app.post('/get-goods-info', (req, res) => {
    conn.query(
        'SELECT id, name, cost FROM goods WHERE id IN (' + req.body.key.join(',') + ')',
        (err, result) => {
            if (err) throw err;
            let goods = {};
            result.forEach(el => goods[el['id']] = el);
            res.json(goods);
        });
});

app.post('/finish-order', (req, res) => {
    let keys = Object.keys(req.body.keys)
    if (req.body.keys.length != 0) {
        conn.query('SELECT id, name, cost FROM goods WHERE id IN (' + keys.join(',') + ')',
            function (err, res) {
                if (err) throw err;
                sendOrder(req.body, res);
            })
        res.end('1');
    } else {
        res.end('0');
    }
});

async function sendOrder(data, result) {
    let res = '<h2>Order</h2>';
    res += `name:${data.name}`
    console.log(res);
    let testAccount = await mailer.createTestAccount();

    let transporter = mailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <kuts.ol.vas@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: res // html body
    });
    console.log("PreviewSent: %s", mailer.getTestMessageUrl(info));

}