const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const formidableMiddleware = require('express-formidable');
const date = require('date-and-time');
app.get('/', (req, res) => {
    res.end("This is Oleksandr's server! ;)");
});

//Handling time requests



app.get('/time', (req, res) => {
    console.log('time request recieved');
    let now = new Date();
    let data = {
        timezone: "Israel([GMT]+2)",
        year: date.format(now, 'YYYY [GMT]+2'),
        month: date.format(now, 'MM [GMT]+2'),
        date: date.format(now, 'DD [GMT]+2'),
        hours: date.format(now, 'HH [GMT]+2'),
        minutes: date.format(now, 'mm [GMT]+2'),
        seconds: date.format(now, 'ss [GMT]+2')
    };
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    res.end(JSON.stringify(data));
});


http.listen(port, function () {
    console.log(`***Server running at localhost:${port}`);
});

