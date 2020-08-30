const http = require('http');
const url = require('url');

const t2 = (req, res) => {
    res.end('800');
}

const t3 = (req, res) => {
    res.end('900');
}

const t4 = (req, res) => {
    res.end('1100');
}

const t5 = (req, res) => {
    res.end('1200');
}

http.createServer((req, res) => {
    let urlReq = url.parse(req.url, true);
    if (req.method == 'GET' && urlReq.query.p == 70) {
        t2(req, res);
    } else if (req.method == 'GET' && urlReq.query.p == 80) {
        t3(req, res);
    } else if (req.method == 'POST' && urlReq.query.h == 80) {
        t4(req, res);
    } else if (req.method == 'POST' && urlReq.query.h == 90) {
        t5(req, res);
    } else res.end('404');
}).listen(3002);