const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const formidableMiddleware = require('express-formidable');
const moment = require('moment-timezone');



app.get('/', (req, res) => {
    let data = moment().tz("Israel/Jerusalem").format();
    res.end("OK");
});

app.get('/time', (req, res) => {
    let data = moment().tz("Israel/Jerusalem").format();
    res.end(data);
});


http.listen(port, function () {
    console.log(moment().tz("Israel/Jerusalem").format());
    console.log(`***Server running at localhost:${port}`);
});

