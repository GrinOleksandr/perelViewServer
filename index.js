const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port =  process.env.PORT || 12345;
const formidableMiddleware = require('express-formidable');

app.get('*', (req, res) => {
    res.end("OK");
});



http.listen(port, function () {
    console.log(`***Server running at localhost:${port}`);
});

