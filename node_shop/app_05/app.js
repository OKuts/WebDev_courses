const express = require('express');
let app = express();
app.use(express.static('public'));

app.listen(3333, () => {
    console.log('server ON');
});

app.get('/', (req, res) => {
    res.render('index.html');
})