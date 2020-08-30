const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>kukureku</h1>');
}).listen(3003);