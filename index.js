const express = require('express');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const cors = require('cors');
const moment = require('moment');

app.get('/', (req, res) => {
    res.end("This is Oleksandr's server! ;)");
});

//Handling time requests

app.options('/isclosed', cors());
app.get('/isclosed', cors(),  (req, res) => {

    let israelTime = moment().utcOffset('+02:00').format('dddd HH');
    let timeData = israelTime.split(' ');
    let day= timeData[0];
    let hour=timeData[1];
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    if((day === "Saturday") || (day === "Friday" && (8 >= +hour || +hour >= 12)) || ( 8>= +hour || +hour >= 17)){
        res.end("true")
    }
    else res.end("false")

});


http.listen(port, function () {
    console.log(`***Server running at localhost:${port}`);
});