const express = require('express');
const app = express();
const config = require('./serverConfig');

app.use(express.static('dist'));

app.listen(config.port, () => console.log(`listening on ${config.port}`));