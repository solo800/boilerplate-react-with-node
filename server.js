const express = require('express');
const app = express();
const config = require('./serverConfig');

app.use(express.static('./dist'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {testing: '12 testing'});
});

app.listen(config.port, function () {
    console.log(`listening on ${config.port}`)
});