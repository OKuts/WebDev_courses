const express = require('express');
let app = express();
app.use(express.static('public'));
app.set('view engine', 'pug')

app.listen(3333, () => {
    console.log('server ON');
});

app.get('/', (req, res) => {
    res.render('main');
})