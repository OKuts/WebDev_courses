const mysql = require('mysql');
const http = require('http');
const url = require('url');
const conn = mysql.createConnection({
    host: "localhost", //127.0.0.1
    user: "root",
    database: "node_test",
    password: ""
});

conn.connect(err => {
    if (err) {
        console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
const doQuery = (query, res) => {
    conn.query(query, (err, result, field) => {
        if (!err) {
            result.length ? res.end(JSON.stringify(result)) : res.end('0');
        } else {
            res.end('523');
        }
    });
}
// ------------------server---------------------------------------
http.createServer((req, res) => {
    let urlReq = url.parse(req.url, true);
    if (req.method == 'GET') {
        switch (urlReq.query.task) {
            case '2': {
                doQuery("SELECT firstname FROM user", res);
            }
                break;
            case '3': {
                doQuery("SELECT email FROM user", res);
            }
                break;
            case '4': {
                doQuery("SELECT id FROM user WHERE email LIKE '" + urlReq.query.email + "'", res);
            }
                break;
            case '5': {
                doQuery("SELECT id FROM user WHERE email LIKE " + "'%" + urlReq.query.email + "%'", res);
            }
                break;
            default:
                res.end('404');
                break;
        }
    } else {
        res.end('404');
    }
}).listen(3002);