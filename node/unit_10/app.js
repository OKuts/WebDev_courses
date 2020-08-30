const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let urlReq = url.parse(req.url, true);
    if (req.method == 'GET') {
        switch (urlReq.pathname) {
            case '/main': {
                main(req, res);
            }
                break;
            case '/about': {
                about(req, res);
            }
                break;
            case '/cat': {
                cat(req, res);
            }
                break;
            default:
                page404(req, res);
                break;
        }
    } else {
        page404(req, res);
    }
}).listen(3000);

function main(req, res) {
    res.end('main');
}

function about(req, res) {
    res.end('about');
}

function cat(req, res) {
    url.parse(req.url, true).query.lang == 'ru' ? res.end('ru') : res.end('en');
}

function page404(req, res) {
    res.end('404');
}