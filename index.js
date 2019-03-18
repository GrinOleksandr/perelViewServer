const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const formidableMiddleware = require('express-formidable');
const moment = require('moment-timezone');

app.get('/', (req, res) => {
    res.end("This is Oleksandr's server! ;)");
});

//Handling time requests
moment.tz.add('Asia/Jerusalem|LMT JMT IST IDT IDDT|-2k.S -2k.E -20 -30 -40|');

app.get('/time', (req, res) => {
    let data = moment.tz('Asia/Jerusalem').format('YYYY-MM-DD HH:mm:ss');
    res.end(data);
});


http.listen(port, function () {
    console.log(moment().tz("Asia/Jerusalem|Israel").format());
    console.log(`***Server running at localhost:${port}`);
});

