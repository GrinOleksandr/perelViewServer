const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const formidableMiddleware = require('express-formidable');
const date = require('date-and-time');
const cors = require('cors');
const moment = require('moment');

app.get('/', (req, res) => {
    res.end("This is Oleksandr's server! ;)");
});

//Handling time requests

app.options('/isclosed', cors());
app.get('/isclosed', cors(),  (req, res) => {
    console.log('time request recieved');

    let israelTime = moment().utcOffset('+02:00').format('dddd h');
    let timeData = israelTime.split(' ');
    let day= timeData[0];
    let hour=timeData[1];
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    if(((day === "Friday") && (8 >= +hour >= 12)
        || (hour >= 8 >= 17))){
        res.end("true")
    }

    else res.end("false")

});


http.listen(port, function () {
    console.log(`***Server running at localhost:${port}`);
});