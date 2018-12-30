"use strict";
let http = require('http');
const path = require('path');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
app.use(express.static(path.join(__dirname, 'public')));
let server = http.createServer(app);
const port = 3000;
app.get('/home', (req, res) => {
    const filepath = path.join(__dirname,'public','index1.html')
    res.sendFile(filepath);
})

server.listen(port, function () {
    console.log(`Server listening on: ${port}`);
});